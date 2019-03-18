using Backend.DTOs;
using Backend.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using RecipeApi.DTOs;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace Backend.Controllers
{
  [ApiConventionType(typeof(DefaultApiConventions))]
  [Produces("application/json")]
  [Route("api/[controller]")]
  [ApiController]
  public class AccountController : ControllerBase
  {
    private readonly SignInManager<IdentityUser> _signInManager;
    private readonly UserManager<IdentityUser> _userManager;
    private readonly IGebruikersRepository _gebruikersRepository;
    private readonly IConfiguration _config;

    public AccountController(
          SignInManager<IdentityUser> signInManager,
          UserManager<IdentityUser> userManager, IGebruikersRepository context,
          IConfiguration config)
    {
      _signInManager = signInManager;
      _userManager = userManager;
      _gebruikersRepository = context;
      _config = config;
    }

    /// <summary>
    /// Login
    /// </summary>
    /// <param name="model"></param>
    /// <returns></returns>
    [AllowAnonymous]
    [HttpPost]
    public async Task<ActionResult<String>> CreateToken(LoginDTO model)
    {
      var user = await _userManager.FindByNameAsync(model.Email);

      if (user != null)
      {
        var result = await _signInManager.CheckPasswordSignInAsync(user, model.Wachtwoord, false);

        if (result.Succeeded)
        {
          string token = GetToken(user);
          return Created("", token); //returns only the token                    
        }
      }
      return BadRequest();
    }



    [HttpGet("{email}")]
    public ActionResult<Gebruiker> GetGebruiker(string email)
    {
      Gebruiker gebruiker = _gebruikersRepository.GetByEmail(email);
      if (gebruiker == null)
      {
        return NotFound();
      }

      return gebruiker;
    }


    [AllowAnonymous]
    [HttpPost("register")]
    public async Task<ActionResult<String>> Register(RegistreerDTO model)
    {
      IdentityUser user = new IdentityUser { UserName = model.Email, Email = model.Email };
      Gebruiker customer = new Gebruiker { Emailadres = model.Email, Voornaam = model.FirstName, Naam = model.LastName };
      var result = await _userManager.CreateAsync(user, model.Wachtwoord);

      if (result.Succeeded)
      {
        _gebruikersRepository.Add(customer);
        _gebruikersRepository.SaveChanges();
        string token = GetToken(user);
        return Created("", token);
      }
      return BadRequest();
    }




    private String GetToken(IdentityUser user)
    {
      // Create the token
      var claims = new[]
      {
              new Claim(JwtRegisteredClaimNames.Sub, user.Email),
              new Claim(JwtRegisteredClaimNames.UniqueName, user.UserName)
            };

      var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Tokens:Key"]));

      var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

      var token = new JwtSecurityToken(
        null, null,
        claims,
        expires: DateTime.Now.AddMinutes(30),
        signingCredentials: creds);

      return new JwtSecurityTokenHandler().WriteToken(token);
    }



  }
}

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
  [Route("api/[controller]")]
  [ApiController]
  [ApiConventionType(typeof(DefaultApiConventions))]
  public class AccountController : ControllerBase
  {
    private readonly SignInManager<IdentityUser> _signInManager;
    private readonly UserManager<IdentityUser> _userManager;
    private readonly IGebruikersRepository _gebruikersRepository;
    private readonly ISheetRepository _sheetRepository;
    private readonly IConfiguration _config;

    public AccountController(
          SignInManager<IdentityUser> signInManager,
          UserManager<IdentityUser> userManager,
          IGebruikersRepository context,
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
      IdentityUser user;
      if (!(model.EmailOfGebruikersnaam.Contains("@")))
      {
        user = await _userManager.FindByNameAsync(model.EmailOfGebruikersnaam);
      }
      else
      {
        user = await _userManager.FindByEmailAsync(model.EmailOfGebruikersnaam);
      }

      var x = 5;
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
    [HttpPost("registreer")]
    public async Task<ActionResult<String>> Registreer(RegistreerDTO model)
    {
      if (!(model.Wachtwoord == model.WachtwoordHerhalen))
      {
        return BadRequest();
      }
      IdentityUser user = new IdentityUser { UserName = model.Gebruikersnaam, Email = model.Emailadres };
      Gebruiker customer = new Gebruiker { Gebruikersnaam = model.Gebruikersnaam, Emailadres = model.Emailadres, Voornaam = model.Voornaam, Naam = model.Achternaam, Wachtwoord = model.Wachtwoord };
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

    [AllowAnonymous]
    [HttpGet("controleeremailadres")]
    public async Task<ActionResult<Boolean>> ControleerEmailadres(string emailadres)
    {
      var gebruiker = await _userManager.FindByNameAsync(emailadres);
      return gebruiker == null;
    }

    [AllowAnonymous]
    [HttpGet("controleergebruikersnaam")]
    public async Task<ActionResult<Boolean>> ControleerGebruikersnaam(string gebruikersnaam)
    {
      var gebruiker = await _gebruikersRepository.GetByGebruikersnaam(gebruikersnaam);
      return gebruiker == null;
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

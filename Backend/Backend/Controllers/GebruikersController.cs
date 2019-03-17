using Backend.DTOs;
using Backend.Models;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers
{
  [Produces("application/json")]
  [Route("api/[controller]")]
  [ApiController]
  public class GebruikersController : ControllerBase
  {
    private readonly IGebruikersRepository _gebruikersRepository;

    public GebruikersController(IGebruikersRepository context)
    {
      _gebruikersRepository = context;
    }

    [HttpGet("{id}")]
    public ActionResult<Gebruiker> GetGebruiker(int id)
    {
      Gebruiker gebruiker = _gebruikersRepository.GetById(id);
      if (gebruiker == null)
      {
        return NotFound();
      }

      return gebruiker;
    }

    [HttpPost]
    public ActionResult<Gebruiker> PostGebruiker(GebruikerDTO gebruiker)
    {
      Gebruiker gebruikerToCreate = new Gebruiker()
      {
        Naam = gebruiker.Naam,
        Voornaam = gebruiker.Voornaam,
        Emailadres = gebruiker.Emailadres,
        Wachtwoord = gebruiker.Wachtwoord
      };
      _gebruikersRepository.Add(gebruikerToCreate);
      _gebruikersRepository.SaveChanges();
      return CreatedAtAction(nameof(GetGebruiker), new { id = gebruikerToCreate.Id }, gebruikerToCreate);

    }




  }
}

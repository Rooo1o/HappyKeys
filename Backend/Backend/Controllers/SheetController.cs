using Backend.DTOs;
using Backend.Models;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Controllers
{
  [ApiConventionType(typeof(DefaultApiConventions))]
  [Produces("application/json")]
  [Route("api/[controller]")]
  [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
  [ApiController]
  public class SheetController : ControllerBase
  {
    private readonly IGebruikersRepository _gebruikersRepository;
    private readonly ISheetRepository _sheetRepository;

    public SheetController(IGebruikersRepository gebruikersRepository, ISheetRepository sheetRepository)
    {
      _gebruikersRepository = gebruikersRepository;
      _sheetRepository = sheetRepository;
    }

    [HttpGet]
    [AllowAnonymous]
    public IEnumerable<Sheet> GetSheets(string naam = null, string auteur = null)
    {
        return _gebruikersRepository.GetAllSheets();
    }

 

    [HttpGet("{id}")]
    [AllowAnonymous]
    public ActionResult<Sheet> GetSheet(int id)
    {
      Sheet sheet = _sheetRepository.GetById(id);
      if (sheet == null) return NotFound();
      return sheet;
    }


    [HttpGet("mijnsheets")]
    public async Task<IEnumerable<SheetDTO>> GetSheets()
    {
      var x = User.Identity.Name;
      Gebruiker gebruiker = await _gebruikersRepository.GetByGebruikersnaam(User.Identity.Name);
      List<SheetDTO> sheets = new List<SheetDTO>();
      foreach (var sheet in gebruiker.Sheets)
      {
        SheetDTO sheetdto = new SheetDTO();
        sheetdto.Id = sheet.Id;
        sheetdto.Naam = sheet.Naam;
        sheetdto.Auteur = sheet.Auteur;
        foreach (var noot in sheet.Noten)
        {
          sheetdto.Noten.Add(new NootDTO { Midiwaarde = noot.Midiwaarde, Tijdstip = noot.Tijdstip });
        }
        sheets.Add(sheetdto);
      }

      return sheets;
    }


    [HttpDelete("{id}")]
    public ActionResult<Sheet> VerwijderSheet(Sheet sheet)
    {
      Sheet deletedSheet = _gebruikersRepository.DeleteSheet(sheet);
      if(sheet == null)
      {
        return NotFound();
      }
      _gebruikersRepository.SaveChanges();
      return deletedSheet;
    }



    [HttpPost]
    [AllowAnonymous]
    public async Task<ActionResult<Sheet>> PostSheet(SheetDTO sheet)
    {
      var x = 5;
      Gebruiker gebruiker = await _gebruikersRepository.GetByGebruikersnaam(User.Identity.Name);
      if(gebruiker == null)
      {
        return Unauthorized();
      }
      Sheet sheetToCreate = new Sheet() { Naam = sheet.Naam, Auteur = gebruiker.Gebruikersnaam };
      sheet.Noten = sheet.Noten.OrderBy(s => s.Tijdstip).ToList();
      foreach (var noot in sheet.Noten)
        sheetToCreate.VoegNootToe(new Noot(noot.Midiwaarde, noot.Tijdstip));
      gebruiker.VoegSheetToe(sheetToCreate);
      _gebruikersRepository.SaveChanges();
      

      return CreatedAtAction(nameof(GetSheet), new { id = sheetToCreate.Id }, sheetToCreate);
    }
  }
}

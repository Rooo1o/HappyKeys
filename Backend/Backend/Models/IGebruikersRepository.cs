using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Models
{
  public interface IGebruikersRepository
  {
    Task<Gebruiker> GetByGebruikersnaam(string gebruikersnaam);
    Gebruiker GetByEmail(string email);
    Sheet DeleteSheet(Sheet sheet);
    Sheet GetSheetById(int id);
    IEnumerable<Sheet> GetAllSheets();
    void Add(Gebruiker gebruiker);
    void Update(Gebruiker gebruiker);
    void SaveChanges();
  }
}

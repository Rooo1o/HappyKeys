using Backend.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Data.Repositories
{
  public class GebruikerRepository : IGebruikersRepository
  {

    private readonly VirturoosjeContext _context;
    private readonly DbSet<Gebruiker> _gebruikers;

    public GebruikerRepository(VirturoosjeContext dbContext)
    {
      _context = dbContext;
      _gebruikers = dbContext.Gebruikers;
    }

    public async Task<Gebruiker> GetByGebruikersnaam(string gebruikersnaam)
    {
      return await _gebruikers.Include(g => g.Sheets).ThenInclude(s => s.Noten).SingleOrDefaultAsync(g => g.Gebruikersnaam == gebruikersnaam);
    }

    public ICollection<Sheet> GetAllSheets()
    {
      Collection<Sheet> sheets = new Collection<Sheet>();
      foreach(var gebruiker in _gebruikers.Include(g => g.Sheets).ThenInclude(s => s.Noten))
      {
        foreach(var sheet in gebruiker.Sheets)
        {
          sheets.Add(sheet);
        }
      }
      return sheets;
    }

    public Sheet DeleteSheet(Sheet sheet)
    {
      Gebruiker gebruiker = _gebruikers.Include(s => s.Sheets).ThenInclude(s => s.Noten).SingleOrDefault(g => g.Sheets.Contains(sheet));
      return gebruiker.VerwijderSheet(sheet);
    }
    

    public void Add(Gebruiker gebruiker)
    {
      _gebruikers.Add(gebruiker);
    }

    public Gebruiker GetByEmail(string emailadres)
    {
      return _gebruikers.Include(g => g.Sheets).ThenInclude(s => s.Noten).SingleOrDefault(g => g.Emailadres == emailadres);
    }

    public void SaveChanges()
    {
      _context.SaveChanges();
    }

    //Wachtwoord wijzigen? 
    public void Update(Gebruiker gebruiker)
    {
      _context.Update(gebruiker);
    }
  }
}

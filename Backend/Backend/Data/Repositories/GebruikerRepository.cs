using Backend.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Data.Repositories
{
  public class GebruikerRepository : IGebruikersRepository
  {

    private readonly GebruikerContext _context;
    private readonly DbSet<Gebruiker> _gebruikers;

    public GebruikerRepository(GebruikerContext dbContext)
    {
      _context = dbContext;
      _gebruikers = dbContext.Gebruikers;
    }
    public void Add(Gebruiker gebruiker)
    {
      _gebruikers.Add(gebruiker);
    }
    public Gebruiker GetByEmail(string emailadres)
    {
      return _gebruikers.SingleOrDefault(g => g.Emailadres == emailadres);
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

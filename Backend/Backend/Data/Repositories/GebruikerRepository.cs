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

    public void Delete(Gebruiker gebruiker)
    {
      _gebruikers.Remove(gebruiker);
    }

    public Gebruiker GetById(int id)
    {
      return _gebruikers.SingleOrDefault(g => g.Id == id);
    }

    public void SaveChanges()
    {
      _context.SaveChanges();
    }

    public bool TryGetGebruiker(int id, out Gebruiker gebruiker)
    {
      gebruiker = _context.Gebruikers.FirstOrDefault(g => g.Id == id);
      return gebruiker != null;
    }

    public void Update(Gebruiker gebruiker)
    {
      _context.Update(gebruiker);
    }
  }
}

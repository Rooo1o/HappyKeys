using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Models
{
  public interface IGebruikersRepository
  {
    Gebruiker GetById(int id);
    bool TryGetGebruiker(int id, out Gebruiker gebruiker);
    void Add(Gebruiker gebruiker);
    void Delete(Gebruiker gebruiker);
    void Update(Gebruiker gebruiker);
    void SaveChanges();
  }
}

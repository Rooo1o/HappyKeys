using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Models
{
  public interface IGebruikersRepository
  {
    Gebruiker GetByEmail(string email);
    void Add(Gebruiker gebruiker);
    void Update(Gebruiker gebruiker);
    void SaveChanges();
  }
}

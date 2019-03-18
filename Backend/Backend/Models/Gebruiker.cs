using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Models
{
  public class Gebruiker
  {
    public int Id { get; set; }
    public string Gebruikersnaam { get; set; }
    public string Naam { get; set; }
    public string Voornaam { get; set; }
    public string Emailadres { get; set; }
    public string Wachtwoord { get; set; }

    internal Gebruiker()
    {

    }

    public Gebruiker(string naam, string voornaam, string emailadres, string wachtwoord)
    {
      Naam = naam;
      Voornaam = voornaam;
      Emailadres = emailadres;
      Wachtwoord = wachtwoord;
    }
  }


}

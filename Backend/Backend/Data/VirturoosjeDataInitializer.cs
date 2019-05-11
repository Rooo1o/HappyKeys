using Backend.Models;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Data.Repositories
{
  public class VirturoosjeDataInitializer
  {
    private readonly VirturoosjeContext _dbContext;
    private readonly UserManager<IdentityUser> _userManager;

    public VirturoosjeDataInitializer(VirturoosjeContext dbContext, UserManager<IdentityUser> userManager)
    {
      _dbContext = dbContext;
      _userManager = userManager;

    }

    public async Task InitializeData()
    {
      _dbContext.Database.EnsureDeleted();
      if (_dbContext.Database.EnsureCreated())
      {
        //databank seeden
        Gebruiker gebruiker = new Gebruiker {
          Gebruikersnaam = "Lord Superior",
          Emailadres = "robinroos1@hotmail.com",
          Naam = "Roos",
          Voornaam = "Robin",
          Wachtwoord = "W@chtwoord1"
        };
        _dbContext.Gebruikers.Add(gebruiker);
        await CreateUser(gebruiker.Emailadres, gebruiker.Wachtwoord);

        Gebruiker gebruiker2 = new Gebruiker
        {
          Gebruikersnaam = "Notenolie",
          Emailadres = "simonpann@gmail.com",
          Naam = "Panné",
          Voornaam = "Simon",
          Wachtwoord = "Robin"
        };
        _dbContext.Gebruikers.Add(gebruiker2);
        await CreateUser(gebruiker2.Emailadres, gebruiker2.Wachtwoord);
        _dbContext.SaveChanges();
      }
    }

    private async Task CreateUser(string email, string password)
    {
      var user = new IdentityUser { UserName = email, Email = email };
      await _userManager.CreateAsync(user, password);
    }

  }
}

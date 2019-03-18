using Backend.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Data
{
  public class PianoAppDataInitializer
  {
    private readonly GebruikerContext _dbContext;
    private readonly UserManager<IdentityUser> _userManager;

    public PianoAppDataInitializer(GebruikerContext dbContext, UserManager<IdentityUser> userManager)
    {
      _dbContext = dbContext;
      this._userManager = userManager;
    }


    public async Task InitializeData()
    {
      _dbContext.Database.EnsureDeleted();
      if (_dbContext.Database.EnsureCreated())
      {
        Gebruiker gebruiker = new Gebruiker { Gebruikersnaam = "Notenolie", Voornaam = "Simon", Naam = "Panné", Emailadres = "simonpann@hotmail.com", Wachtwoord = "Yiiskaan@11" };
        await CreateUser(gebruiker.Emailadres, gebruiker.Wachtwoord);
        _dbContext.Gebruikers.Add(gebruiker);
        Gebruiker gebruiker2 = new Gebruiker { Gebruikersnaam = "Volpefox", Voornaam = "Robbe", Naam = "Devos", Emailadres = "robbedevos1996@live.be", Wachtwoord = "Robberobberobbe@12" };
        await CreateUser(gebruiker2.Emailadres, gebruiker2.Wachtwoord);
        _dbContext.Gebruikers.Add(gebruiker2);
        _dbContext.SaveChanges();
      }
    }

    private async Task CreateUser(string email, string wachtwoord)
    {
      var user = new IdentityUser { UserName = email, Email = email };
      await _userManager.CreateAsync(user, wachtwoord);
    }
  }
}

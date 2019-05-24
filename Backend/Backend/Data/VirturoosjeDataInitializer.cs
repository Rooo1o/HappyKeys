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
        await CreateUser("robinroos1@hotmail.com", "LordSuperior", "W@chtwoord1");
        await CreateUser("simonpann@gmail.com", "Notenolie", "Robin");
        _dbContext.SaveChanges();
      }
    }

    private async Task CreateUser(string email, string gebruikersnaam, string password)
    {
      var user = new IdentityUser { UserName = gebruikersnaam, Email = email };
      var gemaakteUser = await _userManager.CreateAsync(user, password);
      var x = 5;
    }

  }
}

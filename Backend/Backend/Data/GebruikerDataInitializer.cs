using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Data
{
  public class GebruikerDataInitializer: DbContext 
  {
    private readonly GebruikerContext _dbContext;
    public GebruikerDataInitializer(GebruikerContext dbContext)
    {
      _dbContext = dbContext;
    }

    public void InitializeData()
    {
      _dbContext.Database.EnsureDeleted();
      if (_dbContext.Database.EnsureCreated())
      {
        //??? profit
      }
    }
  }
}

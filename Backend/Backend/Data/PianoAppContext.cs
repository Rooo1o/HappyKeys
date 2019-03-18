using Backend.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Data
{
  public class GebruikerContext: IdentityDbContext
  {
    public GebruikerContext(DbContextOptions<GebruikerContext> options) : base(options)
    {

    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
      base.OnModelCreating(modelBuilder);
      modelBuilder.Entity<Gebruiker>()
        .Property(g => g.Voornaam).IsRequired().HasMaxLength(50);
      modelBuilder.Entity<Gebruiker>().Property(g => g.Naam).IsRequired().HasMaxLength(50);
      modelBuilder.Entity<Gebruiker>().Property(g => g.Emailadres).IsRequired().HasMaxLength(50);
      modelBuilder.Entity<Gebruiker>().Property(g => g.Wachtwoord).IsRequired().HasMaxLength(25);
      
    }

    public DbSet<Gebruiker> Gebruikers { get; set; }
  }
}

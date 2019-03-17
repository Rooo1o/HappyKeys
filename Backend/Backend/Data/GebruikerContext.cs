using Backend.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Data
{
  public class GebruikerContext: DbContext
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
      modelBuilder.Entity<Gebruiker>().Property(g => g.Wachtwoord).IsRequired().HasMaxLength(15);

      modelBuilder.Entity<Gebruiker>().HasData(
        new Gebruiker { Id = 1, Naam = "Panné", Voornaam = "Simon", Emailadres = "simonpann@hotmail.com", Wachtwoord= "Donia" }
      );
    }

    public DbSet<Gebruiker> Gebruikers { get; set; }
  }
}

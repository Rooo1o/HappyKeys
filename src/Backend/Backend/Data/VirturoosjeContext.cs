using Backend.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System.Collections.ObjectModel;

namespace Backend.Data
{
  public class VirturoosjeContext : IdentityDbContext
  {
    public VirturoosjeContext(DbContextOptions<VirturoosjeContext> options) : base(options)
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
      modelBuilder.Entity<Gebruiker>()
        .HasMany(p => p.Sheets)
        .WithOne()
        .IsRequired()
        .HasForeignKey("GebruikerId");



      modelBuilder.Entity<Sheet>()
        .HasMany(p => p.Noten)
        .WithOne()
        .IsRequired()
        .HasForeignKey("SheetId");
      modelBuilder.Entity<Sheet>().Property(s => s.Naam).IsRequired().HasMaxLength(100);
      modelBuilder.Entity<Sheet>().Property(s => s.Auteur).IsRequired().HasMaxLength(100);
      modelBuilder.Entity<Noot>().HasKey(n => n.Id);
      modelBuilder.Entity<Noot>().Property(n => n.Tijdstip).IsRequired();
      modelBuilder.Entity<Noot>().Property(n => n.Midiwaarde).IsRequired();

      modelBuilder.Entity<Gebruiker>().HasData(
        new
        {
          Id = 1,
          Gebruikersnaam = "LordSuperior",
          Naam = "Roos",
          Voornaam = "Robin",
          Emailadres = "robinroos1@hotmail.com",
          Wachtwoord = "W@chtwoord1"
        },
        new
        {
          Id = 2,
          Gebruikersnaam = "Notenolie",
          Naam = "Panné",
          Voornaam = "Simon",
          Emailadres = "simonpanne@gmail.com",
          Wachtwoord = "Robin"
        }
        );

      modelBuilder.Entity<Sheet>().HasData(
        new
        {
          Id = 1,
          Naam = "do re mi",
          Auteur = "Robin Roos",
          GebruikerId = 1
        },

        new
        {
          Id = 2,
          Naam = "fa sol la",
          Auteur = "Robin Roos",
          GebruikerId = 1
        });

      modelBuilder.Entity<Noot>().HasData(
        new { Id = 1, Midiwaarde = 60, Tijdstip = 200, SheetId = 1 },
        new { Id = 2, Midiwaarde = 62, Tijdstip = 400, SheetId = 1 },
        new { Id = 3, Midiwaarde = 64, Tijdstip = 600, SheetId = 1 },
        new { Id = 4, Midiwaarde = 65, Tijdstip = 200, SheetId = 2 },
        new { Id = 5, Midiwaarde = 67, Tijdstip = 400, SheetId = 2 },
        new { Id = 6, Midiwaarde = 69, Tijdstip = 600, SheetId = 2 }
        );


    }

    public DbSet<Gebruiker> Gebruikers { get; set; }
    public DbSet<Sheet> Sheets { get; set; }
  }
}

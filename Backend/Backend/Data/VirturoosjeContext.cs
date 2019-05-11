using Backend.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Data
{
  public class VirturoosjeContext: IdentityDbContext
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
      modelBuilder.Entity<Sheet>()
        .HasMany(p => p.Noten)
        .WithOne()
        .IsRequired()
        .HasForeignKey("SheetId");
      modelBuilder.Entity<Sheet>().Property(s => s.Naam).IsRequired().HasMaxLength(100);
      modelBuilder.Entity<Noot>().HasKey(n => n.Id);
      
    }

    public DbSet<Gebruiker> Gebruikers { get; set; }
    public DbSet<Sheet> Sheets { get; set; }
  }
}

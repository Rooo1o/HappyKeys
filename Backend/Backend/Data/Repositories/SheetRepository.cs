using Backend.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Backend.Data.Repositories
{
  public class SheetRepository : ISheetRepository
  {
    private readonly VirturoosjeContext _context;
    private readonly DbSet<Sheet> _sheets;

    public SheetRepository(VirturoosjeContext dbContext)
    {
      _context = dbContext;
      _sheets = dbContext.Sheets;
    }

    public void Add(Sheet sheet)
    {
      _sheets.Add(sheet);
    }

    public IEnumerable<Sheet> GetAll()
    {
      return _sheets.Include(s => s.Noten);
    }

    public Sheet GetById(int id)
    {
      return _sheets.SingleOrDefault(s => s.Id == id);
    }
    

    public IEnumerable<Sheet> GetBy(string naam = null, string auteur = null)
    {
      var sheets = _sheets.Include(s => s.Noten).AsQueryable();
      if (!string.IsNullOrEmpty(naam))
        sheets = sheets.Where(s => s.Naam.IndexOf(naam, System.StringComparison.OrdinalIgnoreCase) >= 0);
      if (!string.IsNullOrEmpty(auteur))
        sheets = sheets.Where(s => s.Auteur.Equals(auteur, System.StringComparison.OrdinalIgnoreCase));
      return sheets.OrderBy(s => s.Naam).ToList();
    }

    public void SaveChanges()
    {
      _context.SaveChanges();
    }
  }
}

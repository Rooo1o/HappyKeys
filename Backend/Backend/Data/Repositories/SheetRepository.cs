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

    public Sheet GetBy(int id)
    {
      return _sheets.Include(s => s.Noten).SingleOrDefault(s => s.Id == id);
    }

    public Sheet GetBy(string naam)
    {
      if (!string.IsNullOrEmpty(naam))
        return _sheets.Where(s => s.Naam.ToLower().Equals(naam.ToLower())).SingleOrDefault();
      return null;
    }

    public void SaveChanges()
    {
      _context.SaveChanges();
    }
  }
}

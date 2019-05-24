using System.Collections.Generic;

namespace Backend.Models
{
  public interface ISheetRepository
  {
    IEnumerable<Sheet> GetAll();
    Sheet GetById(int id);
    IEnumerable<Sheet> GetBy(string naam = null, string auteur = null);
    void Add(Sheet sheet);
    void SaveChanges();
  }
}

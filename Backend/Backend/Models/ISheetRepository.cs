using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Models
{
  public interface ISheetRepository
  {
        Sheet GetBy(int id);
        IEnumerable<Sheet> GetAll();
        Sheet GetBy(string naam = null);
        void Add(Sheet sheet);
        void SaveChanges();
  }
}

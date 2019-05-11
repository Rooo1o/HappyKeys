using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Models
{
  public class Sheet
  {
    public int Id { get; set; }
    public String Naam { get; set; }
    public ICollection<Noot> Noten { get; set; }
    internal Sheet() { }
  }

  enum Type
  {
    Xylofoon,
    Keyboard,
    Piano
  }
}

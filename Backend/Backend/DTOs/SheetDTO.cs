using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.DTOs
{
  public class SheetDTO
  {
    public int Id { get; set; }
    public String Naam { get; set; }
    public String Auteur { get; set; }
    public ICollection<NootDTO> Noten { get; set; }

    public SheetDTO()
    {
      Noten = new Collection<NootDTO>();
    }
  }
}

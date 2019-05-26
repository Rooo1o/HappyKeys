using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Models
{
  public class Sheet
  {
    public int Id { get; set; }
    public String Naam { get; set; }
    public String Auteur { get; set; }
    public ICollection<Noot> Noten { get; set; }
    internal Sheet() {
      this.Noten = new Collection<Noot>();
    }

    public void VoegNootToe(Noot noot) => Noten.Add(noot);
  }

}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Models
{
  public class Noot
  {
    public int Id { get; set; }
    public int Midiwaarde { get; set; }
    public int Tijdstip { get; set; }
    internal Noot() { }

    public Noot(int midiwaarde, int tijdstip)
    {
      Midiwaarde = midiwaarde;
      Tijdstip = tijdstip;
    }
  }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Models
{
  public class Noot
  {
    //milliseconden
    public int Id { get; set; }
    public int Lengte { get; set; }
    public Sleutel Sleutel { get; set; }
    public int GecorrigeerdeLengte { get; set; }
    public int Midiwaarde { get; set; }
    public String Tonewaarde { get; set; }
    public String Vexflowwaarde { get; set; }
    internal Noot() { }
  }
 public enum Sleutel
  {
    Viool,
    Bass
  }
}

using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.DTOs
{
  public class GebruikerDTO
  {
    [Required]
    public string Voornaam { get; set; }
    [Required]
    public string Naam { get; set; }
    [Required]
    public string Emailadres { get; set; }
    [Required]
    public string Wachtwoord { get; set; }
  }
}

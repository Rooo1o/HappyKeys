using System.ComponentModel.DataAnnotations;

namespace RecipeApi.DTOs
{
  public class RegistreerDTO
  {

    [Required]
    [StringLength(200)]
    public string Gebruikersnaam { get; set; }

    [Required]
    [StringLength(200)]
    public string Voornaam { get; set; }

    [Required]
    [StringLength(250)]
    public string Achternaam { get; set; }

    [Required]
    [StringLength(200)]
    public string Emailadres { get; set; }

    [Required]
    public string Wachtwoord { get; set; }

    [Required]
    [Compare("Wachtwoord")]
    public string WachtwoordHerhalen { get; set; }
  }
}

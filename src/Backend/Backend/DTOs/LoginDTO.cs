using System.ComponentModel.DataAnnotations;

namespace RecipeApi.DTOs
{
    public class LoginDTO
        {
            [Required]
            public string EmailOfGebruikersnaam { get; set; }

            [Required]
            public string Wachtwoord { get; set; }
        }
 }

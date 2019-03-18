using System;
using System.ComponentModel.DataAnnotations;

namespace RecipeApi.DTOs
{
    public class RegistreerDTO : LoginDTO    {
            [Required]
            [StringLength(200)]
            public string FirstName { get; set; }

            [Required]
            [StringLength(250)]
            public string LastName { get; set; }

            [Required]
            [MinLength(8)]
            [Compare("Wachtwoord")]
            public string WachtwoordBevestiging { get; set; }
    }
}

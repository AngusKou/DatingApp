using System.ComponentModel.DataAnnotations;

namespace DatingApp.API.Dtos
{
   public class UserForLoginDto
   {
      [Required]
      public string Username { get; set; }

      [Required]
      [StringLength(8, MinimumLength = 4, ErrorMessage = "You must enter a password")]
      public string Password { get; set; }
   }
}
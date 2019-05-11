using Backend.Models;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;

namespace Backend.Controllers
{
  [ApiConventionType(typeof(DefaultApiConventions))]
  [Produces("application/json")]
	[Route("api/[controller]")]
  [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
  [ApiController]
  public class SheetController : ControllerBase
  {
    private readonly IGebruikersRepository _gebruikersRepository;
    private readonly ISheetRepository _sheetRepository;

    public SheetController(IGebruikersRepository gebruikersRepository, ISheetRepository sheetRepository)
    {
      _gebruikersRepository = gebruikersRepository;
      _sheetRepository = sheetRepository;
    }

    [HttpGet]
    [AllowAnonymous]
    public IEnumerable<Sheet> GetSheets()
    {
      return _sheetRepository.GetAll();
    }
  }
}

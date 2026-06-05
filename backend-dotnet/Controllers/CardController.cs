using Microsoft.AspNetCore.Mvc;

namespace KanbanApi.Controllers;

[ApiController]
[Route("cards")]

public class CardController : ControllerBase
{
    [HttpGet]
    public IActionResult GetAllCard()
    {
        return Ok("teste");
    }

    [HttpPost]
    public IActionResult CreateCard()
    {
        return Ok("teste");
    }

    [HttpPatch("{id}")]
    public IActionResult UpdateCard(int id)
    {
        return Ok("teste");
    }

    [HttpDelete("{id}")]
    public IActionResult DeleteCard(int id)
    {
        return Ok("teste");
    }



}

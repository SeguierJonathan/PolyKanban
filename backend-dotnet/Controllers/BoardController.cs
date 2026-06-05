using Microsoft.AspNetCore.Mvc;

namespace KanbanApi.Controllers;

[ApiController]
[Route("boards")]
public class BoardsController : ControllerBase
{
    [HttpGet]
    public IActionResult GetAll()
    {
        return Ok(new[]
        {
            new { Id = 1, Title = "Board 1" },
            new { Id = 2, Title = "Board 2" }
        });
    }
}
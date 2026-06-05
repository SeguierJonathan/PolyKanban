using Microsoft.AspNetCore.Mvc;

namespace KanbanApi.Controllers;

[ApiController]
[Route("tags")]

public class TagController : ControllerBase
{
    [HttpGet]
    public IActionResult GetAllTag()
    {
        return Ok("teste");
    }

    [HttpPost]
    public IActionResult CreateTag()
    {
        return Ok("teste");
    }

    [HttpPatch("{id}")]
    public IActionResult UpdateTag(int id)
    {
        return Ok("teste");
    }

    [HttpDelete("{id}")]
    public IActionResult DeleteTag(int id)
    {
        return Ok("teste");
    }



}

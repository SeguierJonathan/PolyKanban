using Microsoft.AspNetCore.Mvc;

namespace KanbanApi.Controllers;

[ApiController]
[Route("lists")]

public class ListController : ControllerBase
{
    [HttpGet]
    public IActionResult GetAllList()
    {
        return Ok("teste");
    }

    [HttpPost]
    public IActionResult CreateList()
    {
        return Ok("teste");
    }

    [HttpPatch("{id}")]
    public IActionResult UpdateList(int id)
    {
        return Ok("teste");
    }

    [HttpDelete("{id}")]
    public IActionResult DeleteList(int id)
    {
        return Ok("teste");
    }



}

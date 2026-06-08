using Kanban.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace KanbanApi.Controllers;

[ApiController]
[Route("boards")]
public class BoardsController : ControllerBase
{

    private readonly AppDbContext _db;

    public BoardsController(AppDbContext db)
    {
        _db = db;
    }


    [HttpGet]
    public async Task<IActionResult> GetAll()
    {

        var boards = await _db.Lists.ToListAsync();

        return Ok(boards);

    }
}
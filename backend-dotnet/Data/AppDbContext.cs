using Microsoft.EntityFrameworkCore;
using Kanban.Models;
namespace Kanban.Data;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options)
        : base(options)
    {
    }

    public DbSet<Board> Board { get; set; }
    public DbSet<BoardList> List { get; set; }
    public DbSet<Card> Card { get; set; }
    public DbSet<Tag> Tag { get; set; }
}
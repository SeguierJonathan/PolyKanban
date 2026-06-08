using Kanban.Extensions;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddDatabase();

var app = builder.Build();


app.MapControllers();


app.Run();





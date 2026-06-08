using Microsoft.EntityFrameworkCore;
using Kanban.Data;

namespace Kanban.Extensions;

public static class ServiceCollectionExtensions
{
    public static IServiceCollection AddDatabase(this IServiceCollection services)
    {
        var connectionString = string.Join(";", new[]
        {
            $"Host={Environment.GetEnvironmentVariable("DB_HOST") ?? "localhost"}",
            $"Port={Environment.GetEnvironmentVariable("DB_PORT") ?? "5432"}",
            $"Database={Environment.GetEnvironmentVariable("POSTGRES_DB")}",
            $"Username={Environment.GetEnvironmentVariable("POSTGRES_USER")}",
            $"Password={Environment.GetEnvironmentVariable("POSTGRES_PASSWORD")}"
        });

        services.AddDbContext<AppDbContext>(options =>
        {
            options.UseNpgsql(connectionString);
        });

        return services;
    }
}
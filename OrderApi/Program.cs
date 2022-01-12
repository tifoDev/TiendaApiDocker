
using System.Text.Json.Serialization;

var builder = WebApplication.CreateBuilder(args);
var  MyAllowSpecificOrigins = "_myAllowSpecificOrigins";

// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddCors(options =>
{
    options.AddPolicy(name: MyAllowSpecificOrigins,
        builder =>
        {
            builder.WithOrigins("http://localhost:8000","http://localhost:4200").AllowAnyHeader();
        }
    );
});

builder.Services.AddDbContext<ContextDb>(opts=>{
    opts.UseSqlServer(builder.Configuration.GetConnectionString("ordersDb"));
});

builder.Services.Configure<Microsoft.AspNetCore.Http.Json.JsonOptions>(options =>
{
    // options.SerializerOptions.PropertyNameCaseInsensitive = false;
    // options.SerializerOptions.PropertyNamingPolicy = null;
    // options.SerializerOptions.WriteIndented = true;
    options.SerializerOptions.ReferenceHandler = ReferenceHandler.IgnoreCycles;
});

var app = builder.Build();

// Configure the HTTP request pipeline.
// if (app.Environment.IsDevelopment())
// {
    app.UseSwagger();
    app.UseSwaggerUI();
    app.UseDeveloperExceptionPage();
// }
app.UseCors(MyAllowSpecificOrigins);

app.MapGet("/api/connection", (IConfiguration conf) => conf.GetConnectionString("ordersDB"));

app.MapGet("/api/orders", async (ContextDb db) =>
    await db.Orders.ToListAsync()
)
.Produces<List<Order>>(StatusCodes.Status200OK)
.WithName("GetAllOrders").WithTags("Orders");

app.MapPost("/api/orders",
    async ([FromBody] Order newOrder, [FromServices] ContextDb db, HttpResponse response) =>
    {
        db.Orders.Add(newOrder);
        await db.SaveChangesAsync();
        return Results.Ok(newOrder);
    })
.Accepts<Order>("application/json")
.Produces<Order>(StatusCodes.Status201Created)
.WithName("AddNewBook").WithTags("Books");


app.Run();

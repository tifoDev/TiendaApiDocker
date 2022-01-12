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
    opts.UseSqlServer(builder.Configuration.GetConnectionString("authDB"));
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

app.MapGet("/api/customers", async (ContextDb db) =>
    await db.Customers.ToListAsync()
)
.Produces<List<Customer>>(StatusCodes.Status200OK)
.WithName("GetAllCustomers").WithTags("Customer");

app.MapPost("/api/signin", ([FromBody] Customer client, [FromServices] ContextDb db, HttpResponse response) =>
    {
        var exist = db.Customers.Where(cli=> cli.Email.Equals(client.Email) && cli.Password.Equals(client.Password)).FirstOrDefault();

        if(exist == null)
            return Results.BadRequest();

        return Results.Ok(exist.Id);
    })
.Accepts<Customer>("application/json")
.Produces<int>(StatusCodes.Status202Accepted)
.Produces(StatusCodes.Status400BadRequest)
.WithName("Login").WithTags("Customer");

app.MapPost("/api/signup", 
async ([FromBody] Customer customer, [FromServices] ContextDb db, HttpResponse response) =>
    {
          db.Customers.Add(customer);
          await db.SaveChangesAsync();
        return Results.Ok(customer.Id);
    })
.Accepts<Customer>("application/json")
.Produces<int>(StatusCodes.Status201Created)
.Produces(StatusCodes.Status400BadRequest)
.WithName("Register").WithTags("Customer");

app.Run();

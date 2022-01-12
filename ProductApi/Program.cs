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
            builder.WithOrigins("http://localhost:8000","http://localhost:4200");
        }
    );
});

builder.Services.AddScoped<IDbConnection>(
    provider => new SqlConnection(builder.Configuration.GetConnectionString("productsDB"))
);

var app = builder.Build();

// Configure the HTTP request pipeline.
// if (app.Environment.IsDevelopment())
// {
    app.UseSwagger();
    app.UseSwaggerUI();
    app.UseDeveloperExceptionPage();
// }
app.UseCors(MyAllowSpecificOrigins);

app.MapGet("/api/connection", (IConfiguration conf) => conf.GetConnectionString("productsDB"));
app.MapGet("/api/products", async (IDbConnection conn) => await conn.GetAllAsync<Product>());

app.Run();

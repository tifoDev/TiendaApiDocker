using Microsoft.EntityFrameworkCore;
using OrderApi.Entities;

namespace OrderApi.Context
{
    public class  ContextDb: DbContext
    {
        public ContextDb(DbContextOptions<ContextDb> options) : base(options)
        {
            
        }

        public DbSet<Order> Orders => Set<Order>();

    }
}
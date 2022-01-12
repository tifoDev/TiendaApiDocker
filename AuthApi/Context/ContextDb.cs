namespace AuthApi.Context
{
    public class  ContextDb: DbContext
    {
        public ContextDb(DbContextOptions<ContextDb> options) : base(options)
        {
            
        }
 
        public DbSet<Customer> Customers => Set<Customer>();

    }
}
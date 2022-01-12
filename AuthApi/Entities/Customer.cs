namespace AuthApi.Entities
{
 [Table("Customer", Schema = "dbo")]
    public class Customer
    {
        public long Id { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
    }
}
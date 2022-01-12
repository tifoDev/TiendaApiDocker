namespace OrderApi.Entities
{
     [Table("Order", Schema = "dbo")]
    public class Order
    {
        public long Id { get; set; }
        public long CustomerId { get; set; }
        public DateTime OrderDate { get; set; }
        public string OrderNumber { get; set; }
        public ICollection<OrderItem>? Items { get; set; }
    }
}

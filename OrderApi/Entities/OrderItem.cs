namespace OrderApi.Entities
{
    [Table("OrderItem", Schema = "dbo")]
    public class OrderItem
    {
        public long Id { get; set; }

        public long ProductId { get; set; }

        public int Quantity { get; set; }

        public decimal UnitPrice { get; set; }

        public Order Order { get; set; }
    }
}

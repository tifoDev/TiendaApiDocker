namespace OrderApi.Dto
{
    public class OrderItemDto
    {
        public long Id { get; set; }

        public long ProductId { get; set; }

        public int Quantity { get; set; }

        public decimal UnitPrice { get; set; }

    }
}

namespace OrderApi.Dto
{
    public class OrderDto
    {
        public long Id { get; set; }
        public DateTime OrderDate { get; set; }
        public string OrderNumber { get; set; }
        public ICollection<OrderItemDto>? Items { get; set; }
    }
}

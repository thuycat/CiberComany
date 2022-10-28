using EProductMain.Data.Enum;
using System;
using System.Collections.Generic;
using System.Text;

namespace EProductMain.Data.Entities
{
 public   class Order
    {
        public int Id { get; set; }
      
        public int Customer { get; set; }
        public int Product { get; set; }
        public string Description { get; set; }
        public int Quantity { get; set; }
       // public string Status { get; set; }
        public DateTime OrderDate { set; get; }
        public Guid UserId { set; get; }
        public string ShipName { set; get; }
        public string ShipAddress { set; get; }
        public string ShipEmail { set; get; }
        public string ShipPhoneNumber { set; get; }
        public OrderStatus Status { set; get; }

        public List<OrderDetail> OrderDetails { get; set; }
        public AppUser AppUser { get; set; }
    }
}

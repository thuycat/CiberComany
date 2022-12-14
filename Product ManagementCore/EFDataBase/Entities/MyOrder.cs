using EProductMain.Data.Enum;
using System;
using System.Collections.Generic;
using System.Text;

namespace EProductMain.Data.Entities
{
  public  class MyOrder
    {
        public int Id { set; get; }
        public DateTime OrderDate { set; get; }
        public Guid UserId { set; get; }
        public string ShipName { set; get; }
        public string ShipAddress { set; get; }
        public string ShipEmail { set; get; }
        public string ShipPhoneNumber { set; get; }
        public OrderStatus Status { set; get; }

        public List<OrderDetail> OrderDetails { get; set; }
    }
}


using EFDataBase.Models.entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace Manage.ApplicationCore.DI.OrderAction
{
    public class OrderJson : Orders
    {
        public int idOr
        {
            get
            {
                return Id;
            }
        }
        public string  CateGoryName { get; set; }
        public string  productName { get; set; }
        public string  CustomerName { get; set; }
    }
}

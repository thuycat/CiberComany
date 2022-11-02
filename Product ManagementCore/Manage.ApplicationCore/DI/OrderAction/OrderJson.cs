using EFDataBase.Models.entities;
using EProductMain.Data.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace Manage.ApplicationCore.DI.OrderAction
{
    public class OrderJson : Order
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

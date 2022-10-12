using Manage.ApplicationCore.baseRepo;
using System;
using System.Collections.Generic;
using System.Text;

namespace Manage.ApplicationCore.DI.OrderAction
{
    public class OrdersQuery : baseQuery
    {
        public int IDCate { get; set; }
    }
}

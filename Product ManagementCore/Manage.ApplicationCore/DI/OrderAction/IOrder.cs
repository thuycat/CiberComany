using EFDataBase.Models.entities;
using EProductMain.Data.Entities;
using Manage.ApplicationCore.baseRepo;
using Manage.ApplicationCore.ItemShare;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Manage.ApplicationCore.DI.OrderAction
{
   public interface IOrder:IBaseRepos<OrderCys>
    {
        Task<MethodResult<List<OrderCys>>> GetListEntity(OrdersQuery queryData);
        Task<MethodResult<List<OrderJson>>> GetListJson(OrdersQuery queryData);
        Task<MethodResult<List<OrderJson>>> GetListJson2(OrdersQuery queryData);
        string BuildCauDieuKien(OrdersQuery OrdersQuery);


    }
}
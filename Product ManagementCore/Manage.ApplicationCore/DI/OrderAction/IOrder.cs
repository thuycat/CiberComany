using EFDataBase.Models.entities;
using Manage.ApplicationCore.baseRepo;
using Manage.ApplicationCore.ItemShare;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Manage.ApplicationCore.DI.OrderAction
{
   public interface IOrder:IBaseRepos<Orders>
    {
        Task<MethodResult<List<Orders>>> GetListEntity(OrdersQuery queryData);
        Task<MethodResult<List<OrderJson>>> GetListJson(OrdersQuery queryData);
        Task<MethodResult<List<OrderJson>>> GetListJson2(OrdersQuery queryData);
        string BuildCauDieuKien(OrdersQuery OrdersQuery);


    }
}
using EFDataBase.Models.entities;
using Manage.ApplicationCore.baseRepo;
using Manage.ApplicationCore.ItemShare;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Manage.ApplicationCore.DI.CustomerAction
{
   public interface ICustomer : IBaseRepos<Customer>
    {
        Task<MethodResult<List<Customer>>> GetListEntity(CustomerQuery queryData);
       
        string BuildCauDieuKien(CustomerQuery loaiMenuQuery);


    }
}
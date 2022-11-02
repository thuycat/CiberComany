using Manage.ApplicationCore.ItemShare;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using EFDataBase.Models.entities;
using Manage.ApplicationCore.baseRepo;
using EProductMain.Data.Entities;

namespace Manage.ApplicationCore.DI.ProductAction
{
  public  interface IProduct:IBaseRepos<Product>
    {
        Task<MethodResult<List<Product>>> GetListEntity(ProductQuery queryData);
        Task<MethodResult<bool>> CheckQuantity(int Id, int Amout);
       // string BuildCauDieuKien(ProductQuery loaiMenuQuery);


    }
}
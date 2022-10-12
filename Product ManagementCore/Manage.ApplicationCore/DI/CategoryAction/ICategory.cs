using EFDataBase.Models.entities;
using Manage.ApplicationCore.baseRepo;
using Manage.ApplicationCore.ItemShare;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Manage.ApplicationCore.DI.CategoryAction
{
   public interface ICategory:IBaseRepos<Category>
    {
        Task<MethodResult<List<Category>>> GetListEntity(CategoryQuery queryData);
       
        string BuildCauDieuKien(CategoryQuery loaiMenuQuery);


    }
}
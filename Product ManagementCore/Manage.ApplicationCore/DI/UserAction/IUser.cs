using EFDataBase.Models.entities;
using Manage.ApplicationCore.baseRepo;
using Manage.ApplicationCore.ItemShare;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Manage.ApplicationCore.DI.UserAction
{
  public  interface IUser: IBaseRepos<Luser>
    {
        Task<MethodResult<Luser>> GetUserByAcount(string nameLogin, string pass);
    }
}

using Dapper;
using EFDataBase.Models.entities;
using Manage.ApplicationCore.baseRepo;
using Manage.ApplicationCore.ItemShare;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Manage.ApplicationCore.DI.UserAction
{
   public class UserServices: BaseReposServices<Luser>, IUser
    {
        public UserServices(Microsoft.Extensions.Configuration.IConfiguration configuration, IActionGeneral IActionGeneral) : base(configuration, IActionGeneral)
        {
        }

        public async Task<MethodResult<Luser>> GetUserByAcount(string nameLogin, string pass)
        {
            using (var conn = GetOpenConnection())
            {

                try
                {
                    var listItem = await conn.QueryAsync<Luser>($"SELECT TOP(1) * FROM {_tableName} Where LoginName='{nameLogin}' AND PassWord=N'{pass}'");
                    if (listItem.AsList().Count > 0)
                    {
                        return MethodResult<Luser>.ResultWithData(listItem.AsList()[0], "Thành công!");
                    }
                    else
                    {
                        return MethodResult<Luser>.ResultWithNotFound();
                    }
                    
                }
                catch (Exception e)
                {
                    return MethodResult<Luser>.ResultWithError(e.ToString());
                }

            }
        }
    }
}

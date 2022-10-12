using Dapper;

using Manage.ApplicationCore.ItemShare;
using System;
using System.Collections.Generic;
using System.Data;
using System.Text;
using System.Threading.Tasks;

namespace Manage.ApplicationCore.baseRepo
{
    public interface IBaseRepos<TModel>
    {
        IDbConnection GetOpenConnection();
        Task<MethodResult> AddAsync(TModel model, bool ischecktrung = false, string FieldCheckTrung = "", object datachecktrung = null);
        Task<IMethodResult> AddMany(List<TModel> models);
        Task<MethodResult<TModel>> getDataIDAsync(string ID);
        Task<MethodResult<TModel>> getDataID(int ID);
       // Task<MethodResult<List<TModel>>> GetList();
        Task<MethodResult<List<TModel>>> GetListAll();
        Task<MethodResult<List<TModel>>> GetList(baseQuery queryData);
        Task<MethodResult> EditAsync(TModel model);
        Task<MethodResult>  Delete(string id);
        Task<MethodResult> Denied(string id);
        Task<MethodResult> Approved(string id);
        Task<MethodResult> InsertItemAsync(TModel model, List<string> lstFielNotmap = null);
        Task<MethodResult> UpdateOneOrMoreFieldAsync(DynamicParameters dataUpdate, string ID);
        Task<MethodResult> UpdateOneFieldAsync(string field, object data, int ID);


    }
}

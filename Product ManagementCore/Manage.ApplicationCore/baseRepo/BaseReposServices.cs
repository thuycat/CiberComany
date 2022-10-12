using Dapper;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using Z.Dapper.Plus;
using System.Configuration;
using System.Threading.Tasks;

using Manage.ApplicationCore.ItemShare;
using Manage.ApplicationCore.Conectionn;
using Manage.ApplicationCore.DI;

namespace Manage.ApplicationCore.baseRepo
{
    public partial class BaseReposServices<TModel> : IBaseRepos<TModel>
      where TModel : class
    {

        protected string _connectionString;
        protected string _tableName;
        protected int countRecort = 0;

        protected IConfiguration _configuration;
        protected IActionGeneral _actionGeneral;

        public BaseReposServices(IConfiguration configuration, IActionGeneral actionGeneral, string defaultSchema = null)
        {
            _connectionString = configuration.GetConnectionString("SqlConnectionString");
            _actionGeneral = actionGeneral;
            _tableName = string.IsNullOrEmpty(defaultSchema)
              ? typeof(TModel).Name
              : $"[{defaultSchema}].{typeof(TModel).Name}";

        }


        public IDbConnection GetOpenConnection()
        {
            return configConnectionSql.GetDbConnection(_connectionString);
        }
        public async Task<MethodResult> AddAsync(TModel model, bool ischecktrung = false, string FieldCheckTrung = "", object datachecktrung = null)
        {
            DapperPlusManager.Entity<TModel>().Table(_tableName);

            using (var connection = GetOpenConnection())
            {
                try
                {
                    if (ischecktrung && !string.IsNullOrEmpty(FieldCheckTrung))
                    {
                        string getList = $"SELECT * FROM {_tableName} WHERE {FieldCheckTrung} = @code";
                        var parameters = new DynamicParameters();
                        parameters.Add("@code", datachecktrung);
                        List<TModel> listItem = (await connection.QueryAsync<TModel>(getList, parameters)).ToList();
                        if (listItem.Count > 0)
                        {
                            return MethodResult.ResultWithError("Dữ liệu đã tồn tại!");
                        }
                    }

                    await connection.BulkActionAsync(x => x.BulkInsert(model));
                    return MethodResult.ResultWithSuccess($"Thêm mới thành công");
                }
                catch (Exception e)
                {
                    LogData.LogErr($"{DateTime.Now.ToString("dd/MM/yyyy HH:mm:ss")} : Lỗi thêm mới {_tableName}", e.Message);
                    return MethodResult.ResultWithError(e.ToString());
                }
            }
        }

        public async Task<MethodResult> Delete(string id)
        {
            DapperPlusManager.Entity<TModel>().Table(_tableName).Key("ID");

            using (var connection = GetOpenConnection())
            {
                try

                {
                    var parameters = new DynamicParameters();
                    parameters.Add("@code", id);
                    var datadelete = await connection.QueryAsync<TModel>($"Select * FROM { _tableName} WHERE ID = @code", parameters);
                    await connection.BulkActionAsync(x => x.BulkDelete(datadelete));
                    return MethodResult.ResultWithSuccess();
                }
                catch (Exception e)
                {
                    LogData.LogErr($"{DateTime.Now.ToString("dd/MM/yyyy HH:mm:ss")} :Lỗi lấy danh sách {_tableName} ", e.Message);
                    return MethodResult.ResultWithError(e.ToString());
                }
            }
        }
        public async Task<MethodResult> EditAsync(TModel model)
        {
            DapperPlusManager.Entity<TModel>().Table(_tableName);
            using (var conn = GetOpenConnection())
            {
                try
                {
                    await conn.BulkActionAsync(x => x.BulkUpdate(model));
                    return MethodResult.ResultWithSuccess();
                }
                catch (Exception e)
                {
                    LogData.LogErr($"{DateTime.Now.ToString("dd/MM/yyyy HH:mm:ss")} :Lỗi sửa {_tableName}", e.Message);
                    return MethodResult.ResultWithError(e.ToString());
                }
            }

        }

        public async Task<MethodResult> UpdateOneOrMoreFieldAsync(DynamicParameters dataUpdate, string ID)
        {
            //<string, object>
            try
            {
                using (IDbConnection db = GetOpenConnection())
                {
                    List<string> sqlStr = new List<string>();
                    // DynamicParameters dataUpdatesql = new DynamicParameters();
                    foreach (var item in dataUpdate.ParameterNames)
                    {
                        sqlStr.Add(item + "= @" + item);

                    }
                    string sqlQuery = $"UPDATE {_tableName} SET {string.Join(',', sqlStr)} where ID = @ID";
                    dataUpdate.Add("@ID", ID);

                    int rowsAffected = await db.ExecuteAsync(sqlQuery, dataUpdate);
                }
                return MethodResult.ResultWithSuccess();
            }
            catch (Exception ex)
            {
                LogData.LogErr($"{DateTime.Now.ToString("dd/MM/yyyy HH:mm:ss")} :Lỗi cạp nhật nhiều trường {_tableName}", ex.Message);
                return MethodResult.ResultWithError(ex.Message);
            }


        }
        public async Task<MethodResult> UpdateOneFieldAsync(string field, object data, int ID)
        {
            try
            {
                DynamicParameters dataUpdate = new DynamicParameters();
                dataUpdate.Add("@" + field, data);
                dataUpdate.Add("@ID", ID);

                using (IDbConnection db = GetOpenConnection())
                {
                    List<string> sqlStr = new List<string>();

                    string sqlQuery = $"UPDATE {_tableName} SET {field}=@{field} where ID = @ID";

                    int rowsAffected = await db.ExecuteAsync(sqlQuery, dataUpdate);
                }
                return MethodResult.ResultWithSuccess();
            }
            catch (Exception ex)
            {
                LogData.LogErr($"{DateTime.Now.ToString("dd/MM/yyyy HH:mm:ss")} :Lỗi cập nhật trường {_tableName}", ex.Message);
                return MethodResult.ResultWithError(ex.Message);
            }


        }
        public async Task<MethodResult> InsertItemAsync(TModel model, List<string> lstFielNotmap = null)
        {
            using (IDbConnection db = GetOpenConnection())
            {
                Dictionary<string, object> dataUpdate = new Dictionary<string, object>();
                dataUpdate = _actionGeneral.GetAttribute<TModel>(model, true, lstFielNotmap);
                // var type = fields[i].GetType();
                var datarkey = dataUpdate.Select(x => x.Key).ToArray();
                var datarValue = datarkey.Select(x =>
                {
                    x = "@" + x;
                    return x;
                }).ToList();

                string sqlQuery = $"INSERT INTO {_tableName} ({string.Join(',', datarkey) }) VALUES({string.Join(", ", datarValue)})";

                int rowsAffected = await db.ExecuteAsync(sqlQuery, dataUpdate);
            }
            return MethodResult.ResultWithSuccess();
        }
        public async Task<MethodResult<TModel>> getDataIDAsync(string ID)
        {
            try
            {
                using (var conn = GetOpenConnection())
                {
                    var sql = $"SELECT TOP(1) * FROM {_tableName} WHERE ID = @code";
                    var parameters = new DynamicParameters();
                    parameters.Add("@code", ID, DbType.String);
                    //  var item = conn.QueryFirstOrDefault<TModel>(sql, parameters);
                    var item = await conn.QueryFirstOrDefaultAsync<TModel>(sql, parameters);

                    if (item == null)
                    {
                        return MethodResult<TModel>.ResultWithNotFound();
                    }

                    return MethodResult<TModel>.ResultWithData(item);

                }
            }
            catch (Exception e)
            {
                LogData.LogErr($"{DateTime.Now.ToString("dd/MM/yyyy HH:mm:ss")} :Lỗi lấy bản ghi từ {_tableName}", e.Message);
                return MethodResult<TModel>.ResultWithError(e.Message);

            }

        }
        public async Task<MethodResult<TModel>> getDataID(int ID)
        {
            try
            {
                using (var conn = GetOpenConnection())
                {
                    var sql = $"SELECT TOP(1) * FROM {_tableName} WHERE ID = @code";
                    var parameters = new DynamicParameters();
                    parameters.Add("@code", ID, DbType.String);
                    //  var item = conn.QueryFirstOrDefault<TModel>(sql, parameters);
                    //var item = conn.QueryFirstOrDefault<TModel>(sql, parameters);
                    var item = await conn.QueryFirstOrDefaultAsync<TModel>(sql, parameters);

                    if (item == null)
                    {
                        return MethodResult<TModel>.ResultWithNotFound();
                    }

                    return MethodResult<TModel>.ResultWithData(item);

                }
            }
            catch(Exception e)
            {
               
                LogData.LogErr($"{DateTime.Now.ToString("dd/MM/yyyy HH:mm:ss")}: lấy bản ghi từ {_tableName}", e.Message);
                return MethodResult<TModel>.ResultWithError(e.Message);
            }
           
        }
        public async Task<MethodResult<List<TModel>>> GetListAll()
        {
            using (var conn = GetOpenConnection())
            {
                try
                {
                    string getList = $"select * from {_tableName}";
                    List<TModel> listItem = (await conn.QueryAsync<TModel>(getList)).ToList();
                    return MethodResult<List<TModel>>.ResultWithData(listItem);
                }
                catch (Exception e)
                {
                    LogData.LogErr($"{DateTime.Now.ToString("dd/MM/yyyy HH:mm:ss")}: lấy hết từ {_tableName}", e.Message);

                    return MethodResult<List<TModel>>.ResultWithError(e.ToString());
                }
            }

        }
        public async Task<IMethodResult> AddMany(List<TModel> models)
        {
            try
            {
                using (var conn = GetOpenConnection())
                {
                    await conn.BulkActionAsync(x => x.BulkInsert(models));
                }
                return MethodResult.ResultWithSuccess();
            }
            catch(Exception e)
            {
                LogData.LogErr($"{DateTime.Now.ToString("dd/MM/yyyy HH:mm:ss")}: thêm nhiều {_tableName}", e.Message);
                return MethodResult.ResultWithError(e.ToString());
            }
           
        }

        public async Task<MethodResult<List<TModel>>> GetList(baseQuery queryData)
        {
            using (var conn = GetOpenConnection())
            {
                try
                {
                    string getList = buildQuery(queryData);
                    List<TModel> listItem = (await conn.QueryAsync<TModel>(getList)).ToList();
                    return MethodResult<List<TModel>>.ResultWithData(listItem);
                }
                catch (Exception e)
                {
                    LogData.LogErr($"{DateTime.Now.ToString("dd/MM/yyyy HH:mm:ss")}: lấy danh sách {_tableName}", e.Message);

                    return MethodResult<List<TModel>>.ResultWithError(e.ToString());
                }
            }
        }

        public string buildQuery(baseQuery queryData)
        {
            string fieldGet = " *";
            //trường dữ liệu lấy ra
            if (queryData.listField != null && queryData.listField.Any())
            {
                fieldGet = " " + string.Join(", ", queryData.listField);
            }
            //có sắp xếp hay k
            string ORDER = "";
            if (queryData.isSortAsc.HasValue && !string.IsNullOrEmpty(queryData.FieldSort))
            {
                //Quocgia, KhachhangID
                ORDER = $" ORDER BY {queryData.FieldSort}" + (queryData.isSortAsc.Value ? " ASC" : " DESC");
            }
            //lấy số bản ghi 
            string TOP = "";
            string TakeAndSkip = "";

            if (queryData.NumberRecord > 0 || queryData.pageSize > 0)
            {// take và skip bản ghi
                if (queryData.page > 1)
                {
                    TakeAndSkip = $" OFFSET {(queryData.page - 1) * (queryData.NumberRecord > 0 ? queryData.NumberRecord : queryData.pageSize)} ROWS  FETCH NEXT {queryData.NumberRecord} ROWS ONLY";
                }
                else
                    TOP = $" TOP({queryData.NumberRecord})";
            }
            //câu điều kiện truy vấn:
            if (!string.IsNullOrEmpty(queryData.buildQuery))
            {
                queryData.buildQuery = " WHERE " + queryData.buildQuery;
            }
            else
            {
                queryData.buildQuery = "";
            }
            string getList = $"select{TOP}{fieldGet} from {_tableName.Replace("Entity", "")} {queryData.buildQuery}{ORDER}{TakeAndSkip}";
            return getList;
        }

        public async Task<MethodResult> Approved(string id)
        {
            try
            {
                DynamicParameters dataUpdate = new DynamicParameters();

                dataUpdate.Add("ID", id);

                using (IDbConnection db = GetOpenConnection())
                {
                    List<string> sqlStr = new List<string>();

                    string sqlQuery = $"UPDATE {_tableName} SET isShow='true' where ID = @ID";

                    int rowsAffected = await db.ExecuteAsync(sqlQuery, dataUpdate);
                }
                return MethodResult.ResultWithSuccess();
            }
            catch (Exception ex)
            {
                LogData.LogErr($"{DateTime.Now.ToString("dd/MM/yyyy HH:mm:ss")}: Duyệt {_tableName}", ex.Message);

                return MethodResult.ResultWithError(ex.Message);
            }
        }

        public async Task<MethodResult> Denied(string id)
        {
            try
            {
                DynamicParameters dataUpdate = new DynamicParameters();

                dataUpdate.Add("ID", id);

                using (IDbConnection db = GetOpenConnection())
                {
                    List<string> sqlStr = new List<string>();

                    string sqlQuery = $"UPDATE {_tableName} SET isShow='false' where ID = @ID";

                    int rowsAffected = await db.ExecuteAsync(sqlQuery, dataUpdate);
                }
                return MethodResult.ResultWithSuccess();
            }
            catch (Exception ex)
            {
                LogData.LogErr($"{DateTime.Now.ToString("dd/MM/yyyy HH:mm:ss")}: Hủy duyệt {_tableName}", ex.Message);

                return MethodResult.ResultWithError(ex.Message);
            }
        }
    }
}

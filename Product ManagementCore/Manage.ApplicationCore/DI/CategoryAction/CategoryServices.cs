using Dapper;
using EFDataBase.Models.entities;
using Manage.ApplicationCore.baseRepo;
using Manage.ApplicationCore.ItemShare;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Manage.ApplicationCore.DI.CategoryAction
{
    public class CategoryServices : BaseReposServices<Category>, ICategory
    {
        public CategoryServices(Microsoft.Extensions.Configuration.IConfiguration configuration, IActionGeneral IActionGeneral) : base(configuration, IActionGeneral)
        {
        }
        public string BuildCauDieuKien(CategoryQuery OrderQuery)
        {
            List<string> cauDieuKienAND = new List<string>();
            List<string> cauDieuKienOr = new List<string>();
            if (!string.IsNullOrEmpty(OrderQuery.keyword))
            {
                if (!string.IsNullOrEmpty(OrderQuery.listFieldSearch))
                {
                    cauDieuKienOr = new List<string>();
                    var Lfield = OrderQuery.listFieldSearch.Split(',');
                    foreach (var item in Lfield)
                    {
                        cauDieuKienOr.Add($"{item} LIKE N'%{OrderQuery.keyword}%'");
                    }
                    cauDieuKienAND.Add(string.Join(" OR ", cauDieuKienOr));
                }
            }
            if (OrderQuery.FormDate.HasValue)
            {
                //CREATEDATE >'2022-06-08' AND CREATEDATE<'2022-06-14'
                cauDieuKienAND.Add($"CREATEDATE > '{OrderQuery.FormDate.Value.ToString("yyyy-MM-dd")}'");

            }
            if (OrderQuery.ToDate.HasValue)
            {

                cauDieuKienAND.Add($"CREATEDATE < '{OrderQuery.ToDate.Value.ToString("yyyy-MM-dd")}'");
            }

            return string.Join(" AND ", cauDieuKienAND);
        }
        public async Task<MethodResult<List<Category>>> GetListEntity(CategoryQuery queryData)
        {
            using (var conn = GetOpenConnection())
            {

                try
                {
                    if (queryData.listField == null || queryData.listField.Count() == 0)
                    {

                        queryData.listField = new List<string>() { "Name", "Created", "CategoryId", "Description","Id" };
                    }
                    string getList = buildQuery(queryData);

                    string queryCount = "";
                    if (!string.IsNullOrEmpty(queryData.buildQuery))
                        queryCount = $" WHERE {queryData.buildQuery}";

                    var count = await conn.QueryAsync<int>($"SELECT COUNT(*) FROM {_tableName}{queryCount}");
                    List<Category> listItem = (await conn.QueryAsync<Category>(getList)).ToList();

                    return MethodResult<List<Category>>.ResultWithData(listItem, "Thành công!", count.FirstOrDefault());
                }
                catch (Exception e)
                {
                    LogData.LogErr($"Lỗi lấy danh sách {_tableName}", e.Message);
                    return MethodResult<List<Category>>.ResultWithError(e.ToString());
                }

            }

        }
     
    }
}

using Manage.ApplicationCore.baseRepo;
using System;
using System.Collections.Generic;
using System.Text;
using EFDataBase.Models.entities;
using Manage.ApplicationCore.ItemShare;
using System.Threading.Tasks;
using System.Diagnostics;
using System.Linq;
using Dapper;
using EProductMain.Data.Entities;

namespace Manage.ApplicationCore.DI.ProductAction
{
    public class ProductServices : BaseReposServices<Product>, IProduct
    {
        public ProductServices(Microsoft.Extensions.Configuration.IConfiguration configuration, IActionGeneral IActionGeneral) : base(configuration, IActionGeneral)
        {
        }
        public string BuildCauDieuKien(ProductQuery loaiMenuQuery)
        {
            List<string> cauDieuKienAND = new List<string>();
            List<string> cauDieuKienOr = new List<string>();
            if (!string.IsNullOrEmpty(loaiMenuQuery.keyword))
            {
                if (!string.IsNullOrEmpty(loaiMenuQuery.listFieldSearch))
                {
                    cauDieuKienOr = new List<string>();
                    var Lfield = loaiMenuQuery.listFieldSearch.Split(',');
                    foreach (var item in Lfield)
                    {
                        cauDieuKienOr.Add($"{item} LIKE N'%{loaiMenuQuery.keyword}%'");
                    }
                    cauDieuKienAND.Add(string.Join(" OR ", cauDieuKienOr));
                }
            }
            if (loaiMenuQuery.FormDate.HasValue)
            {
                //CREATEDATE >'2022-06-08' AND CREATEDATE<'2022-06-14'
                cauDieuKienAND.Add($"CREATEDATE > '{loaiMenuQuery.FormDate.Value.ToString("yyyy-MM-dd")}'");

            }
            if (loaiMenuQuery.ToDate.HasValue)
            {

                cauDieuKienAND.Add($"CREATEDATE < '{loaiMenuQuery.ToDate.Value.ToString("yyyy-MM-dd")}'");
            }

            return string.Join(" AND ", cauDieuKienAND);
        }

        public async Task<MethodResult<bool>> CheckQuantity(int Id, int Amount)
        {
            using (var conn = GetOpenConnection())
            {

                try
                {
                    var count = await conn.QueryAsync<int>($"SELECT COUNT(*) FROM {_tableName} Where Quantity >={Amount} AND Id={Id}");
                    if (count!= null && count.Any() && count.FirstOrDefault() > 0)
                    {
                        return MethodResult<bool>.ResultWithData(true,"Thành công!");
                    }
                    else
                    {
                        return MethodResult<bool>.ResultWithData(false, "Số lượng trong kho không đủ!");
                    }
                    
                }
                catch(Exception e)
                {
                    return MethodResult<bool>.ResultWithError($"Lỗi: {e.Message}");
                }
                 
                //throw new NotImplementedException();
            }
           
        }

        public async Task<MethodResult<List<Product>>> GetListEntity(ProductQuery queryData)
        {
            using (var conn = GetOpenConnection())
            {
                var stopwatch = new Stopwatch();
                stopwatch.Start();
                try
                {
                    if (queryData.listField == null || queryData.listField.Count() == 0)
                    {

                        queryData.listField = new List<string>() { "Name", "Created", "CategoryId", "Description", "Price", "Quantity" };
                    }
                    string getList = buildQuery(queryData);

                    string queryCount = "";
                    if (!string.IsNullOrEmpty(queryData.buildQuery))
                        queryCount = $" WHERE {queryData.buildQuery}";

                    var count = await conn.QueryAsync<int>($"SELECT COUNT(*) FROM {_tableName}{queryCount}");
                    List<Product> listItem = (await conn.QueryAsync<Product>(getList)).ToList();
                    stopwatch.Stop();
                    return MethodResult<List<Product>>.ResultWithData(listItem, "thêm mới thành công trong " + stopwatch.Elapsed, count.FirstOrDefault());
                }
                catch (Exception e)
                {
                    return MethodResult<List<Product>>.ResultWithError(e.ToString());
                }

            }

        }
    }
}

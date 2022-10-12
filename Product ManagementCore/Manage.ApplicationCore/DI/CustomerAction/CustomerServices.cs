using Dapper;
using EFDataBase.Models.entities;
using Manage.ApplicationCore.baseRepo;
using Manage.ApplicationCore.ItemShare;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Manage.ApplicationCore.DI.CustomerAction
{
    public class CustomerServices : BaseReposServices<Customer>, ICustomer
    {
        public CustomerServices(Microsoft.Extensions.Configuration.IConfiguration configuration, IActionGeneral IActionGeneral) : base(configuration, IActionGeneral)
        {
        }
        public string BuildCauDieuKien(CustomerQuery OrderQuery)
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
        public async Task<MethodResult<List<Customer>>> GetListEntity(CustomerQuery queryData)
        {
            using (var conn = GetOpenConnection())
            {

                try
                {
                    if (queryData.listField == null || queryData.listField.Count() == 0)
                    {

                        queryData.listField = new List<string>() { "Name", "Created", "Id", "Address" };
                    }
                    string getList = buildQuery(queryData);

                    string queryCount = "";
                    if (!string.IsNullOrEmpty(queryData.buildQuery))
                        queryCount = $" WHERE {queryData.buildQuery}";

                    var count = await conn.QueryAsync<int>($"SELECT COUNT(*) FROM {_tableName}{queryCount}");
                    List<Customer> listItem = (await conn.QueryAsync<Customer>(getList)).ToList();

                    return MethodResult<List<Customer>>.ResultWithData(listItem, "Thành công!", count.FirstOrDefault());
                }
                catch (Exception e)
                {
                    return MethodResult<List<Customer>>.ResultWithError(e.ToString());
                }

            }

        }
     
    }
}

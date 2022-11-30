using Dapper;
using EFDataBase.Models.entities;
using EProductMain.Data.Entities;
using Manage.ApplicationCore.baseRepo;
using Manage.ApplicationCore.ItemShare;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Manage.ApplicationCore.DI.OrderAction
{
    public class OrdersServices : BaseReposServices<OrderCys>, IOrder
    {
        public OrdersServices(Microsoft.Extensions.Configuration.IConfiguration configuration, IActionGeneral IActionGeneral) : base(configuration, IActionGeneral)
        {
        }
        public string BuildCauDieuKien(OrdersQuery OrderQuery)
        {
            List<string> cauDieuKienAND = new List<string>();
            List<string> cauDieuKienOr = new List<string>();
            if(OrderQuery!= null)
            {
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
            }
          

            return string.Join(" AND ", cauDieuKienAND);
        }
        public async Task<MethodResult<List<OrderCys>>> GetListEntity(OrdersQuery queryData)
        {
            using (var conn = GetOpenConnection())
            {

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
                    List<OrderCys> listItem = (await conn.QueryAsync<OrderCys>(getList)).ToList();

                    return MethodResult<List<OrderCys>>.ResultWithData(listItem, "Thành công!", count.FirstOrDefault());
                }
                catch (Exception e)
                {
                    return MethodResult<List<OrderCys>>.ResultWithError(e.ToString());
                }

            }

        }
        public async Task<MethodResult<List<OrderJson>>> GetListJson(OrdersQuery queryData)
        {
            Order Order = new Order();
            using (var conn = GetOpenConnection())
            {

                try
                {

                    var sqlCOut = @"select COUNT(*)
                        from OrderCys as Ord 
                        inner join ProductCy as P on p.id = Ord.ProductId
                        inner join CategoryCy as c on p.CategoryId = c.Id
                        inner join Customer as cus on cus.Id = Ord.CustomerId";
                    string queryCount = "";
                    if (queryData.IDCate > 0)
                    {
                        queryCount = $" WHERE c.Id= {queryData.IDCate}";
                    }
                    //có sắp xếp hay k
                    string ORDER = "";
                    if (queryData.isSortAsc.HasValue && !string.IsNullOrEmpty(queryData.FieldSort))
                    {
                        
                        ORDER = $" ORDER BY {queryData.FieldSort}" + (queryData.isSortAsc.Value ? " ASC" : " DESC");
                    }
                    else
                    {
                        ORDER = $" ORDER BY Id DESC";
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
                    var sql = @" select " + TOP + @" Ord.Id, Ord.OrderDate, Ord.Amount, p.Name as N'productName' , c.Name as N'CateGoryName',
                        cus.Name as N'CustomerName'
                        from OrderCys as Ord 
                        inner join ProductCy as P on p.id = Ord.ProductId
                        inner join CategoryCy as c on p.CategoryId = c.Id
                        inner join Customer as cus on cus.Id = Ord.CustomerId";
                    //string getList = buildQuery(queryData);
                    var count = await conn.QueryAsync<int>(sqlCOut + queryCount);
                    List<OrderJson> listItem = (await conn.QueryAsync<OrderJson>(sql+ queryCount + ORDER + TakeAndSkip)).ToList();
                    return MethodResult<List<OrderJson>>.ResultWithData(listItem, "thêm mới thành công !", count.FirstOrDefault());
                }
                catch (Exception e)
                {
                    return MethodResult<List<OrderJson>>.ResultWithError(e.ToString());
                }

            }

        }
        public async Task<MethodResult<List<OrderJson>>> GetListJson2(OrdersQuery queryData)
        {
            Order Order = new Order();
            using (var conn = GetOpenConnection())
            {

                try
                {

                    var sql = @"select Ord.Id,p.id as N'ProductId', cus.Id as N'CustomerId' , Ord.OrderDate, Ord.Amount, p.Name, c.Name as N'CateGoryName', cus.Name 
                from OrderCys as Ord 
                inner join ProductCy as P on p.id = Ord.ProductId
                inner join CategoryCy as c on p.CategoryId = c.Id
                inner join Customer as cus on cus.Id = Ord.CustomerId";
                    var Orders = await conn.QueryAsync<OrderJson, ProductCy, Customer, OrderJson>
                        (sql, (Orders, product, Customer) =>
                        {
                           // Orders.Product = product;
                           // Orders.Customer = Customer;
                            return Orders;
                        },
                    //CateGoryName
                    splitOn: "ProductId,CustomerId");
                    var listItem = Orders.ToList();
                    return MethodResult<List<OrderJson>>.ResultWithData(listItem, "truy vấn dữ liệu thành công !");
                }
                catch (Exception e)
                {
                    return MethodResult<List<OrderJson>>.ResultWithError(e.ToString());
                }

            }

        }

    }
}

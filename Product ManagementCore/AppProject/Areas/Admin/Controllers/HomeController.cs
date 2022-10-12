using AppProject.Areas.Admin.Models;
using EFDataBase.Models.entities;
using Manage.ApplicationCore.DI.CategoryAction;
using Manage.ApplicationCore.DI.CustomerAction;
using Manage.ApplicationCore.DI.OrderAction;
using Manage.ApplicationCore.DI.ProductAction;
using Manage.ApplicationCore.ItemShare;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AppProject.Areas.Admin.Controllers
{
    [Area("Admin")]
    public class HomeController : Controller
    {
        IOrder _IOrder;
        IProduct _IProduct;
        ICustomer _ICustomer;
        ICategory _ICategory;

        public HomeController(IOrder IOrder, IProduct IProduct, ICustomer customer, ICategory category)
        {
            _IOrder = IOrder;
            _IProduct = IProduct;
            _ICustomer = customer;
            _ICategory = category;
        }
        public async Task< IActionResult> Index()
        {
            var LCate =await _ICategory.GetListEntity(new CategoryQuery() { listField = new List<string>() { "Id", "Name" } });
            return View(LCate.data);
        }
        [HttpPost]
        public async Task<IActionResult> FormAdd()
        {
            string ID = string.Empty;

            try
            {
                ID = Request.Form["ItemID"];

            }
            catch { }

            ViewBag.Custom = (await _ICustomer.GetListEntity(new CustomerQuery() { listField = new List<string>() { "Id", "Name" } })).data;
            ViewBag.Product = (await _IProduct.GetListEntity(new ProductQuery() { listField = new List<string>() { "Id", "Name" } })).data;
            Orders data = new Orders();
            if (!string.IsNullOrEmpty(ID))
            {
                var dataresult = await _IOrder.getDataIDAsync(ID);
                if (dataresult.success && dataresult.data != null)
                {
                    data = dataresult.data;
                }
            }
            ViewBag.jsondata = JsonConvert.SerializeObject(data);

            return PartialView("_FormAdd", data);
        }
        [HttpPost]
        public async Task<IActionResult> FormView()
        {

            string ID = string.Empty;

            try
            {
                ID = Request.Form["ItemID"];

            }
            catch { }

            Orders data = new Orders();
            if (!string.IsNullOrEmpty(ID))
            {
                var dataresult = await _IOrder.getDataIDAsync(ID);
                if (dataresult.success)
                {
                    data = dataresult.data;
                }
            }
            return PartialView("_FormView", data);
        }

        [HttpGet]
        public async Task<MethodResult> Delete(string ID)
        {
            return await _IOrder.Delete(ID);
        }
        [HttpPost]
        public async Task<MethodResult<bool>> CheckQuantityData(int Amount, int IdPr)
        {

            MethodResult<bool> result = await _IProduct.CheckQuantity(IdPr, Amount);
          
            return result;
        }
        [HttpPost]
        public async Task<MethodResult> AddOrders( [FromBody] Orders dataInPut)
        {
            MethodResult result = new MethodResult();
            
           if(dataInPut != null)
            {
                if (dataInPut.Id <= 0)
                {// caajp nhat lai so luong cuaproduct
                    var datap = (await _IProduct.getDataID(dataInPut.ProductId.Value)).data;
                    await _IProduct.UpdateOneFieldAsync("Quantity", datap.Quantity - dataInPut.Amount, dataInPut.ProductId.Value);
                    result = await _IOrder.AddAsync(dataInPut);
                    
                }
                else
                {// caajp nhat lai so luong cuaproduct
                    var datap = (await _IProduct.getDataID(dataInPut.ProductId.Value)).data;
                    var dataOr= (await _IOrder.getDataID(dataInPut.Id)).data;
                    await _IProduct.UpdateOneFieldAsync("Quantity", datap.Quantity + dataOr.Amount- dataInPut.Amount, dataInPut.ProductId.Value);
                    result = await _IOrder.EditAsync(dataInPut);
                }
            }
            else
            {

            }

            return result;
        }
        [HttpGet]
        public async Task<MethodResult> UpdateOneOrField(int ID)
        {
            return await _IOrder.UpdateOneFieldAsync("TEN", "Thuydt da sửa", ID);
        }
        [HttpPost]
        //public async Task<JsonGridD<List<TBLOAIMENUEntity>>>  GetListLoaiMenu([FromBody] LoaiMenuQuery loaiMenuQuery)
        public async Task<JsonResult> GetList([FromBody] OrdersQuery OrderQuery)
        {
            // LoaiMenuQuery loaiMenuQuery = JsonConvert.DeserializeObject<LoaiMenuQuery>(queryJson);

            OrderQuery.buildQuery = _IOrder.BuildCauDieuKien(OrderQuery);

            var data = await _IOrder.GetListJson(OrderQuery);

            JsonGridD<List<OrderJson>> dataReturn = new JsonGridD<List<OrderJson>>(data.data, data.total, OrderQuery.NumberRecord, OrderQuery.curentPage);

            return Json(dataReturn);
        }
    }
    
}

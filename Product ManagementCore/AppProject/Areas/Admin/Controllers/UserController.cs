using AppProject.Areas.Admin.Models;
using EFDataBase.Models.entities;
using Manage.ApplicationCore.DI.UserAction;
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
    public class UserController : Controller
    {
        IUser _IUser;


        public UserController(IUser IUser)
        {
            _IUser = IUser;

        }
        public IActionResult Index()
        {

            return View();
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
            Luser data = new Luser();
            if (!string.IsNullOrEmpty(ID))
            {
                var dataresult = await _IUser.getDataIDAsync(ID);
                if (dataresult.success && dataresult.data != null)
                {
                    data = dataresult.data;
                }
            }
            ViewBag.jsondata = JsonConvert.SerializeObject(data);

            return PartialView("_FormAdd", data);
        }



        [HttpPost]
        public async Task<MethodResult> AddLUser([FromBody] Luser dataInPut)
        {

            try
            {
                if (dataInPut != null)
                {
                    if (dataInPut.Id <= 0)
                    {
                        dataInPut.PassWord = Services.getHash(dataInPut.PassWord);
                        return await _IUser.AddAsync(dataInPut, true, "LoginName", dataInPut.LoginName);

                    }
                    else
                    {
                        dataInPut.PassWord = Services.getHash(dataInPut.PassWord);
                        return await _IUser.EditAsync(dataInPut);
                    }
                }
                else
                {
                    return MethodResult.ResultWithError("Dữ liệu không hợp lệ!");
                }
            }
            catch(Exception e)
            {
                return MethodResult.ResultWithError(e.Message);
            }
           

             
        }

        [HttpPost]    
        public async Task<JsonResult> GetList([FromBody] UserQuery UserQuery)
        {

            var data = await _IUser.GetList(UserQuery);

            JsonGridD<List<Luser>> dataReturn = new JsonGridD<List<Luser>>(data.data, data.total, UserQuery.NumberRecord, UserQuery.curentPage);

            return Json(dataReturn);
        }
    }

}

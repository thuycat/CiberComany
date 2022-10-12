using AppProject.Areas.Admin.Models;
using EFDataBase.Models.entities;
using Manage.ApplicationCore.DI.UserAction;
using Manage.ApplicationCore.ItemShare;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AppProject.Controllers
{
    public class LoginController : Controller
    {
        IUser _IUser;


        public LoginController(IUser IUser)
        {
            _IUser = IUser;

        }
        public IActionResult Index()
        {
            return View("Login");
        }
        [HttpPost]
        public async Task<MethodResult> LoginPost(string Email, string Password)
        {         
            Password = Services.getHash(Password);
            
            var record = await _IUser.GetUserByAcount(Email, Password);

            if (record.success && record.data != null)
            {
                
                //dang nhạp thành công

                HttpContext.Session.SetString("NameLogin", record.data.Name );
                HttpContext.Session.SetString("CurentUser", JsonConvert.SerializeObject(record.data) );

                return MethodResult.ResultWithSuccess();
                    //Redirect("/Admin/Home");
            }
            else
            {
                return MethodResult.ResultWithNotFound();
            }
        }
    }
}

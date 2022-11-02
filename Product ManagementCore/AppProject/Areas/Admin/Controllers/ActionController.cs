using EFDataBase.Models.entities;
using EProductMain.Data.Entities;
using Manage.ApplicationCore.ItemShare;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AppProject.Areas.Admin.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ActionController : ControllerBase
    {
        [HttpPost]
        [Route("AddOrders")]
        public MethodResult AddOrders([FromBody] Order dataInPut)
        {
            MethodResult result = new MethodResult();
            if (dataInPut != null)
            {
                if (dataInPut.Id <= 0)
                {

                    //result = await _IOrder.AddAsync(dataInPut);
                }
                else
                {
                    // result = await _IOrder.EditAsync(dataInPut);
                }
            }
            else
            {

            }

            return result;
        }
    }
   
}

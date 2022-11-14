using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AppProject.Controllers
{
    [Authorize]
    public class MyBlogController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}

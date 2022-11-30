using EProductMain.Data.Entities;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AppProject.Middlewares
{
    // You may need to install the Microsoft.AspNetCore.Http.Abstractions package into your project
    public class Middleware
    {
        private readonly RequestDelegate _next;
        //private readonly SignInManager<AppUser> _SignInManager;
      //  private readonly UserManager<AppUser> _UserManager;

        public Middleware(RequestDelegate next/*, SignInManager<AppUser> SignInManager*/)
        {
            _next = next;
          //  _SignInManager = SignInManager;
          //  _UserManager = UserManager;
        }

        public Task Invoke(HttpContext httpContext)
        {

            //lấy đường dẫn url 
            var path = httpContext.Request.Path.ToString();
            //nếu path bắt đầu bằng chữ /Admin thì kiểm tra lại xem sesion đã tồn tại chưa
            //nếu chưa tồn tại thì di chuyển đến trang login
            path = path.ToLower();
            if (path != "" && path.StartsWith("/admin"))
            {
                if (httpContext.Session.GetString("CurentUser") == null)
                {
                    //di chuyển đến trang login
                    httpContext.Response.Redirect("/Login");
                }
            }
            //if (path != "" && path.StartsWith("/Login"))
            //{
                //using (var scope = app.ApplicationServices.CreateScope())
                //{
                //    //Resolve ASP .NET Core Identity with DI help
                //    var userManager = (UserManager<AppUser>)scope.ServiceProvider.GetService(typeof(UserManager<AppUser>));
                //    // do you things here
                //}
            //    if (_SignInManager.IsSignedIn(httpContext.User))
            //    {
            //        //di chuyển đến trang login
            //        httpContext.Response.Redirect("/");
            //    }
            //}
            return _next(httpContext);
        }
    }

    // Extension method used to add the middleware to the HTTP request pipeline.
    public static class MiddlewareExtensions
    {
        public static IApplicationBuilder UseMiddleware(this IApplicationBuilder builder)
        {
            return builder.UseMiddleware<Middleware>();
        }
    }
}

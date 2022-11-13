using EFDataBase.Models.entities;
using Manage.ApplicationCore.DI;
using Manage.ApplicationCore.DI.CategoryAction;
using Manage.ApplicationCore.DI.CustomerAction;
using Manage.ApplicationCore.DI.OrderAction;
using Manage.ApplicationCore.DI.ProductAction;
using Manage.ApplicationCore.DI.UserAction;
using Manage.ApplicationCore.ItemShare;
using Microsoft.AspNetCore.Identity.UI.Services;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AppProject.Configurations
{
    public static class ServicesConfiguration
    {
        public static void AddMyServices(this IServiceCollection services)
        {

            services.AddScoped<IOrder, OrdersServices>();
            services.AddScoped<IProduct, ProductServices>();
            services.AddScoped<IActionGeneral, ActionGenneralServices>();
            services.AddScoped<ICustomer, CustomerServices>();
            services.AddScoped<ICategory, CategoryServices>();
            services.AddScoped<IUser, UserServices>();
            //services.AddTransient<MailServices>();
            services.AddTransient<IEmailSender, SendMailService>();
            ////services.AddScoped<IViewRenderService, ViewRenderService>();
            //services.AddSingleton<IPermission, PermissionService>();
            //services.AddSingleton<ILoaiMenu, LoaiMenuService>();


        }
    }
}

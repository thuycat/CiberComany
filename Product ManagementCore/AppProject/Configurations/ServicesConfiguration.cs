using EFDataBase.Models.entities;
using Manage.ApplicationCore.DI;
using Manage.ApplicationCore.DI.CategoryAction;
using Manage.ApplicationCore.DI.CustomerAction;
using Manage.ApplicationCore.DI.OrderAction;
using Manage.ApplicationCore.DI.ProductAction;
using Manage.ApplicationCore.DI.UserAction;
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

            services.AddSingleton<IOrder, OrdersServices>();
            services.AddSingleton<IProduct, ProductServices>();
            services.AddSingleton<IActionGeneral, ActionGenneralServices>();
            services.AddSingleton<ICustomer, CustomerServices>();
            services.AddSingleton<ICategory, CategoryServices>();
            services.AddSingleton<IUser, UserServices>();
            ////services.AddScoped<IViewRenderService, ViewRenderService>();
            //services.AddSingleton<IPermission, PermissionService>();
            //services.AddSingleton<ILoaiMenu, LoaiMenuService>();


        }
    }
}

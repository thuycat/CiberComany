using EFDataBase.Models.entities;
using EProductMain.Data.Entities;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Z.Dapper.Plus;

namespace AppProject.Configurations
{
    public static class InjectionDataContextExtension
    {
        public static void DepedencyInjectionDatacontext(this IServiceCollection services, IConfiguration configuration)
        {
            DapperPlusManager.Entity<Order>().Table("Orders").Identity(x => x.Id);
            DapperPlusManager.Entity<Product>().Table("Product").Identity(x => x.Id);
            DapperPlusManager.Entity<Luser>().Table("Luser").Identity(x => x.Id);
            DapperPlusManager.Entity<Customer>().Table("Customer").Identity(x => x.Id);
            DapperPlusManager.Entity<Category>().Table("Category").Identity(x => x.Id);
            //DapperPlusManager.Entity<BIENMUCHOSO>().Table("BIENMUCHOSO").Identity(x => x.ID);
           
        }
    }
}

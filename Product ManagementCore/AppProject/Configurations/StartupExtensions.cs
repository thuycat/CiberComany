using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using AutoMapper;

namespace AppProject.Configurations
{
    public static class StartupExtensions
    {
        //dang ki su dung dich vu trong project
        public static void AddCustomService(this IServiceCollection services, IConfiguration configuration)
        {
            
            services.DepedencyInjectionDatacontext(configuration);
            // Service
            services.AddAutoMapper(typeof(Startup));
        }
    }
}

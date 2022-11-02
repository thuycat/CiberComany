using AppProject.Configurations;
using AppProject.Middlewares;
using EFDataBase.EF;
using EFDataBase.Models.entities;
using EProductMain.Data.Entities;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

namespace AppProject
{
    public class Startup
    {
        public IWebHostEnvironment Environment { get; }
        public IConfiguration Configuration { get; }

        public Startup(IConfiguration configuration, IWebHostEnvironment environment)
        {
            Configuration = configuration;
            Environment = environment;

        }



        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddDistributedMemoryCache();
            services.AddSession();
            services.AddMvc();
            services.AddControllersWithViews();
            services.AddRazorPages();
            services.AddMyServices();
            services.AddCustomService(Configuration);
            //đăng ýk Identity
            services.AddIdentity<AppUser, AppRole>()
                .AddEntityFrameworkStores<CyBerDBContext>()
                .AddDefaultTokenProviders();
          //var  _connectionString = Configuration.GetConnectionString("SqlConnectionString");
          // services.AddDbContext<CIBERCOMANYContext>(option => option.UseSqlServer(_connectionString));
          //git branch=> kiểm tra xem đang ở bran nào
          //git branch -r => kiểm tra các bran kể cả bran trên  remote
          //git clone=> lấy source code về
          //git status: ccheck file nào còn check out
          //chuyển nhánh: git checkout BranName
          // tạo bran: git bran newbranName
          // Identity:
          // Authentication: xác định danh tính,login logout..
          //Authorization: xac định quyền truy cập
          //-cung cấp quarn lý use: sign up, user, role....






        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }
            //session
            app.UseSession();
            app.UseMiddleware<Middleware>();
            
            app.UseHttpsRedirection();
            app.UseStaticFiles();

            app.UseRouting();
            // authen
            app.UseAuthentication();
            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllerRoute(
                    name: "areas",
                    pattern: "{area:exists}/{controller=Home}/{action=Index}/{id?}");

                endpoints.MapControllerRoute(
                    name: "default",
                    pattern: "{controller=Login}/{action=Index}/{id?}");
                endpoints.MapRazorPages();
            });
            //IdentityUser user;
            //IdentityDbContext context; 
        }
    }
}
//magration
// dotnet ef magrations list=> em danh sách magration
//dotnet ef magrations add Migrationname=> them moi migrations => Add-Migration NameMi
//Remove-Migration=> xóa migration mới nhất
//Rollback Migration:update-database –TargetMigration
//PM> update-database -TargetMigration:SchoolDB-v1
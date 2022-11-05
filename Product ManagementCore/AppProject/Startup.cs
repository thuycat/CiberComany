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
using System;

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
            services.AddDbContext<CyBerDBContext>();
            //services.AddIdentity<AppUser, AppRole>()
            //    .AddEntityFrameworkStores<CyBerDBContext>()
            //    .AddDefaultTokenProviders();
            services.AddDefaultIdentity<AppUser>()
               .AddEntityFrameworkStores<CyBerDBContext>()
               .AddDefaultTokenProviders();
           
            //services.AddIdentity<IdentityUser, IdentityRole>()
            //                .AddEntityFrameworkStores<AuthDBContext>()
            //                .AddDefaultTokenProviders();
            // Truy cập IdentityOptions
            services.Configure<IdentityOptions>(options =>
            {
                // Thiết lập về Password
                options.Password.RequireDigit = true; // Không bắt phải có số
                options.Password.RequireLowercase = true; // Không bắt phải có chữ thường
                options.Password.RequireNonAlphanumeric = true; // Không bắt ký tự đặc biệt
                options.Password.RequireUppercase = true; // Không bắt buộc chữ in
                options.Password.RequiredLength = 3; // Số ký tự tối thiểu của password
                options.Password.RequiredUniqueChars = 1; // Số ký tự riêng biệt

                // Cấu hình Lockout - khóa user
                options.Lockout.DefaultLockoutTimeSpan = TimeSpan.FromMinutes(5); // Khóa 5 phút
                options.Lockout.MaxFailedAccessAttempts = 5; // Thất bại 5 lầ thì khóa
                options.Lockout.AllowedForNewUsers = true;

                // Cấu hình về User.
                options.User.AllowedUserNameCharacters = // các ký tự đặt tên user
                    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-._@+";
                options.User.RequireUniqueEmail = true;  // Email là duy nhất

                // Cấu hình đăng nhập.
                options.SignIn.RequireConfirmedEmail = true;            // Cấu hình xác thực địa chỉ email (email phải tồn tại)
                options.SignIn.RequireConfirmedPhoneNumber = false;     // Xác thực số điện thoại
                //Identity/Account/Login
                //Identity/Account/Manage

            });
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
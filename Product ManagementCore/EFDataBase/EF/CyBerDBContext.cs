
using EFDataBase.Configurations;
using EProductMain.Data.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace EFDataBase.EF
{
    public class CyBerDBContext : DbContext
    {
        public CyBerDBContext(DbContextOptions options) : base(options)
        {

        }
       protected  override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfiguration(new AppConfigConfiguration());
            modelBuilder.ApplyConfiguration(new ProductConfiguration());
            modelBuilder.ApplyConfiguration(new ProductInCategoryConfiguration());
            modelBuilder.ApplyConfiguration(new CategoryConfiguration());
            modelBuilder.ApplyConfiguration(new CartConfiguration());
            modelBuilder.ApplyConfiguration(new CategoryTranslationConfiguration());
            modelBuilder.ApplyConfiguration(new ContactConfiguration());
            modelBuilder.ApplyConfiguration(new OrderConfiguration());
            modelBuilder.ApplyConfiguration(new LanguageConfiguration());
            modelBuilder.ApplyConfiguration(new OrderDetailConfiguration());
            modelBuilder.ApplyConfiguration(new ProductTranslationConfiguration());
            modelBuilder.ApplyConfiguration(new PromotionConfiguration());
            modelBuilder.ApplyConfiguration(new TransactionConfiguration());

        }

        public DbSet<Product> Products { get; set; }//r
        public DbSet<Category> Categories { get; set; }//r
        public DbSet<AppConfig> AppConfigs { get; set; }//r
        public DbSet<Cart> Carts { get; set; }//r
        public DbSet<CategoryTranslation> CategoryTranslations { get; set; }//r
        public DbSet<ProductInCategory> ProductInCategories { get; set; }//r
        public DbSet<Contact> Contacts { get; set; }//r
        public DbSet<Language> Languages { get; set; }//r
        public DbSet<Order> Orders { get; set; }//r
        public DbSet<OrderDetail> OrderDetails { get; set; }//rr
        public DbSet<ProductTranslation> ProductTranslations { get; set; }//r
        public DbSet<Promotion> Promotions { get; set; }//r
        public DbSet<Transaction> Transactions { get; set; }
     
     
        //public DbSet<Customer> Customers { get; set; }
    
        //public DbSet<MyOrder> MyOrders { get; set; }
 
    }
}

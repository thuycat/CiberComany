using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace EFDataBase.Models.entities
{
    public partial class CIBERCOMANYContext
        //: DbContext
    {
        public CIBERCOMANYContext()
        {
        }

        //public CIBERCOMANYContext(DbContextOptions<CIBERCOMANYContext> options)
        //    : base(options)
        //{
        //}

        //public virtual DbSet<Category> Category { get; set; }
        //public virtual DbSet<Customer> Customer { get; set; }
        //public virtual DbSet<Luser> Luser { get; set; }
        //public virtual DbSet<Orders> Orders { get; set; }
        //public virtual DbSet<Product> Product { get; set; }

        //protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        //{
        //    if (!optionsBuilder.IsConfigured)
        //    {
        //        //#warning To protect potentially sensitive information in your connection string,
        //        //you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
        //        optionsBuilder.UseSqlServer("Data Source=DESKTOP-EFJ3SED\\SQLEXPRESS;Initial Catalog=CIBERCOMANY;Persist Security Info=True;User ID=sa;Password=4910587");
        //    }
        //}

        //protected override void OnModelCreating(ModelBuilder modelBuilder)
        //{
        //    modelBuilder.Entity<Category>(entity =>
        //    {
        //        entity.Property(e => e.Id).HasColumnName("id");

        //        entity.Property(e => e.Created)
        //            .HasColumnName("created")
        //            .HasColumnType("datetime")
        //            .HasDefaultValueSql("(getdate())");

        //        entity.Property(e => e.Name).HasMaxLength(100);
        //    });

        //    modelBuilder.Entity<Customer>(entity =>
        //    {
        //        entity.Property(e => e.Id).HasColumnName("id");

        //        entity.Property(e => e.Created)
        //            .HasColumnName("created")
        //            .HasColumnType("datetime")
        //            .HasDefaultValueSql("(getdate())");

        //        entity.Property(e => e.Name).HasMaxLength(100);
        //    });

        //    modelBuilder.Entity<Luser>(entity =>
        //    {
        //        entity.ToTable("LUser");

        //        entity.Property(e => e.Id).HasColumnName("id");

        //        entity.Property(e => e.LoginName)
        //            .HasMaxLength(100)
        //            .IsUnicode(false);

        //        entity.Property(e => e.Name).HasMaxLength(100);
        //    });

        //    modelBuilder.Entity<Orders>(entity =>
        //    {
        //        entity.Property(e => e.Id).HasColumnName("id");

        //        entity.Property(e => e.CustomerId).HasColumnName("CustomerID");

        //        entity.Property(e => e.Name).HasMaxLength(100);

        //        entity.Property(e => e.OrderDate)
        //            .HasColumnType("datetime")
        //            .HasDefaultValueSql("(getdate())");

        //        entity.Property(e => e.ProductId).HasColumnName("ProductID");

        //        entity.HasOne(d => d.Customer)
        //            .WithMany(p => p.Orders)
        //            .HasForeignKey(d => d.CustomerId)
        //            .OnDelete(DeleteBehavior.SetNull)
        //            .HasConstraintName("Fk_OrdersWithCustomer");

        //        entity.HasOne(d => d.Product)
        //            .WithMany(p => p.Orders)
        //            .HasForeignKey(d => d.ProductId)
        //            .OnDelete(DeleteBehavior.SetNull)
        //            .HasConstraintName("Fk_OrdersWithProduct");
        //    });

        //    modelBuilder.Entity<Product>(entity =>
        //    {
        //        entity.Property(e => e.Id).HasColumnName("id");

        //        entity.Property(e => e.CategoryId).HasColumnName("CategoryID");

        //        entity.Property(e => e.Created)
        //            .HasColumnName("created")
        //            .HasColumnType("datetime")
        //            .HasDefaultValueSql("(getdate())");

        //        entity.Property(e => e.Description).HasColumnType("ntext");

        //        entity.Property(e => e.Name).HasMaxLength(100);

        //        entity.HasOne(d => d.Category)
        //            .WithMany(p => p.Product)
        //            .HasForeignKey(d => d.CategoryId)
        //            .OnDelete(DeleteBehavior.SetNull)
        //            .HasConstraintName("Fk_ProductWithCategory");
        //    });

        //    OnModelCreatingPartial(modelBuilder);
        //}

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}

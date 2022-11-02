using EProductMain.Data.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;

namespace EFDataBase.Configurations
{
    public class ProductInCategoryConfiguration : IEntityTypeConfiguration<ProductInCategory>
    {
        public void Configure(EntityTypeBuilder<ProductInCategory> builder)
        {
            builder.ToTable("ProductInCategories");
            builder.HasKey(x => new { x.CategoryId, x.ProductId});
            builder.HasOne(x => x.Product).WithMany(p => p.ProductInCategories)
                .HasForeignKey("ProductId")
                .OnDelete(DeleteBehavior.Cascade)
                .HasConstraintName("FK_ProductId_ProductInCategories");
            builder.HasOne(x => x.Category).WithMany(p => p.ProductInCategories)
                .HasForeignKey("CategoryId")
                .OnDelete(DeleteBehavior.Cascade)
                  .HasConstraintName("FK_CategoryId_ProductInCategories"); ;
        }
    }
}

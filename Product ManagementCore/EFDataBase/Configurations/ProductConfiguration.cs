using EProductMain.Data.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;

namespace EFDataBase.Configurations
{
    class ProductConfiguration : IEntityTypeConfiguration<Product>
    {
        public void Configure(EntityTypeBuilder<Product> builder)
        {
            builder.ToTable("Products");
            builder.HasKey(x => x.Id);
            builder.Property(x => x.Id).UseIdentityColumn();
            builder.Property(x => x.Name).IsRequired(true).HasColumnType("NVARCHAR").HasMaxLength(250);
            builder.Property(x => x.Description).IsRequired(true).HasColumnType("NTEXT");
            builder.Property(x => x.SeoDescription).IsRequired(true).HasColumnType("NTEXT");
            builder.Property(x => x.SeoTitle).IsRequired(true).HasColumnType("NVARCHAR").HasMaxLength(250);
            builder.Property(x => x.SeoAlias).IsRequired(true).HasColumnType("NVARCHAR").HasMaxLength(250);
            builder.Property(x => x.Quantity).IsRequired(true);
            builder.Property(x => x.Stock).IsRequired(true).HasDefaultValue(0);
            builder.Property(x => x.ViewCount).IsRequired(true).HasDefaultValue(0);
            builder.HasIndex(x => x.Price).HasName("Indext-SanPham-Price");
            builder.Property(x => x.DateCreated).HasColumnType("DateTime").HasDefaultValueSql("getdate()");
            //khoas ngoai
           // builder.HasOne(x=>x.ProductInCategories).WithMany(y=>y.pro)
            
        }
    }
}

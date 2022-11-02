using EProductMain.Data.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;

namespace EFDataBase.Configurations
{
    public class AppConfigConfiguration : IEntityTypeConfiguration<AppConfig>
    {
        public void Configure(EntityTypeBuilder<AppConfig> builder)
        {
            builder.ToTable("AppConfigs");
            builder.HasKey(x => x.Key);
           // builder.Property(x => x.Key).HasColumnType("UNIQUEIDENTIFIER").HasDefaultValueSql("NEWID()");
            builder.Property(x => x.Key).HasDefaultValueSql("NEWID()");
            builder.Property(x => x.Value).IsRequired(true);
        }
    }
}

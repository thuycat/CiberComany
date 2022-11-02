﻿using EProductMain.Data.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;

namespace EFDataBase.Configurations
{
  public  class CategoryTranslationConfiguration : IEntityTypeConfiguration<CategoryTranslation>
    {
        public void Configure(EntityTypeBuilder<CategoryTranslation> builder)
        {
            builder.ToTable("CategoryTranslations");
            builder.HasKey(x=>x.Id);
            builder.Property(x => x.Id).UseIdentityColumn();
            builder.Property(x => x.Name).IsRequired().HasMaxLength(200);

            builder.Property(x => x.SeoAlias).IsRequired().HasMaxLength(200);

            builder.Property(x => x.SeoDescription).HasMaxLength(500);

            builder.Property(x => x.SeoTitle).HasMaxLength(200);

            builder.Property(x => x.LanguageId).IsUnicode(false).HasMaxLength(5);

            builder.HasOne(x => x.Language)
                .WithMany(x => x.CategoryTranslations)
                .HasForeignKey(x => x.LanguageId)
                .OnDelete(DeleteBehavior.SetNull)
                .HasConstraintName("FK_LanguageId_CategoryTranslation");

            builder.HasOne(x => x.Category).WithMany(x => x.CategoryTranslations).HasForeignKey(x => x.CategoryId)
                .OnDelete(DeleteBehavior.SetNull)
                .HasConstraintName("FK_CategoryId_CategoryTranslation"); ;

        }

    }
    
}

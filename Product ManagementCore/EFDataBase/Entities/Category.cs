using EProductMain.Data.Enum;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace EProductMain.Data.Entities
{
  public  class Category
    {
        public int Id { get; set; }
        
        public string Name { get; set; }
        public int SortOrder { get; set; }

        public string Description { get; set; }
        public string SeoDescription { get; set; }
        public string SeoTitle { get; set; }
        
        public bool IsShowOnHome { set; get; }
        public int? ParentId { set; get; }
        public Status Status { set; get; }

        public List<ProductInCategory> ProductInCategories { get; set; }

        public List<CategoryTranslation> CategoryTranslations { get; set; }
    }
}

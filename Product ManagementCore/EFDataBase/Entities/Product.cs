using System;
using System.Collections.Generic;
using System.Text;

namespace EProductMain.Data.Entities
{
   public class Product
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int Category { get; set; }
        public string Description { get; set; }
        public string SeoDescription { get; set; }
        public string SeoTitle { get; set; }
        public int Quantity { get; set; }
        public decimal Price { set; get; }
        public decimal OriginalPrice { set; get; }
        public int Stock { set; get; }
        public int ViewCount { set; get; }
        public DateTime DateCreated { set; get; }
        public string SeoAlias { set; get; }

        public List<ProductInCategory> ProductInCategories { get; set; }

        public List<OrderDetail> OrderDetails { get; set; }

        public List<Cart> Carts { get; set; }

        public List<ProductTranslation> ProductTranslations { get; set; }

    }
}

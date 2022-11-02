using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace EFDataBase.Models.entities
{
    public partial class CategoryCy
    {
        public CategoryCy()
        {
            Product = new HashSet<ProductCy>();
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public DateTime? Created { get; set; }
        public string Description { get; set; }

        public virtual ICollection<ProductCy> Product { get; set; }
    }
}

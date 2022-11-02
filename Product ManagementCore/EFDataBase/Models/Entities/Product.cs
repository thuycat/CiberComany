﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace EFDataBase.Models.entities
{
    //[Table("Products")]
    public partial class ProductCy
    {
        public ProductCy()
        {
            Orders = new HashSet<OrderCys>();
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public DateTime? Created { get; set; }
        public int? CategoryId { get; set; }
        public string Description { get; set; }
        public double? Price { get; set; }
        public int? Quantity { get; set; }

        public virtual CategoryCy Category { get; set; }
        public virtual ICollection<OrderCys> Orders { get; set; }
    }
}

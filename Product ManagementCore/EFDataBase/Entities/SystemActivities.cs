using System;
using System.Collections.Generic;
using System.Text;

namespace EProductMain.Data.Entities
{
   public class SystemActivities
    {
        public int Id { get; set; }
        public string ActionDate { get; set; }
        public string clientIP { get; set; }
        public int FunctionId { get; set; }
    }
}

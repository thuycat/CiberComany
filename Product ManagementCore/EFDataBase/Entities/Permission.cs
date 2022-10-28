using System;
using System.Collections.Generic;
using System.Text;

namespace EProductMain.Data.Entities
{
    class Permission
    {
        public int Id { get; set; }
        public int RoleID { get; set; }
        public int FunctionID { get; set; }
        public int ActionID { get; set; }
    }
}

using System;
using System.Collections.Generic;
using System.Text;

namespace EProductMain.Data.Entities
{
  public  class User
    {
        public int Id { get; set; }
        public string Username  { get; set; }
        public string Password { get; set; }
        public string EDmail { get; set; }
        public string DOB { get; set; }
        public string FullName { get; set; }
    }
}

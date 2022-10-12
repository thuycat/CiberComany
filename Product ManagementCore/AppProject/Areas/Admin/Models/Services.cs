using System;

using System.Security.Cryptography;
using System.Text;


namespace AppProject.Areas.Admin.Models
{
    public static class Services
    {
        public static string getHash(string text)
        {
            using (var sha256 = SHA256.Create())
            {
                var hashedBytes = sha256.ComputeHash(Encoding.UTF8.GetBytes(text));
                return BitConverter.ToString(hashedBytes).Replace("-", "").ToLower();
            }
        }
       
    }
}

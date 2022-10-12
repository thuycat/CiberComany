using System;
using System.Collections.Generic;
using System.IO;
using System.Text;

namespace Manage.ApplicationCore.ItemShare
{
 public  static class LogData
    {
        public static void LogErr(string mota, string message)
        {
            string root = @"C:\LogErr";
            string nameFile = "fileDuLieutichHop" + DateTime.Now.ToString("yyyy-MM-dd") + ".txt";
            var path = Path.Combine(root, nameFile);
            // If directory does not exist, don't even try   
            if (!Directory.Exists(root))
            {
                Directory.CreateDirectory(root);
            }
            try
            {
                // Check if file already exists. If yes, delete it.     
                if (!File.Exists(path))
                {
                    // Create a new file     
                    using (FileStream fs = File.Create(path))
                    {

                    }
                }
                using (StreamWriter file = File.AppendText(path))
                {

                    file.WriteLine("-{0}: {1}", mota, message);


                }
            }
            catch (Exception e)
            {

            }

        }
    }
}

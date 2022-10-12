
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace Manage.ApplicationCore.DI
{
    public class ActionGenneralServices : IActionGeneral
    {
      
        //ham lay lay chuoi field value cua 1 object
        public Dictionary<string, object> GetAttribute<T>(T datasend, bool isNotNullOrEmperty = false, List<string> lstFielNotmap = null)
        {
            Dictionary<string, object> dataUpdate = new Dictionary<string, object>();
            Type myType = typeof(T);
            // List<string> data = new List<string>();
            // Get an array of FieldInfo objects.
            var reflectionFlags = BindingFlags.Static | BindingFlags.Instance | BindingFlags.Public | BindingFlags.NonPublic;

            PropertyInfo[] fields = myType.GetProperties(reflectionFlags);
            //check những trường k map vào db
            if(lstFielNotmap!= null && lstFielNotmap.Any())
            {
                fields = fields.Where(x => lstFielNotmap.Contains(x.Name)).ToArray();
            }

            for (int i = 0; i < fields.Select(x => x.Name).ToList().Count; i++)
            {
               
                //data.Add(fields[i].Name + "=" + fields[i].GetValue(datasend));
                if (fields[i].Name != myType.Name && fields[i].Name != "_" + myType.Name)
                {
                    //nếu chỉ lấy những trường có value

                    if (isNotNullOrEmperty)
                    {
                        if (fields[i].GetValue(datasend) != null && fields[i].GetValue(datasend).ToString() != "")
                        {
                            if (fields[i].GetType().ToString() == "System.DateTime")
                            {
                                dataUpdate.Add(fields[i].Name, "convert(datetime," + ((DateTime)fields[i].GetValue(datasend)).ToString("yyyy-MM-dd HH:mm:ss") + ")");
                            }
                            else
                            {
                                dataUpdate.Add(fields[i].Name, fields[i].GetValue(datasend));
                            }
                        }
                    }
                    else
                    {
                        dataUpdate.Add(fields[i].Name, fields[i].GetValue(datasend));
                    }
                }
               


            }
            return dataUpdate;
        }
        public string DisableXssInJs(string str)
        {
            if (str != null && str.Contains("<script>"))
                return str.Replace("<", "&lt;").Replace(">", "&gt;");
            else if (str != null)
                return str;
            else
                return "";

        }

    }
}

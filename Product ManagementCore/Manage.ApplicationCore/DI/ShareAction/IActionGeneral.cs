
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Manage.ApplicationCore.DI
{
 public   interface IActionGeneral
    {
    
        Dictionary<string, object> GetAttribute<T>(T datasend, bool isNotNullOrEmperty= false,List<string> lstFielNotmap= null);
        string DisableXssInJs(string str);
    }
}

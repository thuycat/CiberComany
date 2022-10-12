using System;
using System.Collections.Generic;
using System.Text;

namespace Manage.ApplicationCore.ItemShare
{
  public  class QueryData
    {
        public List<string> listField { get; set; }
        public int numberpage { get; set; }
        public int NumberRecord { get; set; }
        //câu điều kiện truy vấn
        public string buildQuery { get; set; }
        public bool? isSortAsc { get; set; }
        public string FieldSort { get; set; }
        public QueryData()
        {
            isSortAsc = false;
            numberpage = 0;
            NumberRecord = 0;
            listField = new List<string>();
        }
    }
}

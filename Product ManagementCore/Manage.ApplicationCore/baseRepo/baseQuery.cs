using System;
using System.Collections.Generic;
using System.Text;

namespace Manage.ApplicationCore.baseRepo
{
  public  class baseQuery
    {
        public string keyword { get; set; }

        public DateTime? FormDate { get; set; }
        public DateTime? ToDate { get; set; }
        public string listFieldSearch { get; set; }
        public bool? isShow { get; set; }
        //số bản ghi lấy ra
        public int NumberRecord { get; set; }
        public int pageSize { get; set; }
        //trang hiện tại

        public int curentPage { get; set; } 
        //trang hiện tại
        public int page { get; set; }
        //danh sách trường lấy ra
        public List<string> listField { get; set; }       
        //câu điều kiện truy vấn
        public string buildQuery { get; set; }
        //sắp xếp
        public bool? isSortAsc { get; set; }
        //trường sắp xếp,
        public string FieldSort { get; set; }
        public baseQuery()
        {
            isSortAsc = false;
            curentPage = 0;
            NumberRecord = 0;
            listField = new List<string>();
        }

    }
}

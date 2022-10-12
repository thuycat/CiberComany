using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AppProject.Areas.Admin.Models
{
    public class DataShare
    {
    }
    public class ObjectData
    {
    }
    //public class DataGridRender
    //{
    //    public int recordsTotal { get; set; }
    //    public int recordsFiltered { get; set; }
    //    public int draw { get; set; }
    //    public object data { get; set; }
    //    public DataGridRender() { }
    //    public DataGridRender(object oData, int oDraw, int oRecordsTotal)
    //    {
    //        UpdateData(oData, oDraw, oRecordsTotal);
    //    }
    //    public void UpdateData(object oData, int oDraw, int oRecordsTotal)
    //    {
    //        data = oData;
    //        draw = oDraw;
    //        recordsTotal = oRecordsTotal;
    //        recordsFiltered = oRecordsTotal;
    //    }
    //}
    public class DataGridRender<T> where T : new()
    {
        public int recordsTotal { get; set; }
        public int recordsFiltered { get; set; }
        public int draw { get; set; }
        public T data { get; set; }
        public string paging { get; set; }
        public string result { get; set; }
        public string txtValue { get; set; }
        public string Query { get; set; }
        // public UserPermission Permission { get; set; }
        public DataGridRender()
        {
            data = new T();
        }
        public DataGridRender(T oData, int oDraw, int oRecordsTotal)
        {
            UpdateData(oData, oDraw, oRecordsTotal);
        }
        public void UpdateData(T oData, int oDraw, int oRecordsTotal)
        {
            data = oData;
            draw = oDraw;
            recordsTotal = oRecordsTotal;
            recordsFiltered = oRecordsTotal;
        }
        public DataGridRender(T oData, int oDraw, int oRecordsTotal, string opaging)
        {
            data = oData;
            draw = oDraw;
            recordsTotal = oRecordsTotal;
            recordsFiltered = oRecordsTotal;
            paging = opaging;
        }

    }
   
    public class JsonGridD<T> where T : new()
    {
        public T Data { get; set; }
        public int Total { get; set; }
        public string Queryreturn { get; set; }
        public int recordsTotal { get; set; }
        public int recordsFiltered { get; set; }
        public int draw { get; set; }
       
        public string timeRun { get; set; }
        public JsonGridD()
        {
            Data = new T();
        }
        public JsonGridD(T oData, int oRecordsTotal = 0, int _take = 0, int _page = 0, int _draw = 0, string _Queryreturn = "")
        {
            recordsTotal = recordsFiltered = Total = oRecordsTotal;
            Data = oData;
            draw = _draw;

            Queryreturn = _Queryreturn;
         
        }
    }
  
   
    public class ResultAPI<T>
    {
        /// <summary>
        /// Trạng thái thành công hay không
        /// </summary>
        public bool Success { get; set; }
        /// <summary>
        /// Output trả về nếu thành công
        /// </summary>
        public T Data { get; set; }
        /// <summary>
        /// Mã lỗi (nếu có)
        /// </summary>
        public string Error { get; set; }
        /// <summary>
        /// Diễn giải cho lỗi (nếu có)
        /// </summary>
        public string Message { get; set; }
        /// <summary>
        /// Mã lỗi trả về (trong trường hợp trả về qua http thì đây là http status code)
        /// </summary>     
    }

}

using System;
using System.Collections.Generic;
using System.Text;

namespace Manage.ApplicationCore.ItemShare
{
    /// <summary>
    /// Dùng trong trường hợp trả về hàm void khi bình thường (không cần data trả về)
    /// </summary>
    public interface IMethodResult
    {
        /// <summary>
        /// Trạng thái thành công hay không
        /// </summary>
        bool success { get; set; }
        /// <summary>
        /// Mã lỗi (nếu có)
        /// </summary>
        string error { get; set; }
        /// <summary>
        /// Diễn giải cho lỗi (nếu có)
        /// </summary>
        string message { get; set; }
        /// <summary>
        /// Mã lỗi trả về (trong trường hợp trả về qua http thì đây là http status code)
        /// </summary>
        int? status { get; set; }

    }

    /// <summary>
    /// Dùng trong trường hợp trả về một dữ liệu nào đó khác void khi bình thường
    /// </summary>
    public class MethodResult : IMethodResult
    {
        public bool success { get; set; } = true;
        public string error { get; set; }
        public string message { get; set; }
        public int? status { get; set; }
        public Guid? correlationId { get; set; }

        public static MethodResult ResultWithError(string error, string message = "Fail!", int? status = null, Guid? correlationId = null) => new MethodResult()
        {
            success = false,
            message = message,
            error = error,
            status = status,
            correlationId = correlationId
        };

        public static MethodResult ResultWithSuccess(string message = "Success!", Guid? correlationId = null) => new MethodResult()
        {
            success = true,
            message = message,
            correlationId = correlationId
        };

        public static MethodResult ResultWithAccessDenined()
        {
            return ResultWithError("ERR_FORBIDDEN", "Bạn không đủ quyền để lấy dữ liệu đã yêu cầu", 403);
        }

        public static MethodResult ResultWithNotFound()
        {
            return ResultWithError("ERR_NOT_FOUND", "Không tìm thấy dữ liệu đã yêu cầu", 400);
        }
    }

    /// <summary>
    /// Mọi kết quả trả về của Repository
    /// </summary>
    /// <typeparam name="T"></typeparam>
    public interface IMethodResult<T>
    {
        /// <summary>
        /// Trạng thái thành công hay không
        /// </summary>
        bool success { get; set; }
        /// <summary>
        /// Output trả về nếu thành công
        /// </summary>
        T data { get; set; }
        /// <summary>
        /// Mã lỗi (nếu có)
        /// </summary>
        string error { get; set; }
        /// <summary>
        /// Diễn giải cho lỗi (nếu có)
        /// </summary>
        string message { get; set; }
        /// <summary>
        /// Mã lỗi trả về (trong trường hợp trả về qua http thì đây là http status code)
        /// </summary>
        int? status { get; set; }
        public int total { get; set; }

        MethodResult<TOut> ConvertIfError<TOut>();
        MethodResult ConvertIfError();
    }

    public class MethodResult<T> : IMethodResult<T>
    {
        public bool success { get; set; } = true;
        public T data { get; set; }
        public string error { get; set; }
        public string message { get; set; }
        public int? status { get; set; }
        public int total { get; set; }

        public static MethodResult<T> ResultWithData(T data, string message = "", int totalRecord = 0, Guid? correlationId = null) => new MethodResult<T>()
        {
            data = data,
            message = message,
            total= totalRecord

        };

        public static MethodResult<T> ResultWithError(string error, int? status = null, string message = "", Guid? correlationId = null, T data = default(T)) => new MethodResult<T>()
        {
            success = false,
            error = error,
            message = message,
            status = status,
            data = data
        };

        public static MethodResult<T> ResultWithAccessDenined()
        {
            return ResultWithError("ERR_FORBIDDEN", 403, "Bạn không đủ quyền để lấy dữ liệu đã yêu cầu");
        }

        public static MethodResult<T> ResultWithNotFound()
        {
            return ResultWithError("ERR_NOT_FOUND", 400, "Không tìm thấy dữ liệu đã yêu cầu");
        }

        public MethodResult<TOut> ConvertIfError<TOut>()
        {
            return MethodResult<TOut>.ResultWithError(this.error, this.status, this.message);
        }

        public MethodResult ConvertIfError()
        {
            return MethodResult.ResultWithError(this.error, this.message, this.status);
        }
    }
}

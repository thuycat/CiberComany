using RestSharp;
using RestSharp.Authenticators;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Sockets;
using System.Reflection;
using System.Security.Cryptography;
using System.Text;
using Aspose.Zip;
using Aspose.Zip.Saving;

namespace Manage.ApplicationCore.ItemShare
{
    public static class ServiceaShare
    {
        //private IHostingEnvironment Environment;

        //public ServiceaShare(IHostingEnvironment _environment)
        //{
        //    Environment = _environment;
        //}

        public static rusultFormService ConcetionCallAPIWithMethodPostSendJson(string host, string URL, string model, bool isAddDefaultHeader = false, string token = "")
        {
            //Trust all certificates
            System.Net.ServicePointManager.ServerCertificateValidationCallback = ((sender, certificate, chain, sslPolicyErrors) => true);
            ServicePointManager.Expect100Continue = true;
            ServicePointManager.SecurityProtocol = SecurityProtocolType.Tls12;
            var result = "";
            rusultFormService rusultFormService = new rusultFormService();

            try
            {
                RestClient client = new RestClient(host);
                if (isAddDefaultHeader)
                {
                    client.AddDefaultHeader("Authorization", string.Format("Bearer {0}", token));
                }

                var request = new RestRequest(URL, Method.Post);

                request.RequestFormat = DataFormat.Json;
                request.AddHeader("Content-Type", "application/json");
                request.AddHeader("Accept", "application/json");
                //request.Parameters.Clear();

                //nếu là dữ liệu có cấu trúc nên convert model sang json trươc khi gọi hàm 
                // request.AddParameter("Application/Json", model, ParameterType.RequestBody);
                request.AddParameter("application/json; charset=utf-8", model, ParameterType.RequestBody);

                //request.AddJsonBody(model);
                var result1 = client.Execute(request);
                // result = result1.Content;
                if (result1.StatusCode == HttpStatusCode.OK)
                {
                    rusultFormService = new rusultFormService()
                    {
                        Err = false,
                        status = (int)HttpStatusCode.OK,
                        message = "Thành công!",
                        respone = result1.Content
                    };
                }
                else
                {
                    rusultFormService = new rusultFormService()
                    {
                        Err = true,
                        status = (int)result1.StatusCode,
                        message = result1.ErrorMessage,
                        respone = result1.Content
                    };
                }

            }
            catch (Exception e)
            {
                result = e.Message;
                rusultFormService = new rusultFormService()
                {
                    Err = true,
                    status = 500,
                    message = e.Message,

                };

            }

            return rusultFormService;
        }
        public static rusultFormService ConcetionCallAPIWithMethodPostSendJsonV2(string host, string URL, string model, bool isAddDefaultHeader = false, string token = "")
        {
            //Trust all certificates
            System.Net.ServicePointManager.ServerCertificateValidationCallback = ((sender, certificate, chain, sslPolicyErrors) => true);
            ServicePointManager.Expect100Continue = true;
            ServicePointManager.SecurityProtocol = SecurityProtocolType.Tls12;
            var result = "";
            rusultFormService rusultFormService = new rusultFormService();

            try
            {
                RestClient client = new RestClient(host);
                if (isAddDefaultHeader)
                {
                    client.AddDefaultHeader("Authorization", string.Format("Bearer {0}", token));
                }

                var request = new RestRequest(URL, Method.Post);

                request.RequestFormat = DataFormat.Json;
                //request.AddHeader("Content-Type", "application/json");
                request.AddHeader("Content-Type", "application/json; charset=utf-8");
                //request.AddJsonBody(yourobject)
                request.AddHeader("Accept", "application/json");
                // request.Parameters.;

                //nếu là dữ liệu có cấu trúc nên convert model sang json trươc khi gọi hàm 
                //request.AddParameter("Application/Json", model, ParameterType.RequestBody);
                request.AddParameter("application/json; charset=utf-8", model, ParameterType.RequestBody);
                request.AddJsonBody(model);
                var result1 = client.Execute(request);
                // result = result1.Content;
                if (result1.StatusCode == HttpStatusCode.OK)
                {
                    rusultFormService = new rusultFormService()
                    {
                        Err = false,
                        status = (int)HttpStatusCode.OK,
                        message = "Thành công!",
                        respone = result1.Content
                    };
                }
                else
                {
                    rusultFormService = new rusultFormService()
                    {
                        Err = true,
                        status = (int)result1.StatusCode,
                        message = result1.ErrorMessage,
                        respone = result1.Content
                    };
                }

            }
            catch (Exception e)
            {
                result = e.Message;
                rusultFormService = new rusultFormService()
                {
                    Err = true,
                    status = 500,
                    message = e.Message,

                };

            }

            return rusultFormService;
        }
        public static rusultFormService ConcetionCallAPIWithMethodPostUrlencoded(string host, string URL, TokenValidation model, bool isAddDefaultHeader = false, string token = "")
        {
            rusultFormService rusultFormService = new rusultFormService();

            try
            {

                //IRestResponse token = client.Execute(request);
                //Trust all certificates
                System.Net.ServicePointManager.ServerCertificateValidationCallback = ((sender, certificate, chain, sslPolicyErrors) => true);
                ServicePointManager.Expect100Continue = true;
                ServicePointManager.SecurityProtocol = SecurityProtocolType.Tls12;
                var client = new RestClient(host)
                {
                    Authenticator = new HttpBasicAuthenticator(model.client_id, model.secret),
                };
                var request = new RestRequest(URL, Method.Post);
                //var authentication = new JwtAuthenticator();
                //client.Authenticator = authentication;
                request.AddHeader("content-type", "application/x-www-form-urlencoded");
                // grant_type=password&client_id=APITEST&client_secret=TT3F6AM5UQZXJEJXAWJ8CHVC9ZJ02A 51&username=apitest&password=fPJFVp5qnCWeFmtd 
                // request.AddParameter("application/x-www-form-urlencoded", $"grant_type=password&client_id={model.client_id}&client_secret={model.secret}&username={model.Username}&password={model.Password}", ParameterType.RequestBody);

                request.AddParameter("grant_type", "password", ParameterType.GetOrPost);
                request.AddParameter("username", model.Username, ParameterType.GetOrPost);
                request.AddParameter("password", model.Password, ParameterType.GetOrPost);
                request.AddParameter("client_id", model.client_id, ParameterType.GetOrPost);
                request.AddParameter("client_secret", model.secret, ParameterType.GetOrPost);
                //  request.AddFile("client_secret", model.secret);
                //Dictionary<string, string> formParams = new Dictionary<string, string>();
                //formParams.Add("grant_type", "password");
                //formParams.Add("username", model.Username);
                //formParams.Add("password", model.Password);

                //formParams.Add("client_id", model.client_id);
                //formParams.Add("client_secret", model.secret);                
                //request.AddJsonBody(formParams);
                RestResponse response = client.Execute(request);

                if (response.StatusCode != HttpStatusCode.OK)
                {
                    rusultFormService = new rusultFormService()
                    {
                        Err = true,
                        status = (int)response.StatusCode,
                        message = response.ErrorMessage,
                        respone = response.Content
                    };

                }
                else
                {
                    rusultFormService = new rusultFormService()
                    {
                        Err = false,
                        status = (int)HttpStatusCode.OK,
                        message = "Thành công!",
                        respone = response.Content
                    };
                }
            }
            catch (Exception e)
            {
                rusultFormService = new rusultFormService()
                {
                    Err = true,
                    status = 500,
                    message = e.Message,

                };
            }


            // var tokenResponse = JsonConvert.DeserializeObject<TokenValidationResponse>(response.Content);
            return rusultFormService;
        }
        public static string CallAPPIWithMethodGet(string host, string url, object model = null, bool isHeader = false, string token = "")
        {
            //Trust all certificates
            System.Net.ServicePointManager.ServerCertificateValidationCallback = ((sender, certificate, chain, sslPolicyErrors) => true);
            RestClient client = new RestClient(host);
            if (isHeader)
            {
                client.AddDefaultHeader("Authorization", string.Format("Bearer {0}", token));
            }

            RestRequest request = new RestRequest(url, Method.Get);
            // request.AddHeader("Accept", "text/html");
            //IRestResponse<string> response = client.Execute<string>(request);
            var response = client.Execute(request).Content;
            return response;
        }
        public static string NumberToText(double inputNumber, bool suffix = true)
        {
            string[] unitNumbers = new string[] { "không", "một", "hai", "ba", "bốn", "năm", "sáu", "bảy", "tám", "chín" };
            string[] placeValues = new string[] { "", "nghìn", "triệu", "tỷ" };
            bool isNegative = false;

            // -12345678.3445435 => "-12345678"
            string sNumber = inputNumber.ToString("#");
            double number = Convert.ToDouble(sNumber);
            if (number < 0)
            {
                number = -number;
                sNumber = number.ToString();
                isNegative = true;
            }


            int ones, tens, hundreds;

            int positionDigit = sNumber.Length;   // last -> first

            string result = " ";


            if (positionDigit == 0)
                result = unitNumbers[0] + result;
            else
            {
                // 0:       ###
                // 1: nghìn ###,###
                // 2: triệu ###,###,###
                // 3: tỷ    ###,###,###,###
                int placeValue = 0;

                while (positionDigit > 0)
                {
                    // Check last 3 digits remain ### (hundreds tens ones)
                    tens = hundreds = -1;
                    ones = Convert.ToInt32(sNumber.Substring(positionDigit - 1, 1));
                    positionDigit--;
                    if (positionDigit > 0)
                    {
                        tens = Convert.ToInt32(sNumber.Substring(positionDigit - 1, 1));
                        positionDigit--;
                        if (positionDigit > 0)
                        {
                            hundreds = Convert.ToInt32(sNumber.Substring(positionDigit - 1, 1));
                            positionDigit--;
                        }
                    }

                    if ((ones > 0) || (tens > 0) || (hundreds > 0) || (placeValue == 3))
                        result = placeValues[placeValue] + result;

                    placeValue++;
                    if (placeValue > 3) placeValue = 1;

                    if ((ones == 1) && (tens > 1))
                        result = "một " + result;
                    else
                    {
                        if ((ones == 5) && (tens > 0))
                            result = "lăm " + result;
                        else if (ones > 0)
                            result = unitNumbers[ones] + " " + result;
                    }
                    if (tens < 0)
                        break;
                    else
                    {
                        if ((tens == 0) && (ones > 0)) result = "lẻ " + result;
                        if (tens == 1) result = "mười " + result;
                        if (tens > 1) result = unitNumbers[tens] + " mươi " + result;
                    }
                    if (hundreds < 0) break;
                    else
                    {
                        if ((hundreds > 0) || (tens > 0) || (ones > 0))
                            result = unitNumbers[hundreds] + " trăm " + result;
                    }
                    result = " " + result;
                }
            }
            result = result.Trim();
            if (isNegative) result = "Âm " + result;
            return result + (suffix ? " đồng chẵn" : "");
        }
        public static string GetLocalIPAddress()
        {
            var host = Dns.GetHostEntry(Dns.GetHostName());
            foreach (var ip in host.AddressList)
            {
                if (ip.AddressFamily == AddressFamily.InterNetwork)
                {
                    return ip.ToString();
                }
            }
            throw new Exception("No network adapters with an IPv4 address in the system!");
        }
        public static string sha256_hash(string value)
        {
            using (SHA256 hash = SHA256Managed.Create())
            {
                return String.Concat(hash
                  .ComputeHash(Encoding.UTF8.GetBytes(value))
                  .Select(item => item.ToString("x2")));
            }
        }
        public static string Base64Encode(string plainText)
        {
            var plainTextBytes = System.Text.Encoding.UTF8.GetBytes(plainText);
            return System.Convert.ToBase64String(plainTextBytes);
        }

        public static string Base64Decode(string base64EncodedData)
        {
            var base64EncodedBytes = System.Convert.FromBase64String(base64EncodedData);
            return System.Text.Encoding.UTF8.GetString(base64EncodedBytes);
        }
        //ham lay lay chuoi field value cua 1 object
        public static string GetAttribute<T>(T datasend)
        {

            Type myType = typeof(T);
            List<string> data = new List<string>();
            // Get an array of FieldInfo objects.
            var reflectionFlags = BindingFlags.Static | BindingFlags.Instance | BindingFlags.Public | BindingFlags.NonPublic;

            PropertyInfo[] fields = myType.GetProperties(reflectionFlags);


            for (int i = 0; i < fields.Select(x => x.Name).ToList().Count; i++)
            {
                data.Add(fields[i].Name + "=" + fields[i].GetValue(datasend));

            }
            return string.Join("&", data);
        }
        public static string CreatefilestreamZipV22(List<string> LurlFIile)
        {

            // Create FileStream for output ZIP archive
            string urlfileOut = "/AppFile/tmp/compressed_files" + DateTime.Now.ToFileTime() + ".zip";
            using (FileStream zipFile = File.Open(Path.Combine(Directory.GetCurrentDirectory(), urlfileOut), FileMode.Create))
            {
                using (var archive = new Archive())
                {
                    FileInfo fi1 = new FileInfo(LurlFIile[0]);
                    // Add files to the archive
                    foreach (var urlFIile in LurlFIile)
                    {
                        // Files to be added to archive
                        fi1 = new FileInfo(Path.Combine(Directory.GetCurrentDirectory(), urlFIile));
                        archive.CreateEntry(fi1.Name, fi1);
                    }
                    // Create ZIP archive
                    archive.Save(zipFile, new ArchiveSaveOptions() { Encoding = Encoding.ASCII });
                }

            }

            return urlfileOut;
        }

    }
    public class rusultFormService
    {
        public bool Err { get; set; }
        public string message { get; set; }
        public int status { get; set; }
        public string respone { get; set; }
    }
    public class TokenValidation
    {
        public string app_id { get; set; }
        public string secret { get; set; }
        public string grant_type { get; set; }
        public string Password { get; set; }
        public string client_id { get; set; }
        public string Username { get; set; }


    }
}

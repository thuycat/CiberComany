#pragma checksum "D:\ProjectNet\Product ManagementCore\AppProject\Areas\Admin\Views\Home\_FormAdd.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "61f0db92afd27dcd396e499ece9850c37efb5f2d"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Areas_Admin_Views_Home__FormAdd), @"mvc.1.0.view", @"/Areas/Admin/Views/Home/_FormAdd.cshtml")]
namespace AspNetCore
{
    #line hidden
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.AspNetCore.Mvc.Rendering;
    using Microsoft.AspNetCore.Mvc.ViewFeatures;
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"61f0db92afd27dcd396e499ece9850c37efb5f2d", @"/Areas/Admin/Views/Home/_FormAdd.cshtml")]
    public class Areas_Admin_Views_Home__FormAdd : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<EFDataBase.Models.entities.Orders>
    {
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
            WriteLiteral("\r\n");
#nullable restore
#line 7 "D:\ProjectNet\Product ManagementCore\AppProject\Areas\Admin\Views\Home\_FormAdd.cshtml"
  
    //string checkeddata = Model.ISSHOW.HasValue && Model.ISSHOW.Value ? "checked" : "";
    var dataJson = ViewBag.jsondata as string;


#line default
#line hidden
#nullable disable
            WriteLiteral(@"<style>


    .buttons-wrap {
        display: flex;
        align-items: center;
        justify-content: center;
    }

        .buttons-wrap button {
            margin-left: 10px;
        }
    form#frm-Orders {
        font-size: 13px;
    }
</style>
<form id=""frm-Orders""");
            BeginWriteAttribute("class", " class=\"", 608, "\"", 616, 0);
            EndWriteAttribute();
            WriteLiteral(@">
    <div class=""form-horizontal container-fluid form-padding modal-body"">

        <div class=""form-group"">
            <label for=""Title"" class=""col-sm-2 control-label"">Order name </label>
            <div class=""col-sm-10"">
                <input type=""text"" name=""Name"" id=""Name"" class=""form-control""");
            BeginWriteAttribute("value", " value=\"", 928, "\"", 947, 1);
#nullable restore
#line 34 "D:\ProjectNet\Product ManagementCore\AppProject\Areas\Admin\Views\Home\_FormAdd.cshtml"
WriteAttributeValue("", 936, Model.Name, 936, 11, false);

#line default
#line hidden
#nullable disable
            EndWriteAttribute();
            WriteLiteral(@" />
            </div>
        </div>


        <div class=""form-group"">
            <label for=""Title"" class=""col-sm-2 control-label"">Product</label>
            <div class=""col-sm-10"">
                <select id=""DataSelect-SanPham"" name=""ProductId"">

");
#nullable restore
#line 44 "D:\ProjectNet\Product ManagementCore\AppProject\Areas\Admin\Views\Home\_FormAdd.cshtml"
                     foreach (var item in ViewBag.Product as List<EFDataBase.Models.entities.Product>)
                    {
                        if (Model.ProductId == item.Id)
                        {

#line default
#line hidden
#nullable disable
            WriteLiteral("                            <option");
            BeginWriteAttribute("value", " value=\"", 1458, "\"", 1474, 1);
#nullable restore
#line 48 "D:\ProjectNet\Product ManagementCore\AppProject\Areas\Admin\Views\Home\_FormAdd.cshtml"
WriteAttributeValue("", 1466, item.Id, 1466, 8, false);

#line default
#line hidden
#nullable disable
            EndWriteAttribute();
            WriteLiteral(" selected=\"selected\">\r\n                                ");
#nullable restore
#line 49 "D:\ProjectNet\Product ManagementCore\AppProject\Areas\Admin\Views\Home\_FormAdd.cshtml"
                           Write(item.Name);

#line default
#line hidden
#nullable disable
            WriteLiteral("\r\n                            </option>\r\n");
#nullable restore
#line 51 "D:\ProjectNet\Product ManagementCore\AppProject\Areas\Admin\Views\Home\_FormAdd.cshtml"
                        }
                        else
                        {

#line default
#line hidden
#nullable disable
            WriteLiteral("                            <option");
            BeginWriteAttribute("value", " value=\"", 1700, "\"", 1716, 1);
#nullable restore
#line 54 "D:\ProjectNet\Product ManagementCore\AppProject\Areas\Admin\Views\Home\_FormAdd.cshtml"
WriteAttributeValue("", 1708, item.Id, 1708, 8, false);

#line default
#line hidden
#nullable disable
            EndWriteAttribute();
            WriteLiteral(">\r\n                                ");
#nullable restore
#line 55 "D:\ProjectNet\Product ManagementCore\AppProject\Areas\Admin\Views\Home\_FormAdd.cshtml"
                           Write(item.Name);

#line default
#line hidden
#nullable disable
            WriteLiteral("\r\n                            </option>\r\n");
#nullable restore
#line 57 "D:\ProjectNet\Product ManagementCore\AppProject\Areas\Admin\Views\Home\_FormAdd.cshtml"
                        }
                    }

#line default
#line hidden
#nullable disable
            WriteLiteral(@"


                </select>
            </div>
        </div>
        <div class=""form-group"">
            <label for=""Title"" class=""col-sm-2 control-label"">Amount</label>
            <div class=""col-sm-10"">
                <input type=""text"" name=""Amount"" id=""Amount"" class=""form-control""");
            BeginWriteAttribute("value", " value=\"", 2152, "\"", 2173, 1);
#nullable restore
#line 68 "D:\ProjectNet\Product ManagementCore\AppProject\Areas\Admin\Views\Home\_FormAdd.cshtml"
WriteAttributeValue("", 2160, Model.Amount, 2160, 13, false);

#line default
#line hidden
#nullable disable
            EndWriteAttribute();
            WriteLiteral(@" />
            </div>
        </div>
        <div class=""form-group"">
            <label for=""Title"" class=""col-sm-2 control-label"">Customer</label>
            <div class=""col-sm-10"">
                <select id=""DataSelect-CusTom"" name=""CustomerId"">
");
#nullable restore
#line 75 "D:\ProjectNet\Product ManagementCore\AppProject\Areas\Admin\Views\Home\_FormAdd.cshtml"
                     foreach (var item in ViewBag.Custom as List<EFDataBase.Models.entities.Customer>)
                    {
                        if (Model.CustomerId == item.Id)
                        {

#line default
#line hidden
#nullable disable
            WriteLiteral("                            <option");
            BeginWriteAttribute("value", " value=\"", 2680, "\"", 2696, 1);
#nullable restore
#line 79 "D:\ProjectNet\Product ManagementCore\AppProject\Areas\Admin\Views\Home\_FormAdd.cshtml"
WriteAttributeValue("", 2688, item.Id, 2688, 8, false);

#line default
#line hidden
#nullable disable
            EndWriteAttribute();
            WriteLiteral(" selected=\"selected\">\r\n                                ");
#nullable restore
#line 80 "D:\ProjectNet\Product ManagementCore\AppProject\Areas\Admin\Views\Home\_FormAdd.cshtml"
                           Write(item.Name);

#line default
#line hidden
#nullable disable
            WriteLiteral("\r\n                            </option>\r\n");
#nullable restore
#line 82 "D:\ProjectNet\Product ManagementCore\AppProject\Areas\Admin\Views\Home\_FormAdd.cshtml"
                        }
                        else
                        {

#line default
#line hidden
#nullable disable
            WriteLiteral("                            <option");
            BeginWriteAttribute("value", " value=\"", 2922, "\"", 2938, 1);
#nullable restore
#line 85 "D:\ProjectNet\Product ManagementCore\AppProject\Areas\Admin\Views\Home\_FormAdd.cshtml"
WriteAttributeValue("", 2930, item.Id, 2930, 8, false);

#line default
#line hidden
#nullable disable
            EndWriteAttribute();
            WriteLiteral(">\r\n                                ");
#nullable restore
#line 86 "D:\ProjectNet\Product ManagementCore\AppProject\Areas\Admin\Views\Home\_FormAdd.cshtml"
                           Write(item.Name);

#line default
#line hidden
#nullable disable
            WriteLiteral("\r\n                            </option>\r\n");
#nullable restore
#line 88 "D:\ProjectNet\Product ManagementCore\AppProject\Areas\Admin\Views\Home\_FormAdd.cshtml"
                        }
                    }

#line default
#line hidden
#nullable disable
            WriteLiteral(@"                </select>
            </div>
        </div>
        <div class=""form-group"">
            <label for=""Title"" class=""col-sm-2 control-label"">Order Date</label>
            <div class=""col-sm-10"">
                <input type=""text"" name=""OrderDate"" id=""OrderDate"" class=""form-control input-datetime""");
            BeginWriteAttribute("value", " value=\"", 3393, "\"", 3417, 1);
#nullable restore
#line 96 "D:\ProjectNet\Product ManagementCore\AppProject\Areas\Admin\Views\Home\_FormAdd.cshtml"
WriteAttributeValue("", 3401, Model.OrderDate, 3401, 16, false);

#line default
#line hidden
#nullable disable
            EndWriteAttribute();
            WriteLiteral(@" />
            </div>
        </div>
    </div>
    <div class=""buttons-wrap"">
        <button type=""submit"" class=""k-button k-primary btn-update""><i class=""fa fa-check"" aria-hidden=""true""></i>Cập nhật</button>
        <button type=""button"" class=""k-button btn-reset""><i class=""fa fa-refresh"" aria-hidden=""true""></i>Nhập lại</button>
        <button type=""button"" class=""k-button k-danger btn-close""><i class=""fa fa-times"" aria-hidden=""true""></i>Đóng lại</button>
    </div>
</form>

<script type=""text/javascript"">
    $(document).ready(function () {
        var dataPost =");
#nullable restore
#line 109 "D:\ProjectNet\Product ManagementCore\AppProject\Areas\Admin\Views\Home\_FormAdd.cshtml"
                 Write(Html.Raw(dataJson));

#line default
#line hidden
#nullable disable
            WriteLiteral(@";
        $(""#update-data"").click(function () {

            $(""#frm-Orders"").submit();
        })
        $("".input-datetime"").daterangepicker({
            timePicker: true,
            singleDatePicker: true,
            timePicker24Hour: true,
            locale: { format: 'DD/MM/YYYY HH:mm' }
        });
        $(""#DataSelect-SanPham"").select2({
            dropdownParent: $("".modal-body""),
            placeholder: ""Chọn""
        });
        $(""#DataSelect-CusTom"").select2({
            dropdownParent: $("".modal-body""),
            placeholder: ""Chọn""
        });
        var checkQuantity = function () {

            return new Promise((resolve, reject) => {
                var request = new XMLHttpRequest();
                request.open('POST', ""/Admin/Home/CheckQuantityData?Amount="" + $(""#Amount"").val() + ""&IdPr="" + $(""#DataSelect-SanPham"").val());
                request.onload = function () {
                    if (request.status == 200) {
                        resolve(r");
            WriteLiteral(@"equest.response);
                    } else {
                        reject(Error(request.statusText));
                    }
                };
                request.onerror = function () {
                    reject(Error('Lỗi!'));
                };
                request.send(); //send the request
            })
        }
        $(""#frm-Orders"").validate({
            rules: {
                Amount: { required: true,number:true },
                Name: { required: true },
                OrderDate: { required: true }
            },
            messages: {
                Amount: {
                    required: ""Điền số lượng""
                },
                Name: {
                    required: ""Điền mô tả đơn hàng""
                },
                OrderDate: {
                    required: ""Chọn ngày""
                }
            },
            submitHandler: function () {
                //onSubmit
                loading();
                var dataForm = $(""#");
            WriteLiteral(@"frm-Orders"").smSerialize();

                $.each(dataForm, function (index, value) {
                    if (this.name == ""OrderDate"" && this.value != """") {
                        var listDate = $(""#OrderDate"").val().split(""/"");
                        dataPost[this.name] = listDate[2] + ""-"" + listDate[1] + ""-"" + listDate[0]
                    }
                    else {
                        debugger;
                        
                        if (isNaN(this.value)) {
                            dataPost[this.name] = this.value;
                        }
                        else {
                            dataPost[this.name] = Number(this.value);
                        }


                    }


                });


                checkQuantity().then(function (dataResponse) {
                    console.log(dataPost)
                 //var   dataPostjson=  JSON.stringify(dataPost)
                   var data1= JSON.parse(dataResponse)
                    ");
            WriteLiteral(@"if (data1.success && data1.data) {

                        $.ajax({

                            url: ""/Admin/Home/AddOrders"",
                            type: ""POST"",
                            data: JSON.stringify(dataPost),
                            async: true,
                            traditional: true,
                            contentType: 'application/json; charset=utf-8',
                            dataType: 'json',
                            success: function (data) {
                                if (data.success) {
                                    endLoading();
                                    popupNotification.show(data.message, ""success"");
                                    $("".btn-close"").click();
                                    refeshGrid(""grid_Orders"");
                                }
                                else {
                                    endLoading();
                                    createMessage(""Đã có lỗi xảy ra"", data.");
            WriteLiteral(@"message); // Tạo thông báo lỗi
                                }

                            },
                            error: function (xhr, ajaxOptions, thrownError) {
                                endLoading();
                                createMessage(""Đã có lỗi xảy ra"", thrownError); // Tạo thông báo lỗi

                            }
                        });
                    }
                    else {
                        endLoading();
                        createMessage(""Thông báo"", data1.message);
                    }
                }, function (error) {
                    createMessage(""Thông báo"", error);
                });


             return false;
        }
        });
        $(""#frm-Orders"").smForm();
    });

</script>
");
        }
        #pragma warning restore 1998
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.ViewFeatures.IModelExpressionProvider ModelExpressionProvider { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IUrlHelper Url { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IViewComponentHelper Component { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IJsonHelper Json { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<EFDataBase.Models.entities.Orders> Html { get; private set; }
    }
}
#pragma warning restore 1591
﻿var $focused;
function HtmlEncode(s) {
    var el = document.createElement("div");
    el.innerText = el.textContent = s;
    s = el.innerHTML;
    return s;
}

function setSelectionRange(input, selectionStart, selectionEnd) {
    if (input.setSelectionRange) {
        input.focus();
        input.setSelectionRange(selectionStart, selectionEnd);
    }
    else if (input.createTextRange) {
        var range = input.createTextRange();
        range.collapse(true);
        range.moveEnd('character', selectionEnd);
        range.moveStart('character', selectionStart);
        range.select();
    }
}
function setCaretToPos(input, pos) {
    setSelectionRange(input, pos, pos);
}
//[{ID: 1, Title: "Quản trị hệ thống"}]
function JoinArrayToString(array) {
    var arr = jQuery.map(array, function (element, i) {
        return element.Title;
    });
    return arr.join(", ");
}
function Join2ArrayToString(array1, array2) {
    var arr1 = jQuery.map(array1, function (element, i) {
        return element.Title;
    });
    var arr2 = jQuery.map(array2, function (element, i) {
        return element.Title;
    });
    var joi1 = arr1.join(", ");
    var joi2 = arr2.join(", ");
    return joi1 + ((joi1 != "" && joi2 != "") ? ", " : "") + joi2;
}
function ConvertJsonToObj(strJson) {
    var $arrayvalue = [];
    if (strJson != '') {
        $arrayvalue = jQuery.parseJSON(strJson);
    }
    return $arrayvalue;
}
function downloadfile(filename, fileurl) {
    var newfilename = filename.replace(/\s/g, '');

    var url = "/Vbden/api/VanBanCDDH/CDDHREQUEST?do=DOWLOAD&urlfile=" + fileurl + "&filename=" + filename;

    window.open(url, '_blank');

}
function findObjectByKey(array, key, value) {
    for (var i = 0; i < array.length; i++) {
        if (array[i][key] === value) {
            return array[i];
        }
    }
    return null;
}
Array.prototype.remove = function () {
    var what, a = arguments, L = a.length, ax;
    while (L && this.length) {
        what = a[--L];
        while ((ax = this.indexOf(what)) !== -1) {
            this.splice(ax, 1);
        }
    }
    return this;
};
function GetTitleByActionNameCode(code) {
    var tilte = '';
    switch (code) {
        case "KhoiPhuc":
            tile = "Khôi phục";
            break;
        case "Add":
            tile = "Thêm mới";
            break;
        case "XacNhanThoiGian":
            tile = "Xác nhận thời gian";
            break;
        case "AddHST":
            tile = "Thêm mới";
            break;
        case "ThaoTacUyQuyen":
            tile = "Vai Ủy quyền";
            break;
        case "Edit":
            tile = "Sửa";
            break;
        case "PheDuyetVaTrinhTiep":
            tile = "Phê duyệt và trình tiếp";
            break;
        case "VaoSO":
            tile = "Vào sổ";
            break;
        case "ShareFile":
            tile = "Chia sẻ file";
            break;
        case "tamDung":
            tile = "Tạm dừng";
            break;
        case "Index":
            tile = "Xem danh sách";
            break;
        case "Delete":
            tile = "Xóa";
            break;
        case "Error":
            tile = "Thao tác lỗi";
            break;
        case "SendVBD":
            tile = "Chuyển văn bản đến";
            break;
        case "SendVBDI":
            tile = "Chuyển văn bản đi";
            break;
        case "SendVBDILT":
            tile = "Chuyển văn bản đi liên thông";
            break;
        case "NhanVBDEN":
            tile = "Nhận văn bản đến";
            break;
        case "DangNhap":
            tile = "Đăng nhập";
            break;
        case "DaDen":
            tile = "Đã đến";
            break;
        case "GiaoViec":
            tile = "Giao việc";
            break;
        case "TrinhKy":
            tile = "Trình ký";
            break;
        case "KySo":
            tile = "Ký số";
            break;
        case "Ky":
            tile = "Ký";
            break;
        case "Trinh":
            tile = "Trình";
            break;
        case "TrinhLDDV":
            tile = "Trình lãnh đạo đơn vị";
            break;
        case "XinYKien":
            tile = "Xin ý kiến";
            break;
        case "CapNhat":
            tile = "Cập nhật";
            break;
        case "ChuyenPhatHanh":
            tile = "Chuyển phát hành";
            break;
        case "PheDuyet":
            tile = "Phê duyệt";
            break;
        case "KetThuc":
            tile = "Kết thúc";
            break;
        case "KetThucDT":
            tile = "Kết thúc";
            break;
        case "TraVe":
            tile = "Trả về";
            break;
        case "ThuHoi":
            tile = "Thu hồi";
            break;
        case "GetCQBH":
            tile = "Lấy danh sách cơ quan ban hành";
            break;
        case "GetLinhVuc":
            tile = "Lấy danh sách lĩnh vực";
            break;
        case "GetVanBanCDDH":
            tile = "Lấy danh sách văn bản chỉ đạo điều hành";
            break;
        case "SendDeBiet":
            tile = "Chuyển văn bản xem để biết";
            break;
        case "DongSo":
            tile = "Đóng sổ";
            break;
        case "HuyDuyet":
            tile = "Hủy duyệt";
            break;
        case "Addlt":
            tile = "Hệ thống tiếp nhận";
            break;
        case "ThayThe":
            tile = "Thay thế";
            break;
        case "BaoCaoLienThong":
            tile = "Báo cáo liên thông";
            break;
        case "CapNhatLT":
            tile = "Cập nhật liên thông";
            break;
        case "LayLaiLT":
            tile = "Lấy lại liên thông";
            break;
        case "ThuHoiLT":
            tile = "Thu hồi liên thông";
            break;
        case "CapNhatStatus":
            tile = "Cập nhật trạng thái";
            break;
        case "TuChoi":
            tile = "Từ chối vào số";
            break;
        case "Agree":
            tile = "Đồng ý cập nhật";
            break;
        case "Disagree":
            tile = "Từ chối cập nhật";
            break;
        case "TiepNhan":
            tile = "Tiếp nhận văn bản";
            break;
        case "PhanCong":
            tile = "Chuyển/Phân công";
            break;
        case "DangXuLy":
            tile = "Đang xử lý";
            break;
        case "HoanThanhXuLy":
            tile = "Hoàn thành xử lý";
            break;
        case "KiemTraTheThuc":
            tile = "Kiểm tra thể thức";
            break;
        case "TrinhDongTrinh":
            tile = "Gửi đồng trình";
            break;
        case "Thammuu":
            tile = "Tham mưu";
            break;
        case "Version":
            tile = "Phiên bản";
            break;
        case "ChuyenXuLy":
            tile = "Chuyển xử lý";
            break;
        case "ChuyenLDKy":
            tile = "Chuyển lãnh đạo ký";
            break;
        case "ShareDongTrinh":
            tile = "Chia sẻ đồng trình";
            break;
        case "LAYLAINB":
            tile = "Lấy lại nội bộ";
            break;
        case "DONGYTHAYTHEVBNB":
            tile = "Đồng ý thay thế văn bản nội bộ";
            break;
        default:
            tile = "";
            break;
    }
    return tile;
}

function GetTrangThaiCongKhaiText(trangthai) {
    var status = '';
    switch (trangthai) {
        case 1001:
            status = "Đang tiếp nhận";
            break;
        case 1002:
            status = "Chờ duyệt ngày tiếp nhận";
            break;
        case 101:
            status = "Tiếp nhận hồ sơ";
            break;
        case 103:
            status = "Đang chờ bổ sung";
            break;
        case 1035:
            status = "Tạm dựng xử lý";
            break;
        case 104:
            status = "Đã bổ sung";
            break;
        case 105:
            status = "Bị từ chối";
            break;
        case 1051:
            status = "Yêu cầu bổ sung";
            break;
        case 1055:
            status = "Yêu cầu rút hồ sơ";
            break;
        case 106:
            status = "Đã tiếp nhận (Chờ thu phí)";
            break;
        case 1063:
            status = "Chờ chuyển thu phí";
            break;
        case 199:
            status = "Chờ tiếp nhận";
            break;
        case 400:
            status = "Đã có kết quả";
            break;
        case 401:
            status = "Đã có kết quả, chờ thu phí";
            break;
        case 4015:
            status = "Chờ nộp phí";
            break;
        case 402:
            status = "Đã trả kết quả";
            break;
        case 403:
            status = "Trả kết quả, đã thu phí";
            break;
        case 405:
            status = "Hồ sơ xin rút";
            break;
        case 1995:
            status = "Đã xác nhận hợp lệ";
            break;
        case 108:
            status = "Không hợp lệ";
            break;
        case 1996:
            status = "Đã chuyển bưu chính";
            break;
        case 1997:
            status = "Đã nhận từ bưu chính";
            break;
        default:
            status = "Đang xử lý";
            break;
    }
    return status;
}
function endLoading($element, batform) {
    if ($element != undefined) {
        //k-pane
        var $splitter = $("#" + $element).closest(".k-splitter");
        //var splitter = $splitter.data("kendoSplitter");
        if ($splitter != undefined) {
            kendo.ui.progress($splitter, false);
        } else {
        }
    } else {
        var myWindowloading = $(".cus_dialog").last();
        var windowWidget = myWindowloading.data("kendoWindow");
        if (windowWidget != undefined && (!batform || batform == undefined))
            kendo.ui.progress(windowWidget.element, false);
        else {
            var $splitter = $('div[role="group"]:eq(3)');
            //var splitter = $("#" + $splitter).data("kendoSplitter");
            //console.log($splitter.attr("id"));
            if ($splitter != undefined) {
                kendo.ui.progress($splitter, false);
            } else {
            }
        }
    }
}
function loading($element) {
    if ($element != undefined) {
        var $splitter = $("#" + $element).closest(".k-splitter");
        if ($splitter != undefined && $splitter.length > 0) {
            kendo.ui.progress($splitter, true);
        } else {
            $splitter = $("#" + $element).closest(".k-content");
            if ($splitter != undefined) {
                kendo.ui.progress($splitter, true);
            }
        }
    } else {
        var myWindowloading = $(".cus_dialog").last();
        var windowWidget = myWindowloading.data("kendoWindow");
        if (windowWidget != undefined)
            kendo.ui.progress(windowWidget.element, true);
        else {
            var gr = $('div[role="group"]');
            var $splitter = $('div[role="group"]:eq(3)');
            if ($splitter != undefined) {
                kendo.ui.progress($splitter, true);
            } else {
            }
        }
    }
}
function createMessage(title, message) {
    $("#wd_dialog").append("<div class='cus_dialog'><div class='htmlcontentmess'><p>" + message +
        "</p></div><div class=\"buttons-wrap-messager\"><button type=\"button\" style=\"border:1px solid #ddd;\" class=\"btn btn-close\">Đóng lại</button></div></div>");
    var myWindow = $("#wd_dialog .cus_dialog").last();
    myWindow.kendoWindow({
        width: "400px",
        title: title,
        height: "180px",
        modal: true,
        visible: false,
        actions: [
            "Close"
        ],
        close: function (e) {
            this.destroy();
        }
    }).data("kendoWindow").center().open();
}
/// Yes/No form
function YesNoDialog(urlLoad, odata, nameaction, formrefresh, gridrefresh) {
    if (nameaction == undefined)
        nameaction = "xóa";
    $("#wd_dialog").append("<div class='cus_dialog' style=\"padding:0px 15px;\">" +
        "<div class='htmlcontentmess'><p>Bạn có chắc chắn " + nameaction + " bản ghi đã chọn?</p></div>" +
        "<div class=\"buttons-wrap-messager\"><button type=\"button\" class=\"btn-primary btn confirm_yes\" style=\"margin-right:5px;\">Tiếp tục</button><button type=\"button\" class=\"btn confirm_no\">Hủy</button></div></div>");
    var myWindow = $("#wd_dialog .cus_dialog").last();
    var dialogwindow = myWindow.kendoWindow({

        title: "Xác nhận",
        height: "160px",
        visible: false,
        modal: true,
        actions: [
            "Close"
        ],
        close: function (e) {
            this.destroy();
        }
    }).data("kendoWindow").center().open();
    myWindow.find(".confirm_no").click(function () {
        dialogwindow.close();
    });
    myWindow.find(".confirm_yes").click(function () {
        loading();
        $.ajax({
            url: urlLoad,
            dataType: "json",
            contentType: 'application/x-www-form-urlencoded; charset=utf-8',
            data: odata,
            type: 'POST',
            success: function (result) {
                if (result.Erros) {
                    endLoading();
                    createMessage("Thông báo", result.Message); // Tạo thông báo lỗi
                }
                else {
                    showMsg(result.Message);
                    endLoading();
                    $(formrefresh).refreshView();
                    if (gridrefresh != undefined && gridrefresh != "")
                        refeshGrid(gridrefresh);
                    else
                        GetLich();
                }
            }
        });
        dialogwindow.close();
    });
}
function createMessage(title, message, funCall) {
    var templ = "<div class='cus_dialog'><div class='htmlcontentmess'><p>" + message + "</p></div><div class=\"buttons-wrap-messager\">";
    if (funCall != undefined && jQuery.isFunction(funCall)) {
        templ += "<button type=\"button\" class=\"btn-primary btn confirm_yes\" style=\"margin-right:5px;\">Xác nhận</button>";
    }
    templ += "<button type=\"button\" class=\"btn   btn-close\" style=\"border:1px solid #ddd;\">Hủy bỏ</button></div></div>";
    $("#wd_dialog").append(templ);
    var myWindow = $("#wd_dialog .cus_dialog").last();
    var dialogwindow = myWindow.kendoWindow({
        width: "400px",
        title: title,
        height: "180px",
        modal: true,
        visible: false,
        actions: [
            "Close"
        ],
        close: function (e) {
            this.destroy();
        }
    }).data("kendoWindow").center().open();
    myWindow.find(".confirm_no").click(function () {
        dialogwindow.close();
    });
    myWindow.find(".confirm_yes").click(function () {
        dialogwindow.close();
        if (funCall != undefined && jQuery.isFunction(funCall)) {
            funCall();
        }

    });
}
function createMessage(title, message, funCall, funCallNo) {
    var templ = "<div class='cus_dialog'><div class='htmlcontentmess'><p>" + message + "</p></div><div class=\"buttons-wrap-messager\">";
    if (funCall != undefined && jQuery.isFunction(funCall)) {
        templ += "<button type=\"button\" class=\"btn-primary btn confirm_yes\" style=\"margin-right:5px;\">Xác nhận</button>";
    }
    templ += "<button type=\"button\" class=\"btn  btn-close \" style=\"border:1px solid #ddd;\">Hủy bỏ</button></div></div>";
    $("#wd_dialog").append(templ);
    var myWindow = $("#wd_dialog .cus_dialog").last();
    var dialogwindow = myWindow.kendoWindow({
        width: "400px",
        title: title,
        height: "180px",
        modal: true,
        visible: false,
        actions: [
            "Close"
        ],
        close: function (e) {
            this.destroy();
        }
    }).data("kendoWindow").center().open();
    myWindow.find(".confirm_no").click(function () {
        dialogwindow.close();
        if (funCallNo != undefined && jQuery.isFunction(funCallNo)) {
            funCallNo();
        }

    });
    myWindow.find(".confirm_yes").click(function () {
        dialogwindow.close();
        if (funCall != undefined && jQuery.isFunction(funCall)) {
            funCall();
        }

    });
}
function refeshGrid(gridName) {
    if (("#" + gridName).length && $("#" + gridName).data("kendoGrid") != undefined)
        $("#" + gridName).data("kendoGrid").dataSource.read()

}
function refreshGrid(gridName) {
    if (gridName.indexOf("#") == -1) {
        if (("#" + gridName).length && $("#" + gridName).data("kendoGrid") != undefined)
            $("#" + gridName).data("kendoGrid").dataSource.read();
    }
    else {
        if ((gridName).length && $(gridName).data("kendoGrid") != undefined)
            $(gridName).data("kendoGrid").dataSource.read();
    }
}
function AddFormDialog(urlLoad, width, title, odata, isnotcenter) {
    var maxHeight = $(window).height();
    var maxwidth = $(window).width();
    var $focusing = $focused;
    if (odata == undefined)
        odata = {};
    $("#wd_dialog").append("<div class='cus_dialog'></div>");
    var myWindow = $("#wd_dialog .cus_dialog").last();
    //myWindow.data(odata);
    var $width = "1000px";
    if ($.isNumeric(width)) {
        $width = width + "px";
    } else if (width == "FULLWIDTH") {
        width = maxwidth - 100;
        $width = (maxwidth - 100) + "px";
    } else if (width == "MAXWIDTH") {
        width = maxwidth - 500;
        $width = width + "px";
    }
    else {
        $width = width;
    }
    if (width > maxwidth) {
        width = maxwidth;
        $width = "100%"
    }
    if ($(".k-window").length < 1)
        loading();
    var sidialog = myWindow.kendoWindow({
        width: $width,
        title: title,
        content: {
            url: urlLoad,
            type: "POST",
            data: odata

        },
        //thuydt
        //maxHeight: maxHeight - 60,
        maxHeight: maxHeight - 30,
        modal: true,
        visible: false,
        activate: function () {
            $(".cus_dialog").last().find(".modal-body").data(odata);
            //css khi có height.
            setTimeout(function () {
                console.log(maxHeight);
                var $bodywindow = myWindow.find(".simaxheight");
                if ($bodywindow.length) {
                    $bodywindow.css({ "max-height": (maxHeight - 50) + "px" });
                    $bodywindow = myWindow.find(".cus_dialog");
                    $bodywindow.css({ 'max-height': '' });
                } else {
                    $bodywindow = myWindow.find(".modal-body");
                    $bodywindow.css({ "max-height": (maxHeight - 20) + "px" });
                }
            }, 1000);

            endLoading(undefined, true);
            //var dialog = myWindow.data("kendoWindow");
            //dialog.center();
        },
        position: {
            top: function () {
                return 15;
            },
            left: (maxwidth - width) / 2
        },
        actions: [
            "Maximize",
            "Close"
        ],
        close: function (e) {
            if ($("#closeClickHere").length > 0 && $("#iscloseform").length > 0) {
                if ($("#iscloseform").val() == "true")
                    $("#closeClickHere").click();
            }
            else if ($("#funcClose").length > 0)
                eval($("#funcClose").val())();
            if ($focusing != undefined)
                $focusing.focus();
            this.destroy();
        }
    }).data("kendoWindow");
    sidialog.open();
    //sidialog.center();
    //if ($(".k-window").length >= 2 || isnotcenter) {
    //    sidialog.open();
    //}
    //sidialog.bind("refresh", function () {
    //    if (!isnotcenter && $(".k-window").length < 2) {
    //        sidialog.center();
    //        endLoading(undefined,true);
    //        sidialog.open();
    //    }
    //});
}
function AddFormDialogV21(urlLoad, width, title, odata) {
    var maxHeight = $(window).height();
    var maxwidth = $(window).width();
    if (odata == undefined)
        odata = {};
    $("#wd_dialog").append("<div class='cus_dialog'></div>");
    var myWindow = $("#wd_dialog .cus_dialog").last();
    //myWindow.data(odata);
    var $width = "1000px";
    if ($.isNumeric(width)) {
        $width = width + "px";
    } else if (width == "MAXWIDTH") {
        width = maxwidth - 500;
        $width = width + "px";
    }
    else {
        $width = width;
    }
    var sidialog = myWindow.kendoWindow({
        width: $width,
        title: title,
        content: {
            url: urlLoad,
            type: "POST",
            data: odata
        },
        maxHeight: maxHeight - 60,
        modal: true,
        visible: false,
        activate: function () {
            //var modal = $(".cus_dialog").last().find(".modal-body");
            $(".cus_dialog").last().find(".modal-body").data(odata);
            //css khi có height.
            var $bodywindow = myWindow.find(".modal-body");
            //console.log(myWindow.html());
            if ($bodywindow.length) {
                $bodywindow.css({ "max-height": (maxHeight - 165) + "px", "overflow": "auto" });
            } else {
                $bodywindow = myWindow.find(".simaxheight");
                $bodywindow.css({ "max-height": (maxHeight - 165) + "px", "overflow": "auto" });
            }
        },
        position: {
            top: 15,
            left: (maxwidth - width) / 2
        },
        actions: [
            "Maximize",
            "Close"
        ],
        close: function (e) {
            //  $(this).css("")
            $(this).hide();
            //endLoading(undefined, true);
            if ($("#isClose").length > 0)
                $("#isClose").val(1);
        }, open: function (e) {
            //  $(this).css("")
            $(this).show();
            if ($("#isClose").length > 0)
                $("#isClose").val(0);
        }
    }).data("kendoWindow");
    sidialog.bind("refresh", function () {
        sidialog.center();
        //endLoading(undefined, true);
        sidialog.open();
    });

}
function AddFormDialogV2(urlLoad, width, title, odata) {
    var maxHeight = $(window).height();
    var maxwidth = $(window).width();
    if (odata == undefined)
        odata = {};
    $("#wd_dialog").append("<div class='cus_dialog'></div>");
    var myWindow = $("#wd_dialog .cus_dialog").last();
    //myWindow.data(odata);
    var $width = "1000px";
    if ($.isNumeric(width)) {
        $width = width + "px";
    } else if (width == "MAXWIDTH") {
        width = maxwidth - 500;
        $width = width + "px";
    }
    else {
        $width = width;
    }
    loading();
    var sidialog = myWindow.kendoWindow({
        width: $width,
        title: title,
        content: {
            url: urlLoad,
            type: "POST",
            data: odata
        },
        maxHeight: maxHeight - 60,
        modal: true,
        visible: false,
        activate: function () {
            //var modal = $(".cus_dialog").last().find(".modal-body");
            $(".cus_dialog").last().find(".modal-body").data(odata);
            //css khi có height.
            var $bodywindow = myWindow.find(".modal-body");
            //console.log(myWindow.html());
            if ($bodywindow.length) {
                $bodywindow.css({ "max-height": (maxHeight - 165) + "px", "overflow": "auto" });
            } else {
                $bodywindow = myWindow.find(".simaxheight");
                $bodywindow.css({ "max-height": (maxHeight - 165) + "px", "overflow": "auto" });
            }
        },
        position: {
            top: 15,
            left: (maxwidth - width) / 2
        },
        actions: [
            "Maximize",
            "Close"
        ],
        close: function (e) {
            //  $(this).css("")
            $(this).hide();
            endLoading(undefined, true);
            if ($("#isClose").length > 0)
                $("#isClose").val(1);
        }, open: function (e) {
            //  $(this).css("")
            $(this).show();
            if ($("#isClose").length > 0)
                $("#isClose").val(0);
        }
    }).data("kendoWindow");
    sidialog.bind("refresh", function () {
        //enLoading("panel-center");
        sidialog.center();
        endLoading(undefined, true);
        sidialog.open();
    });
}
/// approved or penđing
function ApprovedPendding(urlLoad, odata, gridName) {
    $.post(urlLoad, odata, function (data) {
        if (data.Erros) {
            createMessage("Đã có lỗi xảy ra", data.Message); // Tạo thông báo lỗi
        }
        else {
            showMsg(data.Message);
            refeshGrid(gridName);
        }
    });
}
// hàm để covert chuỗi chưa kí tự đặc biệt của js thành kí tự HTML để tránh bị XSS
function DisableXssInJs(str) {
    if (str != null && str.includes("<script>")) {
        var lt = /</g,
            gt = />/g,
            ap = /'/g,
            ic = /"/g;
        return str.toString().replace(lt, "&lt;").replace(gt, "&gt;").replace(ap, "&#39;").replace(ic, "&#34;");
    } else if (str != null)
        return str;
    else
        return "";

}
/// deletePage
function DeleteFromDialog(urlLoad, odata, gridName, titlexoa, nameaction, itemid, nguoidaidien) {
    if (nameaction == undefined)
        nameaction = "xóa";
    $("#wd_dialog").append("<div class='cus_dialog' style=\"padding:0px 15px;\">" +
        "<div class='htmlcontentmess'><p>" + (titlexoa != undefined && titlexoa != "" ? "Bạn có chắc chắn " + nameaction + " bản ghi <b>" + titlexoa + "</b> ?" : "Bạn có chắc chắn " + nameaction + " bản ghi đã chọn?") + "</p></div>" +
        "<div class=\"buttons-wrap-messager\"><button type=\"button\" class=\"btn-warning btn confirm_yes\" style=\"margin-right:5px;\">Tiếp tục</button><button type=\"button\" class=\"btn confirm_no\">Hủy</button></div></div>");
    var myWindow = $("#wd_dialog .cus_dialog").last();

    var dialogwindow = myWindow.kendoWindow({

        title: "Xác nhận",
        height: "160px",
        visible: false,
        modal: true,
        actions: [
            "Close"
        ],
        close: function (e) {
            this.destroy();
        }
    }).data("kendoWindow").center().open();
    myWindow.find(".confirm_no").click(function () {
        dialogwindow.close();
    });
    myWindow.find(".confirm_yes").click(function () {
        loading();
        $.ajax({
            url: urlLoad,
            dataType: "json",
            contentType: 'application/x-www-form-urlencoded; charset=utf-8',
            data: odata,
            type: 'GET',
            success: function (result) {
              
                showMsg(result.message);
               
                endLoading();
                refeshGrid(gridName);
                //if (nguoidaidien != undefined && itemid == nguoidaidien)
                //    $("#nguoidaidien").html("");
            }
        });
        dialogwindow.close();
    });
}
function DeleteFromDialogFunc(urlLoad, odata, gridName, funCall) {
    $("#wd_dialog").append("<div class='cus_dialog'>" +
        "<div class='htmlcontentmess'><p>Bạn có chắc chắn xóa bản ghi đã chọn?</p></div>" +
        "<div class=\"buttons-wrap-messager\"><button type=\"button\" class=\"btn-primary btn confirm_yes\" style=\"margin-right:5px;\">Tiếp tục</button><button type=\"button\" class=\"btn confirm_no\">Hủy</button></div></div>");
    var myWindow = $("#wd_dialog .cus_dialog").last();
    var dialogwindow = myWindow.kendoWindow({
        width: "350px",
        title: "Xác nhận",
        height: "150px",
        visible: false,
        modal: true,
        actions: [
            "Close"
        ],
        close: function (e) {
            this.destroy();
        }
    }).data("kendoWindow").center().open();
    myWindow.find(".confirm_no").click(function () {
        dialogwindow.close();
    });
    myWindow.find(".confirm_yes").click(function () {
        $.post(urlLoad, odata, function (data) {
            if (data.Erros) {
                createMessage("Đã có lỗi xảy ra", data.Message); // Tạo thông báo lỗi
            }
            else {
                showMsg("Xóa thành công");
                if (funCall != undefined && jQuery.isFunction(funCall)) {
                    funCall();
                }
            }
        });
        dialogwindow.close();
    });
}
function DisableDialogFunc(urlLoad, odata, gridName, funCall) {
    $("#wd_dialog").append("<div class='cus_dialog'>" +
        "<div class='htmlcontentmess'><p>Bạn có chắc chắn thay đổi trạng thái ghi đã chọn?</p></div>" +
        "<div class=\"buttons-wrap-messager\"><button type=\"button\" class=\"btn-primary btn confirm_yes\" style=\"margin-right:5px;\">Tiếp tục</button><button type=\"button\" style=\"border:1px solid #ddd;\" class=\"btn confirm_no\">Hủy bỏ</button></div></div>");
    var myWindow = $("#wd_dialog .cus_dialog").last();
    var dialogwindow = myWindow.kendoWindow({
        width: "350px",
        title: "Xác nhận",
        height: "150px",
        visible: false,
        modal: true,
        actions: [
            "Close"
        ],
        close: function (e) {
            this.destroy();
        }
    }).data("kendoWindow").center().open();
    myWindow.find(".confirm_no").click(function () {
        dialogwindow.close();
    });
    myWindow.find(".confirm_yes").click(function () {
        $.post(urlLoad, odata, function (data) {
            if (data.Erros) {
                createMessage("Đã có lỗi xảy ra", data.Message); // Tạo thông báo lỗi
            }
            else {
                showMsg("Thay đổi thành công");
                if (funCall != undefined && jQuery.isFunction(funCall)) {
                    funCall();
                }
            }
        });
        dialogwindow.close();
    });
}
function XacNhanYesNo(Noidung, funCall) {
    $("#wd_dialog").append("<div class='cus_dialog'>" +
        "<div class='htmlcontentmess'><p>" + Noidung + "</p></div>" +
        "<div class=\"buttons-wrap-messager\"><button type=\"button\" class=\"btn-primary btn confirm_yes\" style=\"margin-right:5px;\">Tiếp tục</button><button type=\"button\" style=\"border:1px solid #ddd;\" class=\"btn confirm_no\">Hủy</button></div></div>");
    var myWindow = $("#wd_dialog .cus_dialog").last();
    var dialogwindow = myWindow.kendoWindow({
        width: "350px",
        title: "Xác nhận",
        //height: "150px",
        visible: false,
        modal: true,
        actions: [
            "Close"
        ],
        close: function (e) {
            this.destroy();
        }
    }).data("kendoWindow").center().open();
    myWindow.find(".confirm_no").click(function () {
        dialogwindow.close();
    });
    myWindow.find(".confirm_yes").click(function () {
        if (funCall != undefined && jQuery.isFunction(funCall)) {
            funCall();
        }
        dialogwindow.close();
    });
}
function showMsg(msg) {
    var $boxMsg = $("#msg");
    var $boxContent = $boxMsg.find("> span");
    $boxContent.html(msg);
    $boxMsg.fadeIn();
    setTimeout(function () {
        $boxMsg.fadeOut(1800);
    }, 3 * 1500);
}
function loadAjaxContentPostData(urlContent, container, data) {
    if ($(container).length) {
        $(container).html("<img src='/Content/Plugins/Kendo/styles/Silver/loading.gif' />");
        $.ajax({
            url: urlContent,
            data: data,
            cache: false,
            type: "POST",
            success: function (data) {
                $(container).html(data);
            }
        });
    }
}
function CheckDate(txtdate) {
    if (txtdate == "" || txtdate == null)
        return true;
    var text = txtdate;
    var comp = text.split('/');
    if (comp.length == 3) {
        if ($.isNumeric(comp[0]) && $.isNumeric(comp[1]) && $.isNumeric(comp[2])) {
            var m = parseInt(comp[1], 10);
            var d = parseInt(comp[0], 10);
            var y = parseInt(comp[2], 10);
            var date = new Date(y, m - 1, d);
            if (date.getFullYear() == y && date.getMonth() + 1 == m && date.getDate() == d) {
                return true;
            } else {
                return false
            }
        } else return false;
    } else return false;
}
(function ($) {
    $.fn.CheckPermission = function (settings) {
        var $this = $(this);
        var thisID = $(this).attr("id");
        var config = {
        }
        if (settings) $.extend(config, settings);
        var $input = $('#' + thisID + " [data-per]");
        var $inputs = $(this).find($input);
        var strDataper = $("#banner").data("permistionMaPermission");
        let dataper_object = [];
        var dataper = "";
        if (strDataper != "" && strDataper != undefined)
            dataper_object = JSON.parse(strDataper);
        var group = $(this).attr("fld-group");
        if (group != undefined && group != null && group != 0) {
            // group = group.split(",");
            var dataperByGroup = $.grep(dataper_object, function (n, i) {
                return group == n.fldGroup;
            });
            dataper = "," + dataperByGroup.map(o => o.ListMaQuyen).join(',') + ",";
        }
        else {
            dataper = "," + dataper_object.map(o => o.ListMaQuyen).join(',') + ","; //lấy hết quyền
        }
        //console.log(dataper);
        $inputs.each(function () {
            var $per = $(this).attr("data-per");
            if ($per.indexOf("|") > -1) { //Nếu có nhiều quyền theo điều kiện or
                var allper = $per.split("|");
                // Nếu tất cả ko có thì ẩn quyền đi.
                var _show = false;
                $.each(allper, function (index, value) {
                    if (dataper != undefined && dataper.indexOf("," + value + ",") != -1) {
                        _show = true;
                        return true;
                    }
                    if (value.indexOf("&") > -1) {
                        var allperva = value.split("&");
                        // Nếu tất cả ko có thì ẩn quyền đi.
                        $.each(allperva, function (index1, value1) {
                            var valu = value1.replace("(", '');
                            if (value1.indexOf("(") != -1 && (dataper == undefined || dataper.indexOf("," + valu + ",") == -1)) {
                                _show = false;
                                return true;
                            }
                        });
                    }
                });
                if (!_show) // Nếu khác true thì ẩn thể này đi.
                    $(this).remove();
            } else if ($per.indexOf("&") > -1) {
                var allper = $per.split("&");
                // Nếu tất cả ko có thì ẩn quyền đi.
                var _notshow = false;
                $.each(allper, function (index, value) {
                    if (dataper == undefined || dataper.indexOf("," + value + ",") == -1) {
                        _notshow = true;
                        return true;
                    }
                });
                if (!_notshow) // Nếu khác true thì ẩn thể này đi.
                    $(this).remove();
            } else {
                if (dataper == undefined || ($per != undefined && $per != "" && dataper.indexOf("," + $per + ",") == -1)) {
                    $(this).remove();
                }
            }
        });
        $input = $('#' + thisID + " [data-agree]");
        var $inputs = $(this).find($input);
        $inputs.each(function () {
            var $dataagree = $(this).attr("data-agree");
            if ($dataagree != undefined && $dataagree == "False")
                $(this).remove();
        });
        //$('#' + thisID + " .btnadd").text($('#' + thisID + " .btnadd").text());
        shortcut.add("Alt+A", function () {
            if ($(".k-window").length == 0)
                $('#' + thisID + " .btnadd").trigger('click');
        });
        //$('#' + thisID + " .btnedit").text($('#' + thisID + " .btnedit").text() + " (Alt+E)");
        shortcut.add("Alt+E", function () {
            $('#' + thisID + " .btnedit").trigger('click');
        });
    }
    $.fn.HideIfNull = function (settings) {
        var $this = $(this);
        var thisID = $(this).attr("id");
        $("#" + thisID + " .col-sm-4 p").each(function () {
            var html = $(this).html();
            if (html == "" || html == undefined || (!html.replace(/\s/g, '').length)) {
                if ($(this).hasClass("notremove")) {
                    $(this).parent().prev('label').hide();
                    $(this).parent().hide();
                } else {
                    $(this).parent().prev('label').remove();
                    $(this).parent().remove();
                }
            }
        });
        $("#" + thisID + " .col-sm-10 p," + "#" + thisID + " .col-sm-10").each(function () {
            var html = $(this).html();
            if (html == "" || html == undefined || (!html.replace(/\s/g, '').length)) {

                if ($(this).hasClass("notremove")) {
                    $(this).closest(".form-group").hide();
                } else {
                    $(this).closest(".form-group").remove();
                }
            }
        });
    }
    $.fn.QuickSearchUser = function (settings) {
        var $this = $(this);
        var config = {
            Keyword: "",
            divFillData: "#gridUserDaChon"
        };
        if (settings) $.extend(config, settings);
        $this.autocomplete({
            //source: availableTags,
            source: function (request, response) {
                $.ajax({
                    url: '/iVBDH/api/LUsers/QueryDataSolr',
                    //type: 'POST',
                    contentType: 'application/json',
                    dataType: "json",
                    data: { pageSize: 20, page: 1, do: "QUERYDATA", keyword: $this.val() },
                    success: function (data) {
                        if (data.Data.length > 0) {
                            response($.map(data.Data, function (item) {
                                return {
                                    label: item.Title,
                                    value: item.Title,
                                    id: item.ID
                                }
                            }));
                        }
                    }
                });
            },
            select: function (e, ui) {
                alert(ui.item.id); //chọn xong làm gì thi làm
            },
            minLength: 2,
            delay: 100
        });
    }
    $.fn.siSerializeDivFrm = function () {
        var values = {};
        var $input = $('input, select, textarea');
        var $inputs = $(this).find($input);
        $inputs.each(function () {
            if ($(this).val() != "" && $(this).val() != undefined) {
                var attr = $(this).attr('multiple');
                if (typeof attr !== typeof undefined && attr !== false) {
                    var $mangvalue = $(this).val();
                    values[this.name] = $mangvalue.join(",");
                }
                else if ($(this).hasClass('input-datetime')) {
                    if (CheckDate($(this).val())) {
                        values[this.name] = $(this).val();
                    } else {
                    }
                }
                else if (this.type == "radio") {
                    var vlin = $("input[name='" + this.name + "']:checked").val();;
                    values[this.name] = vlin;
                } else
                    if (this.type == "checkbox") {
                        if ($(this).prop("checked") == true)
                            values[this.name] = $(this).value;
                        else
                            values[this.name] = "";
                    }
                    else {
                        values[this.name] = this.value;
                    }
            }
        });
        //console.log(values);
        //returning += $(this).serialize();
        return values;
    };
    //closefrm
    $.fn.closefrm = function (settings) {
        if ($("#iscloseform").length > 0) {
            $("#iscloseform").val(false);
        }
        if ($(this).length)
            $(this).closest("[data-role=window]").data("kendoWindow").close();
    };
    //refresh form view, theem moi
    $.fn.refreshView = function (settings) {
        if ($(this).length)
            $(this).closest(".cus_dialog").data("kendoWindow").refresh();
    };
    $.fn.closefrmbs = function (settings) {
        $(this).closest("[role=dialog]").modal('hide');
    };
    //$('#myModal').modal('hide');
    //config các thông tin trên form
    // Đặt ở cuối form
    $.fn.smForm = function (settings) {
        var config = {
            Auto: false,
            DateAfter: false
        }
        if (settings) $.extend(config, settings);
        var thisID = $(this).attr("id");
        $('#' + thisID).attr("autocomplete", "off");
        setTimeout(function () {
            $('#' + thisID + ' #Title').focus();
        }, 500);

        $('#' + thisID + ' .input-datetimeHMS').daterangepicker({
            "timePicker": true,
            "timePicker24Hour": true,
            autoUpdateInput: false,
            singleDatePicker: true,
            locale: vidatalocale,
            widgetPositioning: {
                horizontal: 'auto',
                vertical: 'auto'
            }
        });



        $('#' + thisID + ' .input-datetime').not(".datemaxnow, .dateminnow").daterangepicker({
            autoUpdateInput: false,
            singleDatePicker: true,
            locale: vidatalocale,
            widgetPositioning: {
                horizontal: 'auto',
                vertical: 'auto'
            }
        });
        var nowDate = new Date();
        var today = new Date(nowDate.getFullYear(), nowDate.getMonth(), nowDate.getDate(), 0, 0, 0, 0);
        $('#' + thisID + ' .input-datetime.datemaxnow').daterangepicker({

            autoUpdateInput: false,
            singleDatePicker: true,
            locale: vidatalocale,
            maxDate: today,
            widgetPositioning: {
                horizontal: 'auto',
                vertical: 'auto'
            }
        });
        $('#' + thisID + ' .input-datetime.dateminnow').daterangepicker({
            autoUpdateInput: false,
            singleDatePicker: true,
            locale: vidatalocale,
            minDate: today,
            widgetPositioning: {
                horizontal: 'auto',
                vertical: 'auto'
            }
        });
        $('#' + thisID + ' .input-datetime,.input-datetimeHMS').on("click", function () {
            $(".daterangepicker").css("z-index", "99999");
        });

        $('#' + thisID + ' .input-datetimeHMS').on('apply.daterangepicker', function (ev, picker) {
            $(this).val(picker.startDate.format('DD/MM/YYYY HH:mm')).change();
            var attr = $(this).attr('data-min');
            // For some browsers, `attr` is undefined; for others, `attr` is false. Check for both.
            if (typeof attr !== typeof undefined && attr !== false) {
                //$('#' + attr).data("daterangepicker").setOptions({ minDate: $(this).val() });
                $('#' + attr).data("daterangepicker").minDate = picker.startDate;
                //$('#datetimepicker').data("DateTimePicker")
            }
            attr = $(this).attr('data-max');
            // For some browsers, `attr` is undefined; for others, `attr` is false. Check for both.
            if (typeof attr !== typeof undefined && attr !== false) {
                //$('#' + attr).data("daterangepicker").setOptions({ maxDate: $(this).val() });
                $('#' + attr).data("daterangepicker").maxDate = picker.startDate;
            }
        });

        $('#' + thisID + ' .input-datetime').on('apply.daterangepicker', function (ev, picker) {
            $(this).val(picker.startDate.format('DD/MM/YYYY')).change();
            var attr = $(this).attr('data-min');
            // For some browsers, `attr` is undefined; for others, `attr` is false. Check for both.
            if (typeof attr !== typeof undefined && attr !== false) {
                //$('#' + attr).data("daterangepicker").setOptions({ minDate: $(this).val() });
                $('#' + attr).data("daterangepicker").minDate = picker.startDate;
                //$('#datetimepicker').data("DateTimePicker")
            }
            attr = $(this).attr('data-max');
            // For some browsers, `attr` is undefined; for others, `attr` is false. Check for both.
            if (typeof attr !== typeof undefined && attr !== false) {
                //$('#' + attr).data("daterangepicker").setOptions({ maxDate: $(this).val() });
                $('#' + attr).data("daterangepicker").maxDate = picker.startDate;
            }
        });
        $('#' + thisID + ' .input-datetime, .input-datetimeHMS').keydown(function (e) {
            var code = e.keyCode || e.which;
            if (code === 9 || code === 13) {
                var thisvalueenter = $(this).val();
                if (thisvalueenter != "") {
                    var dateEnter = null;
                    if (thisvalueenter.includes("/")) {
                        var datearr = thisvalueenter.split('/');
                        if (datearr.length < 3) {
                            dateEnter = new Date(nowDate.getFullYear(), datearr[1] - 1, datearr[0], 0, 0, 0, 0);
                            $(this).val(formatDate(dateEnter));
                        }
                    } else {
                        dateEnter = new Date(nowDate.getFullYear(), nowDate.getMonth(), thisvalueenter, 0, 0, 0, 0);
                        $(this).val(formatDate(dateEnter));
                    }
                }
            }
        });

        $('#' + thisID + ' .input-datetime, .input-datetimeHMS').on('cancel.daterangepicker', function (ev, picker) {
            $(this).val('');
        });
        $('#' + thisID + ' .input-datetime').each(function (ev, picker) {
            $(this).mask('00/00/0000');
        });
        $('#' + thisID + ' .input-datetimeHMS').each(function (ev, picker) {
            $(this).mask('00/00/0000 00:00');
        });
        $('#' + thisID + ' .upercase').each(function () {
            $(this).keyup(function () {
                this.value = this.value.toLocaleUpperCase();
            });
        });

        // disable sự kiện default của sự kiện enter.
        $('#' + thisID + ' input[type=text]').not($(".eventer")).on('keyup keypress', function (e) {
            var keyCode = e.keyCode || e.which;
            if (keyCode === 13) {
                e.preventDefault();
                return false;
            }
        });

        // Requiments
        var validate = $("#" + thisID).validate();
        if (validate != undefined) {
            var allreles = validate.settings.rules;
            for (var key in allreles) {
                //console.log('key: ' + key + '\n' + 'value: ' + allreles[key]);
                if (allreles[key]["required"] != undefined && allreles[key]["required"] == true) {
                    $("#" + thisID + " label[for='" + key + "']").addClass("required");
                }
                allreles[key]["normalizer"] = function (value) {
                    return $.trim(value);
                }
            }
            $('#' + thisID + " .input-datetime").each(function () {
                try {
                    if ($(this).rules() != undefined && !$(this).rules().smdatetime) {
                        console.log($(this));
                        $(this).rules("add", {
                            smdatetime: true,
                        });
                    }
                } catch (e) {
                }
            });
            $('#' + thisID + " .input-datetime.dateminnow").each(function () {
                try {
                    if ($(this).rules() != undefined && !$(this).rules().dateGreatThanEqualNow) {
                        $(this).rules("add", {
                            dateGreatThanEqualNow: true,
                        });
                    }
                } catch (e) {
                }
            });
            $('#' + thisID + " .input-datetime.datemaxnow").each(function () {
                try {
                    if ($(this).rules() != undefined && !$(this).rules().dateLessThanEqualNow) {
                        $(this).rules("add", {
                            dateLessThanEqualNow: true,
                        });
                    }
                } catch (e) {
                }
            });
        }
        $('#' + thisID + ' label.required').each(function () {
            let str = $(this).text();
            if (str.indexOf("*") == -1) {
                $(this).append("<span class='clslable'>(<span class='clsred'>*</span>)</span>");
            }

        });
        shortcut.remove("F8");
        shortcut.remove("Alt+R");
        shortcut.remove("Alt+Q");
        shortcut.remove("Alt+F");
       
        console.log(thisID);
    };
    $.fn.smSerialize = function () {
        $(this).find('input[type=text]').each(function () {
            $(this).val($.trim($(this).val()));
        });
        var odata = $(this).serializeArray();
        //console.log(odata);
        //$('input[type=checkbox]:not(:checked)', this).each(function () {
        //    if (this != undefined) {
        //        if (this.name !== undefined && this.value === 'true') {
        //            //this.value = 'false';
        //            //odata[this.name] = false;
        //            odata.push({ name: this.name, value: false });
        //        }
        //    }
        //});
        let input = $(this).find("input[type=\"checkbox\"]");
        $(input).each(function (index) {
            if ($(this).is(':checked')) {
                let xnum = odata.findIndex(x => x.name === this.name);
                if (xnum > -1) {
                    odata.splice(xnum, 1); // 2nd parameter means remove one item only
                }
                odata.push({ name: this.name, value: true });

            }
            else {
                odata.push({ name: this.name, value: false });

            }
        });
        $('select', this).each(function () {
            if (this != undefined) {
                var attr = $(this).attr('multiple');
                if (typeof attr !== typeof undefined && attr !== false) {
                    var $mangvalue = $(this).val();
                    // Cơ quan khác post đi cách nhau dấu #
                    var split = $(this).attr('data-split');

                    if (split != undefined)
                        odata.push({ name: this.name + "Add", value: $mangvalue.join(split) });
                    else if (jQuery.grep(odata, function (a) {
                        return a.name == this.name
                    }).length == 0)
                        odata.push({ name: this.name, value: $mangvalue.join(",") });
                }
                console.log($(this).val());
                if ($(this).val() === '' || $(this).val() === null) {
                    var magenicVendor = odata.find(vendor => vendor['name'] === this.name);
                    if (magenicVendor === undefined) {
                        odata.push({ name: this.name, value: "" });
                    }
                }
            }
        });
        return odata;
    };
    $.fn.smSerializeToJsonObj = function () {
        $(this).find('input[type=text]').each(function () {
            $(this).val($.trim($(this).val()));
        });
        var odata = $(this).serializeArray();
        $('input[type=checkbox]:not(:checked)', this).each(function () {
            if (this != undefined) {
                if (this.name !== undefined && this.value === 'true') {
                    //this.value = 'false';
                    //odata[this.name] = false;
                    odata.push({ name: this.name, value: false });
                }
            }
        });
        $('select', this).each(function () {
            if (this != undefined) {
                var attr = $(this).attr('multiple');
                if (typeof attr !== typeof undefined && attr !== false) {
                    var $mangvalue = $(this).val();
                    // Cơ quan khác post đi cách nhau dấu #
                    var split = $(this).attr('data-split');

                    if (split != undefined)
                        odata.push({ name: this.name + "Add", value: $mangvalue.join(split) });
                    else if (jQuery.grep(odata, function (a) {
                        return a.name == this.name
                    }).length == 0)
                        odata.push({ name: this.name, value: $mangvalue.join(",") });
                }
                console.log($(this).val());
                if ($(this).val() === '' || $(this).val() === null) {
                    var magenicVendor = odata.find(vendor => vendor['name'] === this.name);
                    if (magenicVendor === undefined) {
                        odata.push({ name: this.name, value: "" });
                    }
                }
            }
        });
        var obj = {};
        $.map(odata, function (n, i) {
            obj[n.name] = n.value;
        });
        console.log(obj);
        return obj;
    };
    //lay ra value ko lay id cua select
    $.fn.SerializeValue = function () {
        $(this).find('input[type=text]').each(function () {
            $(this).val($.trim($(this).val()));
        });
        var odata = $(this).find('input,textarea').serializeArray();
        $('input[type=checkbox]:not(:checked)', this).each(function () {
            if (this != undefined) {
                if (this.name !== undefined && this.value === 'true') {
                    //this.value = 'false';
                    //odata[this.name] = false;
                    odata.push({ name: this.name, value: false });
                }
            }
        });
        $('select', this).each(function () {
            if (this != undefined) {
                var attr = $(this).attr('multiple');
                if (typeof attr !== typeof undefined && attr !== false) {
                    var $mangvalue = $(this).text();
                    odata.push({ name: this.name, value: $mangvalue.join(",") });
                } else if ($(this).find(':selected').val() != "" && $(this).find(':selected').text() != 0) {
                    odata.push({ name: this.name, value: $(this).find(':selected').text() });
                }
            }
        });
        return odata;
    };
    $.fn.fSelect2018 = function (settings) {
        var config = {
            Text: "Lựa chọn",
            Url: "",
            FieldValue: "ID",
            FieldText: "Title",
            ItemID: 0,
            numDisplayed: 2,
            lookup: false,
            phay: true,
            Ajax: false,
            placeholder: "Chọn",
            dropdownParent: ".k-window",
            Remove: false,
            width: 0,
            showSearch: true,
            async: true,
            data: {},
            dataBound: function () {
                //Hàm sau khi load xong
            },
            parameterPlus: function (para) {
                // Hàm post dữ liệu.
            },
            attribute: [] // ["ID","Title"]
        }
        if (settings) $.extend(config, settings);
        return this.each(function () {
            var thisID = $(this).attr("id");
            //$("#" + thisID).fSelect("destroy");
            if (thisID != undefined) {
                var max_width = "0"; //$this.width() + 12;
                if (config.width > 0)
                    max_width = config.width;
                var $select = $("#" + thisID);
                var $place = $(this).attr("data-place");
                var $selected = $(this).attr("data-selected");
                var $url = $(this).attr("data-url");
                if ($url == undefined && config.Url != "") {
                    $url = config.Url;
                }
                //if ($place == undefined && config.placeholder != "") {
                //    $place = config.placeholder;
                //}
                if (!config.Ajax) {
                    if ($selected == undefined && config.ItemID != 0) {
                        $selected = config.ItemID;
                    }
                    // Thêm các data post nếu có.
                    if (jQuery.isFunction(config.parameterPlus)) {
                        config.parameterPlus(config.data); //
                    }
                    if ($url != "" && $url != undefined) {
                        if (config.Remove) {
                            $select.html("");
                        }
                        //$select.append($('<option>', { value: '', text: $place }));
                        $.ajax({
                            url: $url,
                            async: config.async,
                            data: config.data,
                            success: function (odata) {
                                var data = odata.Data;
                                var $option = null;
                                $.each(data, function (key, val) {
                                    var $noi = ' - ';
                                    var $noi2 = '-';
                                    if (config.lookup) {
                                        $noi = ';#';
                                        $noi2 = ';#';
                                    }
                                    if (config.FieldText.indexOf(",") > 0 || config.FieldValue.indexOf(",") > 0) {
                                        var res = config.FieldText.split(',');
                                        var $text = '';
                                        $.each(res, function (key1, val1) {
                                            if ($text == '') {
                                                $text = val[val1];
                                            } else {
                                                $text += $noi + val[val1];
                                            }
                                        });
                                        var resValue = config.FieldValue.split(',');
                                        var $val = '';
                                        $.each(resValue, function (key1, val1) {
                                            if ($val == '') {
                                                $val = val[val1];
                                            } else {
                                                $val += $noi2 + val[val1];
                                            }
                                        });
                                        $option = $('<option>', { value: $val, text: $text });
                                        //$select.append($('<option>', { value: $val, text: $text }));
                                    } else {
                                        $option = $('<option>', { value: val[config.FieldValue], text: val[config.FieldText] });
                                    }
                                    //set các att cho các option nếu có.
                                    if (config.attribute.length > 0) {
                                        $.each(config.attribute, function (index, value) {
                                            var $attr = value.replace(/[^a-z0-9\s]/gi, '').replace(/[_\s]/g, '-');
                                            $option.attr('data-' + $attr, eval("val." + value));
                                        });
                                    }
                                    $select.append($option);
                                })
                                if ($selected != undefined && $selected != "") {
                                    if (($selected.indexOf(",") > -1) && config.phay) {
                                        var res = $selected.split(",");
                                        res = res.filter(function (v) { return v !== '' });
                                        $.each(res, function (index, value) {
                                            $("#" + thisID + " option[value=" + value + "]").prop("selected", true);
                                        });
                                    } else {
                                        $("#" + thisID + " option[value=" + $selected + "]").attr('selected', 'selected');
                                    }
                                }
                                // get thẻ  modal-body gần nhất.
                                $("#" + thisID).fSelect({
                                    placeholder: config.placeholder,
                                    width: max_width
                                });
                                //if (jQuery.isFunction(config.dataBound)) {
                                //    config.dataBound(odata); //
                                //}
                            }
                        });
                    }
                    else {
                        $("#" + thisID).fSelect({
                            width: max_width
                        });
                    }
                }
                else {
                    $select.fSelect({
                        placeholder: 'Chọn',
                        numDisplayed: config.numDisplayed,
                        overflowText: '{n}' + config.Text,
                        searchText: 'Tìm kiếm',
                        showSearch: config.showSearch,
                        width: max_width
                    });
                }
            }
        });
    };
    // select2
    $.fn.viSelect2018 = function (settings) {
        var config = {
            Url: "",
            FieldValue: "ID",
            FieldSearch: "lstID",
            FieldText: "Title",
            TemplateText: "",
            TemplateValue: "",// "#=ID#;\\##=Title#"
            ItemID: 0,
            lookup: false,
            phay: true,
            tags: false,
            Ajax: true,
            placeholder: "Chọn",
            dropdownParent: ".k-window",
            Remove: true,
            width: 0,
            async: true,
            data: {},
            dataBound: function () {
                //Hàm sau khi load xong
            },
            parameterPlus: function (para) {
                // Hàm post dữ liệu.
            },
            attribute: [] // ["ID","Title"]
        };
        if (settings) $.extend(config, settings);
        return this.each(function () {
            var thisID = $(this).attr("id");
            if ($(this).hasClass("select2-hidden-accessible")) {
                // Select2 has been initialized
                $(this).select2('destroy');
            }
            //console.log(thisID);
            if (thisID != undefined) {
                var $this = $(this);
                var max_width = "100%"; //$this.width() + 12;
                if (config.width > 0)
                    max_width = config.width;
                //console.log(max_width);
                var attrmultiple = $(this).attr('multiple');
                var $select = $(this);
                var $place = $this.attr("data-place");
                var $selected = $this.attr("data-selected");
                var $url = $this.attr("data-url");
                if ($url == undefined && config.Url != "") {
                    $url = config.Url;
                }
                if ($place == undefined && config.placeholder != "") {
                    $place = config.placeholder;
                }
                if ($url == undefined || $url == "")
                    config.Ajax = false;
                if (!config.Ajax) {
                    if ($selected == undefined && config.ItemID != 0) {
                        $selected = config.ItemID;
                    }
                    // Thêm các data post nếu có.
                    if (jQuery.isFunction(config.parameterPlus)) {
                        config.parameterPlus(config.data); //
                    }
                    if ($url != "" && $url != undefined) {
                        if (config.Remove) {
                            $select.html("");
                        }
                        $select.append($('<option>', { value: '', text: $place }));
                        $.ajax({
                            url: $url,
                            async: config.async,
                            data: config.data,
                            success: function (odata) {
                                var data = odata.Data;
                                var $option = null;
                                var $noi = ' - ';
                                var $noi2 = '-';
                                if (config.lookup) {
                                    $noi = ';#';
                                    $noi2 = ';#';
                                }
                                //debugger;
                                var KenTemplateText = null;
                                if (config.TemplateText != '')
                                    KenTemplateText = kendo.template(config.TemplateText);
                                $.each(data, function (key, val) {
                                    var $text = '';
                                    var $val = '';
                                    if (config.FieldValue.indexOf(",") > 0) {
                                        var resValue = config.FieldValue.split(',');
                                        $.each(resValue, function (key1, val1) {
                                            if ($val == '') {
                                                $val = val[val1];
                                            } else {
                                                $val += $noi2 + val[val1];
                                            }
                                        });
                                    } else {
                                        $val = val[config.FieldValue];
                                    }
                                    if (KenTemplateText != null) {
                                        $text = KenTemplateText(val);
                                    } else
                                        $text = val[config.FieldText];
                                    $option = $('<option>', { value: $val, text: $text });
                                    //set các att cho các option nếu có.
                                    if (config.attribute.length > 0) {
                                        $.each(config.attribute, function (index, value) {
                                            var $attr = value.replace(/[^a-z0-9\s]/gi, '').replace(/[_\s]/g, '-');
                                            $option.attr('data-' + $attr, eval("val." + value));
                                        });
                                    }
                                    $select.append($option);
                                })
                                if ($selected != undefined && $selected != "") {
                                    if (($selected.indexOf(",") > -1) && config.phay) {
                                        var res = $selected.split(",");
                                        res = res.filter(function (v) { return v !== '' });
                                        $.each(res, function (index, value) {
                                            $("#" + thisID + " option[value=" + value + "]").prop("selected", true);
                                        });
                                    } else {
                                        $("#" + thisID + " option[value=" + $selected + "]").attr('selected', 'selected');
                                    }
                                }
                                // get thẻ  modal-body gần nhất.
                                $select.select2({
                                    dropdownParent: $this.closest(config.dropdownParent),
                                    width: max_width,
                                    placeholder: $place,
                                    allowClear: true,
                                    tags: config.tags,
                                });
                                if (jQuery.isFunction(config.dataBound)) {
                                    config.dataBound(odata); //
                                }
                            }
                        });
                    } else {
                        if ($select != undefined) {
                            $select.select2({
                                dropdownParent: $this.closest(config.dropdownParent),
                                width: max_width,
                                placeholder: $place,
                                allowClear: true,
                            });
                        }
                    }
                } else {
                    if ($selected != undefined && $selected != "" && $selected != "0" && $selected != "0;#") {
                        var $lstget = $selected;
                        if ($selected.indexOf(";#"))
                            $lstget = $selected.split(";#")[0];
                        var valuesdata = {};
                        valuesdata[config.FieldSearch] = $lstget;
                        if (jQuery.isFunction(config.parameterPlus)) {
                            config.parameterPlus(valuesdata); //
                        }
                        $.ajax({
                            url: $url,
                            async: true,
                            //data:{
                            //    lstID: $lstget
                            //    },
                            data: valuesdata,
                            success: function (odata) {
                                var data = odata.Data;
                                var $option = null;
                                var $noi = ' - ';
                                var $noi2 = '-';
                                if (config.lookup) {
                                    $noi = ';#';
                                    $noi2 = ';#';
                                }
                                //debugger;
                                var KenTemplateText = null;
                                if (config.TemplateText != '')
                                    KenTemplateText = kendo.template(config.TemplateText);
                                $.each(data, function (key, val) {
                                    var $text = '';
                                    var $val = '';
                                    if (config.FieldValue.indexOf(",") > 0) {
                                        var resValue = config.FieldValue.split(',');
                                        $.each(resValue, function (key1, val1) {
                                            if ($val == '') {
                                                $val = val[val1];
                                            } else {
                                                $val += $noi2 + val[val1];
                                            }
                                        });
                                    } else {
                                        $val = val[config.FieldValue];
                                    }
                                    if (KenTemplateText != null) {
                                        $text = KenTemplateText(val);
                                    } else
                                        $text = val[config.FieldText];
                                    $option = $('<option>', { value: $val, text: $text });
                                    //set các att cho các option nếu có.
                                    if (config.attribute.length > 0) {
                                        $.each(config.attribute, function (index, value) {
                                            var $attr = value.replace(/[^a-z0-9\s]/gi, '').replace(/[_\s]/g, '-');
                                            $option.attr('data-' + $attr, eval("val." + value));
                                        });
                                    }
                                    $select.append($option);
                                })
                                if ($selected != undefined && $selected != "") {
                                    if (($selected.indexOf(",") > -1) && config.phay) {
                                        var res = $selected.split(",");
                                        res = res.filter(function (v) { return v !== '' });
                                        $.each(res, function (index, value) {
                                            $("#" + thisID + " option[value=" + value + "]").prop("selected", true);
                                        });
                                    } else {
                                        $("#" + thisID + " option[value=" + $selected + "]").attr('selected', 'selected');
                                    }
                                }
                            }
                        });
                    }

                    $select.select2({
                        ajax: {
                            url: $url,
                            dataType: 'json',
                            delay: 1,
                            data: function (params) {
                                var odatapost = {
                                    Keyword: params.term, // search term,
                                    SearchInSimple: "FullText",
                                    //page: params.page || 1,
                                    pageSize: (params.term == undefined || params.term.length < 2) ? 40 : 50
                                };
                                if (jQuery.isFunction(config.parameterPlus)) {
                                    config.parameterPlus(odatapost); //
                                }
                                return odatapost;
                            },
                            processResults: function (data, params) {
                                // parse the results into the format expected by Select2
                                // since we are using custom formatting functions we do not need to
                                // alter the remote JSON data, except to indicate that infinite
                                // scrolling can be used
                                params.page = params.page || 1;
                                return {
                                    results: $.map(data.Data, function (item) {
                                        var $text = '';
                                        var KenTemplateText = null;
                                        if (config.TemplateText != '')
                                            KenTemplateText = kendo.template(config.TemplateText);
                                        if (KenTemplateText != null) {
                                            $text = KenTemplateText(item);
                                        } else
                                            $text = item[config.FieldText];
                                        var $id = '';
                                        KenTemplateText = null;
                                        if (config.TemplateValue != '')
                                            KenTemplateText = kendo.template(config.TemplateValue);
                                        if (KenTemplateText != null) {
                                            $id = KenTemplateText(item);
                                        } else
                                            $id = item[config.FieldValue];
                                        var objoption = {
                                            text: $text,
                                            id: $id
                                        };
                                        if (config.attribute.length > 0) {
                                            $.each(config.attribute, function (index, value) {
                                                var $attr = value.replace(/[^a-z0-9\s]/gi, '').replace(/[_\s]/g, '-');
                                                objoption['data-' + $attr] = eval("item." + value);
                                            });
                                        }
                                        return objoption;
                                    }),
                                    pagination: {
                                        more: (params.page * 30) < data.total_count
                                    }
                                };
                            },
                            cache: false
                        },
                        dropdownParent: $select.closest(config.dropdownParent),
                        width: max_width,
                        placeholder: $place,
                        tags: config.tags,
                        allowClear: true,
                        minimumInputLength: 0,
                    });
                    if (jQuery.isFunction(config.dataBound)) {
                        config.dataBound(); //
                    }
                }
                $select.on("select2:close", function (e) {
                    //console.log(e.target);
                    //e.target.focus();
                });
            }
        });
    };
    $.fn.viCustomFck = function (settings) {
        var $this = $(this);
        var thisID = $this.attr("id");
        var config = {
            height: 150,
            toolbar: [
                {
                    name: 'basicstyles', groups: ['basicstyles', 'cleanup'],
                    items: ['Bold', 'Italic', 'Underline', 'Strike', 'Subscript', 'Superscript', '-', 'RemoveFormat']
                },
                { name: 'styles', items: ['Styles', 'Format', 'Font', 'FontSize'] },
                { name: 'paragraph', groups: ['list', 'indent', 'blocks', 'align', 'bidi'], items: ['NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', '-', 'Blockquote', 'CreateDiv', '-', 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock', '-', 'BidiLtr', 'BidiRtl', 'Language'] },
            ],
            filebrowserImageBrowseUrl: '/Usercontrols/AnhDaiDien/fckFinder.aspx?type=Images&option=1&UrlWeb=/dvc/Lists/LTinTuc',
            pasteFromWordRemoveFontStyles: true,
            forcePasteAsPlainText: true,
            ignoreEmptyParagraph: true,
            removeFormatAttributes: true,
        }
        if (settings) $.extend(config, settings);
        CKEDITOR.replace(thisID, {
            // Define the toolbar groups as it is a more accessible solution.
            //toolbarGroups: [
            //	{ "name": "basicstyles", "groups": ["basicstyles"] },
            //	{ "name": "links", "groups": ["links"] },
            //	{ "name": "about", "groups": ["about"] }
            //],
            toolbar: config.toolbar,
            height: config.height,
            filebrowserImageBrowseUrl: config.filebrowserImageBrowseUrl,
            pasteFromWordRemoveFontStyles: config.pasteFromWordRemoveFontStyles,
            forcePasteAsPlainText: config.forcePasteAsPlainText,
            ignoreEmptyParagraph: config.ignoreEmptyParagraph,
            removeFormatAttributes: config.removeFormatAttributes,

            // Remove the redundant buttons from toolbar groups defined above.
            //removeButtons: 'Underline,Strike,Subscript,Superscript,Anchor,Styles,Specialchar'
            //height: config.height
            // Remove the redundant buttons from toolbar groups defined above.
            //removeButtons: 'Underline,Strike,Subscript,Superscript,Anchor,Styles,Specialchar'
        });

    }
    // 
    $.fn.siKendoGrid = function (settings) {
        var config = {
            sibatch: false,
            UrlPost: "",
            persistSelection: false,
            selectable: true,
            vitriSTT: 0,
            dbClick: true,
            pageSize: 20,
            page: 1,
            height: 0,
            editable: false,
            odataUpdate: {},
            fields: {},
            UrlUpdate: "",
            pageable: {
                refresh: true,
                pageSizes: true,
                buttonCount: 5,
                messages: {
                    display: "{0}-{1} / {2}",
                    itemsPerPage: 'bản ghi trên trang',
                    refresh: "Làm mới",
                    empty: "Không có dữ liệu",
                    first: "Trang đầu",
                    previous: "Trang trước",
                    next: "Trang sau",
                    last: "Trang cuối",
                    page: "Trang số",
                    of: "trong {0}"
                }
            },
            modelID: "ID",
            inputKeyword: "keyword,search1,search2,search3",
            odata: { "do": "QUERYDATA" },
            group: null,
            isColumSTT: false,
            Sort: [{ field: "ID", dir: "desc" }],
            // Các cấu hình mặc định
            columns: [{
                field: "ID",
                title: "ID",
                width: "100px"
            }, {
                field: "Title",
                title: "Tiêu đề"
            },],
            parameterPlus: function (para) {
            },
            change: function () {

            },
            dataBound: function (data) {
            },
            dataRead: function (data) {
                console.log("dataRead");
                console.log(data);

            },
            completeInline: function (data) {
            }
        };
        config = $.extend(config, settings);
        console.log(this);
        if (this.length) {
            return this.each(function () {
                var $idelement = $(this).attr("id");
                var $gridparent = $(this).closest(".smgrid");
                // Plugin code would go here...
                var $stt = 0;

                var $dataSource = new kendo.data.DataSource({
                    type: "json",
                    transport: {
                        read: {
                            type: "POST",
                            dataType: "json",
                            url: config.UrlPost,
                            data: config.odata,
                            contentType: 'application/json; charset=utf-8',
                        },
                        update: {
                            type: "POST",
                            url: config.UrlUpdate,
                            dataType: "json",
                            data: config.odataUpdate,
                            complete: config.completeInline
                        },
                        parameterMap: function (options) {
                            var $zonesearch = $gridparent.find(".zone_search form").first();//$("#" + $idelement + " zone_search:first");

                            if ($zonesearch != undefined) {
                                var $arraysearch = $zonesearch.smSerialize();
                                for (i = 0; i < $arraysearch.length; ++i) {
                                    options[$arraysearch[i].name] = $arraysearch[i].value;
                                }
                            }
                            if (jQuery.isFunction(config.parameterPlus)) {
                                config.parameterPlus(options); //
                            }
                            options["NumberRecord"] = config.pageSize;
                            options["curentPage"] = config.page;
                            return JSON.stringify(options);
                        }
                    },
                    pageSize: config.pageSize,
                    page: config.page,
                    schema: {
                        data: function (data) {
                            config.dataRead(data);
                            if (config.isColumSTT && data != null && data.request != null)

                                $stt = data.request.start;
                            return data.data;
                        },
                        total: function (data) {
                            if (data.total === 0) {
                                console.log("Không có bản ghi nào");
                            }
                            return data.total;
                        },
                        page: function (data) {
                            return data.request.page;
                        },
                        model: {
                           // id: config.modelID,
                            fields: config.fields,
                        },
                    },
                    serverPaging: true,
                    serverFiltering: true,
                    serverSorting: true,
                    sort: config.Sort
                });


                if (config.group != null) {
                    $dataSource.group(config.group);
                }
                if (config.isColumSTT) {

                    var itemTemp = {
                        title: "STT",
                        width: "50px",
                        template: function (o) {
                            return '<div style="text-align:center">' + ++$stt + '</div>';
                        }
                    };
                    config.columns.splice(config.vitriSTT, 0, itemTemp);
                }
                // debugger;
                $(this).kendoGrid({
                    dataSource: $dataSource,
                    pageable: config.pageable,
                    persistSelection: config.persistSelection,
                    sortable: true,
                    selectable: config.selectable,
                    height: config.height,
                    maxheight: 0,
                    editable: config.editable,
                    columns: config.columns,
                    change: config.change,
                    dataBound: function (data) {
                        config.dataBound(data);
                        $("#" + $idelement).on('keyup keypress', 'input.k-textbox', function (e) {
                            var keyCode = e.keyCode || e.which;
                            if (keyCode === 13) {
                                e.preventDefault();
                                return false;
                            }
                        });
                        //đánh dấu màu cho tìm kiếm.
                        //alert(123);
                        //Tim các element input key word.
                        var lstkeyword = config.inputKeyword.split(",");
                        for (var i = 0; i < lstkeyword.length; ++i) {
                            if ($("#" + lstkeyword[i]).length > 0 && $("#" + lstkeyword[i]).val() != "" && $("#" + lstkeyword[i]).val() != undefined) {
                                if ($("#" + lstkeyword[i]).val().indexOf(",") == -1)
                                    $("#" + $idelement + " .k-grid-content").mark($("#" + lstkeyword[i]).val(), { separateWordSearch: false });
                                else {
                                    var lstmark = $("#" + lstkeyword[i]).val().split(",");
                                    for (var j = 0; j < lstmark.length; ++j) {
                                        $("#" + $idelement + " .k-grid-content").mark(lstmark[j], { separateWordSearch: false });
                                    }
                                }
                            }
                        }
                    }
                });
                if (config.dbClick) {
                    $("#" + $idelement).delegate("tbody>tr", "dblclick", function () {
                        var grid = $("#" + $idelement).data("kendoGrid");
                        var dataItem = grid.dataItem(this);
                        var $zone_search = $(this).closest(".smgrid");
                        var urlform = $zone_search.attr("data-view");
                        var widthform = $zone_search.attr("data-formwidth");
                        var $title = $zone_search.attr("data-title");
                        if ($title === undefined)
                            $title = "Chi tiết";
                        else $title = "Chi tiết " + $title;
                        if ($zone_search.length > 0 && urlform != null && urlform != undefined && urlform != "")
                            AddFormDialog(urlform, widthform, $title, { ItemID: dataItem.ID, idsolr: dataItem.idsolr, IDVanBan: dataItem.ID });
                    });
                }
                // Them vao day dieu kien tim kiem.
                var $inputselect = $('.zone_search form select');
                var $inputtext = $('.zone_search form input[type=text]');
                var $inputtextboxs = $gridparent.find($inputtext);
                $($inputtextboxs).keypress(function (event) {
                    if (event.keyCode == 13) {
                        event.preventDefault();
                        $("#" + $idelement).data("kendoGrid").options.dataSource._skip = 0
                        $("#" + $idelement).data("kendoGrid").options.dataSource._page = 0
                        refeshGrid($idelement);
                        var a = $inputtext[0].dataset.removekeyword;
                        if (a == "1") {
                            $inputtext[0].value = "";
                        }

                        return false;
                    }
                });
                var $inputselectcl = $gridparent.find($inputselect);
                $inputselectcl.change(function () {
                    refeshGrid($idelement);
                });
                var $inputcheckbox = $('.zone_search form input[type=checkbox]');
                $inputcheckbox.change(function () {
                    refeshGrid($idelement);
                });
            });
        } else {
            console.log("Grid khong tồn tại");
            return null;
        }
    };
    //Grid boostrap.
    $.fn.siGridboostrap = function (settings) {
        var config = {
            UrlPost: "",
            aaSorting: [0, 'desc'],
            STT: 1,
            headers: {},
            visible: true,
            length: '20',
            isColumSTT: false,
            parameterPlus: function (para) {
            },
            drawCallback: function (settings) {
            },
            // Các cấu hình mặc định
            columns: [
                {
                    "mData": function (o) {
                        return '<a target="_blank" data-id="' + o.ID + '" href="?ItemID=' + o.ID + '">' + o.Title + '</a>';
                    },
                    "name": "Title",
                    "sTitle": "Tiêu đề",
                }
            ],
            messageInfo: 'Hiển thị _START_ đến _END_ trên _TOTAL_ bản ghi'
        };
        config = $.extend(config, settings);
        var $oder = [];
        if (config.isColumSTT) {
            var itemTemp = {
                "sTitle": "STT",
                "width": "3%",
                "render": function (rowData, type, row, meta) {
                    return "<div class='STTgrid'>" + ++meta.settings.json.Request.start + "</div>";
                }
            };
            config.columns.splice(0, 0, itemTemp);
            $oder = [
                { "orderable": false, "targets": 0 }
            ];
        }
        return this.each(function () {
            var $idelement = $(this).attr("id");
            var $gridparent = $(this).closest(".smgrid");

            var tblBSDataTable = $(this).DataTable(
                {
                    "language": {
                        "info": config.messageInfo
                    },
                    "lengthMenu": [[config.length, 20, 30, 50, 100], [config.length, 20, 30, 50, 100]],
                    "dom": 't<"col-xs-12 col-sm-4 col-md-4 nopadding infortotal"i><"col-xs-12 col-sm-8 col-md-8 pull-right nopadding"p><"clear">',
                    "searching": false,
                    "lengthChange": true,
                    "visible": config.visible,
                    "length": config.length,
                    "columnDefs": $oder,
                    "processing": true, //show processing text while request data
                    "serverSide": true,// request data from server side
                    "aaSorting": config.aaSorting,
                    "ajax":
                    {
                        type: "POST",
                        type: "GET",
                        url: config.UrlPost,
                        dataSrc: 'Data',
                        headers: config.headers,
                        data: function (options) {
                            if (jQuery.isFunction(config.parameterPlus)) {
                                config.parameterPlus(options); //
                            }
                            var $zonesearch = $gridparent.find(".zone_search").first();//$("#" + $idelement + " zone_search:first");
                            if ($zonesearch != undefined) {
                                options = $.extend({}, options, $zonesearch.siSerializeDivFrm());
                            }
                            return options;
                        }
                    },
                    "aoColumns": config.columns,
                    "drawCallback": config.drawCallback,
                });
        })
    };
    $.fn.DangKyFrmSearchPL = function (settings) {
        var config = {
            isSearch: true
        };
        if (settings) $.extend(config, settings);
        var values = {};
        var $input = $('input, select');
        var $inputtext = $('input[type=text]');
        var $inputtextboxs = $(this).find($inputtext);
        $($inputtextboxs).keypress(function (event) {
            if (event.keyCode == 13) {
                if (config.isSearch) {
                    event.preventDefault();
                    var $tagData = $(this).closest("div[role='body-data']");
                    var $idtable = $tagData.find("table.smdataTable").first().dataTable().fnDraw(false);
                }
                return false;
            }
        });
        var $inputs = $(this).find($input);
        //$inputs.change(function () {
        //    if (config.isSearch) {
        //        //alert("Handler for .change() called.");
        //        var $tagData = $(this).closest("div[role='body-data']");
        //        var $idtable = $tagData.find("table.smdataTable").first().dataTable().fnDraw(false);
        //    }
        //});
        $(this).find(".btnsearch").click(function () {
            if (config.isSearch) {
                var $tagData = $(this).closest("div[role='body-data']");
                //console.log($tagData.find("table.smdataTable").first());
                var $idtable = $tagData.find("table.smdataTable").first().dataTable().fnDraw(false);
            }
        });



        $('.input-datetime').daterangepicker({
            autoUpdateInput: false,
            orientation: "auto",
            singleDatePicker: true,
            locale: {
                cancelLabel: 'Clear'
            }
        });
        $('.input-datetime').on('apply.daterangepicker', function (ev, picker) {
            $(this).val(picker.startDate.format('DD/MM/YYYY'));
            $(this).removeClass('error');
            if ($("#" + this.name + '-error').length)
                $("#" + this.name + '-error').remove();
            // Sau khi chọn nếu thấy ok thì
        });
        $(".input-datetime").change(function () {
            //alert("Handler for .change() called.");
            var temp = $(this).val();
            if (!CheckDate($(this).val())) {
                $(this).addClass('error').focus();
                $(this).parent().append('<label id="' + this.name + '-error" class="error" for="' + this.name + '">Định dạng ngày tháng không đúng dd/mm/yyyy</label>');
            } else {
                $(this).removeClass('error');
                if ($("#" + this.name + '-error').length)
                    $("#" + this.name + '-error').remove();
            }
        });
        $('.input-datetime').on('cancel.daterangepicker', function (ev, picker) {
            $(this).val('');
        });

        $('label.required').each(function () {

            let str = $(this).text();
            if (str.indexOf("*") == -1) {
                $(this).append("<span class='clslable'>(<span class='clsred'>*</span>)</span>");
            }

        });
    };
    $.fn.DangKyFrmThongKe = function () {
        var values = {};
        var $input = $('input, select');
        var $inputtext = $('input[type=text]');
        var $inputtextboxs = $(this).find($inputtext);
        $($inputtextboxs).keypress(function (event) {
            if (event.keyCode == 13) {
                return false;
            }
        });
        var $inputs = $(this).find($input);
        $inputs.change(function () {
        });
        $(this).find(".btnsearch").click(function () {
        });
        $('.input-datetime').daterangepicker({
            autoUpdateInput: false,
            orientation: "auto",
            singleDatePicker: true,
            locale: {
                cancelLabel: 'Clear'
            }
        });
        $('.input-datetime').on('apply.daterangepicker', function (ev, picker) {
            $(this).val(picker.startDate.format('DD/MM/YYYY'));
        });
        $('.input-datetime').on('cancel.daterangepicker', function (ev, picker) {
            $(this).val('');
        });
        $('label.required').each(function () {
            $(this).append("<span class='clslable'>(<span class='clsred'>*</span>)</span>");
        });
    };
    $.fn.openDialogBS = function (settings) {
        var config = {
            urlLoad: "",
            title: "",
            type: 'type-default',
            size: BootstrapDialog.SIZE_WIDE,
            data: {},
            cssClass: "smdialog"
        }
        if (settings) $.extend(config, settings);
        BootstrapDialog.show({
            size: BootstrapDialog.SIZE_FULL,
            type: 'type-default',
            title: config.title,
            message: function (dialog) {
                var $message = dialog.getModalBody();
                $message.load(config.urlLoad, config.data, function (response, status, xhr) { });
                return "";
            },
            cssClass: config.cssClass + ' smdialog',
            data: config.data,
            closable: true,
            closeByBackdrop: true,
            draggable: true,
        });
    };
    $.fn.siGridThongKeOld = function (settings) {
        var config = {
            UrlAction: "",
            oData: {},
            object: false,
            siGroup: null,
            cols: 0,
            isGroupClient: false,
            _HtmlTempTitle: '#=smField#: #=Value#',
            templatehtmltr: "#javascriptTemplate",
            objTitle: [],
            Finish: function (settings) {
            },
            onLoaded: function (oDataGrid) {
            },
            Sort: [] //[{ field: "ID", dir: "desc" }],
        }
        if (settings) $.extend(config, settings);
        //Dang ky su kien sort.
    }
    var siGridThongKe = function () {
        return {
            options: {
                UrlAction: "",
                oData: {},
                object: false,
                siGroup: null,
                cols: 0,
                isGroupClient: false,
                _HtmlTempTitle: '#=smField#: #=Value#',
                templatehtmltr: "#javascriptTemplate",
                objTitle: [],
                Finish: function (settings) {
                },
                onLoaded: function (oDataGrid) {
                }//,
                //Sort: [] //[{ field: "ID", dir: "desc" }],
            },
            // --------------------------------------------------------------------
            init: function (options, element) {
                //console.log("init");
                this.options = $.extend(this.options, options);
                // Khởi tạo thông tin để lấy dữ liệu.
                // Post de lay du lieu ve hien thi.
                this.elem = element;
                this.attachEvents();
                this.initializerGrid();
                var idzone = element.id;
                $("#" + idzone + " th a.k-link").unbind();
                $("#" + idzone + " th a.k-link").click(function () {
                    var _field = $(this).attr('data-field');
                    var _asc = $(this).attr('data-sort');
                    if (_asc == undefined || _asc == null)
                        _asc = "asc";
                    if (_asc == "asc") {
                        $(this).attr("data-sort", "desc");
                        $("#" + idzone + " th a.k-link span").html("");
                        this.children[0].innerHTML = '<i class="fa fa-sort-amount-desc" aria-hidden="true"></i>';
                    }
                    else {
                        $(this).attr('data-sort', 'asc');
                        $("#" + idzone + " th a.k-link span").html("");
                        this.children[0].innerHTML = '<i class="fa fa-sort-amount-asc" aria-hidden="true"></i>';
                    }
                    //this.options.Sort = ;
                    //asc
                    //refesh laij grid.
                    $("#" + idzone).data("siGridThongKe").RenderGrid([{ _field: _field, dir: _asc }]);
                    //this.RenderGrid([{ _field: _field, dir: _asc }]);
                });
            },
            RenderGrid: function (Sort) {
                var config = this.options;
                var idzone = this.elem.id;
                var _cols = 0;
                if (_cols == 0) {
                    _cols = $('#' + idzone + " .smtable thead tr th").length + 1;
                }
                if (Sort != null && Sort.length > 0) {
                    config.oData["GridSort"] = Sort;
                }
                loading(idzone);
                $.post(config.UrlAction, config.oData, function (data) {
                    var htmlTEmp = '';
                    var templatehtmltr = kendo.template($(config.templatehtmltr).html());
                    var templateGroup = kendo.template(config._HtmlTempTitle);
                    var stt = 0;
                    var _GroupGoc = '_1';
                    var $STTGroup = -1;
                    var OTitle = [];
                    if (data.Data.length > 0) {
                        for (var i = 0; i < data.Data.length; i++) {
                            if (config.siGroup != null && config.siGroup.length > 0) {
                                var FieldGroup = config.siGroup[0].Field;
                                //Gộp nhóm
                                if (config.object) {
                                    if (jQuery.type(data.Data[i][FieldGroup]) == "array") {
                                        for (var j = 0; j < data.Data[i][FieldGroup].length; j++) {
                                            if (_GroupGoc != data.Data[i][FieldGroup][j].Title) {
                                                $STTGroup++;
                                                _GroupGoc = data.Data[i][FieldGroup][j].Title;
                                                htmlTEmp += '<tr class="si-group-tr"><td colspan="' + _cols + '">' +
                                                    '<p class="si-reset" style="text-align:left"><a class="k-icon k-i-collapse" href="javascript:;" tabindex="-1" aria-label="Collapse"></a><span class="siTitleGroup">' + FieldGroup + ': ' + _GroupGoc + '</span></p>' +
                                                    '</td></tr>';
                                                OTitle.push({ STT: $STTGroup, smField: FieldGroup, Value: _GroupGoc });
                                            }
                                        }
                                    }
                                    else if (_GroupGoc != data.Data[i][FieldGroup].Title) {
                                        $STTGroup++;
                                        _GroupGoc = data.Data[i][FieldGroup].Title;
                                        htmlTEmp += '<tr class="si-group-tr"><td colspan="' + _cols + '">' +
                                            '<p class="si-reset" style="text-align:left"><a class="k-icon k-i-collapse" href="javascript:;" tabindex="-1" aria-label="Collapse"></a><span class="siTitleGroup">' + FieldGroup + ': ' + _GroupGoc + '</span></p>' +
                                            '</td></tr>';
                                        OTitle.push({ STT: $STTGroup, smField: FieldGroup, Value: _GroupGoc });
                                    }
                                } else {
                                    if (_GroupGoc != data.Data[i][FieldGroup]) {
                                        $STTGroup++;
                                        _GroupGoc = data.Data[i][FieldGroup];
                                        htmlTEmp += '<tr class="si-group-tr"><td colspan="' + _cols + '">' +
                                            '<p class="si-reset" style="text-align:left"><a class="k-icon k-i-collapse" href="javascript:;" tabindex="-1" aria-label="Collapse"></a><span class="siTitleGroup">' + FieldGroup + ': ' + _GroupGoc + '</span></p>' +
                                            '</td></tr>';
                                        OTitle.push({ STT: $STTGroup, smField: FieldGroup, Value: _GroupGoc });
                                    }
                                }
                            }
                            data.Data[i]["STT"] = ++stt;
                            htmlTEmp += templatehtmltr(data.Data[i]);
                            for (var j = 0; j < config.objTitle.length; j++) {
                                var objPro = config.objTitle[j];
                                if (objPro.Type == 1) {
                                    if (OTitle[$STTGroup][objPro.Field] == undefined) { //Kiểu số
                                        OTitle[$STTGroup][objPro.Field] = 0;
                                    }
                                    if (objPro["CongThuc"] == "SUM") {
                                        OTitle[$STTGroup][objPro.Field] += data.Data[i][objPro.Value];
                                    } else if (objPro["CongThuc"] == "Auto") {
                                        OTitle[$STTGroup][objPro.Field]++;
                                    }
                                }
                                if (objPro.Type == 0) {
                                    OTitle[$STTGroup][objPro.Field] = eval("data.Data[i]." + objPro.Value);// data.Data[i][objPro.Value];
                                }
                            }
                            config.onLoaded(data);
                        }
                        endLoading(idzone);
                        $(".mainContentBaoCao .clsContent").html(htmlTEmp);
                        //$(".mainContentBaoCao .clsContent").append(htmlTEmp);
                        if (config.siGroup != null && config.siGroup.length > 0) {
                            var temp = $(".smtable thead tr th").length;
                            if ($(".smtable thead tr th").length < _cols) {
                                $(".smtable thead tr").not(".group-cell").prepend("<th class='si-group-cell'></th>");
                                $(".smtable tbody tr").not(".group-cell").prepend("<td class='si-group-cell'></td>");
                                $(".smtable thead tr").addClass("group-cell");
                            }
                            //if ($(".smtable tbody tr td").length < _cols)
                            //for các thẻ tr group set text cho nó.
                            $(".smtable_content .si-group-tr span.siTitleGroup").each(function (index) {
                                $(this).html(templateGroup(OTitle[index]));
                            });
                        }
                        config.Finish();
                    }
                });
            },
            // --------------------------------------------------------------------
            initializerGrid: function () {
                this.RenderGrid(null);
            },
            someMethod: function () {
                alert('someMethod called');
                return $(this.elem); // for chaining
            },
            // --------------------------------------------------------------------
            attachEvents: function () {
                var self = this;
                $(self.elem).on("hover", function (e) {
                    //console.log("hover");
                });
                $(self.elem).on("click", function (e) {
                    //console.log("click");
                });
            }
        };
    };
    $.fn.siGridThongKe = function (options) {
        // create an instance for each element in the set
        return this.each(function () {
            var mysiGridThongKe = new siGridThongKe();
            mysiGridThongKe.init(options, this);
            // this lets us call methods on the selector
            $(this).data("siGridThongKe", mysiGridThongKe);
        });
    };
    ///Nâng tầm plugin simax. :D
    var smSelect2018V2 = function () {
        //debugger;
        return {
            options: {
                Url: "",
                lengthop: 40,
                FieldValue: "ID",
                FieldText: "Title",
                FieldSearch: "lstID",
                ItemID: 0,
                headers: {},
                TemplateText: "",
                TemplateValue: "",// "#=ID#;\\##=Title#"
                IDSelected: "",
                IDDisaple: "",
                lookup: false,
                DefaultValue: false,
                phay: true,
                autochange: true,
                Ajax: true,
                placeholder: "Chọn",
                isdropdownParent: true,
                dropdownParent: ".k-window",
                Remove: true,
                width: 0,
                async: true,
                tags: false,
                disableAtrrNull: [],
                disablediff: "",
                data: {},
                closeonSelect: true,
                dataBound: function (data) {
                    //Hàm sau khi load xong
                },
                dataBoundSelected: function (data) {
                    //Hàm sau khi load xong
                },
                dataRead: function (data, element) {
                    //Hàm sau khi load xong
                },
                parameterPlus: function (para) {
                    // Hàm post dữ liệu.
                },
                disableFieldValue: function (para) {
                    // Hàm post dữ liệu.
                },
                attribute: [], // ["ID","Title"],
                getselectid: false
            },
            // --------------------------------------------------------------------
            init: function (options, element) {
                //console.log("init");
                this.options = $.extend(this.options, options);
                var $option = this.options;
                // Khởi tạo thông tin để lấy dữ liệu.
                // Post de lay du lieu ve hien thi.
                var max_width = "100%"; //$this.width() + 12;
                this.elem = element;
                var thisID = $(this.elem).attr("id");
                //console.log(thisID);
                //set value cho option nếu có khi set trên att
                var $select = $("#" + thisID);
                var $place = $(this.elem).attr("data-place");
                var $disable = $(this.elem).attr("data-disable");
                var $selected = $(this.elem).attr("data-selected");
                var $url = $(this.elem).attr("data-url");
                if ($url !== undefined && $url !== "") {
                    this.options.Url = $url;
                }
                if (this.options.width !== undefined && this.options.width !== "" && this.options.width != 0) {
                    max_width = this.options.width + "px";
                }
                if ($place != undefined && $place != "") {
                    this.options.placeholder = $place;
                }
                if ($selected != undefined && $selected != "") {
                    this.options.IDSelected = $selected;
                }
                if (this.options.Url == undefined || this.options.Url == "")
                    this.options.Ajax = false;
                if (!this.options.Ajax) {
                    if (this.options.IDSelected == undefined && config.ItemID != 0) {
                        this.options.IDSelected = this.options.ItemID;
                    }
                    $select.select2({
                        dropdownParent: $select.closest(this.options.dropdownParent),
                        width: max_width,
                        placeholder: this.options.placeholder,
                        allowClear: true,
                        tags: this.options.tags,
                        closeOnSelect: this.options.closeonSelect,
                    });
                    if (this.options.Url != "" && this.options.Url != undefined) {
                        this.getData();
                        //triger select2.
                    } else {
                    }
                } else {
                    if (this.options.Url != "" && this.options.Url != undefined)
                        this.Searching();
                    else
                        $select.select2({
                            dropdownParent: $select.closest(this.options.dropdownParent),
                            width: max_width,
                            placeholder: this.options.placeholder,
                            allowClear: true,
                            closeOnSelect: this.options.closeonSelect,
                            tags: this.options.tags,
                        });
                }
                this.attachEvents();
            },
            getData: function () {
                var thisID = $(this.elem).attr("id");
                var config = this.options;
                //set value cho option nếu có khi set trên att

                var $select = $(this.elem);
                // debugger;
                // Hàm set add html cho thẻ select.
                if (config.Remove) {
                    $select.html("");
                }
                if (jQuery.isFunction(config.parameterPlus)) {
                    config.parameterPlus(config.data); //
                }
                if (!$select.prop('multiple') && config.isdropdownParent) { //Không phải multi thì mới add
                    $select.append($('<option>', { value: '', text: '' }));
                }
                $.ajax({
                    url: config.Url + (config.Url.includes("?") ? ("&elem=" + thisID) : ("?elem=" + thisID)),
                    async: config.async,
                    contentType: 'application/json',
                    data: config.data,
                    success: function (odata) {
                        var data = odata.Data;
                        config.dataRead(data, $select);
                        var $option = null;
                        $.each(data, function (key, val) {
                            var $noi = ' - ';
                            var $noi2 = '-';
                            if (config.lookup) {
                                $noi = ';#';
                                $noi2 = ';#';
                            }
                            if (config.FieldText.indexOf(",") > 0 || config.FieldValue.indexOf(",") > 0) {
                                var res = config.FieldText.split(',');
                                var $text = '';
                                $.each(res, function (key1, val1) {
                                    if ($text == '') {
                                        $text = val[val1];
                                    } else {
                                        $text += $noi + val[val1];
                                    }
                                });
                                var resValue = config.FieldValue.split(',');
                                var $val = '';
                                $.each(resValue, function (key1, val1) {
                                    if ($val == '') {
                                        $val = val[val1];
                                    } else {
                                        $val += $noi2 + val[val1];
                                    }
                                });
                                $option = $('<option>', { value: $val, text: $text });
                                //$select.append($('<option>', { value: $val, text: $text }));
                            } else {
                                var $id = '';
                                KenTemplateText = null;
                                if (config.TemplateValue != '')
                                    KenTemplateText = kendo.template(config.TemplateValue);
                                if (KenTemplateText != null) {
                                    $id = KenTemplateText(val);
                                } else
                                    $id = val[config.FieldValue];
                                KenTemplateText = null;
                                if (config.TemplateText != '')
                                    KenTemplateText = kendo.template(config.TemplateText);
                                if (KenTemplateText != null) {
                                    $text = KenTemplateText(val);
                                } else
                                    $text = val[config.FieldText];
                                $option = $('<option>', { value: $id, text: $text });
                            }
                            //set các att cho các option nếu có.
                            if (config.attribute.length > 0) {
                                $.each(config.attribute, function (index, value) {
                                    if (value.indexOf("..") != -1) {
                                        value = value.split(".")[0];
                                        if (val[value] != undefined && val[value].length > 0) {
                                            $option.attr('data-' + value + "_id", val[value][0]["ID"]);
                                            $option.attr('data-' + value, val[value][0]["Title"]);
                                        }
                                    }
                                    else if (value.indexOf(".") == -1) {
                                        $option.attr('data-' + value, val[value]);
                                    }
                                    else {
                                        value = value.split(".")[0];
                                        if (val[value] != undefined) {
                                            $option.attr('data-' + value + "_id", val[value]["ID"]);
                                            $option.attr('data-' + value, val[value]["Title"]);
                                        }
                                    }
                                });
                            }
                            // disable neeus ko co 1 trong cac truong
                            if (config.disableAtrrNull.length > 0) {
                                $.each(config.disableAtrrNull, function (index, value) {
                                    if (value.indexOf(".") == -1) {
                                        if ((val[value] == false || val[value] == "" || val[value] == null || val[value] == 0) && $option.attr('data-disa') != 0) {
                                            $option.attr('disabled', 'disabled');
                                        } else {
                                            $option.attr('data-disa', 0);
                                            if ($option.attr('disabled') == 'disabled')
                                                $option.removeAttr('disabled');
                                        }
                                    }
                                    else {
                                        value = value.split(".")[0];
                                        if (val[value] != undefined) {
                                            if (val[value]["ID"] != 0) {
                                                $option.attr('data-disa', 0);
                                                if ($option.attr('disabled') == 'disabled')
                                                    $option.removeAttr('disabled');
                                            } else {
                                                if ($option.attr('data-disa') != 0)
                                                    $option.attr('disabled', 'disabled');
                                            }
                                        }
                                    }
                                });
                            }
                            // disable theo FieldValue
                            var odisableField = {};
                            if (jQuery.isFunction(config.disableFieldValue)) {
                                config.disableFieldValue(odisableField); //
                                if (odisableField != undefined && odisableField != null) {
                                    var temp = odisableField["disableField"];
                                    if (temp != undefined && temp.length > 0) {
                                        $.each(temp, function (index, value) {
                                            if (val[config.FieldValue] == value) {
                                                $option.attr('disabled', 'disabled');
                                            }
                                        });
                                    }
                                }
                            }
                            // disable neeus ko co 1 trong cac giatri
                            if (config.disablediff.length > 0) {
                                if (config.disablediff.indexOf(',' + $option.val() + ',') == -1)
                                    $option.attr('disabled', 'disabled');
                            }
                            $select.append($option);
                        });
                        if (jQuery.isFunction(config.dataBound)) {
                            config.dataBound($select, data); //
                        }
                        //Thêm mới
                        var $disable = $("#" + thisID).attr("data-disable");

                        var $selected = $("#" + thisID).attr("data-selected");
                        if ($selected != undefined && $selected != "")
                            config.IDSelected = $selected;
                        if (config.IDSelected != undefined && config.IDSelected != "" && config.IDSelected != "0") {
                            if (config.IDSelected == 'ALL') {
                                $("#" + thisID + " option").prop("selected", "selected");
                            }
                            else {
                                if ((config.IDSelected.indexOf(",") > -1) && config.phay) {
                                    var res = config.IDSelected.split(",");
                                    res = res.filter(function (v) { return v !== '' });
                                    $.each(res, function (index, value) {
                                        if (config.TemplateValue != '') {
                                            $("#" + thisID + " option[value='" + value + "']").prop("selected", true);
                                            $select.trigger('change');
                                        }
                                        else
                                            $("#" + thisID + " option[value=" + value + "]").prop("selected", true);
                                    });
                                } else {
                                    if (config.TemplateValue != '')
                                        $("#" + thisID + " option[value='" + config.IDSelected + "']").attr('selected', 'selected');
                                    else
                                        $("#" + thisID + " option[value=" + config.IDSelected + "]").attr('selected', 'selected');
                                }
                            }
                            if (config.autochange)
                                $select.trigger('change');
                            //Thêm mới
                            if ($disable != undefined && $disable != "") {
                                //$("#" + thisID).find("li span:first-child").remove();
                                $("#select" + thisID).find("li span:first-child").remove();
                            }
                        } else {
                            if (config.DefaultValue) {
                                console.log($("#" + thisID + " option:first").val());
                                $select.find('option:not(:empty)').first().prop('selected', true);

                                //$("#" + thisID + " option:first").attr('selected', 'selected');
                                if (config.autochange)
                                    $select.trigger('change');
                            }
                        }

                    }
                });
                //console.log(this.options);
                return $(this.elem); // for chaining
            },
            refreshData: function () {
                var config = this.options;
                var $select = $(this.elem);
                if (config.Remove) {
                    $select.html("");
                }

                if (config.Url != "" && config.Url != undefined) {
                    if (!config.Ajax)
                        this.getData();
                    else
                        this.Searching();
                    if (config.autochange)
                        $select.trigger('change');
                    //triger select2.
                }
            },
            // --------------------------------------------------------------------
            someMethod: function () {
                alert('someMethod called');
                return $(this.elem); // for chaining
            },
            Searching: function () {
                var max_width = "100%";
                var thisID = $(this.elem).attr("id");
                var config = this.options;
                var $select = $(this.elem);
                var $place = config.placeholder;
                var $url = config.Url;
                var $selected = $(this.elem).attr("data-selected");
                var userselected = $(this.elem).attr("data-userselected");
                if (($selected == "" || $selected == undefined) && config.ItemID > 0)
                    $selected = config.ItemID;
                var notmultiple = $(this.elem).attr("multiple");
                if (notmultiple != undefined)
                    notmultiple = false;
                else
                    notmultiple = true;
                if (config.width != undefined && config.width != "" && config.width != 0) {
                    max_width = config.width + "px";
                }
                if (($selected != undefined && $selected != "" && $selected != "0" && $selected != "0;#") || (userselected != "" && userselected != undefined)) {
                    var valuesdata = {};

                    if (($selected != undefined && $selected != "" && $selected != "0" && $selected != "0;#")) {
                        var $lstget = $selected;
                        if ($selected.indexOf(";#"))
                            $lstget = $selected.split(";#")[0];


                        valuesdata[config.FieldSearch] = $lstget;
                    }
                    if (userselected != "" && userselected != undefined) {
                        valuesdata["LstIDUser"] = userselected;

                        valuesdata["isGetBylistID"] = true;
                        if ($selected == undefined)
                            $selected = "";
                        else
                            $selected = $selected + "," + userselected;
                    }

                    if (!config.getselectid) {
                        if (jQuery.isFunction(config.parameterPlus)) {
                            config.parameterPlus(valuesdata); //
                        }
                    }
                    $.ajax({
                        url: $url,
                        async: true,
                        contentType: 'application/json',
                        headers: config.headers,
                        //data:{
                        //    lstID: $lstget
                        //    },
                        data: valuesdata,
                        success: function (odata) {
                            var data = odata.Data;
                            var $option = null;
                            var $noi = ' - ';
                            var $noi2 = '-';
                            if (config.lookup) {
                                $noi = ';#';
                                $noi2 = ';#';
                            }
                            //debugger;
                            var KenTemplateText = null;
                            if (config.TemplateText != '')
                                KenTemplateText = kendo.template(config.TemplateText);
                            $.each(data, function (key, val) {
                                var $text = '';
                                var $val = '';
                                if (config.FieldValue.indexOf(",") > 0) {
                                    var resValue = config.FieldValue.split(',');
                                    $.each(resValue, function (key1, val1) {
                                        if ($val == '') {
                                            $val = val[val1];
                                        } else {
                                            $val += $noi2 + val[val1];
                                        }
                                    });
                                } else {
                                    $val = val[config.FieldValue];
                                }
                                if (KenTemplateText != null) {
                                    $text = KenTemplateText(val);
                                } else
                                    $text = val[config.FieldText];
                                $option = $('<option>', { value: $val, text: $text });
                                //set các att cho các option nếu có.
                                if (config.attribute.length > 0) {
                                    $.each(config.attribute, function (index, value) {
                                        if (value.indexOf("..") != -1) {
                                            value = value.split(".")[0];
                                            if (eval("val." + value) != undefined && eval("val." + value).length > 0) {
                                                $option.attr('data-' + value + "_id", eval("val." + value + "[0].ID"));
                                                $option.attr('data-' + value, eval("val." + value + "[0].Title"));
                                                //   objoption['data-' + value] = val[value][0]["Title"];
                                            }
                                        }
                                        else if (value.indexOf(".") == -1) {
                                            $option.attr('data-' + value, eval("val." + value));
                                        } else {
                                            value = value.split(".")[0];
                                            if (eval("val." + value) != undefined) {
                                                var smdata = {};
                                                smdata["data-" + value + "_id"] = eval("val." + value + ".ID");
                                                smdata["data-" + value] = eval("val." + value + ".Title");
                                                $option.attr('data-' + value + "_id", eval("val." + value + ".ID"));
                                                //$option.data('data-' + value + "_id", eval("val." + value + ".ID"));
                                                $option.attr('data-' + value, eval("val." + value + ".Title"));
                                                $option.data("smdata", smdata);

                                                //$option.data('data-' + value, eval("val." + value + ".Title"));
                                                //   objoption['data-' + value] = val[value][0]["Title"];
                                            }
                                        }
                                    });
                                }
                                $select.append($option);
                            });
                            if ($selected != undefined && $selected != "") {
                                if (($selected.indexOf(",") > -1) && config.phay) {
                                    var res = $selected.split(",");
                                    res = res.filter(function (v) { return v !== '' });
                                    $.each(res, function (index, value) {
                                        $("#" + thisID + " option[value=" + value + "]").prop("selected", true);
                                    });
                                } else {
                                    $("#" + thisID + " option[value=" + $selected + "]").prop("selected", true);
                                    if (config.autochange)
                                        $("#" + thisID).change();
                                }
                            }
                            if (jQuery.isFunction(config.dataBoundSelected)) {
                                config.dataBoundSelected(); //
                            }
                        }
                    });
                }
                $select.select2({
                    ajax: {
                        url: $url,
                        dataType: 'json',
                        contentType: 'application/json',
                        delay: 1,
                        headers: config.headers,
                        data: function (params) {
                            var odatapost = {
                                Keyword: params.term, // search term,
                                SearchInSimple: "FullText",
                                //page: params.page || 1,
                                pageSize: (params.term == undefined || params.term.length < 2) ? config.lengthop : config.lengthop + 10
                            };

                            if (jQuery.isFunction(config.parameterPlus)) {
                                config.parameterPlus(odatapost); //
                            }

                            return odatapost;
                        },
                        processResults: function (data, params) {
                            // parse the results into the format expected by Select2
                            // since we are using custom formatting functions we do not need to
                            // alter the remote JSON data, except to indicate that infinite
                            // scrolling can be used
                            params.page = params.page || 1;
                            var odata1 = data;
                            if (!$.isArray(odata1))
                                odata1 = data.Data;
                            var $dataource = {
                                results: $.map(odata1, function (val) {
                                    var $text = '';
                                    var KenTemplateText = null;
                                    if (config.TemplateText != '')
                                        KenTemplateText = kendo.template(config.TemplateText);
                                    if (KenTemplateText != null) {
                                        $text = KenTemplateText(val);
                                    } else
                                        $text = val[config.FieldText];
                                    var $id = '';
                                    KenTemplateText = null;
                                    if (config.TemplateValue != '')
                                        KenTemplateText = kendo.template(config.TemplateValue);
                                    if (KenTemplateText != null) {
                                        $id = KenTemplateText(val);
                                    } else
                                        $id = val[config.FieldValue];
                                    var objoption = {
                                        text: $text,
                                        id: $id
                                    };

                                    if (config.attribute.length > 0) {

                                        $.each(config.attribute, function (index, value) {
                                            if (value.indexOf("..") != -1) {
                                                value = value.split(".")[0];
                                                if (val[value] != undefined && val[value].length > 0) {
                                                    objoption['data-' + value + "_id"] = val[value][0]["ID"];
                                                    objoption['data-' + value] = val[value][0]["Title"];
                                                }
                                            }
                                            else if (value.indexOf(".") == -1) {
                                                objoption['data-' + value] = val[value];
                                            }
                                            else {
                                                value = value.split(".")[0];
                                                if (val[value] != undefined) {
                                                    objoption['data-' + value + "_id"] = val[value]["ID"];
                                                    objoption['data-' + value] = val[value]["Title"];
                                                }
                                            }
                                        });
                                    }
                                    // disable neeus ko co 1 trong cac truong
                                    if (config.disableAtrrNull.length > 0) {
                                        $.each(config.disableAtrrNull, function (index, value) {
                                            if (value.indexOf(".") == -1) {
                                                if ((val[value] == false || val[value] == "" || val[value] == null || val[value] == 0) && objoption['data-disa'] != 0) {
                                                    objoption['disabled'] = 'disabled';
                                                } else {
                                                    objoption['data-disa'] = 0;
                                                    if (objoption['disabled'] == 'disabled')
                                                        objoption['disabled'] = "";
                                                }
                                            }
                                            else {
                                                value = value.split(".")[0];
                                                if (val[value] != undefined) {
                                                    if (val[value]["ID"] != 0) {
                                                        objoption['data-disa'] = 0;
                                                        if (objoption['disabled'] == 'disabled')
                                                            objoption['disabled'] = "";
                                                    } else {
                                                        if (objoption['data-disa'] != 0)
                                                            objoption['disabled'] = 'disabled';
                                                    }
                                                }
                                            }
                                        });
                                    }
                                    // disable theo FieldValue
                                    var odisableField = {};
                                    if (jQuery.isFunction(config.disableFieldValue)) {
                                        config.disableFieldValue(odisableField); //
                                        if (odisableField != undefined && odisableField != null) {
                                            var temp = odisableField["disableField"];
                                            if (temp != undefined && temp.length > 0) {


                                                $.each(temp, function (index, value) {
                                                    if (val[config.FieldValue] == value) {
                                                        objoption['disabled'] = 'disabled'
                                                    }
                                                });
                                            }
                                        }
                                    }
                                    // disable neeus ko co 1 trong cac giatri
                                    if (config.disablediff.length > 0) {
                                        if (config.disablediff.indexOf(',' + objoption.val() + ',') == -1)
                                            objoption['disabled'] = 'disabled';
                                    }

                                    return objoption;
                                }),
                                pagination: {
                                    more: (params.page * 30) < data.total_count
                                }
                            };
                            $select.data("objdata", $dataource);
                            return $dataource;
                        },
                        cache: false
                    },
                    dropdownParent: $select.closest(config.dropdownParent),
                    width: max_width,
                    placeholder: $place,
                    tags: config.tags,
                    allowClear: true,
                    closeOnSelect: config.closeonSelect,
                    minimumInputLength: 0
                    // closeOnSelect: notmultiple
                });
                //$select.trigger('change');
                $select.on("select2:select", function (evt) {
                    var element = evt.params.data.element;
                    var $element = $(element);
                    $element.detach();
                    $(this).append($element);


                    //$(this).trigger("change");
                });

                $select.on('select2:close', function (evt) {
                    var context = $(evt.target);
                    console.log(context);
                    var attrmultiple = $(this).attr('multiple');

                    // For some browsers, `attr` is undefined; for others,
                    // `attr` is false.  Check for both.
                    if (typeof attrmultiple !== typeof undefined && attrmultiple !== false) {
                        // ...
                        setTimeout(function () {
                            //console.log(context.next().find(".select2-search__field"));
                            context.next().find(".select2-search__field").focus();
                        }, 1);

                    } else {
                        // Chonj mootj thi moi auto chon.
                        $(document).on('keydown.select2', function (e) {
                            if (e.which === 9) { // tab
                                var highlighted = context
                                    .data('select2')
                                    .$dropdown
                                    .find('.select2-results__option--highlighted');
                                if (highlighted) {
                                    //highlighted.click();
                                    //console.log(highlighted.data());
                                    var _id = highlighted.attr('data-itemid');
                                    var _text = highlighted.text();
                                    var s2 = context.data('select2');
                                    s2.trigger('select', {
                                        data: { id: _id, text: _text }
                                    });
                                    setTimeout(function () {
                                        //Tab sang element tiep theo.
                                        var $form = context.closest("form");
                                        var fields = $form.find('button, input, textarea, select');
                                        var index = fields.index(context);
                                        if (index > -1 && ((index + 1) < fields.length)) {
                                            fields.eq(index + 1).focus();
                                        }
                                    }, 1);
                                }
                            }
                        });
                        // unbind the event again to avoid binding multiple times
                        setTimeout(function () {
                            $(document).off('keydown.select2');
                        }, 2);
                    }
                });
                if (jQuery.isFunction(config.dataBound)) {
                    config.dataBound(); //
                }
                //$select.trigger('change'); 
            },
            // --------------------------------------------------------------------
            attachEvents: function () {
                var self = this;
                var thisID = $(this.elem).attr("id");
                $(self.elem).on("hover", function (e) {
                    //console.log("hover");
                });
                $(self.elem).on("click", function (e) {
                    //console.log("click");
                });
                //đăng ký sự kiện tab cho input.
            }
        };
    };
    $.fn.smSelect2018V2 = function (options) {
        // create an instance for each element in the set
        return this.each(function () {
            var mysmSelect2018V2 = new smSelect2018V2();
            mysmSelect2018V2.init(options, this);
            // this lets us call methods on the selector
            $(this).data("smSelect2018V2", mysmSelect2018V2);
        });
    };
    var smSelect2018V3 = function () {
        return {
            options: {
                Url: "",
                lengthop: 40,
                FieldValue: "ID",
                FieldText: "Title",
                FieldSearch: "lstID",
                ItemID: 0,
                headers: {},
                TemplateText: "",
                TemplateValue: "",// "#=ID#;\\##=Title#"
                IDSelected: "",
                lookup: false,
                phay: true,
                Ajax: true,
                placeholder: "Chọn",
                isdropdownParent: true,
                dropdownParent: ".k-window",
                Remove: true,
                width: 0,
                async: true,
                tags: false,
                disableAtrrNull: [],
                disablediff: "",
                data: {},
                dataBound: function () {
                    //Hàm sau khi load xong
                },
                parameterPlus: function (para) {
                    // Hàm post dữ liệu.
                },
                disableFieldValue: function (para) {
                    // Hàm post dữ liệu.
                },
                attribute: [], // ["ID","Title"],
                getselectid: false
            },
            // --------------------------------------------------------------------
            init: function (options, element) {
                //console.log("init");
                this.options = $.extend(this.options, options);
                var $option = this.options;
                // Khởi tạo thông tin để lấy dữ liệu.
                // Post de lay du lieu ve hien thi.
                var max_width = "100%"; //$this.width() + 12;
                this.elem = element;
                var thisID = $(this.elem).attr("id");
                //console.log(thisID);
                //set value cho option nếu có khi set trên att
                var $select = $("#" + thisID);
                var $place = $(this.elem).attr("data-place");

                var $selected = $(this.elem).attr("data-selected");
                var $url = $(this.elem).attr("data-url");
                if ($url !== undefined && $url !== "") {
                    this.options.Url = $url;
                }
                if (this.options.width !== undefined && this.options.width !== "" && this.options.width != 0) {
                    max_width = this.options.width + "px";
                }
                if ($place != undefined && $place != "") {
                    this.options.placeholder = $place;
                }
                if ($selected != undefined && $selected != "") {
                    this.options.IDSelected = $selected;
                }
                if (this.options.Url == undefined || this.options.Url == "")
                    this.options.Ajax = false;
                if (!this.options.Ajax) {
                    if (this.options.IDSelected == undefined && config.ItemID != 0) {
                        this.options.IDSelected = this.options.ItemID;
                    }
                    $select.select2({
                        dropdownParent: $select.closest(this.options.dropdownParent),
                        width: max_width,
                        placeholder: this.options.placeholder,
                        allowClear: true,
                        tags: this.options.tags,
                        //closeOnSelect: true,
                    });
                    if (this.options.Url != "" && this.options.Url != undefined) {
                        this.getData();
                        //triger select2.
                    } else {
                    }
                } else {
                    if (this.options.Url != "" && this.options.Url != undefined)
                        this.Searching();
                    else
                        $select.select2({
                            dropdownParent: $select.closest(this.options.dropdownParent),
                            width: max_width,
                            placeholder: this.options.placeholder,
                            allowClear: true,
                            //closeOnSelect: true,
                            tags: this.options.tags,
                        });
                }
                this.attachEvents();
            },
            getData: function () {
                var thisID = $(this.elem).attr("id");
                var config = this.options;
                //set value cho option nếu có khi set trên att

                var $select = $(this.elem);
                // Hàm set add html cho thẻ select.
                if (config.Remove) {
                    $select.html("");
                }
                if (jQuery.isFunction(config.parameterPlus)) {
                    config.parameterPlus(config.data); //
                }
                if (!$select.prop('multiple') && config.isdropdownParent) { //Không phải multi thì mới add
                    $select.append($('<option>', { value: '', text: '' }));
                }
                $.ajax({
                    url: config.Url,
                    async: config.async,
                    data: config.data,
                    success: function (odata) {
                        var data = odata.Data;
                        var $option = null;
                        $.each(data, function (key, val) {
                            var $noi = ' - ';
                            var $noi2 = '-';
                            if (config.lookup) {
                                $noi = ';#';
                                $noi2 = ';#';
                            }
                            if (config.FieldText.indexOf(",") > 0 || config.FieldValue.indexOf(",") > 0) {
                                var res = config.FieldText.split(',');
                                var $text = '';
                                $.each(res, function (key1, val1) {
                                    if ($text == '') {
                                        $text = val[val1];
                                    } else {
                                        $text += $noi + val[val1];
                                    }
                                });
                                var resValue = config.FieldValue.split(',');
                                var $val = '';
                                $.each(resValue, function (key1, val1) {
                                    if ($val == '') {
                                        $val = val[val1];
                                    } else {
                                        $val += $noi2 + val[val1];
                                    }
                                });
                                $option = $('<option>', { value: $val, text: $text });
                                //$select.append($('<option>', { value: $val, text: $text }));
                            } else {
                                $option = $('<option>', { value: val[config.FieldValue], text: val[config.FieldText] });
                            }
                            //set các att cho các option nếu có.
                            if (config.attribute.length > 0) {
                                $.each(config.attribute, function (index, value) {
                                    if (value.indexOf("..") != -1) {
                                        value = value.split(".")[0];
                                        if (val[value] != undefined && val[value].length > 0) {
                                            $option.attr('data-' + value + "_id", val[value][0]["ID"]);
                                            $option.attr('data-' + value, val[value][0]["Title"]);
                                        }
                                    }
                                    else if (value.indexOf(".") == -1) {
                                        $option.attr('data-' + value, val[value]);
                                    }
                                    else {
                                        value = value.split(".")[0];
                                        if (val[value] != undefined) {
                                            $option.attr('data-' + value + "_id", val[value]["ID"]);
                                            $option.attr('data-' + value, val[value]["Title"]);
                                        }
                                    }
                                });
                            }
                            // disable neeus ko co 1 trong cac truong
                            if (config.disableAtrrNull.length > 0) {
                                $.each(config.disableAtrrNull, function (index, value) {
                                    if (value.indexOf(".") == -1) {
                                        if ((val[value] == false || val[value] == "" || val[value] == null || val[value] == 0) && $option.attr('data-disa') != 0) {
                                            $option.attr('disabled', 'disabled');
                                        } else {
                                            $option.attr('data-disa', 0);
                                            if ($option.attr('disabled') == 'disabled')
                                                $option.removeAttr('disabled');
                                        }
                                    }
                                    else {
                                        value = value.split(".")[0];
                                        if (val[value] != undefined) {
                                            if (val[value]["ID"] != 0) {
                                                $option.attr('data-disa', 0);
                                                if ($option.attr('disabled') == 'disabled')
                                                    $option.removeAttr('disabled');
                                            } else {
                                                if ($option.attr('data-disa') != 0)
                                                    $option.attr('disabled', 'disabled');
                                            }
                                        }
                                    }
                                });
                            }
                            // disable neeus ko co 1 trong cac giatri
                            if (config.disablediff.length > 0) {
                                if (config.disablediff.indexOf(',' + $option.val() + ',') == -1)
                                    $option.attr('disabled', 'disabled');
                            }
                            $select.append($option);
                        });
                        if (jQuery.isFunction(config.dataBound)) {
                            config.dataBound(); //
                        }

                        var $selected = $("#" + thisID).attr("data-selected");
                        if ($selected != undefined && $selected != "")
                            config.IDSelected = $selected;
                        if (config.IDSelected != undefined && config.IDSelected != "") {
                            if ((config.IDSelected.indexOf(",") > -1) && config.phay) {
                                var res = config.IDSelected.split(",");
                                res = res.filter(function (v) { return v !== '' });
                                $.each(res, function (index, value) {
                                    $("#" + thisID + " option[value=" + value + "]").prop("selected", true);
                                });
                            } else {
                                $("#" + thisID + " option[value=" + config.IDSelected + "]").attr('selected', 'selected');
                            }
                        }
                        $select.trigger('change');
                    }
                });
                //console.log(this.options);
                return $(this.elem); // for chaining
            },
            refreshData: function () {
                var config = this.options;
                var $select = $(this.elem);
                if (config.Remove) {
                    $select.html("");
                }

                if (config.Url != "" && config.Url != undefined) {
                    if (!config.Ajax)
                        this.getData();
                    else
                        this.Searching();
                    $select.trigger('change');
                    //triger select2.
                }
            },
            // --------------------------------------------------------------------
            someMethod: function () {
                alert('someMethod called');
                return $(this.elem); // for chaining
            },
            Searching: function () {

                var max_width = "100%";
                var thisID = $(this.elem).attr("id");
                var config = this.options;
                var $select = $(this.elem);
                var $place = config.placeholder;
                var $url = config.Url;
                var $selected = $(this.elem).attr("data-selected");
                var userselected = $(this.elem).attr("data-userselected");
                if (($selected == "" || $selected == undefined) && config.ItemID > 0)
                    $selected = config.ItemID;
                var notmultiple = $(this.elem).attr("multiple");
                if (notmultiple != undefined)
                    notmultiple = false;
                else
                    notmultiple = true;
                if (config.width != undefined && config.width != "" && config.width != 0) {
                    max_width = config.width + "px";
                }
                if (($selected != undefined && $selected != "" && $selected != "0" && $selected != "0;#") || (userselected != "" && userselected != undefined)) {
                    var valuesdata = {};
                    valuesdata["isGetBylistID"] = true;
                    valuesdata["pageSize"] = config.lengthop;
                    if (($selected != undefined && $selected != "" && $selected != "0" && $selected != "0;#")) {
                        var $lstget = $selected;
                        if ($selected.indexOf(";#"))
                            $lstget = $selected.split(";#")[0];


                        valuesdata[config.FieldSearch] = $lstget;

                    }
                    if (userselected != "" && userselected != undefined) {
                        valuesdata["LstIDUser"] = userselected;

                        valuesdata["isGetBylistID"] = true;
                        if ($selected == undefined)
                            $selected = "";
                        else
                            $selected = $selected + "," + userselected;
                    }

                    if (!config.getselectid) {
                        if (jQuery.isFunction(config.parameterPlus)) {
                            config.parameterPlus(valuesdata); //
                        }
                    }
                    $.ajax({
                        url: $url,
                        async: true,
                        headers: config.headers,
                        //data:{
                        //    lstID: $lstget
                        //    },
                        data: valuesdata,
                        success: function (odata) {
                            var data = odata.Data;
                            var $option = null;
                            var $noi = ' - ';
                            var $noi2 = '-';
                            if (config.lookup) {
                                $noi = ';#';
                                $noi2 = ';#';
                            }
                            var KenTemplateText = null;
                            if (config.TemplateText != '')
                                KenTemplateText = kendo.template(config.TemplateText);
                            $.each(data, function (key, val) {
                                var $text = '';
                                var $val = '';
                                if (config.FieldValue.indexOf(",") > 0) {
                                    var resValue = config.FieldValue.split(',');
                                    $.each(resValue, function (key1, val1) {
                                        if ($val == '') {
                                            $val = val[val1];
                                        } else {
                                            $val += $noi2 + val[val1];
                                        }
                                    });
                                } else {
                                    $val = val[config.FieldValue];
                                }
                                if (KenTemplateText != null) {
                                    $text = KenTemplateText(val);
                                } else
                                    $text = val[config.FieldText];
                                $option = $('<option>', { value: $val, text: $text });
                                //set các att cho các option nếu có.
                                if (config.attribute.length > 0) {

                                    $.each(config.attribute, function (index, value) {
                                        if (value.indexOf("..") != -1) {
                                            value = value.split(".")[0];
                                            if (eval("val." + value) != undefined && eval("val." + value).length > 0) {
                                                $option.attr('data-' + value + "_id", eval("val." + value + "[0].ID"));
                                                $option.attr('data-' + value, eval("val." + value + "[0].Title"));
                                                //   objoption['data-' + value] = val[value][0]["Title"];
                                            }
                                        }
                                        else if (value.indexOf(".") == -1) {
                                            $option.attr('data-' + value, eval("val." + value));
                                        } else {
                                            value = value.split(".")[0];
                                            if (eval("val." + value) != undefined) {
                                                var smdata = {};
                                                smdata["data-" + value + "_id"] = eval("val." + value + ".ID");
                                                smdata["data-" + value] = eval("val." + value + ".Title");
                                                $option.attr('data-' + value + "_id", eval("val." + value + ".ID"));
                                                //$option.data('data-' + value + "_id", eval("val." + value + ".ID"));
                                                $option.attr('data-' + value, eval("val." + value + ".Title"));
                                                $option.data("smdata", smdata);

                                                //$option.data('data-' + value, eval("val." + value + ".Title"));
                                                //   objoption['data-' + value] = val[value][0]["Title"];
                                            }
                                        }
                                    });
                                }
                                $select.append($option);
                            });
                            if ($selected != undefined && $selected != "") {
                                if (($selected.indexOf(",") > -1) && config.phay) {
                                    var res = $selected.split(",");
                                    res = res.filter(function (v) { return v !== '' });
                                    $.each(res, function (index, value) {
                                        $("#" + thisID + " option[value=" + value + "]").prop("selected", true);
                                    });
                                } else {
                                    $("#" + thisID + " option[value=" + $selected + "]").prop("selected", true);
                                    $("#" + thisID).change();
                                }
                            }
                        }
                    });
                }
                $select.select2({
                    ajax: {
                        url: $url,
                        dataType: 'json',
                        delay: 1,
                        headers: config.headers,
                        data: function (params) {
                            var odatapost = {
                                Keyword: params.term, // search term,
                                SearchInSimple: "Title",
                                //page: params.page || 1,
                                pageSize: (params.term == undefined || params.term.length < 2) ? config.lengthop : config.lengthop + 10
                            };

                            if (jQuery.isFunction(config.parameterPlus)) {
                                config.parameterPlus(odatapost); //
                            }

                            return odatapost;
                        },
                        processResults: function (data, params) {
                            // parse the results into the format expected by Select2
                            // since we are using custom formatting functions we do not need to
                            // alter the remote JSON data, except to indicate that infinite
                            // scrolling can be used
                            params.page = params.page || 1;
                            var odata1 = data;
                            if (!$.isArray(odata1))
                                odata1 = data.Data;
                            var $dataource = {
                                results: $.map(odata1, function (val) {
                                    var $text = '';
                                    var KenTemplateText = null;
                                    if (config.TemplateText != '')
                                        KenTemplateText = kendo.template(config.TemplateText);
                                    if (KenTemplateText != null) {
                                        $text = KenTemplateText(val);
                                    } else
                                        $text = val[config.FieldText];
                                    var $id = '';
                                    KenTemplateText = null;
                                    if (config.TemplateValue != '')
                                        KenTemplateText = kendo.template(config.TemplateValue);
                                    if (KenTemplateText != null) {
                                        $id = KenTemplateText(val);
                                    } else
                                        $id = val[config.FieldValue];
                                    var objoption = {
                                        text: $text,
                                        id: $id
                                    };

                                    if (config.attribute.length > 0) {

                                        $.each(config.attribute, function (index, value) {
                                            if (value.indexOf("..") != -1) {
                                                value = value.split(".")[0];
                                                if (val[value] != undefined && val[value].length > 0) {
                                                    objoption['data-' + value + "_id"] = val[value][0]["ID"];
                                                    objoption['data-' + value] = val[value][0]["Title"];
                                                }
                                            }
                                            else if (value.indexOf(".") == -1) {
                                                objoption['data-' + value] = val[value];
                                            }
                                            else {
                                                value = value.split(".")[0];
                                                if (val[value] != undefined) {
                                                    objoption['data-' + value + "_id"] = val[value]["ID"];
                                                    objoption['data-' + value] = val[value]["Title"];
                                                }
                                            }
                                        });
                                    }
                                    // disable neeus ko co 1 trong cac truong
                                    if (config.disableAtrrNull.length > 0) {
                                        $.each(config.disableAtrrNull, function (index, value) {
                                            if (value.indexOf(".") == -1) {
                                                if ((val[value] == false || val[value] == "" || val[value] == null || val[value] == 0) && objoption['data-disa'] != 0) {
                                                    objoption['disabled'] = 'disabled';
                                                } else {
                                                    objoption['data-disa'] = 0;
                                                    if (objoption['disabled'] == 'disabled')
                                                        objoption['disabled'] = "";
                                                }
                                            }
                                            else {
                                                value = value.split(".")[0];
                                                if (val[value] != undefined) {
                                                    if (val[value]["ID"] != 0) {
                                                        objoption['data-disa'] = 0;
                                                        if (objoption['disabled'] == 'disabled')
                                                            objoption['disabled'] = "";
                                                    } else {
                                                        if (objoption['data-disa'] != 0)
                                                            objoption['disabled'] = 'disabled';
                                                    }
                                                }
                                            }
                                        });
                                    }
                                    // disable theo FieldValue
                                    var odisableField = {};
                                    if (jQuery.isFunction(config.disableFieldValue)) {
                                        config.disableFieldValue(odisableField); //
                                        if (odisableField != undefined && odisableField != null) {
                                            var temp = odisableField["disableField"];
                                            if (temp != undefined && temp.length > 0) {
                                                $.each(temp, function (index, value) {
                                                    if (val[config.FieldValue] == value) {
                                                        objoption['disabled'] = 'disabled'
                                                    }
                                                });
                                            }
                                        }
                                    }
                                    // disable neeus ko co 1 trong cac giatri
                                    if (config.disablediff.length > 0) {
                                        if (config.disablediff.indexOf(',' + objoption.val() + ',') == -1)
                                            objoption['disabled'] = 'disabled';
                                    }

                                    return objoption;
                                }),
                                pagination: {
                                    more: (params.page * 30) < data.total_count
                                }
                            };
                            $select.data("objdata", $dataource);
                            return $dataource;
                        },
                        cache: false
                    },
                    dropdownParent: $select.closest(config.dropdownParent),
                    width: max_width,
                    placeholder: $place,
                    tags: config.tags,
                    allowClear: true,
                    //closeOnSelect: true,
                    minimumInputLength: 0
                    // closeOnSelect: notmultiple
                });
                //$select.trigger('change');
                $select.on("select2:select", function (evt) {
                    var element = evt.params.data.element;
                    var $element = $(element);
                    $element.detach();
                    $(this).append($element);


                    //$(this).trigger("change");
                });

                $select.on('select2:close', function (evt) {
                    var context = $(evt.target);
                    console.log(context);
                    var attrmultiple = $(this).attr('multiple');

                    // For some browsers, `attr` is undefined; for others,
                    // `attr` is false.  Check for both.
                    if (typeof attrmultiple !== typeof undefined && attrmultiple !== false) {
                        // ...
                        setTimeout(function () {
                            //console.log(context.next().find(".select2-search__field"));
                            context.next().find(".select2-search__field").focus();
                        }, 1);

                    } else {
                        // Chonj mootj thi moi auto chon.
                        $(document).on('keydown.select2', function (e) {
                            if (e.which === 9) { // tab
                                var highlighted = context
                                    .data('select2')
                                    .$dropdown
                                    .find('.select2-results__option--highlighted');
                                if (highlighted) {
                                    //highlighted.click();
                                    //console.log(highlighted.data());
                                    var _id = highlighted.attr('data-itemid');
                                    var _text = highlighted.text();
                                    var s2 = context.data('select2');
                                    s2.trigger('select', {
                                        data: { id: _id, text: _text }
                                    });
                                    setTimeout(function () {
                                        //Tab sang element tiep theo.
                                        var $form = context.closest("form");
                                        var fields = $form.find('button, input, textarea, select');
                                        var index = fields.index(context);
                                        if (index > -1 && ((index + 1) < fields.length)) {
                                            fields.eq(index + 1).focus();
                                        }
                                    }, 1);
                                }
                            }
                        });
                        // unbind the event again to avoid binding multiple times
                        setTimeout(function () {
                            $(document).off('keydown.select2');
                        }, 2);
                    }
                });
                if (jQuery.isFunction(config.dataBound)) {
                    config.dataBound(); //
                }
                //$select.trigger('change'); 
            },
            // --------------------------------------------------------------------
            attachEvents: function () {
                var self = this;
                var thisID = $(this.elem).attr("id");
                $(self.elem).on("hover", function (e) {
                    //console.log("hover");
                });
                $(self.elem).on("click", function (e) {
                    //console.log("click");
                });
                //đăng ký sự kiện tab cho input.
            }
        };
    };
    //$.fn.getatribute = function () {
    $.fn.smSelect2018V3 = function (options) {
        // create an instance for each element in the set
        return this.each(function () {
            var mysmSelect2018V2 = new smSelect2018V3();
            mysmSelect2018V2.init(options, this);
            // this lets us call methods on the selector
            $(this).data("smSelect2018V3", mysmSelect2018V2);
        });
    };
    // Đăng ký grid báo cáo.    
    var siGridThongKeV2 = function () {

        return {
            options: {
                UrlAction: "",
                oData: {},
                objectarr: false,
                object: false,
                oText: false,
                siGroup: null,
                cols: 0,
                isGroupClient: false,
                _HtmlTempTitle: '#=smField#: #=Value#',
                templatehtmltr: "#javascriptTemplate",
                objTitle: [],
                Finish: function (settings) {

                },
                onLoaded: function (oDataGrid) {

                }//,
                //Sort: [] //[{ field: "ID", dir: "desc" }],
            },
            // --------------------------------------------------------------------
            init: function (options, element) {
                console.log("init");
                this.options = $.extend(this.options, options);

                // Khởi tạo thông tin để lấy dữ liệu.
                // Post de lay du lieu ve hien thi.
                this.elem = element;
                this.attachEvents();
                this.initializerGrid();
                var idzone = element.id;
                $("#" + idzone + " th a.k-link").unbind();
                $("#" + idzone + " th a.k-link").click(function () {
                    var _field = $(this).attr('data-field');
                    var _asc = $(this).attr('data-sort');
                    if (_asc == undefined || _asc == null)
                        _asc = "asc";
                    if (_asc == "asc") {
                        $(this).attr("data-sort", "desc");
                        $("#" + idzone + " th a.k-link span").html("");
                        this.children[0].innerHTML = '<i class="fa fa-sort-amount-desc" aria-hidden="true"></i>';
                    }
                    else {
                        $(this).attr('data-sort', 'asc');
                        $("#" + idzone + " th a.k-link span").html("");
                        this.children[0].innerHTML = '<i class="fa fa-sort-amount-asc" aria-hidden="true"></i>';
                    }
                    //this.options.Sort = ;
                    //asc
                    //refesh laij grid.
                    _asc = $(this).attr('data-sort');
                    $("#" + idzone).data("siGridThongKe").RenderGrid([{ _field: _field, dir: _asc }]);
                    //this.RenderGrid([{ _field: _field, dir: _asc }]);
                });
            },
            RenderGrid: function (Sort) {
                var config = this.options;
                var idzone = this.elem.id;

                var _cols = 0;
                if (_cols == 0) {
                    _cols = $('#' + idzone + " .smtable thead tr th").length + 1;
                }
                if (Sort != null && Sort.length > 0) {
                    config.oData["GridSort"] = Sort;
                }
                loading(idzone);
                $.post(config.UrlAction, config.oData, function (data) {
                    var htmlTEmp = '';
                    var templatehtmltr = kendo.template($(config.templatehtmltr).html());
                    var templateGroup = kendo.template(config._HtmlTempTitle);
                    var stt = 0;
                    var _GroupGoc = '_1';
                    var $STTGroup = -1;
                    var OTitle = [];
                    if (data.Data.length > 0) {
                        for (var i = 0; i < data.Data.length; i++) {
                            if (config.siGroup != null && config.siGroup.length > 0) {
                                var FieldGroup = config.siGroup[0].Field;
                                var FieldGrouptitle = config.siGroup[0].Title;
                                //Gộp nhóm
                                if (config.oText) {
                                    if (_GroupGoc != data.Data[i][FieldGroup]) {
                                        $STTGroup++;
                                        _GroupGoc = data.Data[i][FieldGroup];
                                        if (_GroupGoc != "" && _GroupGoc != undefined && _GroupGoc != null)
                                            var _GroupGoc1 = _GroupGoc.split("#")[1];
                                        htmlTEmp += '<tr class="si-group-tr"><td colspan="' + _cols + '">' +
                                            '<p class="si-reset" style="text-align:left"><a class="k-icon k-i-collapse" href="javascript:;" tabindex="-1" aria-label="Collapse"></a><span class="siTitleGroup"><b>' + _GroupGoc + '</b></span></p>' +
                                            '</td></tr>';
                                        OTitle.push({ STT: $STTGroup, smField: FieldGroup, Value: _GroupGoc1 });

                                    }
                                } else if (config.object) {
                                    if (jQuery.type(data.Data[i][FieldGroup]) == "array") {
                                        if (data.Data[i][FieldGroup].length > 0) {
                                            //fix lại phần title join string.
                                            //14/12
                                            var Titles = data.Data[i][FieldGroup].map(function (v) {
                                                return v.Title;
                                            });
                                            var _newtitle = Titles.join(",");
                                            if (_GroupGoc != _newtitle) {
                                                $STTGroup++;
                                                _GroupGoc = _newtitle;
                                                htmlTEmp += '<tr class="si-group-tr"><td colspan="' + _cols + '">' +
                                                    '<p class="si-reset" style="text-align:left"><a class="k-icon k-i-collapse" href="javascript:;" tabindex="-1" aria-label="Collapse"></a><span class="siTitleGroup"><b>' + _GroupGoc + '</b></span></p>' +
                                                    '</td></tr>';
                                                OTitle.push({ STT: $STTGroup, smField: FieldGroup, Value: _GroupGoc });
                                            }
                                        } else {
                                            if (_GroupGoc != "Khác") {
                                                $STTGroup++;
                                                _GroupGoc = "Khác";
                                                htmlTEmp += '<tr class="si-group-tr"><td colspan="' + _cols + '">' +
                                                    '<p class="si-reset" style="text-align:left"><a class="k-icon k-i-collapse" href="javascript:;" tabindex="-1" aria-label="Collapse"></a><span class="siTitleGroup"><b>' + _GroupGoc + '</b></span></p>' +
                                                    '</td></tr>';
                                                OTitle.push({ STT: $STTGroup, smField: FieldGroup, Value: _GroupGoc });
                                            }
                                        }
                                    }

                                    else if (_GroupGoc != data.Data[i][FieldGroup].Title) {
                                        $STTGroup++;
                                        _GroupGoc = data.Data[i][FieldGroup].Title;
                                        htmlTEmp += '<tr class="si-group-tr"><td colspan="' + _cols + '">' +
                                            '<p class="si-reset" style="text-align:left"><a class="k-icon k-i-collapse" href="javascript:;" tabindex="-1" aria-label="Collapse"></a><span class="siTitleGroup"><b>' + _GroupGoc + '</b></span></p>' +
                                            '</td></tr>';
                                        OTitle.push({ STT: $STTGroup, smField: FieldGroup, Value: _GroupGoc });
                                        stt = 0;

                                    }
                                } else if (config.objectarr) {
                                    if ((data.Data[i][FieldGroup].length > 0 && _GroupGoc != data.Data[i][FieldGroup][0].Title)) {
                                        $STTGroup++;
                                        _GroupGoc = data.Data[i][FieldGroup][0].Title;
                                        htmlTEmp += '<tr class="si-group-tr"><td colspan="' + _cols + '">' +
                                            '<p class="si-reset" style="text-align:left"><a class="k-icon k-i-collapse" href="javascript:;" tabindex="-1" aria-label="Collapse"></a><span class="siTitleGroup"><b>' + _GroupGoc + '</b></span></p>' +
                                            '</td></tr>';
                                        OTitle.push({ STT: $STTGroup, smField: FieldGroup, Value: _GroupGoc });
                                        stt = 0;
                                    } else if ((_GroupGoc != "Khác" && data.Data[i][FieldGroup].length == 0)) {

                                        $STTGroup++;
                                        _GroupGoc = "Khác";
                                        htmlTEmp += '<tr class="si-group-tr"><td colspan="' + _cols + '">' +
                                            '<p class="si-reset" style="text-align:left"><a class="k-icon k-i-collapse" href="javascript:;" tabindex="-1" aria-label="Collapse"></a><span class="siTitleGroup"><b>' + _GroupGoc + '</b></span></p>' +
                                            '</td></tr>';
                                        OTitle.push({ STT: $STTGroup, smField: FieldGroup, Value: _GroupGoc });
                                        stt = 0;
                                    }

                                } else {

                                    if (_GroupGoc != data.Data[i][FieldGroup]) {
                                        $STTGroup++;
                                        _GroupGoc = data.Data[i][FieldGroup];
                                        htmlTEmp += '<tr class="si-group-tr"><td colspan="' + _cols + '">' +
                                            '<p class="si-reset" style="text-align:left"><a class="k-icon k-i-collapse" href="javascript:;" tabindex="-1" aria-label="Collapse"></a><span class="siTitleGroup"><b>' + _GroupGoc + '<b></span></p>' +
                                            '</td></tr>';
                                        OTitle.push({ STT: $STTGroup, smField: FieldGroup, Value: _GroupGoc });
                                        stt = 0;

                                    }
                                }
                            }
                            data.Data[i]["STT"] = ++stt;
                            htmlTEmp += templatehtmltr(data.Data[i]);
                            //if ($STTGroup > 19) {
                            //    debugger;
                            //}
                            for (var j = 0; j < config.objTitle.length; j++) {
                                var objPro = config.objTitle[j];
                                if (objPro.Type == 1) {
                                    if (OTitle[$STTGroup][objPro.Field] == undefined) { //Kiểu số
                                        OTitle[$STTGroup][objPro.Field] = 0;
                                    }
                                    if (objPro["CongThuc"] == "SUM") {
                                        OTitle[$STTGroup][objPro.Field] += data.Data[i][objPro.Value];
                                    } else if (objPro["CongThuc"] == "Auto") {
                                        OTitle[$STTGroup][objPro.Field]++;
                                    }
                                }
                                if (objPro.Type == 0) {
                                    OTitle[$STTGroup][objPro.Field] = eval("data.Data[i]." + objPro.Value);// data.Data[i][objPro.Value];
                                }
                            }

                        }
                        endLoading(idzone);
                        $(".mainContentBaoCao .clsContent").html(htmlTEmp);
                        //hiển thị tổng số bản ghi
                        var tongso = $(".mainContentBaoCao").find("#tongbanghi");
                        if (tongso.length > 0)
                            $("#tongbanghi").html("Tổng số <b>" + data.Data.length + "</b> bản ghi");
                        //$(".mainContentBaoCao .clsContent").append(htmlTEmp);
                        if (config.siGroup != null && config.siGroup.length > 0) {
                            var temp = $(".smtable thead tr th").length;
                            //if ($(".smtable thead tr th").length < _cols) {
                            //    $(".smtable thead tr").not(".group-cell").prepend("<th class='si-group-cell'></th>");
                            //    $(".smtable tbody tr").not(".group-cell").prepend("<td class='si-group-cell'></td>");
                            //    $(".smtable thead tr").addClass("group-cell");
                            //}
                            //if ($(".smtable tbody tr td").length < _cols)
                            //for các thẻ tr group set text cho nó.
                            //$(".smtable_content .si-group-tr span.siTitleGroup").each(function (index) {
                            //    $(this).html(templateGroup(OTitle[index]));
                            //});
                        }
                        config.onLoaded(data);
                        config.Finish();
                    }
                    else {
                        endLoading(idzone);
                    }
                });
            },
            // --------------------------------------------------------------------
            initializerGrid: function () {
                this.RenderGrid(null);

            },
            someMethod: function () {
                alert('someMethod called');
                return $(this.elem); // for chaining
            },
            // --------------------------------------------------------------------
            attachEvents: function () {
                var self = this;
                $(self.elem).on("hover", function (e) {
                    console.log("hover");
                });
                $(self.elem).on("click", function (e) {
                    //console.log("click");
                });

            }
        };
    };
    $.fn.siGridThongKeV2 = function (options) {
        // create an instance for each element in the set

        return this.each(function () {
            var mysiGridThongKe = new siGridThongKeV2();
            mysiGridThongKe.init(options, this);
            // this lets us call methods on the selector
            $(this).data("siGridThongKe", mysiGridThongKe);

        });


    };

})(jQuery);
function formatDateTime(strValue) {
    if (strValue == null) return "";
    //var date = new Date(strValue);
    var d = new Date(strValue);
    var month = d.getMonth() + 1;
    var day = d.getDate();
    var hour = d.getHours();
    var minute = d.getMinutes();
    var second = d.getSeconds();
    var output = (('' + hour).length < 2 ? '0' : '') + hour + ':' +
        (('' + minute).length < 2 ? '0' : '') + minute + ' ' +
        (('' + day).length < 2 ? '0' : '') + day + '/' + month + '/' +
        d.getFullYear();
    //return date.format('HH:mm') + ' ngày ' +  date.format('dd/MM/yyyy');
    return output;
    //return date.format('HH:mm') + ' ngày ' +  date.format('dd/MM/yyyy');
}
//Nếu là dữ liệu lấy ra từ solr.
//var subbed = new Date(olddate - 3*60*60*1000); // subtract 3 hours
function formatDateTimeSolr(strValue) {
    return formatDateTime(strValue);
    //if (strValue == null) return "";
    ////var date = new Date(strValue);
    //var d = new Date(strValue);
    //d = new Date(d - 7 * 60 * 60 * 1000); // subtract 3 hours
    //var month = d.getMonth() + 1;
    //var day = d.getDate();
    //var hour = d.getHours();
    //var minute = d.getMinutes();
    //var second = d.getSeconds();
    //var output = (('' + hour).length < 2 ? '0' : '') + hour + ':' +
    //    (('' + minute).length < 2 ? '0' : '') + minute + ' ' +
    //    (('' + day).length < 2 ? '0' : '') + day + '/' +
    //    (('' + month).length < 2 ? '0' : '') + month + '/' +
    //    d.getFullYear();
    ////return date.format('HH:mm') + ' ngày ' +  date.format('dd/MM/yyyy');
    //return output;
    //return date.format('HH:mm') + ' ngày ' +  date.format('dd/MM/yyyy');
}
function formatDate(strValue) {
    if (strValue == null) return "";
    //var date = new Date(strValue);
    var d = new Date(strValue);
    var month = d.getMonth() + 1;
    var day = d.getDate();
    var output = //(('' + hour).length < 2 ? '0' : '') + hour + ':' +
        //(('' + minute).length < 2 ? '0' : '') + minute + " ngày " +
        (('' + day).length < 2 ? '0' : '') + day + '/' +
        (('' + month).length < 2 ? '0' : '') + month + '/' +
        d.getFullYear();
    return output;
}
function addCommas(nStr) {
    nStr += '';
    var x = nStr.split('.');
    x1 = x[0];
    x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + ',' + '$2');
    }
    return x1 + x2;
}
function updateEditor() {
    for (var name in CKEDITOR.instances)
        CKEDITOR.instances[name].updateElement();
}
function getCurrentSelectedTreeView(treeName) {
    // lay thong tin tu tree donvi
    var treeview_donvi = $("#" + treeName).data("kendoTreeView");
    // lay current select node
    var currentNode = treeview_donvi.select();
    // lay id cua don vi
    var id = currentNode.attr("id");
    return id;
}
function openDialogView(stitle, urlpageLoad, data, size, funcCallBack) {
    BootstrapDialog.show({
        type: 'type-default',
        title: stitle,
        message: function (dialog) {
            var $message = dialog.getModalBody();
            //var $processBar = $(processHtml);
            //$message.html($processBar);
            //$processBar.progressbar();
            if (data != undefined)
                $message.load(urlpageLoad, data, function (response, status, xhr) { });
            else
                $message.load(urlpageLoad, data);
            if (size == "NORMAL")
                dialog.setSize(BootstrapDialog.SIZE_NORMAL);
            else if (size == "SMALL")
                dialog.setSize(BootstrapDialog.SIZE_SMALL);
            else if (size == "LARGE")
                dialog.setSize(BootstrapDialog.SIZE_LARGE);
            else if (size == "FULL")
                dialog.setSize(BootstrapDialog.SIZE_FULL);
            else
                dialog.setSize(BootstrapDialog.SIZE_WIDE);
            return "";
        },
        closable: true,
        closeByBackdrop: true,
        draggable: true,
        onshown: function (dialogRef) {
            if (funcCallBack != undefined && jQuery.isFunction(funcCallBack)) {
                funcCallBack(); //
            }
        },
    });
}
function openDialogMsg(stitle, sMsg, funcCall) {
    BootstrapDialog.show({
        title: stitle,
        cssClass: 'bootstrap-dialog-message',
        message: function () {
            var $content = '<div>' + sMsg + '</div>';
            return $content;
        },
        closable: true,
        draggable: true,
        buttons: [
            {
                id: 'btn-1',
                label: "Đóng",
                action: function (dialogRef) {
                    dialogRef.close();
                    if (funcCall != undefined && jQuery.isFunction(funcCall)) {
                        funcCall();
                    }
                }
            }]
    });
}
function GetTitleTrangThaiByMa(maTT) {
    var status = "";
    switch (maTT) {
        case "10":
            status = "Hoàn thành tạo lập";
            break;
        case "20":
            status = "Đang trình duyệt";
            break;
        case "30":
            status = "Đã phê duyệt";
            break;
        case "40":
            status = "Đã xuất bản";
            break;
        case "50":
            status = "Đang xin ý kiến";
            break;
        case "501":
            status = "Đang trình xin ý kiến";
            break;
        case "502":
            status = "Đã duyệt xin ý kiến";
            break;
        case "503":
            status = "Đang chờ cho ý kiến";
            break;
        case "504":
            status = "Đã cho ý kiến";
            break;
        case "505":
            status = "Hoàn thành cho ý kiến";
            break;
        case "603":
            status = "Chờ tiếp nhận";
            break;
        case "604":
            status = "Đã tiếp nhận";
            break;
        case "605":
            status = "Bị trả về";
            break;
        case "606":
            status = "Bị trả về đã bổ sung";
            break;
        case "607":
            status = "Chờ phê duyệt";
            break;
        case "608":
            status = "Đã phê duyệt";
            break;
        case "609":
            status = "Bị trả về chờ bổ sung";
            break;
        case "700":
            status = "Đăng ký mới";
            break;
        case "701":
            status = "Đăng ký thành công";
            break;
        case "702":
            status = "Đã xác nhận";
            break;
        case "703":
            status = "Đã chuyển";
            break;
        case "704":
            status = "Từ chối";
            break;
        case "705":
            status = "Đã gửi trả kết quả";
            break;
        case "706":
            status = "Công dân đã nhận kết quả";
            break;
        default:
            status = "";
            break;
    }
    return status;
}
function openWaitBox(text) {
    var $loading = $(".sm-loader:first");
    if (text == null)
        text = "Đang tải dữ liệu";
    $loading.find(".text:first").html("<span>" + text.split('').join("</span><span>") + "</span>")
    $loading.show();
}
function closeWaitBox() {
    $(".sm-loader:first").fadeOut(500);
}
function getRoleTable($tag) {
    return $tag.closest("table");
}
function getRoleData($tag) {
    return $tag.closest("div[role='body-data']");
}
function SetValueBang() {
    $("table.tblEform").each(function () {
        var idpa = $(this).attr("data-id");
        var value = "";
        $("." + idpa).each(function () {
            if ($(this).val() != "" && $(this).val() != null && $(this).val() != undefined)
                value += $(this).val() + ";#";
            else
                value += "null;#";
        });
        $("#" + idpa).val(value.substring(0, value.length - 2));
    });
}
function smGrid_Group(GridId, options, dataAttach, customInfoGroup) {
    if (dataAttach == null)
        dataAttach = [];
    var method = {
        // Get các chuỗi nằm trong 2 kí tự chartacter1 và character2 từ 1 chuỗi string. Ví dụ {TENHOSO} - Cán bộ phụ trách {TENCANBO} sẽ trả về ["TENHOSO", "TENCANBO"]
        _getArrayInside: function (input, character1, character2) {
            var array = [];
            var saw = false;
            var tempString = "";
            for (var i = 0; i < input.length; i++) {
                if (!saw) {
                    if (input[i] == character1) {
                        tempString = "";
                        saw = true;
                    }
                }
                else {
                    if (input[i] == character2) {
                        array.push(tempString);
                        saw = false;
                    }
                    else
                        tempString += input[i];
                }
            }
            return array;
        },
        // Hàm chuyển 123456789 => 123.456.789
        _smDigitText: function (yourNumber) {
            if (yourNumber == null)
                return "";
            //Seperates the components of the number
            var n = yourNumber.toString().split(".");
            //Comma-fies the first part
            n[0] = n[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
            //Combines the two sections
            return n.join(".");
        },
        // Lấy ra text của group dựa vào nó có sử dụng template hay không và field gán giá trị nếu không sử dụng template
        _getGroupText: function (dataItem, fieldTitle) {
            var tmpTitle = "";
            tmpTitle = dataItem[fieldTitle];
            if (tmpTitle == null)
                tmpTitle = "";
            return tmpTitle;
        },
        _getCompareValue: function (optionField, item) {
            var x2 = null;
            if (optionField.indexOf(".") == "-1")
                x2 = item[optionField];
            else {
                var arrFieldxxx = optionField.split(".");
                var object = null;
                for (var xxxx = 0; xxxx < arrFieldxxx.length - 1; xxxx++) {
                    object = item[arrFieldxxx[xxxx]];
                }
                x2 = object[arrFieldxxx[arrFieldxxx.length - 1]];
            }
            return x2;
        }
    }
    var numGroupField = options.length;
    var $contentGrid = $("#" + GridId + " .k-grid-content tbody:first");
    var $trHeader = $("#" + GridId + " .k-grid-header tr:first");
    var numColGrid = 0;
    $trHeader.find("th").each(function () {
        if ($(this)[0].style.display != "none")
            numColGrid++;
    });
    var dataGrid = $("#" + GridId).data("kendoGrid")._data;
    // Biến tạm gán title cho dòng group
    var tmpTitle = "";
    if (dataGrid != null && dataGrid.length > 0) {
        // Số trường group
        var numGrouprow = numGroupField;
        // Mảng của chuỗi các mã html ở trước text field group. Group sẽ = chuỗi trước của data[fieldGroup] + chuỗi sau
        var arrGroupBefore = [];
        // Mảng của chuỗi các mã html ở sau text field group. Group sẽ = chuỗi trước của data[fieldGroup] + chuỗi sau
        var arrGroupAfter = [];
        // Mảng các thẻ td ở trước các group để có thể vẽ group có thể phân cấp vô hạn. Group 1 sẽ k có td ở trước. Group 2 sẽ có 1 td trống ở trước, ...
        var arrTdGroup = [];
        // Mảng các giá trị group HIỆN TẠI để sử dụng so sánh có thêm group mới cho dòng tiếp theo hay không. Khi thêm dòng group mới sẽ gán giá trị mới vào đúng ví trí trong mảng
        var arrCompareValue = [];
        // Mảng các element Jquery của các group HIỆN TẠI
        var arrSelector = [];
        // Mảng các dữ liệu đính kèm thêm đối với mỗi group. Chỉ chấp nhận là kiểu số. Vì các đoạn ở sau sẽ cộng dồn số các dòng của group vào
        var arrDataAttach = [];
        for (var i = 0; i < numGroupField; i++) {
            for (var j = 0; j < i; j++)
                arrTdGroup[i] += "<td class='k-group-cell'></td>";
        }
        // Gán giá trị ban đầu cho các dataAtach. Sẽ cộng dồn lên nếu không thay đổi giá trị compare group
        for (var i = 0; i < numGroupField; i++) {
            arrDataAttach[i] = [];
            for (var j = 0; j < dataAttach.length; j++)
                arrDataAttach[i][j] = dataGrid[0][dataAttach[j]];
        }
        var arrAllSelectorGroup = [];
        var arrAllIndexOptionGroup = [];
        // Vẽ các group cho dòng đầu tiên
        for (var i = numGroupField - 1; i >= 0; i--) {
            if (options[i]["preTitle"] == null)
                options[i]["preTitle"] = "";
            arrGroupBefore[i] = "<tr class='k-grouping-row'>" + arrTdGroup[i]
                + "<td colspan='" + (numColGrid - i) + "' aria-expanded='true'>"
                //+ "<div class='k-reset'><a class='k-icon k-collapse' href='#' tabindex='-1'></a>
                + "<div class='txtTemp'>";
            arrGroupAfter[i] = "</div></div>"
                + "</td>"
                + "</tr>";
            if (options[i]["field"].indexOf(".") == "-1")
                arrCompareValue[i] = dataGrid[0][options[i]["field"]];
            else {
                var arrFieldxxx = options[i]["field"].split(".");
                var object = null;
                for (var xxxx = 0; xxxx < arrFieldxxx.length - 1; xxxx++) {
                    object = dataGrid[0][arrFieldxxx[xxxx]];
                }
                arrCompareValue[i] = object[arrFieldxxx[arrFieldxxx.length - 1]];
            }
            if (options[i].template == null)
                tmpTitle = method._getGroupText(dataGrid[0], options[i]["title"]);
            arrSelector[i] = $(arrGroupBefore[i] + options[i]["preTitle"] + tmpTitle + arrGroupAfter[i]);
            arrSelector[i].data("item", dataGrid[0]);
            arrSelector[i].data("dataAttach", []);
            arrSelector[i].data("level", (i + 1));
            if (options[i].template != null) {
                arrAllSelectorGroup.push(arrSelector[i]);
                arrAllIndexOptionGroup.push(i);
            }
            $contentGrid.prepend(arrSelector[i]);
        }
        // Biến để đánh lại dòng chẵn lẻ cho từng group
        var tmpClass = true;
        for (var i = 1; i < dataGrid.length; i++) {
            var indexRowInsert = numGrouprow + i;
            var $rowNeed = $("#" + GridId + " .k-grid-content tr:eq(" + indexRowInsert + ")");
            if (tmpClass)
                $rowNeed.addClass("k-alt");
            else
                $rowNeed.removeClass("k-alt");
            tmpClass = !tmpClass;
            for (var group = 0; group < numGroupField; group++) {
                var tmpCompareValuexxxxx = method._getCompareValue(options[group]["field"], dataGrid[i]);
                if (tmpCompareValuexxxxx != arrCompareValue[group]) {
                    tmpClass = true;
                    $rowNeed.removeClass("k-alt");
                    // Đính kèm giá trị attach vào data({anything}) của jquery và reset giá trị của mảng arrDataAttach tại vị trí thay đổi
                    for (var iAttach = 0; iAttach < dataAttach.length; iAttach++) {
                        arrSelector[group].data("dataAttach")[iAttach] = arrDataAttach[group][iAttach];
                        arrDataAttach[group][iAttach] = dataGrid[i][dataAttach[iAttach]];
                    }
                    // Vẽ text cho group
                    arrCompareValue[group] = tmpCompareValuexxxxx;
                    for (var tmpGroup = group + 1; tmpGroup < numGroupField; tmpGroup++) {
                        for (var iAttach = 0; iAttach < dataAttach.length; iAttach++) {
                            arrSelector[tmpGroup].data("dataAttach")[iAttach] = arrDataAttach[tmpGroup][iAttach];
                            arrDataAttach[tmpGroup][iAttach] = dataGrid[i][dataAttach[iAttach]];
                        }
                        arrCompareValue[tmpGroup] = method._getCompareValue(options[tmpGroup]["field"], dataGrid[i]);
                    }
                    // insert 1 dòng group mới
                    if (options[group].template == null)
                        tmpTitle = method._getGroupText(dataGrid[i], options[group]["title"]);
                    arrSelector[group] = $(arrGroupBefore[group] + options[group]["preTitle"] + tmpTitle + arrGroupAfter[group]);
                    arrSelector[group].data("item", dataGrid[i]);
                    arrSelector[group].data("dataAttach", []);
                    arrSelector[group].data("level", (group + 1));
                    if (options[group].template != null) {
                        arrAllSelectorGroup.push(arrSelector[group]);
                        arrAllIndexOptionGroup.push(group);
                    }
                    $rowNeed.before(arrSelector[group]);
                    indexRowInsert++;
                    numGrouprow++;
                    // insert tất cả các group con mới
                    for (var tmpGroup = group + 1; tmpGroup < numGroupField; tmpGroup++) {
                        arrCompareValue[tmpGroup] = method._getCompareValue(options[tmpGroup]["field"], dataGrid[i]);
                        if (options[tmpGroup].template == null)
                            tmpTitle = method._getGroupText(dataGrid[i], options[tmpGroup]["title"]);
                        arrSelector[tmpGroup] = $(arrGroupBefore[tmpGroup] + options[tmpGroup]["preTitle"] + tmpTitle + arrGroupAfter[tmpGroup]);
                        arrSelector[tmpGroup].data("item", dataGrid[i]);
                        arrSelector[tmpGroup].data("dataAttach", []);
                        arrSelector[tmpGroup].data("level", (tmpGroup + 1));
                        if (options[group].template != null) {
                            arrAllSelectorGroup.push(arrSelector[tmpGroup]);
                            arrAllIndexOptionGroup.push(tmpGroup);
                        }
                        $rowNeed.before(arrSelector[tmpGroup]);
                        indexRowInsert++;
                        numGrouprow++;
                    }
                    break;
                }
                else {
                    for (var iAttach = 0; iAttach < dataAttach.length; iAttach++)
                        arrDataAttach[group][iAttach] += dataGrid[i][dataAttach[iAttach]];
                }
            }
        }
        // insert cho các dòng group cuối cùng
        for (var group = 0; group < numGroupField; group++) {
            for (var iAttach = 0; iAttach < dataAttach.length; iAttach++)
                arrSelector[group].data("dataAttach")[iAttach] = arrDataAttach[group][iAttach];
        }
        for (var i = 0; i < arrAllSelectorGroup.length; i++)
            arrAllSelectorGroup[i].find(".txtTemp:first").html(options[arrAllIndexOptionGroup[i]].template(arrAllSelectorGroup[i].data("item"), arrAllSelectorGroup[i].data("dataAttach")));
    }
    $("#" + GridId + " .k-grouping-row .k-reset .k-icon").unbind("click");
    $("#" + GridId + " .k-grouping-row .k-reset .k-icon").click(function (e) {
        var $this = $(this);
        var $tr = $this.closest("tr");
        $this.addClass("recent");
        var classBefore = null, classRemove = null;
        var collapse = $this.hasClass("k-collapse");
        var strMAPCParent = $tr.data("level");
        var $tr = $tr.next();
        if (collapse) {
            visible = false;
            classBefore = "k-expand";
            classRemove = "k-collapse";
            $this.removeClass("k-collapse");
            $this.addClass("k-expand");
            var loop = true;
            while (loop && $tr.length > 0) {
                var strMAPC = $tr.data("level");
                if (strMAPC == null || strMAPC > strMAPCParent) {
                    $tr.hide();
                    //if (strMAPC.length == strMAPCParent.length + 12)
                    //    $tr.data("hide", true);
                }
                else
                    loop = false;
                $tr = $tr.next();
            }
        }
        else {
            visible = true;
            classBefore = "k-collapse";
            classRemove = "k-expand";
            $this.removeClass("k-expand");
            $this.addClass("k-collapse");
            var loop = true;
            while (loop && $tr.length > 0) {
                var strMAPC = $tr.data("level");
                if (strMAPC == null || strMAPC > strMAPCParent) {
                    //if (strMAPC.length == strMAPCParent.length + 12) {
                    //    $tr.show();
                    //    $tr.data("hide", false);
                    //}
                    //else {
                    //    if ($tr.data("hide"))
                    //        $tr.hide();
                    //    else
                    $tr.show();
                    //}
                }
                else
                    loop = false;
                $tr = $tr.next();
            }
        }
        e.preventDefault();
        var $trNext = $this.closest("tr").next(), $tmp = $trNext;
        var t = setInterval(function () {
            if (!$(".recent").hasClass(classBefore)) {
                clearInterval(t);
                $(".recent").addClass(classBefore).removeClass("recent").removeClass(classRemove);
                if (visible) {
                    while ($tmp.length > 0 && $tmp.hasClass("k-grouping-row")) {
                        $tmp.show();
                        $tmp = $tmp.next();
                    }
                }
                else
                    while ($tmp.length > 0 && $tmp.hasClass("k-grouping-row")) {
                        $tmp.hide();
                        $tmp = $tmp.next();
                    }
            }
        }, 100);


        //var $tdParent = $(this).closest("td");
        //var colSpan = $tdParent.attr("colspan");
        //var visible = true;
        //$(this).addClass("recent");
        //var classBefore = null, classRemove = null;
        //if ($(this).hasClass("k-collapse")) {
        //    visible = false;
        //    $(this).removeClass("k-collapse").addClass("k-expand");
        //    classBefore = "k-expand";
        //    classRemove = "k-collapse";
        //}
        //else {
        //    $(this).removeClass("k-expand").addClass("k-collapse");
        //    classBefore = "k-collapse";
        //    classRemove = "k-expand";
        //}
        //var $trNext = $(this).closest("tr").next(), $tmp = $trNext;
        //while ($trNext.length > 0 && $trNext.find("td[colspan='" + colSpan + "']").length == 0) {
        //    if(visible)
        //        $trNext.show();
        //    else
        //        $trNext.hide();
        //    $trNext = $trNext.next();
        //}

    });
}
// refresh dataTableGrid
function RefreshGridDT(id) {
    var $tagData = $("#" + id).closest("div[role='body-data']");
    var $idtable = $tagData.find("table.smdataTable").first().dataTable().fnDraw(false);
}
//$(document).on('focusout', '.select2', function (e) {
//    if (e.originalEvent && $(this).siblings('select').attr("multiple") == undefined) {
//        e.preventDefault();
//        $(this).siblings('select').select2('close');
//        //   $('.select2-drop-mask').remove();
//    }
//});
$(document).on('focusout', 'input, textarea', function (e) {
    if (e.originalEvent) {
        // if (!$(this).hasClass("select2-search__field"))
        $focused = $(this);
    }
});
$(document).on("click", ".btnAddRow", function () {
    var idpa = $(this).attr("data-idpa");
    var html = "<tr>" + $(this).parent().parent().html() + "</tr>";
    var colcount = parseInt($(this).parent().attr("colspan"));
    $(".tblEform").each(function () {
        if ($(this).attr("data-id") == idpa) {
            var htmlnew = "";
            var rowCount = $(this).find("tbody tr").length - 1;
            for (var t = 0; t <= rowCount; t++) {
                htmlnew += '<tr>';
                var indexstart = t * colcount + 1;
                var indexfinish = indexstart + colcount - 2;
                for (var i = indexstart; i <= indexfinish; i++) {
                    htmlnew += "<td>";
                    if (t < rowCount)
                        htmlnew += '<input type="text" id="' + idpa + i + '" class="form-control ' + idpa + '" value=\"' + $("#" + idpa + i).val() + '\" style="width:100%; color: black;" placeholder=" Nhập thông tin"/>';
                    else
                        htmlnew += '<input type="text" id="' + idpa + i + '" class="form-control ' + idpa + '" style="width:100%; color: black;" placeholder=" Nhập thông tin"/>';
                    htmlnew += "</td>";
                }
                htmlnew += "<td style=\"text-align: center;\">";
                htmlnew += "<a style=\"cursor: pointer;\" class=\"btnRemoveRow\" data-id=\"" + idpa + "\" title=\"Xóa\"><span class=\"glyphicon glyphicon-trash\"></span> Xóa</a>";
                htmlnew += "</td>";
                htmlnew += '</tr>';
            }
            htmlnew += html;
            $(this).find("tbody").html(htmlnew);
        }
    });
});
$(document).on("click", ".btnRemoveRow", function () {
    var idpa = $(this).attr("data-id");
    var colcount = $(this).parent().parent().find("td").length - 1;
    $(this).parent().parent().remove();
    var html = "<tr>" + $(this).parent().parent().html() + "</tr>";
    $(".tblEform").each(function () {
        if ($(this).attr("data-id") == idpa) {
            var rowCount = $(this).find("tbody tr").length - 1;
            for (var t = 0; t <= rowCount - 1; t++) {
                for (var i = 0; i < colcount - 1; i++) {
                    var row = $(this).find("tbody tr:nth-child(" + (t + 1) + ")");
                    var col = row.find("td:nth-child(" + (i + 1) + ")").find("input").attr("id");
                    $("#" + col).attr("id", "\"" + idpa + (i + t * (colcount) + 1) + "\"");
                }
            }
        }
    });
});
$(document).on("click", ".get-allfile", function (e) {
    var urlget = $(this).data("url");
    $.get(urlget, function (data) {
        var my_window = window.open(data.Source, "mywindow1");
    });
});
jQuery.validator.addMethod("MinValue", function (phone_number, element) {
    phone_number = phone_number.replace(/\s+/g, "");
    return this.optional(element) || phone_number > 0;
}, "Bạn chưa chọn");
jQuery.validator.addMethod("Phone", function (phone_number, element) {
    phone_number = phone_number.replace(/\s+/g, "");
    return this.optional(element) || phone_number.length > 9 &&
        phone_number.match(/^(\+84|0)[1-9]\d{8,9}$/);
}, "Nhập đúng định dạng số điện thoại");
jQuery.validator.addMethod("smdatetime", function (value, element) {
    var regrex282 = /^\s*((31([-/ ])((0?[13578])|(1[02]))\3(\d\d)?\d\d)|((([012]?[1-9])|([123]0))([-/ ])((0?[13-9])|(1[0-2]))\12(\d\d)?\d\d)|(((2[0-8])|(1[0-9])|(0?[1-9]))([-/ ])0?2\22(\d\d)?\d\d)|(29([-/ ])0?2\25(((\d\d)?(([2468][048])|([13579][26])|(0[48])))|((([02468][048])|([13579][26]))00))))\s*$/;
    var key = value;
    if (key != "") {
        if (!regrex282.test(key)) {
            return false;
        }
    }
    return true;
}, function (value, element) {
    var regex = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
    var key = $(element).val();
    if (regex.test(key)) {
        return "Ngày tháng không tồn tại"
    } else {
        return "Nhập đúng định dạng ngày tháng dd/mm/yyyy"
    }
});
jQuery.validator.addMethod("SoToSoBan", function (value, element) {
    var regrex282 = /^-?\d*[/]?\d*$/;
    var key = value;
    if (key != "") {
        if (!regrex282.test(key)) {
            return false;
        }
    }
    return true;
});
function createUploaderAnh(idelment) {
}
function SetWidthForm() {
    var t = $(".fixWidth");
    if (t.length > 0) {
        for (e = 0; e < t.length; e++)
            t[e].style.width = "1px";
        for (var e = 0; e < t.length; e++)
            SetWidth(t[e]);
    }
}
function SetWidth(e) {
    var $e = $(e); var $parent = $e.closest("div");
    var temp = $parent.width();
    "p" == $e.parent()[0].localName && ($parent = $e.closest("p"));
    var pdl = $parent.css("padding-left"),
        pdr = $parent.css("padding-right"),
        divwidth = $parent.width();
    width = eval(divwidth + " - " + pdl.substring(0, pdl.length - 2) + " - " + pdr.substring(0, pdr.length - 2));
    e.style.width = width - e.offsetLeft + "px"
}
/**
 * format html to string
 * @param {any} str string input
 */
function formatHtml(str) {
    var div = document.createElement('div');
    div.innerHTML = str.trim();
    return format(div, 0).innerHTML;
}
function format(node, level) {
    var indentBefore = new Array(level++ + 1).join('  '),
        indentAfter = new Array(level - 1).join('  '),
        textNode;
    for (var i = 0; i < node.children.length; i++) {
        textNode = document.createTextNode('\n' + indentBefore);
        node.insertBefore(textNode, node.children[i]);
        format(node.children[i], level);
        if (node.lastElementChild == node.children[i]) {
            textNode = document.createTextNode('\n' + indentAfter);
            node.appendChild(textNode);
        }
    }
    return node;
}
/*format date time*/
/// Thực hiện convert kiểu dữ liệu DateTime
var dateRegExp = /^\/Date\((.*?)\)\/$/;
function toDate(value) {
    var date = dateRegExp.exec(value);
    return new Date(parseInt(date[1]));
}
/// Hàm get thông tin trên grid dạng lookupvalue.
function GetValueGrid(GridName) {
    var $value = '';
    $("#" + GridName + " .k-grid-content table td span.itemselected").each(function (index) {
        if ($value != '')
            $value += ';#';
        $value += $(this).attr('data-id') + ";#" + $(this).text();
    });
    return $value;
}
function getCheckboxGrid(idgrid, char) {
    var arrId = "";
    $(idgrid + " .k-grid-content tbody tr").each(function () {
        var inputCheckBox = $(this).find(".check-item1");
        var idck = inputCheckBox.data("id");
        if (inputCheckBox.prop("checked") == true) {
            if (arrId != '')
                arrId += char + idck;
            else
                arrId += idck;
        }
    });
    return arrId;
}
function getFirstLetter(string) {
    var strRe = "";
    var arr = string.split(' ');
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].trim() != "" && arr[i].trim() != undefined)
            strRe += arr[i].charAt(0);
    }
    return strRe;
}
jQuery.extend(jQuery.validator.messages, {
    required: "Trường này là bắt buộc.",
    remote: "Please fix this field.",
    email: "Vui lòng nhập đúng định dạng email.",
    url: "Vui lòng nhập đúng định dạng URL.",
    date: "Vui lòng nhập đúng định dạng ngày tháng.",
    dateISO: "Please enter a valid date (ISO).",
    number: "Vui lòng nhập đúng định dạng số.",
    digits: "Vui lòng chỉ nhập ký tự số.",
    creditcard: "Vui lòng nhập đúng định dạng credit card .",
    equalTo: "Vui lòng nhập trùng giá trị.",
    accept: "Please enter a value with a valid extension.",
    maxlength: jQuery.validator.format("Bạn chỉ được nhập tối đa {0} ký tự."),
    minlength: jQuery.validator.format("Bạn phải nhập tối thiểu {0} ký tự."),
    rangelength: jQuery.validator.format("Vui lòng nhập giá trị có số ký tự nằm giữa {0} và {1} ký tự."),
    range: jQuery.validator.format("Vui lòng nhập giá trị nằm giữa {0} và {1}."),
    max: jQuery.validator.format("Vui lòng nhập giá trị nhỏ hơn hoặc bằng {0}."),
    min: jQuery.validator.format("Vui lòng nhập giá trị lớn hơn hoặc bằng {0}.")
});
$.validator.addMethod('lessThanEqual', function (value, element, param) {
    return this.optional(element) || parseInt(value) <= parseInt($(param).val());
}, "Giá trị {0} phải lớn hơn {1}");
$.validator.addMethod('dateLessThanEqual', function (value, element, param) {
    return this.optional(element) || $(param).val() == "" || value == "" || new strToDate(value) <= new strToDate($(param).val());
}, "Ngày {0} phải nhỏ hơn hoặc bằng ngày {1}");
$.validator.addMethod('dateLessThanEqualNow', function (value, element) {
    var nowDate = new Date();
    var today = new Date(nowDate.getFullYear(), nowDate.getMonth(), nowDate.getDate(), 0, 0, 0, 0);
    return this.optional(element) || value == "" || new strToDate(value) <= today;
}, "Vui lòng nhập ngày nhỏ hơn hoặc bằng ngày hôm nay");
$.validator.addMethod('dateGreatThanEqualNow', function (value, element) {
    var nowDate = new Date();
    var today = new Date(nowDate.getFullYear(), nowDate.getMonth(), nowDate.getDate(), 0, 0, 0, 0);
    return this.optional(element) || value == "" || new strToDate(value) >= today;
}, "Vui lòng nhập ngày lớn hơn hoặc bằng ngày hôm nay");
/// view file cac loai
function viewToanVan(urlfile) {
    var urlfile2 = urlfile.replace(/\\/g, '/');
    console.log(urlfile2);
    AddFormDialog("/iVBDH/View/pViewToanVan.aspx", 1000, "Chi tiết file", { urlFile: urlfile2 });
}
function notnull(text) {
    return text != null ? text : ""
}
function change_alias(alias) {
    var str = alias;
    str = str.toLowerCase();
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    str = str.replace(/đ/g, "d");
    str = str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g, " ");
    str = str.replace(/ + /g, " ");
    str = str.trim();
    return str;
}
//can
function getScrollBarWidth() {
    var w1 = $(".smtable tbody").width();
    var w2 = $(".smtable tbody tr").first().width();
    return (w1 - w2);
};
function xem(kkk) {
    console.log(kkk);
}
function strToDate(date) {
    var parts = date.split("/");
    return new Date(parts[2], parts[1] - 1, parts[0]);
}
function STTCoLumn(STT) {
    return '<div style="text-align:center">' + STT + '</div>';
}
function getAllKeysTree(alllkey) {
    var arrReturn = [];
    alllkey.forEach(function (obj) {
        arrReturn.push(obj.key);
        if (obj.children.length > 0)
            arrReturn = arrReturn.concat(getAllKeysTree(obj.children));
    });
    return arrReturn;
}
function stringToDate(_date, _format, _delimiter) {
    var formatLowerCase = _format.toLowerCase();
    var formatItems = formatLowerCase.split(_delimiter);
    var dateItems = _date.split(_delimiter);
    var monthIndex = formatItems.indexOf("mm");
    var dayIndex = formatItems.indexOf("dd");
    var yearIndex = formatItems.indexOf("yyyy");
    var month = parseInt(dateItems[monthIndex]);
    month -= 1;
    var formatedDate = new Date(dateItems[yearIndex], month, dateItems[dayIndex]);
    return formatedDate;
}
//Format Curency
function addCommas(nStr) {
    nStr += '';
    x = nStr.split('.');
    x1 = x[0];
    x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + ',' + '$2');
    }
    return x1 + x2;
}
////set data
//function SetdataPost(IdForm, dataset) {
//    //let input = $("#" + IdForm + " input[type=\"checkbox\"]");
//    //$(input).each(function (index) {
//if ($(this).is(':checked')) {
//                    dataset[$(this).attr["name"]] = true
//                }
//                else {
//                    dataset[$(this).attr["name"]] = false;
//                }
//    //});
//    $("#" + IdForm + "").find("input,textarea,select,hidden").not("#__VIEWSTATE,#__EVENTVALIDATION,._ig").each(function () {
//        if (this.name != "")
//            if (this.attr("type") == "checkbox") {
//                if ($(this).is(':checked')) {
//                    dataset[$(this).attr["name"]] = true
//                }
//                else {
//                    dataset[$(this).attr["name"]] = false;
//                }
//            }
//            else {
//                obj[this.name] = $(this).val();
//            }

//    });
//    return dataset;
//}


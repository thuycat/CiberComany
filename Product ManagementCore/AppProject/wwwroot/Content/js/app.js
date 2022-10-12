
var vidatalocale = {
    "format": "DD/MM/YYYY",
    "separator": "/",
    "applyLabel": "Apply",
    "cancelLabel": "Cancel",
    "fromLabel": "From",
    "toLabel": "To",
    "customRangeLabel": "Custom",
    "weekLabel": "W",
    "daysOfWeek": [
        "CN",
        "T2",
        "T3",
        "T4",
        "T5",
        "T6",
        "T7"
    ],
    "monthNames": [
        "Tháng 1",
        "Tháng 2",
        "Tháng 3",
        "Tháng 4",
        "Tháng 5",
        "Tháng 6",
        "Tháng 7",
        "Tháng 8",
        "Tháng 9",
        "Tháng 10",
        "Tháng 11",
        "Tháng 12"
    ],
    "firstDay": 1
};
var popupNotification;
var cktoolFull = [
    { name: 'document', groups: ['mode', 'document', 'doctools'], items: ['Source', '-', 'Save', 'NewPage', 'Preview', 'Print', '-', 'Templates'] },
    { name: 'clipboard', groups: ['clipboard', 'undo'], items: ['Cut', 'Copy', 'Paste', 'PasteText', 'PasteFromWord', '-', 'Undo', 'Redo'] },
    { name: 'editing', groups: ['find', 'selection', 'spellchecker'], items: ['Find', 'Replace', '-', 'SelectAll', '-', 'Scayt'] },
    { name: 'forms', items: ['Form', 'Checkbox', 'Radio', 'TextField', 'Textarea', 'Select', 'Button', 'ImageButton', 'HiddenField'] },
    '/',
    { name: 'basicstyles', groups: ['basicstyles', 'cleanup'], items: ['Bold', 'Italic', 'Underline', 'Strike', 'Subscript', 'Superscript', '-', 'RemoveFormat'] },
    { name: 'paragraph', groups: ['list', 'indent', 'blocks', 'align', 'bidi'], items: ['NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', '-', 'Blockquote', 'CreateDiv', '-', 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock', '-', 'BidiLtr', 'BidiRtl', 'Language'] },
    { name: 'links', items: ['Link', 'Unlink', 'Anchor'] },
    { name: 'insert', items: ['Image', 'Video', 'Table', 'HorizontalRule', 'Smiley', 'SpecialChar', 'PageBreak', 'Iframe'] },
    '/',
    { name: 'styles', items: ['Styles', 'Format', 'Font', 'FontSize'] },
    { name: 'colors', items: ['TextColor', 'BGColor'] },
    { name: 'tools', items: ['Maximize', 'ShowBlocks'] },
    { name: 'others', items: ['-'] },
    { name: 'about', items: ['About'] }
];
jQuery(document).ready(function ($) {
    shortcut.add("Alt+N", function () {
        if ($(".btnadd").length) {
            $(".btnadd").click();
        }
    }, {
        'type': 'keydown',
        'propagate': true,
        'target': document
    });
    var heightwindow = $(window).height();
    $("#s4-workspace").height(heightwindow);
    $("#container-slider").height(heightwindow - 100);
    //$("#menu").kendoMenu();
    $("#container-slider").kendoSplitter({
        orientation: "horizontal",
        panes: [
            { collapsible: true, resizable: true, max: "33%", size: "19%", scrollable: false },
            { collapsible: true, scrollable: false },
            { collapsible: true, resizable: true, size: "16%", scrollable: false },
        ]
    });

    //$('.level_1').children().on('click', function () {
    //    $('.level_1').children().removeClass('active');
    //    $(this).addClass('active');
    //})

    $('.menu-bottom li').on('click', function () {
        $('.menu-bottom li').removeClass('active');
        $(this).addClass('active');
    })

    $('.menu-bottom-2 li').on('click', function () {
        $('.menu-bottom-2 li').removeClass('active');
        $(this).addClass('active');
        $('.menu-bottom-2').removeClass('active');
    })

    $('.toggle_menu_bottom').on('click', function () {
        $('.menu-bottom-2').toggleClass('active');
    })

    $('.close').on('click', function () {
        $('.menu-bottom-2').removeClass('active');
    })

    // show/hide mobile menu top and user
    $('.main-menu-mb .nav-icon').on('click', function () {
        $('.menu-content').addClass('show');
    })

    $('.menu-close').on('click', function () {
        $('.menu-content').removeClass('show');
    })

    $('.main-menu-mb .user').on('click', function () {
        $('.main-menu-mb .user-content').addClass('show');
    })

    $('.main-menu-mb .user-close').on('click', function () {
        $('.main-menu-mb .user-content').removeClass('show');
    })

    // show/hide sidebar
    $('.hide_left_sidebar').on('click', function () {
        $('.sidebar-left').css('left', '-999px');
        $('.main-content').css('left', 0);
        $('.show_left_sidebar').fadeIn();
    })

    $('.hide_right_sidebar').on('click', function () {
        $('.sidebar-right').css('right', '-999px');
        $('.main-content').css('right', 0);
        $('.show_right_sidebar').fadeIn();
    })

    $('.show_left_sidebar').on('click', function () {
        $('.sidebar-left').css('left', 0);
        $('.main-content').css('left', '15%');
        $('.show_left_sidebar').fadeOut();
    })

    $('.show_right_sidebar').on('click', function () {
        $('.sidebar-right').css('right', 0);
        $('.main-content').css('right', '15%');
        $('.show_right_sidebar').fadeOut();
    })
    // main content border
    function calculateHeight() {
        var h = $('.main-content-wrapper').outerHeight();
        var leftHeight = $('.sidebar-left').outerHeight();
        var rightHeight = $('.sidebar-right').outerHeight();
        var max = leftHeight > h ? leftHeight : h;
        var max = rightHeight > h ? rightHeight : max;
        $('.main-content').css('min-height', max);
    }

    calculateHeight()
    $(window).resize(function () {
        calculateHeight();
    });

    popupNotification = $("#popupNotification").kendoNotification({
        allowHideAfter: 3000
    }).data("kendoNotification");
    resizeSplitter();
    $(window).resize(function () {
        resizeSplitter();
    });
    if ($("#container-slider").length > 0) {
        var splitter = $("#container-slider").data("kendoSplitter");
        splitter.collapse("#panel-right");
    }
    //auto update element ckeditor
    CKEDITOR.on('instanceReady', function () {
        $.each(CKEDITOR.instances, function (instance) {
            CKEDITOR.instances[instance].document.on("focusout", CK_jQ);
            CKEDITOR.instances[instance].document.on("keyup", CK_jQ);
            CKEDITOR.instances[instance].document.on("paste", CK_jQ);
            CKEDITOR.instances[instance].document.on("keypress", CK_jQ);
            CKEDITOR.instances[instance].document.on("blur", CK_jQ);
            CKEDITOR.instances[instance].document.on("change", CK_jQ);
            CKEDITOR.instances[instance].document.on("focus", CK_jQ);
        });
    });
});
//Fckfinder
function Openfckfinder(title, btnupload, Urlweb) {
    var container = btnupload.replace('btn', '');
    $("#" + btnupload + "").off('click');
    $("#" + btnupload + "").click(function () {
        $("#" + btnupload + "").attr("disabled", true);
        var winopen = window.open("/UserControls/AnhDaiDien/fckFinder.aspx?type=Images&UrlWeb=" + Urlweb + "&option=0&container=" + container + "", "Upload", "width=900,height=420,toolbar=no,location=yes,status=no");
    });
}
function CK_jQ() {
    for (instance in CKEDITOR.instances) {
        CKEDITOR.instances[instance].updateElement();
    }
}
function DeleteImage(btnXoaAnh, imgAnhdaiDien, hdfUrlImages) {
    $("#" + btnXoaAnh + "").click(function () {
        $("#" + imgAnhdaiDien + "").empty();
        $("#" + hdfUrlImages + "").val("");
    });
}
function resizeSplitter() {
    var $slider = $("#slider");
    if ($("#slider").length === 0)
        return false;
    var height = $(this).height();
    $slider.height(height);
    var topHeight = 80;
    var bottomHeight = 30;
    var centerHeight = $(window).height() - (topHeight + bottomHeight);
    var splitter = $slider.data("kendoSplitter");
    //splitter.size("#container-slider", centerHeight + "px");
    splitter.trigger("resize");
    var splitter2 = $("#container-slider").data("kendoSplitter");
    if (splitter2 !== undefined) {
        splitter2.trigger("resize");
    }
}
$(function (event) {


    $(document).on("click", ".zone_search .btnsearch", function (e) {
        var $zone_search = $(this).closest(".smgrid");
        var $grid = $zone_search.attr("data-grid");
        refeshGrid($grid);
        return false;    //<---- Add this line
    });
    $(document).on('keyup keypress', '#UserAutocomplete.k-input', function (e) {
        var keyCode = e.keyCode || e.which;
        if (keyCode === 13) {
            e.preventDefault();
            return false;
        }0
    });
    // thêm mới
    $(document).on("click", ".btnadd", function () {

        
        var $zone_search = $(this).closest(".smgrid");
        var urlform = $zone_search.attr("data-form");
        var widthform = $zone_search.attr("data-formwidth");
        var $title = $zone_search.attr("data-title");
        var $isCenter = $zone_search.attr("data-center");
        if ($title === undefined)
            $title = "Thêm mới";
        else $title = "Thêm mới " + $title;
        AddFormDialog(urlform, widthform, $title, $(this).data(), $isCenter);
    });
    //nut dudowcj dung nhu sau  <button type="button" class="k-button sibtn" data-url="/iVBDH/View/pAddLienKet.aspx" data-width="1200" title="Chọn liên kết"><i class="fa fa-refresh" aria-hidden="true"></i>Chọn</button>
    $(document).on("click", ".sibtn", function () {
        var urlform = $(this).attr("data-url");
        var widthform = $(this).attr("data-width");
        var $title = $(this).attr("title") || $(this).attr("data-title");
        if ($title === undefined)
            $title = "Form";
        if (widthform == undefined)
            widthform = 1024;
        var $odata = $(this).data();
        AddFormDialog(urlform, widthform, $title, $odata);
    });
    $(document).on("click", ".btnExcelCommon", function () {
        var $zone_search = $(this).closest(".smgrid");
        var urlform = $zone_search.attr("data-controller");
        var query = $zone_search.attr("data-query");
        var $Action = $(this).attr("data-action");
        var $datathongke = $(this).closest(".zone_search form").siSerializeDivFrm();
        var str = jQuery.param($datathongke);
        var strquery = $(this).attr("data-strquery");
        var type = 1;
        if ($(this).attr("data-typeexcel") != undefined)
            type = $(this).attr("data-typeexcel");
        if (query != undefined)
            str += "&" + query;
        if (strquery != undefined)
            str += "&" + strquery;
        var Url = urlform + $Action + "?excel=" + type + "&" + str;
        my_window = window.open(Url, "mywindow1");
    });
    $(document).on("click", ".btnExcel", function () {
        var $zone_search = $(this).closest(".smgrid");
        var urlform = $zone_search.attr("data-controller");
        var $Action = $(this).attr("data-action");
        var SearchTuNgay = $(this).attr("data-searchtungay");
        var SearchDenNgay = $(this).attr("data-searchdenngay");
        var titlebc = $(this).attr("data-titlebc");
        var str = $(this).attr("data-post");
        str = str.replaceAll("&&", "AND");
        var type = 1;
        if ($(this).attr("data-typeexcel") != undefined)
            type = $(this).attr("data-typeexcel");
        var Url = urlform + $Action + "?excel=" + type + "&SearchTuNgay=" + SearchTuNgay + "&SearchDenNgay=" + SearchDenNgay + "&TitleBC=" + titlebc + "&txtQuery=" + str;
        my_window = window.open(Url, "mywindow1");
    });
    $(document).on("click", ".btnExceldanhmuc", function () {
        var $zone_search = $(this).closest(".smgrid");
        var urlform = $zone_search.attr("data-controller");
        var $Action = $(this).attr("data-action");
        var SearchTuNgay = $(this).attr("data-searchtungay");
        var SearchDenNgay = $(this).attr("data-searchdenngay");
        var titlebc = $(this).attr("data-titlebc");
        var str = $(this).attr("data-post");
        str = str.replaceAll("&&", "AND");
        var datado = $(this).attr("data-do");
        var type = 1;
        if ($(this).attr("data-typeexcel") != undefined)
            type = $(this).attr("data-typeexcel");
        var Url = urlform + $Action + "?do=" + datado + "&excel=" + type + "&oQuery=" + str + "&SearchTuNgay=" + SearchTuNgay + "&SearchDenNgay=" + SearchDenNgay + "&TitleBC=" + titlebc;
        my_window = window.open(Url, "mywindow1");
    });
    $(document).on("click", ".btnWordCommon", function () {
        var $zone_search = $(this).closest(".smgrid");
        var urlform = $zone_search.attr("data-action");
        var query = $zone_search.attr("data-query");
        var $datathongke = $(this).closest(".zone_search form").siSerializeDivFrm();
        var str = jQuery.param($datathongke);
        if (query != undefined)
            str += "&" + query;
        var Url = urlform + "?do=WORD&" + str;
        my_window = window.open(Url, "mywindow1");
    });
    $(document).on("click", ".sibtnselected", function () {
        var $zone_search = $(this).closest(".smgrid");
        var grid = $zone_search.attr("data-grid");
        var $grid = $("#" + grid).data("kendoGrid");
        var $id = $grid.selectedKeyNames()[0];
        if ($id === undefined) {
            createMessage("Thông báo", "Bạn hãy chọn một bản ghi");
            return false;
        }
        var urlform = $(this).attr("data-url");
        var widthform = $(this).attr("data-width");
        var $title = $(this).attr("title");
        if ($title === undefined)
            $title = "Form";
        if (widthform == undefined)
            widthform = 1024;
        var $odata = $(this).data();
        $odata.ItemID = $id;
        AddFormDialog(urlform, widthform, $title, $odata);
    });

    $(document).on("click", ".sibtnconfirm", function () {

        var $zone_search = $(this).closest(".smgrid");
        var controller = $zone_search.attr("data-controller");
        if (controller == undefined)
            controller = "";
        var $odata = $(this).data();
        var $Title = $(this).attr("title");
        var $Action = $(this).attr("data-action");
        var funcName = $odata["callback"];
        var doituong = $(this).attr("data-doituong");
        var $grid = $(this).closest("[data-role=grid]");
        //loading();name, NoiDung, btname,funcCallBack
        FromDialogConfirm($Title, controller + $Action, $odata, $grid.attr("id"), doituong != undefined ? " " + doituong : " bản ghi?", "", "", funcName);
    });
    $(document).on("click", ".sibtnselectedoradd", function () {
        var $zone_search = $(this).closest(".smgrid");
        var grid = $zone_search.attr("data-grid");
        var $grid = $("#" + grid).data("kendoGrid");
        var $id = $grid.selectedKeyNames()[0];
        if ($id === undefined) {
            var urlform = $zone_search.attr("data-form");
            var widthform = $zone_search.attr("data-formwidth");
            var $title = $zone_search.attr("data-title");
            var $isCenter = $zone_search.attr("data-center");
            if ($title === undefined)
                $title = "Thêm mới";
            else $title = "Thêm mới " + $title;
            AddFormDialog(urlform, widthform, $title, {}, $isCenter);
        } else {
            var urlform = $(this).attr("data-url");
            var widthform = $(this).attr("data-width");
            var $title = $(this).attr("title");
            if ($title === undefined)
                $title = "Form";
            if (widthform == undefined)
                widthform = 1024;
            var $odata = $(this).data();
            $odata.ItemID = $id;
            AddFormDialog(urlform, widthform, $title, $odata);
        }
    });
    $(document).on("click", ".sibtn-edit", function () {
        var grid = $(this).attr("data-grid");
        var $grid = $("#" + grid).data("kendoGrid");
        var $id = $grid.selectedKeyNames()[0];
        if ($id === undefined) {
            createMessage("Thông báo", "Bạn hãy chọn một bản ghi");
            return false;
        }
        var urlform = $(this).attr("data-url");
        var widthform = $(this).attr("data-width");
        var $title = $(this).attr("title");
        if ($title === undefined)
            $title = "Form";
        if (widthform == undefined)
            widthform = 1024;
        var $odata = $(this).data();
        $odata.ItemID = $id;;
        AddFormDialog(urlform, widthform, $title, $odata);
    });
    $(document).on("click", ".btn-change-tt", function () {
        var itemid = $(this).attr("data-id");
        var urlform = $(this).attr("data-url");
        var action = $(this).attr("data-act");
        var title = $(this).attr("title");
        AddFormDialog(urlform, 500, title, { ItemID: itemid, do: action });
    });
    $(document).on("click", ".sibtnpost", function () {
        var $zone_search = $(this).closest(".smgrid");

        var urlAction = $(this).attr("data-action");
        if (urlAction == undefined || urlAction == null)
            urlAction = $zone_search.attr("data-action");
        var $odata = $(this).data();
        var funcName = $odata["callback"];
        var $grid = $(this).closest("[data-role=grid]");
        loading();
        $.get(urlAction, $odata, function (data) {
            endLoading();
            if (!data.success) {
                createMessage("Đã có lỗi xảy ra", data.message);
            }
            else {
                popupNotification.show(data.message, "success");
                //refresh lại grid hiện tại.
                if ($grid.data("kendoGrid") != undefined)
                    $grid.data("kendoGrid").dataSource.read();
                //check có close form hay không.
                if (funcName != undefined) {
                    window[funcName]();
                }
            }
        });
    });
    $(document).on("click", ".sibtnpostselect", function () {
        var $zone_search = $(this).closest(".smgrid");
        var urlAction = $zone_search.attr("data-action");
        var $odata = $(this).data();
        var funcName = $odata["callback"];
        var grid = $(this).data("grid");
        var $grid = $("#" + grid).data("kendoGrid");
        var $id = $grid.selectedKeyNames()[0];
        if ($id === undefined) {
            createMessage("Thông báo", "Bạn hãy chọn một bản ghi");
            return false;
        }
        $odata.ItemID = $id;
        loading();
        $.post(urlAction, $odata, function (data) {
            endLoading();
            if (data.Erros) {
                createMessage("Đã có lỗi xảy ra", data.Message);
            }
            else {
                popupNotification.show(data.Message, "success");
                //refresh lại grid hiện tại.
                $grid.data("kendoGrid").dataSource.read();
                //check có close form hay không.
                if (funcName != undefined) {
                    window[funcName]();
                }
            }
        });
    });
    //$(document).on('keydown', '.select2', function (e) {
    //    if (e.originalEvent && e.which == 40) {
    //        e.preventDefault();
    //        $(this).siblings('select').select2('open');
    //    }
    //});
    // sửa
    $(document).on("click", ".btn-edit", function () {
        var $zone_search = $(this).closest(".smgrid");
        var urlform = $zone_search.attr("data-form");
        var widthform = $zone_search.attr("data-formwidth");
        var $title = $zone_search.attr("data-title");
        if ($title === undefined)
            $title = "Sửa";
        else $title = "Sửa " + $title;
        var itemid = $(this).attr("data-edit");
        var idsolr = $(this).attr("data-idsolr");
        var $odata = $(this).data();
        var $isCenter = $zone_search.attr("data-center");
        $odata.ItemID = itemid;
        $odata.idsolr = idsolr;
        $odata.do = "UPDATE";
        AddFormDialog(urlform, widthform, $title, $odata, $isCenter);
    });
    ///delete văn bản hồ sơ công việc
    $(document).on("click", ".sibtn-delete-vbhs", function () {
        var $zone_search = $(this).closest(".smgrid");
        var urlaction = $zone_search.attr("data-action");
        var gridName = $zone_search.attr("data-grid");
        var idVB = $(this).attr("data-delete");
        var field = $(this).attr("data-field");
        var idValue = $(this).attr("data-idhidden");
        var $itemID = $(this).attr("data-id");
        var arrSelected = $("#" + idValue).val().split(",");
        arrSelected.remove(idVB);
        $("#" + idValue).val(arrSelected.join(","));
        var $odata = $(this).data();
        $odata.ItemID = $itemID;
        $odata.do = "UPDATE";
        $odata[field] = $("#" + idValue).val();
        DeleteFromDialog(urlaction, $odata, gridName);
    });
    // xóa
    $(document).on("click", ".btn-delete", function () {
        var $zone_search = $(this).closest(".smgrid");
        var urlaction = $zone_search.attr("data-controller");
        var gridName = $zone_search.attr("data-grid");
        var itemid = $(this).attr("data-delete");
        var titlexoa = $(this).attr("data-titlexoa");
        var itemidSolr = $(this).attr("data-delete-solr");
        var action = $(this).attr("data-action");
        if (action == undefined)
            action = "";
        //var $odata = $(this).data();
        //$odata.ItemID = itemid;
        //$odata.do = "DELETE";
        if (itemidSolr != null && itemidSolr != undefined)
            DeleteFromDialog(urlaction + action, { "idsolr": itemidSolr }, gridName);
        else if (itemid == "" || itemid == ",")
            createMessage("Thông báo", "Bạn hãy chọn 1 bản ghi để xóa");
        else
            DeleteFromDialog(urlaction + action, { "ItemID": itemid, "id": itemid, "do": "DELETE" }, gridName, titlexoa);
    });
    // khôi phục
    $(document).on("click", ".btn-khoiphuc", function () {
        var $zone_search = $(this).closest(".smgrid");
        var urlaction = $zone_search.attr("data-controller");
        var gridName = $zone_search.attr("data-grid");
        var itemid = $(this).attr("data-khoiphuc");
        var titlexoa = $(this).attr("data-titlexoa");
        var itemidSolr = $(this).attr("data-delete-solr");
        var action = $(this).attr("data-action");
        if (action == undefined)
            action = "";
        if (itemidSolr != null && itemidSolr != undefined)
            DeleteFromDialog(urlaction + action, { "idsolr": itemidSolr }, gridName);
        else if (itemid == "" || itemid == ",")
            createMessage("Thông báo", "Bạn hãy chọn 1 bản ghi để khôi phục");
        else
            DeleteFromDialog(urlaction + action, { "id": itemid, "do": "KHOIPHUCVBD" }, gridName, titlexoa, "khôi phục");
    });
    // Yes/No
    $(document).on("click", ".btn-YesNo", function () {
        var idElement = $(this).attr("data-post");
        var lstElement = [];
        if (idElement.includes(","))
            lstElement = idElement.split(",");
        var lstID = "";
        var ItemID = "";
        if (lstElement.length > 0) {
            lstID = $("#" + lstElement[0]).val();
            ItemID = $("#" + lstElement[1]).val();
        } else
            lstID = $("#" + idElement).val();
        var title = $(this).attr("data-title");
        var urlaction = $(this).attr("data-urlaction");
        if ((lstID == "" || lstID == ",") && ItemID == "")
            createMessage("Thông báo", "Bạn hãy chọn 1 bản ghi để " + title);
        else
            YesNoDialog(urlaction, { "lstID": lstID, "ItemID": ItemID }, title);
    });
    /// Yes/No form
    function YesNoDialog(urlLoad, odata, nameaction) {
        if (nameaction == undefined)
            nameaction = "xóa";
        $("#wd_dialog").append("<div class='cus_dialog' style=\"padding:0px 15px;\">" +
            "<div class='htmlcontentmess'><p>Bạn có chắc chắn " + nameaction + " bản ghi đã chọn?</p></div>" +
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
                type: 'POST',
                success: function (result) {
                    showMsg(result.Message);
                    endLoading();
                    GetLich();
                }
            });
            dialogwindow.close();
        });
    }
    //// Checked/Unchecked checkbox on grid
    //$(document).on("click", ".chkbx", function () {
    //    var gridName = $(this).attr("data-grid");
    //    LstID = $("#" + gridName).closest(".smgrid").data("data").LstID;
    //    if (LstID == undefined)
    //        LstID = ",";
    //    if (e.checked) {
    //        var idchecked = e.value;
    //        LstID += (idchecked + ",");
    //    } else {
    //        var idchecked = e.value;
    //        LstID = LstID.replace("," + idchecked + ",", ","); //LstID. (idchecked + ",");
    //    }
    //    $("#" + gridName).closest(".smgrid").data("data").LstID = LstID;
    //    $(".zone_search").find('button .btn-delete').attr("data-delete", LstID);
    //    $(".zone_search").find('button .btn-khoiphuc').attr("data-khoiphuc", LstID);
    //});
    // permisson
    $(document).on("click", ".btn-permisson", function () {
        var $zone_search = $(this).closest(".smgrid");
        var urlform = $zone_search.attr("data-form");
        var widthform = $zone_search.attr("data-formwidth");
        var $title = $zone_search.attr("data-title");
        if ($title === undefined)
            $title = "Gán quyền";
        else $title = "Gán quyền " + $title;
        var itemid = $(this).attr("data-id");
        urlform = $(this).attr("data-url");
        var $odata = $(this).data();
        var $do = $(this).attr("data-do");
        if ($do === undefined)
            $do = "UPDATE";
        $odata.ItemID = itemid;
        $odata.do = $do;
        AddFormDialog(urlform, widthform, $title, $odata, true);
    });
    $(document).on("click", ".btnDeleteMulti", function () {
        var $zone_search = $(this).closest(".smgrid");
        var urlaction = $zone_search.attr("data-actiondelete");
        var gridName = $zone_search.attr("data-grid");
        var itemid = $("#" + gridName).data("kendoGrid").selectedKeyNames().join(","); // $(this).attr("data-delete");
        DeleteFromDialog(urlaction, { id: itemid }, gridName);
    });
    // duyệt
    $(document).on("click", ".btn-pendding", function () {
        var $zone_search = $(this).closest(".smgrid");
        var urlaction = $zone_search.attr("data-action");
        var gridName = $zone_search.attr("data-grid");
        var itemid = $(this).attr("data-id");
        var doact = $(this).attr("data-do");
        if (doact == undefined || doact == null)
            doact = "PENDDING";
        ApprovedPendding(urlaction, { ItemID: itemid, do: doact }, gridName);
    });
    //hủy duyệt
    $(document).on("click", ".btn-approved", function () {
        var $zone_search = $(this).closest(".smgrid");
        var urlaction = $zone_search.attr("data-action");
        var gridName = $zone_search.attr("data-grid");
        var itemid = $(this).attr("data-id");
        var doact = $(this).attr("data-do");
        if (doact == undefined || doact == null)
            doact = "APPROVED";
        ApprovedPendding(urlaction, { ItemID: itemid, do: doact }, gridName);
    });
    // xuất bản
    $(document).on("click", ".btn-xuatban", function () {
        var $zone_search = $(this).closest(".smgrid");
        var urlaction = $zone_search.attr("data-action");
        var gridName = $zone_search.attr("data-grid");
        var itemid = $(this).attr("data-id");
        ApprovedPendding(urlaction, { ItemID: itemid, do: "XUATBAN" }, gridName);
    });
    // hủy xuất bản
    $(document).on("click", ".btn-huyxuatban", function () {
        var $zone_search = $(this).closest(".smgrid");
        var urlaction = $zone_search.attr("data-action");
        var gridName = $zone_search.attr("data-grid");
        var itemid = $(this).attr("data-id");
        ApprovedPendding(urlaction, { ItemID: itemid, do: "HUYXUATBAN" }, gridName);
    });
    //thiet lap
    $(document).on("click", ".btn-thietlap", function () {
        var $zone_search = $(this).closest(".smgrid");
        var urlaction = $zone_search.attr("data-action");
        var gridName = $zone_search.attr("data-grid");
        var itemid = $(this).attr("data-id");
        ApprovedPendding(urlaction, { ItemID: itemid, do: "THIETLAP" }, gridName);
    });
    //huy thiet lap
    $(document).on("click", ".btn-huythietlap", function () {
        var $zone_search = $(this).closest(".smgrid");
        var urlaction = $zone_search.attr("data-action");
        var gridName = $zone_search.attr("data-grid");
        var itemid = $(this).attr("data-id");
        ApprovedPendding(urlaction, { ItemID: itemid, do: "HUYTHIETLAP" }, gridName);
    });
    //ket noi
    $(document).on("click", ".btn-ketnoi", function () {
        var $zone_search = $(this).closest(".smgrid");
        var urlaction = $zone_search.attr("data-action");
        var gridName = $zone_search.attr("data-grid");
        var itemid = $(this).attr("data-id");
        ApprovedPendding(urlaction, { ItemID: itemid, do: "KETNOI" }, gridName);
    });
    //huy ket noi
    $(document).on("click", ".btn-huyketnoi", function () {
        var $zone_search = $(this).closest(".smgrid");
        var urlaction = $zone_search.attr("data-action");
        var gridName = $zone_search.attr("data-grid");
        var itemid = $(this).attr("data-id");
        ApprovedPendding(urlaction, { ItemID: itemid, do: "NGATKETNOI" }, gridName);
    });
    // view
    $(document).on("click", ".view", function () {
        var $zone_search = $(this).closest(".smgrid");
        var urlform = $zone_search.attr("data-view");
        var widthform = $zone_search.attr("data-formwidth");
        var $title = $zone_search.attr("data-title");
        if ($title === undefined)
            $title = "Chi tiết";
        else $title = "Chi tiết " + $title;
        var $odata = $(this).data();
        var itemid = $(this).attr("data-id");
        if (itemid != undefined)
            $odata.ItemID = itemid;
        if (urlform != "" && urlform != undefined)
            AddFormDialog(urlform, widthform, $title, $odata);
    });
    $(document).on("click", ".btn-close", function () {
        $(this).closest("[data-role=window]").data("kendoWindow").close();
    });
    $(document).on("click", ".btn-reset", function () {
        $(this).closest(".cus_dialog").data("kendoWindow").refresh();
    });
    // các function xử lý checkall
    $(document).on("change", ".checked-all", function () {
        var $checkitems = getRoleTable($(this)).find("input.check-item");
        var $tagData = getRoleData($(this));
        if ($(this).is(":checked")) {
            $.each($checkitems, function () {
                if (!$(this).attr('disabled')) {
                    $(this).prop("checked", true);
                }
            });
        }
        else {
            $.each($checkitems, function () {
                if (!$(this).attr('disabled')) {
                    $(this).prop("checked", false);
                }
            });
        }
    });
    $(document).on("change", ".checked-all1", function () {
        var $checkitems = getRoleGrid($(this)).find("input.check-item1");
        if ($(this).is(":checked")) {
            $.each($checkitems, function () {
                if (!$(this).attr('disabled')) {
                    $(this).prop("checked", true);
                }
            });
        }
        else {
            $.each($checkitems, function () {
                if (!$(this).attr('disabled')) {
                    $(this).prop("checked", false);
                }
            });
        }
    });
    $(document).on("click", ".searhTG", function () {
        var $zone_search = $(this).closest(".smgrid");
        var gridName = $zone_search.attr("data-grid");
        if ($(this).hasClass('dang')) {
            $(this).removeClass('dang');
            $("#date").val("");
            refeshGrid(gridName);
        }
        else {
            $(".searhTG.dang").removeClass('dang');
            $(this).addClass('dang');
            $("#date").val($(this).data("type"));
            refeshGrid(gridName);
        }
    });
    $(document).on("click", ".smgrid a.refeshGrid", function () {
        var idInput = $(this).attr("data-id");
        var idInputRemove = $(this).attr("data-remove");
        var gridName = $(this).attr("data-grid");
        if ($(this).hasClass('filtering')) {
            $(this).removeClass("filtering");
            $(idInput).val("");
            refeshGrid(gridName);
        }
        else {
            $(".refeshGrid.filtering[data-id='" + idInput + "']").removeClass('filtering');
            if (idInputRemove != undefined && idInputRemove != "") {
                $(".refeshGrid.filtering[data-id='" + idInputRemove + "']").removeClass('filtering');
                $(idInputRemove).val("");
            }
            $(this).addClass("filtering");
            $(idInput).val($(this).attr("data-query"));
            refeshGrid(gridName);
        }
    });
    $(document).on("click", ".printTK, .btnprintTK", function () {
        var scrollwidth = getScrollBarWidth();
        $(".smtable tbody").css('max-height', 'none');
        $(".file").css("display", "none");
        $(".smtable thead").css('width', ' 100% ');
        var txt = $(".mainContentBaoCao").html();
        $(".smtable thead").css('width', 'calc( 100% - ' + scrollwidth + 'px )');
        $(".file").css("display", "table-cell");
        $(".smtable tbody").css('max-height', '400px');
        PrintElemTK(txt);
    });
    $(document).on("click", ".printTKHT, .btnprintTKHT", function () {
        var scrollwidth = getScrollBarWidth();
        $(".smtable tbody").css('max-height', 'none');
        $(".file").css("display", "none");
        $(".smtable thead").css('width', ' 100% ');
        var txt = $(".mainContentBaoCao").html();
        $(".smtable thead").css('width', 'calc( 100% - ' + scrollwidth + 'px )');
        $(".file").css("display", "table-cell");
        $(".smtable tbody").css('max-height', '400px');
        PrintElemTK(txt);
    });
    $(document).on("click", ".clsInDiv", function () {
        var txt = $("#" + $(this).attr("data-idel")).html();
        PrintElemTK(txt);
    });
    $('#frm-VanBanDen input[type=text]').not($(".eventer")).on('keyup keypress', function (e) {
        var keyCode = e.keyCode || e.which;
        if (keyCode === 13) {
            e.preventDefault();
            var fields = $("#" + thisID).find('button, input, textarea, select');
            var index = fields.index(this);
            if (index > -1 && ((index + 1) < fields.length)) {
                fields.eq(index + 1).focus();
            }
            return false;
        }
    });

});
function FromDialogConfirm(Title, urlLoad, odata, gridName, name, NoiDung, btname, funcCallBack) {
    if (name === undefined)
        name = "bản ghi";
    if (NoiDung === undefined || NoiDung === "")
        NoiDung = "Bạn có chắc chắn muốn " + "<span style='font-weight: bold;'>" + Title + " " + name + "</span>";
    $("#wd_dialog").append("<div class='cus_dialog'>" +
        "<div class='htmlcontentmess'><p>" + NoiDung + "</p></div>" +
        "<div class=\"buttons-wrap-messager\"><button type=\"button\" class=\"btn-warning btn confirm_yes\" style=\"margin-right:5px;\">Tiếp tục</button><button type=\"button\" class=\"btn confirm_no\">Hủy</button></div></div>");
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
    if (btname != undefined && btname !== "")
        myWindow.find(".confirm_yes").text(btname);
    myWindow.find(".confirm_yes").click(function () {
        loading();
        $.post(urlLoad, odata, function (data) {
            endLoading();
            if (data.Erros) {
                createMessage("Thông báo", data.Message); // Tạo thông báo lỗi
            }
            else {
                showMsg(data.Message);
                refeshGrid(gridName);

                if (funcCallBack != undefined)
                    eval(funcCallBack)(); //

            }
            dialogwindow.close();
        });
    });
}
function getRoleGrid($tag) {
    return $tag.closest("div.k-grid");
}
///join array object by field
function joinObj(a, attr) {
    var out = [];
    for (var i = 0; i < a.length; i++) {
        out.push(a[i][attr]);
    }
    return out.join(", ");
}
///
function EncodeHtml(str) {
    if (str == null || str == "") return "";
    var buf = [];
    for (var i = str.length - 1; i >= 0; i--) {
        buf.unshift(['&#', str[i].charCodeAt(), ';'].join(''));
    }
    return buf.join('');
}
/**
 * Class send văn bản 
 * @param {any} id: id người dùng
 * @param {any} title: Tên người dùng
 * @param {any} idGroup:id phòng ban/ đơn vị
 *  @param {any} typeGui: 1- phòng ban phụ trách
 *                        3- Người phụ trách
                         0- Tham gia - Phối hợp
                         2- Xem để biết.
          @param {any} Nhom: 0- không Là nhóm
                            1-là nhóm
                                @param {any} lstNhom: 0- không Là nhóm
                            1-là nhóm
 */
function ItemUser(id, title, idGroup = 0, typeGui = 0, Nhom = 0, lstNhom, TitleGroup, ValueSelect) {
    return {
        ID: id,
        Title: title,
        IDGroup: idGroup,
        TypeGui: typeGui,
        isNhom: Nhom,
        LstNhom: lstNhom,
        TitleGroup: TitleGroup,
        ValueSelect: ValueSelect
    };
}
function ItemUserThuHoi(idsolr, SMID, ID = 0, Title, isDonVi = false, idGroup = 0) {
    return {
        idsolr: idsolr,
        SMID: SMID,
        ID: ID,
        Title: Title,
        isDonVi: isDonVi,
        idGroup: idGroup,
    };
}
function checkArrayNotContainsValue(array, value, property) {
    for (var i = 0; i < array.length; i++) {
        if (array[i][property] == value) {
            return true;
        }
    }
    return false;
}
function gethtmlGridAttach(ListAttach) {
    var htmltd = "";
    $.each(ListAttach, function (index, value) {
        htmltd += '<a href="' + value.Url + '" title="' + value.Name + '" target="_blank"><i style="font-size:13px" class="fa fa-paperclip" aria-hidden="true"></i></a>';
    });
    return htmltd;
}
function radioUnChecked(nameUncheck) {
    $("#" + nameUncheck).prop("checked", false);
}
function PrintElemTK(txt) {
    var content = txt;
    var docprint = window.open("", "");
    docprint.document.open();
    docprint.document.write('<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"');
    docprint.document.write('"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">');
    docprint.document.write('<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en">');
    docprint.document.write('<head><title>print view</title>');
    docprint.document.write('<link rel="stylesheet" type="text/css" href="/Content/Plugins/bootstrap-3/css/bootstrap.css" />');
    docprint.document.write('<link rel="stylesheet" type="text/css" href="/Content/Plugins/Kendo/styles/kendo.bootstrap-v4.min.css"/>');
    docprint.document.write('<link type="text/css"  rel="stylesheet" href="/Content/Plugins/Select2/css/select2.min.css" />');
    docprint.document.write('<link type="text/css"  rel="stylesheet" href="/Content/Plugins/fancytree/dist/skin-win8/ui.fancytree.min.css" />');
    docprint.document.write('<link type="text/css"  rel="stylesheet"  href="/Content/Plugins/font-awesome/css/font-awesome.min.css" />');
    docprint.document.write('<link type="text/css"  rel="stylesheet"  href="/Content/Plugins/fselect/fSelect.css" />');
    docprint.document.write('<link type="text/css" href="/Content/Plugins/Kendo/styles/kendo.silver.min.css" rel="stylesheet" />');
    docprint.document.write('<link rel="stylesheet" type="text/css" href="/Content/Styles/StyleHome.css" />');
    docprint.document.write('<style>label {padding-top:7px} label{font-weight:bold}</style>');
    docprint.document.write('<script src="/Content/Plugins/jquery/jquery-3.3.1.min.js">');
    docprint.document.write('<\/script>');
    docprint.document.write('<script src="/Content/Plugins/Kendo/js/kendo.all.min.js" >');
    docprint.document.write('<\/script>');
    docprint.document.write('<script src="/Content/Scripts/jquery.validate.js" >');
    docprint.document.write('<\/script>');
    docprint.document.write('<script src="/Content/Plugins/ckeditor/ckeditor.js" >');
    docprint.document.write('<\/script>');
    docprint.document.write('<script src="/Content/Scripts/shortcut.js" >');
    docprint.document.write('<\/script>');
    docprint.document.write('<script src="/Content/Plugins/Select2/js/select2.js" >');
    docprint.document.write('<\/script>');
    docprint.document.write('<script src="/Content/Plugins/workflow/jquery.html-svg-connect.js" >');
    docprint.document.write('<\/script>');
    docprint.document.write('<script src="/Content/Scripts/Common.js" >');
    docprint.document.write('<\/script>');
    docprint.document.write('<script src="/Content/Scripts/siteScript.js" >');
    docprint.document.write('<\/script>');
    docprint.document.write('</head><body onLoad="self.print();self.close();" style="background:#fff;"></br>');
    docprint.document.write(content);
    docprint.document.write('</body></html>');
    docprint.document.close();
    docprint.focus();
}
//get tên ko đấu và ko dấu cache
function getTenKhongDau2(alias) {
    var str = alias;
    str = str.replace(/\s+/g, ' ');
    str = str.replace(/ /g, '');
    str = str.replace(/,/g, '');
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    str = str.replace(/đ/g, "d");
    str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
    str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
    str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
    str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
    str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
    str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
    str = str.replace(/Đ/g, "D");

    return str;
}
//Tên file nếu dài hơn 70 ký tự thì cắt đi, chỉ để lại 70 ký tự và tự động cộng thêm thời gian vào sau tên file để tránh bị trùng, còn nếu tên file mà chưa tới giới hạn 70 ký tự thì bỏ qua
function Renamefile(alias) {
    let str = alias;
    if (str.length <= 90)
        return str;
    else {
        str = alias.substring(0, 90);
        var d = new Date();
        str += "." + d.yyyymmddhhmmss();
    }
    return str;
}
Date.prototype.yyyymmdd = function () {
    var yyyy = this.getFullYear();
    var mm = this.getMonth() < 9 ? "0" + (this.getMonth() + 1) : (this.getMonth() + 1); // getMonth() is zero-based
    var dd = this.getDate() < 10 ? "0" + this.getDate() : this.getDate();
    return "".concat(yyyy).concat(mm).concat(dd);
};

Date.prototype.yyyymmddhhmm = function () {
    var yyyymmdd = this.yyyymmdd();
    var hh = this.getHours() < 10 ? "0" + this.getHours() : this.getHours();
    var min = this.getMinutes() < 10 ? "0" + this.getMinutes() : this.getMinutes();
    return "".concat(yyyymmdd).concat(hh).concat(min);
};
Date.prototype.yyyymmddhhmmss = function () {
    var yyyymmddhhmm = this.yyyymmddhhmm();
    var ss = this.getSeconds() < 10 ? "0" + this.getSeconds() : this.getSeconds();
    return "".concat(yyyymmddhhmm).concat(ss);
};
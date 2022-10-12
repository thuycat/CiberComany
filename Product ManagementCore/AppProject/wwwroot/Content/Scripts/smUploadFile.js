function delfileupload(filedel, atid, $input) {
    $lement = $('#' + atid + ' li.clslifile[data-id="' + filedel + '"]');
    $lement.remove();
    $elemendDelete = $("#" + $input).val("");
    changeHiddenInput("#" + atid, $input);
}
function DeleteFileUpdate(filename, fileid, clsremove = "removeFile") {
    $lement = $('li.' + clsremove + '[data-id="' + filename + '"]');
    $lement.remove();
    var lstRemove = $("#" + fileid).val();
    if (lstRemove == null || lstRemove == "") {
        lstRemove += filename;
    } else {
        lstRemove += ("#" + filename);
    }
    $("#" + fileid).val(lstRemove);
}
function changeHiddenInput(atid, $input) {
    var valueFile = '[';
    var total = $(atid + " li.clslifile").length;
    $(atid + " li").each(function (i) {
        //hautt: check ko chứa clsHSCV để không add các file chọn từ HSCV vào
        if (!$(this).hasClass("clsHSCV")) {
            var filename = $(this).attr("data-title");

            valueFile += '{"FileServer": "' + $(this).attr("data-id") + '"\,';
            valueFile += '"FileName": "' + filename + '"\}';
            if (i + 1 < total)
                valueFile += ',';
        }
    });
    valueFile += "]";
    if ($input == undefined)
        $input = "listValueFileAttach";

    $("#" + $input).val(valueFile);
    return valueFile;
}
function CK_jQ() {
    for (instance in CKEDITOR.instances) {
        CKEDITOR.instances[instance].updateElement();
    }
}
(function ($) {
    $.fn.SmUpload = function (settings) {
        var $this = $(this);
        var isexit = true;
        var nameCurent = "";
        var thisID = $this.attr("id");
        var config = {
            classfile: '',
            copyfile: false,
            formatnew: false,
            editfile: false,
            hasInputChangeName: false,
            hasDelete: true,
            isRename: true,
            goiy: true,
            preview: true,
            files: '',
            hauto: '',
            ulshow: "listFileAttach",
            ValueFileAttach: "listValueFileAttach",
            ValueFileAttachRemove: "listValueFileAttachRemove",
            lstfile: [],
            async: {
                saveUrl: "/BaseWeb/ActionHandler.aspx?do=SaveUpload",
                removeUrl: "/BaseWeb/ActionHandler.aspx?do=RemoveUpload",
                autoUpload: true
            },
            validation: {
                allowedExtensions: ["jpg", "jpeg", "png", "gif", "doc", "docx", "wmv", "mp4", "xls", "xlsx", "pdf", "xml", "txt", "rar", "zip"],
                maxFileSize: 50000000
            },
            localization: {
                select: "Đính kèm file ...",
                statusFailed: "Fail gì đó",
                stastatusUploaded: "customStatusUploaded",
                statusUploading: "customStatusUploading",
                invalidFileExtension: "Sai rồi",
                headerStatusUploaded: "<span class='sm-control-status'>Xong</span>",
                headerStatusUploading: "<span class='sm-control-status'>Đang tải ...</span>"
            },
            multiple: true,
            select: function (e) {

            },
            success: function (e) {
            },
            Rcomplete: function () { },
            complete: function (e, data) { },
            error: function (e) {
            },
            progress: function (e) {
            },
            remove: function (e) { },
            showFileList: false,
            dropZone: ".DrZone-" + $(this).attr("id")
        };

        if (settings) $.extend(config, settings);
        if (config.hauto != undefined && config.hauto != '') {
            config.ValueFileAttach = "listValueFileAttach" + config.hauto;
            config.ulshow = "listFileAttach" + config.hauto;
            config.ValueFileAttachRemove = "listValueFileAttach" + config.hauto + "Remove";
        }
        //Xử lý với trường hợp.
        if (typeof config.files == 'string' && config.files.length > 0)
            config.files = JSON.parse(config.files);
        var nameclass = "";
        if (config.formatnew)
            nameclass = "listFile-show";
        // Xử lý html để ra file đính kèm
        var $attachshow = "AttachShow-" + $(this).attr("id");
        var $htmlinput = "<input type=\"hidden\" id=\"" + config.ValueFileAttach + "\" name=\"" + config.ValueFileAttach + "\" />" +
            "<input type=\"hidden\" id=\"" + config.ValueFileAttachRemove + "\" name=\"" + config.ValueFileAttachRemove + "\" />";
        $("#" + $attachshow).html($htmlinput +
            "<ul id=\"" + config.ulshow + "\" class=\"" + nameclass + "\" ></ul><ul id=\"" + config.ulshow + "Remove\"></ul>");
        if (config.goiy && !$("#" + $attachshow).closest(".row").parent().text().includes("Yêu cầu đính kèm file pdf"))
            $("#" + $attachshow).closest(".row").parent().append('<div style="padding:5px;color:#007bff"><i>Yêu cầu đính kèm file pdf</i></div>');
        //xử lý file đã đính kèm
        if (config.files.length > 0) {
            if (!config.editfile) {
                $.each(config.files, function (index, value) {
                    var $htmlfile = "<li class=\"removeFile\" data-id=\"" + value.Name + "\">" +
                        "<img class='icontype' src='/Content/Sigov/images/FileType/" + value.Name.split('.').pop().toLowerCase() + ".png' />" +
                        "<a class=\"clsafile\" href=\"" + encodeURI(value.Url) + "\" data-title=\"" + value.Name + "\" data-url=\"" + encodeURI(value.Url) + "\" target=\"_blank\"><span title=\"" + value.Name + "\" id=\"" + value.Name + "\">" + value.Name + "</span></a>"
                        + "&nbsp; &nbsp; <a href=\"javascript:;\" onclick=\"viewToanVan('" + value.Url + "')\" title=\"xem file online\">"
                        + "<img border=\"0\" title=\"xem file\" src=\"/Content/Sigov/images/Search-icon.png\"></a>" +
                        "&nbsp; ";
                    if (config.hasDelete) {
                        $htmlfile += "<a class=\"lnkDeFile\" href=\"javascript:DeleteFileUpdate('" + value.Name + "', '" + config.ValueFileAttachRemove + "');\">" +
                            "<img border=\"0\" title=\"Xóa file đính kèm\" src=\"/Content/Sigov/images/act_filedelete.png\">" +
                            "</a>";
                    };

                    $htmlfile += "</li>";
                    $("#" + config.ulshow + "Remove").append($htmlfile);
                });
            }
            else {
                $.each(config.files, function (index, value) {
                    var nameFile = value.Name;
                    var namechange = value.NameChange;
                    if (namechange == null || namechange == "")
                        namechange = nameFile;
                    // nameFile = nameFile.replace(/[^a-zA-Z0-9]/g, "");
                    var classfile = config.classfile;
                    if (config.classfile == "kyfile" && value.Url.includes(".doc"))
                        classfile = "";
                    else
                        classfile = config.classfile;
                    if (value.Url.includes("Lists/") || value.Url.includes("/bokhcn/HoSoCongViec/") || config.copyfile) {
                        var resultBack = "<li class='clslifile " + classfile + "' data-title=\"" + nameFile + "\" data-id='" + encodeURI(value.Url) + "' data-url='" + encodeURI(value.Url) + "'>" + "<img class='icontype' src='/Content/Sigov/images/FileType/" + value.Name.split('.').pop().toLowerCase() + ".png' />" +
                            "<a href=\"" + encodeURI(value.Url) + "\" target=\"_blank\"><span data-url=\"" + encodeURI(value.Url) + "\" data-name=\"" + encodeURI(value.Url) + "\">" + nameFile + "</span></a>&nbsp; ";
                        resultBack += "<a class=\"lnkDeFile\"href=\"javascript:delfileupload('" + encodeURI(value.Url) + "','" + config.ulshow + "','" + config.ValueFileAttach + "');\"><img class='filedelete' src='/Content/Sigov/images/act_filedelete.png' /></a>";

                    }
                    else {
                        let array = value.Url.split("/");
                        let nameserver = array[array.length - 1];
                        var resultBack = "<li class='clslifile " + classfile + "' data-title=\"" + nameFile + "\" data-id='" + nameFile + "'  data-url=\"" + encodeURI(value.Url) + "\">" + "<img class='icontype' src='/Content/Sigov/images/FileType/" + value.Name.split('.').pop().toLowerCase() + ".png' />" +
                            "<a href=\"" + encodeURI(value.Url) + "\" target=\"_blank\"><span data-url=\"" + encodeURI(value.Url) + "\" data-name=\"" + encodeURI(value.Url) + "\">" + nameFile + "</span></a>&nbsp; ";
                        resultBack += "<a class=\"lnkDeFile\" href=\"javascript:DeleteFileUpdate('" + nameFile + "', '" + config.ValueFileAttachRemove + "','clslifile');\">" +
                            "<img border=\"0\" title=\"Xóa file đính kèm\" src=\"/Content/Sigov/images/act_filedelete.png\">" +
                            "</a>";
                    }

                    if (config.hasInputChangeName) {
                        resultBack += "<input class=\"form-control\" data-title=\"" + nameFile + "\" value=\"" + namechange + "\">" +
                            "</input>";
                    };
                    resultBack += "</li>";
                    $("#AttachShow-" + thisID + " #" + config.ulshow).append(resultBack);
                    if (!value.Url.includes("/FileVBDH/") || config.copyfile)
                        changeHiddenInput("#AttachShow-" + thisID + " #" + config.ulshow, "AttachShow-" + thisID + " #" + config.ValueFileAttach);
                });
            }

        }
        config.Rcomplete();
        $this.kendoUpload({
            validation: config.validation,
            async: config.async,
            localization: config.localization,
            showFileList: config.showFileList,
            dropZone: config.dropZone,
            multiple: config.multiple,
            select: function (e) {

                var filesInList = [];
                $("#AttachShow-" + thisID + " li.clslifile").each(function () {
                    filesInList.push($(this).attr('data-title'));
                });
                $("#AttachShow-" + thisID + " li.removeFile").each(function () {
                    filesInList.push($(this).attr('data-id'));
                });
                $.each(e.files, function (index, value) {
                    nameCurent = value.name;
                    $.each(filesInList, function (index, value) {
                        if (value === nameCurent) {
                            alert("Tên file " + nameCurent + " đã tồn tại trong hệ thống.");
                            $("#" + thisID + " .sm-control-status").html("Lỗi");
                            e.preventDefault();
                        }
                    });
                    if (value.size > config.validation.maxFileSize) {
                        //createMessage("Thông báo", "Dung lượng file quá lớn!!! Dung lượng tối đa cho phép: " + config.validation.maxFileSize + "bytes");
                        //openDialogMsg("Thông báo", "Dung lượng file quá lớn!!! Dung lượng tối đa cho phép: " + config.validation.maxFileSize + "bytes")
                        alert("Dung lượng file quá lớn!!! Dung lượng tối đa cho phép: " + config.validation.maxFileSize / 1000000 + "MB");
                        $("#" + thisID + " .sm-control-status").html("Lỗi");
                    }

                    if (config.validation.allowedExtensions != null && config.validation.allowedExtensions != undefined && config.validation.allowedExtensions.indexOf(value.extension.slice(1).toLowerCase()) == -1) {
                        //openDialogMsg("Thông báo", "File không nằm trong định dạng cho phép!!! Các định dạng cho phép: " + config.validation.allowedExtensions.toString())
                        //createMessage("Thông báo", "File không nằm trong định dạng cho phép!!! Các định dạng cho phép: " + config.validation.allowedExtensions.toString());
                        alert("File không nằm trong định dạng cho phép!!! Các định dạng cho phép: " + config.validation.allowedExtensions.toString());
                        $("#" + thisID + " .sm-control-status").html("Lỗi");
                    }
                });
                config.select(e);
            },
            success: function (e) {
                // xử lý file upload trùng tên
                if (!isexit) {
                    isexit = true;
                    try {
                        openDialogMsg("Thông báo", "File " + nameCurent + " đã được đính kèm");
                    }
                    catch (ex) {
                        createMessage("Thông báo", "File " + nameCurent + " đã được đính kèm");
                    }
                    return false;
                }

                var files = e.files;
                var response = e.response;
                //if (response.Erros) {
                //    createMessage("Thông báo", "Dung lượng tối đa cho phép: " + response.Message+"MB.");
                //    return false;
                //}
                if (e.operation == "upload") {
                    var nameFile = files[0].name;
                    //xuwr ly phan hien thi file.
                    if (config.isRename) {
                        var index = nameFile.lastIndexOf('.');
                        var filetype = nameFile.substring(index, nameFile.length);
                        var name = nameFile.substring(0, index);
                        name = getTenKhongDau2(name); //name.replace(/[^a-zA-Z0-9]/g, "");
                        name = Renamefile(name);
                        nameFile = name + filetype;
                    }
                    else {
                        var index = nameFile.lastIndexOf('.');
                        var filetype = nameFile.substring(index, nameFile.length);
                        var name = nameFile.substring(0, index);
                        name = Renamefile(name);
                        nameFile = name + filetype;
                    }
                    // nameFile = nameFile.replace(/[^a-zA-Z0-9]/g, "");
                    var classfile = config.classfile;
                    if (config.classfile == "kyfile" && response.Data.includes(".doc"))
                        classfile = "";
                    else
                        classfile = config.classfile;
                    var resultBack = "";
                    if (config.formatnew) {
                        resultBack = "<li class=\"file-hover clslifile " + classfile + "\" title=\"" + nameFile + "\"  data-title=\"" + nameFile + "\" data-id='" + response.ServerName + "'  data-url=\"" + response.Data + "\" data-ulshowvalue=\"" + config.ulshowvalue + "\" data-ulshow=\"" + config.ulshow + "\"><span style=\"display: flex; position: relative;width: 161%;\"><a class=\"clsafile\" href=\"" + response.Data + "\" target=\"_blank\"><img class='icontype' src='/Content/Sigov/images/FileType/" + files[0].extension.substring(1) + ".png' /><span title='" + nameFile + "'>" + nameFile + "</span></a><a class=\"lnkDeFile\" href=\"javascript:delfileupload('" + response.ServerName + "','" + config.ulshow + "','" + config.ValueFileAttach + "');\"><img class='filedelete' data-id='" +
                            response.ServerName + "' src='/Content/Sigov/images/act_filedelete.png' /></a></span></li>";
                    } else {
                        resultBack = "<li class='clslifile " + classfile + "' data-title=\"" + nameFile + "\" data-id='" + response.ServerName + "' data-url=\"" + response.Data + "\" >" + "<img class='icontype' src='/Content/Sigov/images/FileType/" +
                            files[0].extension.substring(1) + ".png' />" +
                            "<a class=\"clsafile\"  data-title=\"" + nameFile + "\" data-url=\"" + response.Data + "\" href=\"" + response.Data + "\" target=\"_blank\"><span data-url=\"" + response.Data + "\" data-name=\"" + response.ServerName + "\">" + nameFile + "</span></a>" +
                            "&nbsp; <a class=\"lnkDeFile\" href=\"javascript:delfileupload('" + response.ServerName + "','" + config.ulshow + "','" + config.ValueFileAttach + "');\"><img class='filedelete' data-id='" +
                            response.ServerName + "' src='/Content/Sigov/images/act_filedelete.png' /></a>";
                    }
                    if (config.hasInputChangeName) {
                        resultBack += "<input class=\"form-control\" data-title=\"" + nameFile + "\" value=\"" + nameFile + "\">" +
                            "</input>";
                    };
                    resultBack += "</li>";
                    $("#AttachShow-" + thisID + " #" + config.ulshow).append(resultBack);
                    changeHiddenInput("#AttachShow-" + thisID + " #" + config.ulshow, "AttachShow-" + thisID + " #" + config.ValueFileAttach);

                }
                if (jQuery.isFunction(config.success)) {
                    config.success(response); //
                }

            },
            complete: config.complete,
            error: config.error,
            progress: config.progress,
            remove: config.remove
        });
        if (config.hide == true) {
            $this.closest(".wrapper-chat").hide();
        }
        else {
            $this.closest(".k-upload").width($this.width() + 50);
        }
    }
    $.fn.SmUploadV2 = function (settings) {
        var $this = $(this);
        var thisID = $this.attr("id");
        var config = {
            preview: true,
            files: '',
            ulshow: "list" + thisID,
            ValueFileAttach: "listValue" + thisID,
            ValueFileAttachRemove: "listValue" + thisID + "Remove",
            async: {
                saveUrl: "/BaseWeb/ActionHandler.aspx?do=SaveUpload",
                removeUrl: "/BaseWeb/ActionHandler.aspx?do=RemoveUpload",
                autoUpload: true
            },
            validation: {
                allowedExtensions: ["jpg", "jpeg", "png", "gif", "doc", "docx", "wmv", "mp4", "xls", "xlsx", "pdf", "xml", "txt", "rar", "zip"],
                maxFileSize: 50000000
            },
            localization: {
                select: "Đính kèm file ...",
                statusFailed: "Fail gì đó",
                stastatusUploaded: "customStatusUploaded",
                statusUploading: "customStatusUploading",
                invalidFileExtension: "Sai rồi",
                headerStatusUploaded: "<span class='sm-control-status'>Xong</span>",
                headerStatusUploading: "<span class='sm-control-status'>Đang tải ...</span>"
            },
            multiple: true,
            select: function (e) {
                $.each(e.files, function (index, value) {
                    if (value.size > config.validation.maxFileSize) {
                        createMessage("Thông báo", "Dung lượng file quá lớn!!! Dung lượng tối đa cho phép: " + config.validation.maxFileSize / 1000000 + "MB");
                        $("#" + thisID + " .sm-control-status").html("Lỗi");
                    }
                    if (config.validation.allowedExtensions.indexOf(value.extension.slice(1).toLowerCase()) == -1) {
                        createMessage("Thông báo", "File không nằm trong định dạng cho phép!!! Các định dạng cho phép: " + config.validation.allowedExtensions.toString());
                        $("#" + thisID + " .sm-control-status").html("Lỗi");
                    }
                });
            },
            complete: function (e) { },

            error: function (e) {
            },
            progress: function (e) {
            },
            remove: function (e) { },
            showFileList: false,
            dropZone: ".DrZone-" + $(this).attr("id")
        };
        if (settings) $.extend(config, settings);
        //Xử lý với trường hợp.
        if (typeof config.files == 'string' && config.files.length > 0)
            config.files = JSON.parse(config.files);
        // Xử lý html để ra file đính kèm
        var $attachshow = "AttachShow-" + $(this).attr("id");
        var $htmlinput = "<input type=\"hidden\" id=\"" + config.ValueFileAttach + "\" name=\"" + config.ValueFileAttach + "\" />" +
            "<input type=\"hidden\" id=\"" + config.ValueFileAttachRemove + "\" name=\"" + config.ValueFileAttachRemove + "\" />";
        $("#" + $attachshow).html($htmlinput +
            "<ul id=\"" + config.ulshow + "\"></ul><ul id=\"" + config.ulshow + "Remove\"></ul>");
        //xử lý file đã đính kèm
        if ($.isArray(config.files) && config.files.length > 0) {
            $.each(config.files, function (index, value) {
                var $htmlfile = "<li class=\"removeFile\" data-id=\"" + value.Name + "\">" +
                    "<img class='icontype' src='/Content/Sigov/images/FileType/" + value.Name.split('.').pop().toLowerCase() + ".png' />" +
                    "<a href=" + value.Url + " target=\"_blank\"><span title=\"" + value.Name + "\" id=\"" + value.Name + "\">" + value.Name + "</span></a>" +
                    "&nbsp; <a href=\"javascript:DeleteFileUpdate('" + value.Name + "', '" + config.ValueFileAttachRemove + "');\">" +
                    "<img border=\"0\" title=\"Xóa file đính kèm\" src=\"/Content/Sigov/images/act_filedelete.png\">" +
                    "</a></li>";
                $("#" + config.ulshow + "Remove").append($htmlfile);
            });
        }

        $this.kendoUpload({
            async: config.async,
            validation: config.validation,
            localization: config.localization,
            showFileList: config.showFileList,
            dropZone: config.dropZone,
            multiple: config.multiple,
            select: config.select,
            success: function (e) {
                var files = e.files;
                var response = e.response;
                if (e.operation == "upload") {
                    var nameFile = files[0].name;
                    //var nameFile = files[0].name;
                    //xuwr ly phan hien thi file.
                    var index = nameFile.lastIndexOf('.');
                    var filetype = nameFile.substring(index, nameFile.length);
                    var name = nameFile.substring(0, index);
                    name = getTenKhongDau2(name); //name.replace(/[^a-zA-Z0-9]/g, "");
                    nameFile = name + filetype;
                    var resultBack = "<li class='clslifile' data-title=\"" + nameFile + "\" data-id='" + response.ServerName + "'>" + "<img class='icontype' src='/Content/Sigov/images/FileType/" + files[0].extension.substring(1) + ".png' />" +
                        "<a href=\"" + response.Data + "\"><span data-url=\"" + response.Data + "\" data-name=\"" + response.ServerName + "\">" + nameFile + "</span></a>" +
                        "&nbsp; <a href=\"javascript:delfileupload('" + response.ServerName + "','" + config.ulshow + "','" + config.ValueFileAttach + "');\"><img class='filedelete' data-id='" + response.ServerName + "' src='/Content/Sigov/images/act_filedelete.png' /></a>"
                    "</li>"
                    $("#" + config.ulshow).append(resultBack);
                    changeHiddenInput("#" + config.ulshow, config.ValueFileAttach);
                }
            },
            complete: config.complete,
            error: config.error,
            progress: config.progress,
            remove: config.remove
        });
        if (config.hide == true) {
            $this.closest(".wrapper-chat").hide();
        }
        else {
            $this.closest(".k-upload").width($this.width() + 50);
        }
    }
    $.fn.SmUploadImg = function (settings) {

        var $this = $(this);
        var isexit = true; var nameCurent = "";
        var thisID = $this.attr("id");
        var config = {
            preview: true,
            files: '',
            hauto: '',
            ulshow: "listFileAttach",
            ValueFileAttach: "listValueFileAttach",
            ValueFileAttachRemove: "listValueFileAttachRemove",
            lstfile: [],
            async: {
                saveUrl: "/BaseWeb/ActionHandler.aspx?do=SaveUpload",
                removeUrl: "/BaseWeb/ActionHandler.aspx?do=RemoveUpload",
                autoUpload: true
            },
            validation: {
                allowedExtensions: ["jpg", "jpeg", "png", "gif"],
                maxFileSize: 50000000
            },
            localization: {
                select: "Chọn ảnh đại diện ...",
                statusFailed: "Fail gì đó",
                stastatusUploaded: "customStatusUploaded",
                statusUploading: "customStatusUploading",
                invalidFileExtension: "Sai rồi",
                headerStatusUploaded: "<span class='sm-control-status'>Xong</span>",
                headerStatusUploading: "<span class='sm-control-status'>Đang tải ...</span>"
            },
            multiple: true,
            select: function (e) {

                $.each(e.files, function (index, value) {
                    nameCurent = value.name;
                    var controlValue = $("#" + config.ValueFileAttach).val();
                    if (controlValue != null && controlValue != "") {
                        var arrExit = JSON.parse(controlValue);
                        var item = $.grep(arrExit, function (item) {
                            return item.FileName == nameCurent;
                        });
                        if (item.length > 0) {
                            //createMessage("Thông báo", "File " + nameCurent+" đã tồn tại");
                            //alert("File " + nameCurent + " đã tồn tại")
                            isexit = false;
                        }
                    }
                    //// xử lý file đã upload trùng tên
                    //if (config.files.length > 0) {
                    //    $.each(config.files, function (index2, value2) {
                    //        if (value2.Name == nameCurent) {
                    //            DeleteFileUpdate(nameCurent, config.ValueFileAttachRemove);
                    //        }
                    //    });
                    //}
                    if (value.size > config.validation.maxFileSize) {
                        alert("Dung lượng file quá lớn!!! Dung lượng tối đa cho phép: " + config.validation.maxFileSize / 1000000 + "MB");
                        $("#" + thisID + " .sm-control-status").html("Lỗi");
                    }
                    if (config.validation.allowedExtensions.indexOf(value.extension.slice(1).toLowerCase()) == -1) {
                        alert("File không nằm trong định dạng cho phép!!! Các định dạng cho phép: " + config.validation.allowedExtensions.toString());
                        $("#" + thisID + " .sm-control-status").html("Lỗi");
                    }
                });

            },
            success: function (e) {

            },

            complete: function (e, data) { },
            error: function (e) {
            },
            progress: function (e) {
            },

            remove: function (e) { },
            showFileList: false,
            dropZone: ".DrZone-" + $(this).attr("id")
        };

        if (settings) $.extend(config, settings);
        if (config.hauto != undefined && config.hauto != '') {
            config.ValueFileAttach = "listValueFileAttach" + config.hauto;
            config.ulshow = "listFileAttach" + config.hauto;
            config.ValueFileAttachRemove = "listValueFileAttach" + config.hauto + "Remove";
        }

        //Xử lý với trường hợp.


        if (typeof config.files == 'string' && config.files.length > 0)
            config.files = JSON.parse(config.files);
        // Xử lý html để ra file đính kèm
        var $attachshow = "AttachShow-" + $(this).attr("id");
        var $htmlinput = "<input type=\"hidden\" id=\"" + config.ValueFileAttach + "\" name=\"" + config.ValueFileAttach + "\" />" +
            "<input type=\"hidden\" id=\"" + config.ValueFileAttachRemove + "\" name=\"" + config.ValueFileAttachRemove + "\" />";
        $("#" + $attachshow).html($htmlinput +
            "<ul id=\"" + config.ulshow + "\" class=\"content-image-dd\"></ul><ul id=\"" + config.ulshow + "Remove\"></ul>");
        //xử lý file đã đính kèm
        if (config.files.length > 0) {
            $.each(config.files, function (index, value) {
                var $htmlfile = "<li class=\"removeFile\" data-id=\"" + value.Name + "\">" +
                    "<img src=\"" + value.Url + "\" />" +
                    "&nbsp; <a href=\"javascript:DeleteFileUpdate('" + value.Name + "', '" + config.ValueFileAttachRemove + "');\">" +
                    "<img border=\"0\" title=\"Xóa file đính kèm\" src=\"/Content/Sigov/images/act_filedelete.png\">" +
                    "</a></li>";
                $("#" + config.ulshow + "Remove").append($htmlfile);
            });

        }
        $this.kendoUpload({
            validation: config.validation,
            async: config.async,
            localization: config.localization,
            showFileList: config.showFileList,
            dropZone: config.dropZone,
            multiple: config.multiple,
            select: config.select,
            success: function (e) {
                if (!isexit) {
                    isexit = true;
                    alert("File " + nameCurent + " đã đính kèm");
                    return false;
                }

                var files = e.files;
                var response = e.response;
                if (e.operation == "upload") {
                    var nameFile = files[0].name;
                    //var nameFile = files[0].name;
                    //xuwr ly phan hien thi file.
                    var index = nameFile.lastIndexOf('.');
                    var filetype = nameFile.substring(index, nameFile.length);
                    var name = nameFile.substring(0, index);
                    name = getTenKhongDau2(name); //name.replace(/[^a-zA-Z0-9]/g, "");
                    nameFile = name + filetype;
                    var resultBack = "<li class='clslifile' data-title=\"" + nameFile + "\" data-id='" + response.ServerName + "'>" + "<img src=" + response.Data + " style=\"width:210px;\"/>" +
                        "&nbsp; <a class=\"lnkDeFile\" href=\"javascript:delfileupload('" + response.ServerName + "','" + config.ulshow + "','" + config.ValueFileAttach + "');\"><img class='filedelete' data-id='" +
                        response.ServerName + "' src='/Content/Sigov/images/act_filedelete.png' /></a></li>";
                    $("#" + config.ulshow).html(resultBack);
                    changeHiddenInput("#" + config.ulshow, config.ValueFileAttach);
                }
                if (jQuery.isFunction(config.success)) {
                    config.success(response); //
                }

            },

            complete: config.complete,
            error: config.error,
            progress: config.progress,
            remove: config.remove
        });
        if (config.hide == true) {
            $this.closest(".wrapper-chat").hide();
        }
        else {
            $this.closest(".k-upload").width($this.width() + 50);
        }
    }

    $.fn.SmUploadKySo = function (settings) {
        var $this = $(this);
        var isexit = true;
        var nameCurent = "";
        var thisID = $this.attr("id");
        var config = {
            hasDelete: true,
            hienthifile: true,
            KySo: true,
            goiy: true,
            preview: true,
            files: '',
            hauto: '',
            ulshow: "listFileAttach",
            ValueFileAttach: "listValueFileAttach",
            ValueFileAttachRemove: "listValueFileAttachRemove",
            lstfile: [],
            async: {
                saveUrl: "/BaseWeb/ActionHandler.aspx?do=SaveUpload",
                removeUrl: "/BaseWeb/ActionHandler.aspx?do=RemoveUpload",
                autoUpload: true
            },
            validation: {
                allowedExtensions: ["jpg", "jpeg", "png", "gif", "doc", "docx", "wmv", "mp4", "xls", "xlsx", "pdf", "xml", "txt", "rar", "zip"],
                maxFileSize: 50000000
            },
            localization: {
                select: "Đính kèm file ...",
                statusFailed: "Fail gì đó",
                stastatusUploaded: "customStatusUploaded",
                statusUploading: "customStatusUploading",
                invalidFileExtension: "Sai rồi",
                headerStatusUploaded: "<span class='sm-control-status'>Xong</span>",
                headerStatusUploading: "<span class='sm-control-status'>Đang tải ...</span>"
            },
            multiple: true,
            select: function (e) {

            },
            success: function (e) {

            },

            complete: function (e, data) { },
            error: function (e) {
            },
            progress: function (e) {
            },
            remove: function (e) { },
            showFileList: false,
            dropZone: ".DrZone-" + $(this).attr("id")
        };

        if (settings) $.extend(config, settings);
        if (config.hauto != undefined && config.hauto != '') {
            config.ValueFileAttach = "listValueFileAttach" + config.hauto;
            config.ulshow = "listFileAttach" + config.hauto;
            config.ValueFileAttachRemove = "listValueFileAttach" + config.hauto + "Remove";
        }
        //Xử lý với trường hợp.
        if (typeof config.files == 'string' && config.files.length > 0) {
            if (config.files.indexOf("\\") > -1)
                config.files = config.files.replace(/\\/g, '/');
            config.files = JSON.parse(config.files);
        }

        // Xử lý html để ra file đính kèm
        var $attachshow = "AttachShow-" + $(this).attr("id");
        var $htmlinput = "<input type=\"hidden\" id=\"" + config.ValueFileAttach + "\" name=\"" + config.ValueFileAttach + "\" />" +
            "<input type=\"hidden\" id=\"" + config.ValueFileAttachRemove + "\" name=\"" + config.ValueFileAttachRemove + "\" />";
        $("#" + $attachshow).html($htmlinput +
            "<ul id=\"" + config.ulshow + "\"></ul><ul id=\"" + config.ulshow + "Remove\"></ul>");
        if (config.goiy)
            $("#" + $attachshow).closest(".row").parent().append('<div style="padding:5px;color:#007bff"><i>Nên sử dụng file pdf</i></div>');
        //xử lý file đã đính kèm

        if (config.files.length > 0) {
            $.each(config.files, function (index, value) {
                var $htmlvalidatakyso = '';
                if (value.lstVerifySign.length > 0) {
                    $htmlvalidatakyso += '<a href = "javascript:;" class="clslinkhover" > <i style="color: royalblue;" class="fa fa-check-circle clschecked" aria-hidden="true"></i></a>';
                    $htmlvalidatakyso += '<div class="contentkyso" style="display: none;">';
                    for (var i = 0; i < value.TrangThaiKyChoVanBan.length; i++) {

                        $Nguoiky = value.TrangThaiKyChoVanBan[i].NguoiKy;
                        if (i != 0) {
                            $htmlvalidatakyso += '<p style="margin-top:20px"></p>';
                        }
                        $htmlvalidatakyso += '<p>Ký bởi: ' + $Nguoiky + '</p>' +
                            '<p><label>Nguyên vẹn tài liệu: </label>';
                        if (!value.TrangThaiKyChoVanBan[i].LoiSuaDoiTaiLieu) {
                            $htmlvalidatakyso += ' <i style="color: darkcyan;" class="fa fa-check-circle clschecked" aria-hidden="true"></i>';
                        } else {
                            $htmlvalidatakyso += ' <i style="color: red;" class="fa fa-ban" aria-hidden="true"></i>';

                        }
                        //InvalidTimestampImprint
                        $htmlvalidatakyso += '<p><label>Dấu thời gian trên chữ ký: </label>';
                        if (!value.TrangThaiKyChoVanBan[i].LoiDauThoiGian) {
                            $htmlvalidatakyso += ' <i style="color: darkcyan;" class="fa fa-check-circle clschecked" aria-hidden="true"></i>';
                        } else {
                            $htmlvalidatakyso += ' <i style="color: red;" class="fa fa-ban" aria-hidden="true"></i>';

                        }
                        $htmlvalidatakyso += '<p><label>Chữ ký hợp lệ: </label>';
                        if (value.TrangThaiKyChoVanBan[i].LoiChuKy) {
                            $htmlvalidatakyso += ' <i style="color: darkcyan;" class="fa fa-check-circle clschecked" aria-hidden="true"></i>';
                        } else {
                            $htmlvalidatakyso += ' <i style="color: red;" class="fa fa-ban" aria-hidden="true"></i>';

                        }

                        $htmlvalidatakyso += '<p><label>Thời gian ký: </label>';
                        if (value.TrangThaiKyChoVanBan[i].ThoiGianKy != "") {
                            $htmlvalidatakyso += value.TrangThaiKyChoVanBan[i].ThoiGianKy;
                        } else {
                            $htmlvalidatakyso += '';
                        }
                    }
                    $htmlvalidatakyso += "</div>";
                }
                var UrlHref = "/ivbdh/api/FileData/Generate?Url=" + encodeURI(value.UrlFake);
                if (value.Url.includes(".doc"))
                    UrlHref = encodeURI(value.Url);
                var $htmlfile = "<li class=\"removeFile\" data-id=\"" + value.Name + "\">" +
                    "<img class='icontype' src='/Content/Sigov/images/FileType/" + value.Name.split('.').pop().toLowerCase() + ".png' />" +
                    "<a href=\"" + UrlHref + "\" target=\"_blank\"><span title=\"" + value.Name + "\" id=\"" + value.Name + "\">" + value.Name + "</span></a>"
                    + "&nbsp; &nbsp; <a href=\"javascript:;\" onclick=\"viewToanVan('" + encodeURI(value.UrlFake) + "')\" title=\"xem file online\">"
                    + "<img border=\"0\" title=\"xem file\" src=\"/Content/Sigov/images/Search-icon.png\"></a>" +
                    "&nbsp;";
                if (config.hasDelete) {
                    $htmlfile += " <a class=\"lnkDeFile\" href=\"javascript:DeleteFileUpdate('" + value.Name + "', '" + config.ValueFileAttachRemove + "');\">" +
                        "<img border=\"0\" title=\"Xóa file đính kèm\" src=\"/Content/Sigov/images/act_filedelete.png\">" +
                        "</a>";
                }

                $htmlfile += $htmlvalidatakyso +
                    "<a href=\"javascript:;\" onclick=\"exc_sign_file1('" + value.Url + "','" + value.Name + "');\"><img border=\"0\" title=\"Ký số\" width=\"24px\" src=\"/Content/Sigov/images/signature.png\"></a>" +
                    "</li >";
                console.log($htmlvalidatakyso);
                $("#" + config.ulshow + "Remove").append($htmlfile);
            });
        }
        $this.kendoUpload({
            validation: config.validation,
            async: config.async,
            localization: config.localization,
            showFileList: config.showFileList,
            dropZone: config.dropZone,
            multiple: config.multiple,
            select: function (e) {

                var filesInList = [];
                $("#AttachShow-" + thisID + " li.clslifile").each(function () {
                    filesInList.push($(this).attr('data-title'));
                });
                $("#AttachShow-" + thisID + " li.removeFile").each(function () {
                    filesInList.push($(this).attr('data-id'));
                });
                $.each(e.files, function (index, value) {
                    nameCurent = value.name;
                    $.each(filesInList, function (index, value) {
                        if (value === nameCurent) {
                            alert("Tên file " + nameCurent + " đã tồn tại trong hệ thống.");
                            $("#" + thisID + " .sm-control-status").html("Lỗi");
                            e.preventDefault();
                        }
                    });
                    if (value.size > config.validation.maxFileSize) {
                        //createMessage("Thông báo", "Dung lượng file quá lớn!!! Dung lượng tối đa cho phép: " + config.validation.maxFileSize + "bytes");
                        //openDialogMsg("Thông báo", "Dung lượng file quá lớn!!! Dung lượng tối đa cho phép: " + config.validation.maxFileSize + "bytes")
                        alert("Dung lượng file quá lớn!!! Dung lượng tối đa cho phép: " + config.validation.maxFileSize / 1000000 + "MB");
                        $("#" + thisID + " .sm-control-status").html("Lỗi");
                    }

                    if (config.validation.allowedExtensions.indexOf(value.extension.slice(1).toLowerCase()) == -1) {
                        //openDialogMsg("Thông báo", "File không nằm trong định dạng cho phép!!! Các định dạng cho phép: " + config.validation.allowedExtensions.toString())
                        //createMessage("Thông báo", "File không nằm trong định dạng cho phép!!! Các định dạng cho phép: " + config.validation.allowedExtensions.toString());
                        alert("File không nằm trong định dạng cho phép!!! Các định dạng cho phép: " + config.validation.allowedExtensions.toString());
                        $("#" + thisID + " .sm-control-status").html("Lỗi");
                    }
                });
                config.select(e);
            },
            success: function (e) {
                // xử lý file upload trùng tên
                console.log(config.KySo);
                if (!isexit) {
                    isexit = true;
                    try {
                        openDialogMsg("Thông báo", "File " + nameCurent + " đã được đính kèm");
                    }
                    catch (ex) {
                        createMessage("Thông báo", "File " + nameCurent + " đã được đính kèm");
                    }
                    return false;
                }

                var files = e.files;
                var response = e.response;
                if (e.operation == "upload") {
                    var nameFile = files[0].name;
                    //xuwr ly phan hien thi file.

                    var index = nameFile.lastIndexOf('.');
                    var filetype = nameFile.substring(index, nameFile.length);
                    var name = nameFile.substring(0, index);
                    name = getTenKhongDau2(name); //name.replace(/[^a-zA-Z0-9]/g, "");
                    nameFile = name + filetype;
                    var namefileHasHauTo = name + config.hauto + filetype;
                    var resultBack = "<li class='clslifile' data-title=\"" + nameFile + "\" data-id='" + response.ServerName + "'>" + "<img class='icontype' src='/Content/Sigov/images/FileType/" +
                        files[0].extension.substring(1) + ".png' />" +
                        "<a href=\"" + response.Data + "\" target=\"_blank\"><span data-url=\"" + response.Data + "\" data-name=\"" + response.ServerName + "\">" + nameFile + "</span></a>" +
                        (config.KySo == true ? "<a href=\"javascript:;\" onclick=\"exc_sign_file1('" + response.Data + "','" + namefileHasHauTo + "');\"><img border=\"0\" title=\"Ký số\" width=\"24px\" src=\"/Content/Sigov/images/signature.png\"></a>"
                            : "") +
                        "&nbsp; <a class=\"lnkDeFile\" href=\"javascript:delfileupload('" + response.ServerName + "','" + config.ulshow + "','" + config.ValueFileAttach + "');\"><img class='filedelete' data-id='" +
                        response.ServerName + "' src='/Content/Sigov/images/act_filedelete.png' /></a>" +
                        "</li>";
                    $("#AttachShow-" + thisID + " #" + config.ulshow).append(resultBack);
                    changeHiddenInput("#AttachShow-" + thisID + " #" + config.ulshow, "AttachShow-" + thisID + " #" + config.ValueFileAttach);
                }
                if (jQuery.isFunction(config.success)) {
                    config.success(response); //
                }

            },
            complete: config.complete,
            error: config.error,
            progress: config.progress,
            remove: config.remove
        });
        if (config.hide == true) {
            $this.closest(".wrapper-chat").hide();
        }
        else {
            $this.closest(".k-upload").width($this.width() + 50);
        }
    }
    $.fn.SmUploadLuuTru = function (settings) {
        var $this = $(this);
        var isexit = true;

        var nameCurent = "";
        var thisID = $this.attr("id");
        var config = {
            folderUrl: '',
            hasDelete: true,
            isRename: true,
            goiy: true,
            preview: true,
            files: '',
            hauto: '',
            ulshow: "listFileAttach",
            ValueFileAttach: "listValueFileAttach",
            ValueFileAttachRemove: "listValueFileAttachRemove",
            lstfile: [],
            async: {
                saveUrl: "/BaseWeb/ActionHandler.aspx?do=SaveUpload",
                removeUrl: "/BaseWeb/ActionHandler.aspx?do=RemoveUpload",
                autoUpload: true
            },
            validation: {
                allowedExtensions: ["jpg", "jpeg", "png", "gif", "doc", "docx", "wmv", "mp4", "xls", "xlsx", "pdf", "xml", "txt", "rar", "zip"],
                maxFileSize: 50000000
            },
            localization: {
                select: "Đính kèm file ...",
                statusFailed: "Fail gì đó",
                stastatusUploaded: "customStatusUploaded",
                statusUploading: "customStatusUploading",
                invalidFileExtension: "Sai rồi",
                headerStatusUploaded: "<span class='sm-control-status'>Xong</span>",
                headerStatusUploading: "<span class='sm-control-status'>Đang tải ...</span>"
            },
            multiple: true,
            select: function (e) {

            },
            success: function (e) {

            },
            Rcomplete: function () { },
            complete: function (e, data) { },
            error: function (e) {
            },
            progress: function (e) {
            },
            remove: function (e) { },
            showFileList: false,
            dropZone: ".DrZone-" + $(this).attr("id")
        };
        if (settings) $.extend(config, settings);
        config.Rcomplete();
        $this.kendoUpload({
            validation: config.validation,
            async: config.async,
            localization: config.localization,
            showFileList: config.showFileList,
            dropZone: config.dropZone,
            multiple: config.multiple,
            select: function (e) {

                var filesInList = [];
                $("#AttachShow-" + thisID + " li.clslifile").each(function () {
                    filesInList.push($(this).attr('data-title'));
                });
                $("#AttachShow-" + thisID + " li.removeFile").each(function () {
                    filesInList.push($(this).attr('data-id'));
                });
                $.each(e.files, function (index, value) {
                    nameCurent = value.name;
                    $.each(filesInList, function (index, value) {
                        if (value === nameCurent) {
                            alert("Tên file " + nameCurent + " đã tồn tại trong hệ thống.");
                            $("#" + thisID + " .sm-control-status").html("Lỗi");
                            e.preventDefault();
                        }
                    });
                    if (value.size > config.validation.maxFileSize) {
                        //createMessage("Thông báo", "Dung lượng file quá lớn!!! Dung lượng tối đa cho phép: " + config.validation.maxFileSize + "bytes");
                        //openDialogMsg("Thông báo", "Dung lượng file quá lớn!!! Dung lượng tối đa cho phép: " + config.validation.maxFileSize + "bytes")
                        alert("Dung lượng file quá lớn!!! Dung lượng tối đa cho phép: " + config.validation.maxFileSize / 1000000 + "MB");
                        $("#" + thisID + " .sm-control-status").html("Lỗi");
                    }

                    if (config.validation.allowedExtensions.indexOf(value.extension.slice(1).toLowerCase()) == -1) {
                        //openDialogMsg("Thông báo", "File không nằm trong định dạng cho phép!!! Các định dạng cho phép: " + config.validation.allowedExtensions.toString())
                        //createMessage("Thông báo", "File không nằm trong định dạng cho phép!!! Các định dạng cho phép: " + config.validation.allowedExtensions.toString());
                        alert("File không nằm trong định dạng cho phép!!! Các định dạng cho phép: " + config.validation.allowedExtensions.toString());
                        $("#" + thisID + " .sm-control-status").html("Lỗi");
                    }
                });
                config.select(e);
            },
            success: function (e) {
                // xử lý file upload trùng tên

                if (!isexit) {
                    isexit = true;
                    try {
                        openDialogMsg("Thông báo", "File " + nameCurent + " đã được đính kèm");
                    }
                    catch (ex) {
                        createMessage("Thông báo", "File " + nameCurent + " đã được đính kèm");
                    }
                    return false;
                }

                var files = e.files;
                var response = e.response;
                if (e.operation == "upload") {
                    var nameFile = files[0].name;
                    //xuwr ly phan hien thi file.
                    if (config.isRename) {
                        var index = nameFile.lastIndexOf('.');
                        var filetype = nameFile.substring(index, nameFile.length);
                        var name = nameFile.substring(0, index);
                        name = getTenKhongDau2(name); //name.replace(/[^a-zA-Z0-9]/g, "");
                        nameFile = name + filetype;
                    }
                    var valueFile = '[';
                    valueFile += '{"FileServer": "' + response.ServerName + '"\,';
                    valueFile += '"FileName": "' + nameFile + '"\}';
                    valueFile += "]";
                    if (config.folderUrl != "")
                        UpLoadFileLuuTru(config.folderUrl, valueFile);
                }
                if (jQuery.isFunction(config.success)) {
                    config.success(response); //
                }

            },
            complete: config.complete,
            error: config.error,
            progress: config.progress,
            remove: config.remove
        });
        if (config.hide == true) {
            $this.closest(".wrapper-chat").hide();
        }
        else {
            $this.closest(".k-upload").width($this.width() + 50);
        }
    }
})(jQuery);
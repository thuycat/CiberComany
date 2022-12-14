/**
 * @license Copyright (c) 2003-2015, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function (config) {
    var ck_defaultImageUrl = '/Usercontrols/AnhDaiDien/fckFinder.aspx?type=Images&option=1&UrlWeb=';
    config.language = 'vi';
    config.filebrowserImageBrowseUrl = ck_defaultImageUrl;
    config.filebrowserFlashBrowseUrl = '/Usercontrols/fckeditor/frmTichHopFlashPlayer.aspx?type=Flash';
    config.allowedContent = true;
    config.filebrowserBrowseUrl = ck_defaultImageUrl;
    config.filebrowserVideoBrowseUrl = ck_defaultImageUrl;
    config.extraPlugins = 'video';
    config.enterMode = CKEDITOR.ENTER_BR;
    config.toolbar_Basic = [
	    { name: 'links', items: ['Table'] },
    ];
    //config.extraPlugins = 'jwplayer';
	// Define changes to default configuration here. For example:
	// config.language = 'fr';
    // config.uiColor = '#AADC6E';
    //config.extraPlugins = 'jwplayer';

    //config.toolbar = [
	//{ name: 'document', groups: ['mode', 'document', 'doctools'], items: ['Source', '-', 'Save', 'NewPage', 'Preview', 'Print', '-', 'Templates'] },
	//{ name: 'clipboard', groups: ['clipboard', 'undo'], items: ['Cut', 'Copy', 'Paste', 'PasteText', 'PasteFromWord', '-', 'Undo', 'Redo'] },
	//{ name: 'editing', groups: ['find', 'selection', 'spellchecker'], items: ['Find', 'Replace', '-', 'SelectAll', '-', 'Scayt'] },
	//{ name: 'forms', items: ['Form', 'Checkbox', 'Radio', 'TextField', 'Textarea', 'Select', 'Button', 'ImageButton', 'HiddenField'] },
	//'/',
	//{ name: 'basicstyles', groups: ['basicstyles', 'cleanup'], items: ['Bold', 'Italic', 'Underline', 'Strike', 'Subscript', 'Superscript', '-', 'RemoveFormat'] },
	//{ name: 'paragraph', groups: ['list', 'indent', 'blocks', 'align', 'bidi'], items: ['NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', '-', 'Blockquote', 'CreateDiv', '-', 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock', '-', 'BidiLtr', 'BidiRtl', 'Language'] },
	//{ name: 'links', items: ['Link', 'Unlink', 'Anchor'] },
	//{ name: 'insert', items: ['Image', 'jwplayer', 'Flash', 'Table', 'HorizontalRule', 'Smiley', 'SpecialChar', 'PageBreak', 'Iframe'] },
	//'/',
	//{ name: 'styles', items: ['Styles', 'Format', 'Font', 'FontSize'] },
	//{ name: 'colors', items: ['TextColor', 'BGColor'] },
	//{ name: 'tools', items: ['Maximize', 'ShowBlocks'] },
	//{ name: 'others', items: ['-'] },
	//{ name: 'about', items: ['About'] }
    //];

    //// Toolbar groups configuration.
    //config.toolbarGroups = [
    //    { name: 'document', groups: ['mode', 'document', 'doctools'] },
    //    { name: 'clipboard', groups: ['clipboard', 'undo'] },
    //    { name: 'editing', groups: ['find', 'selection', 'spellchecker'] },
    //    { name: 'forms' },
    //    '/',
    //    { name: 'basicstyles', groups: ['basicstyles', 'cleanup'] },
    //    { name: 'paragraph', groups: ['list', 'indent', 'blocks', 'align', 'bidi'] },
    //    { name: 'links' },
    //    { name: 'insert' },
    //    '/',
    //    { name: 'styles' },
    //    { name: 'colors' },
    //    { name: 'tools' },
    //    { name: 'others' },
    //    { name: 'about' }
    //];
};

utils = {};
utils.galleryresize = function (isonload) {
	if ($(".photo_gallery_container").length > 0) {
		var wgc = 0,
		wgi = 0,
		ncnt = 0,
		nwgi = 0,
		nhgi = 0,
		sfw = 0,
		sfh = 0,
		sf = 0;
		$(".photo_gallery_container").each(function () {
			var mycontainer = $(this);
			var $parent = mycontainer.parent();
			var dummy = $("<div></div>").attr("id", "dummy").insertAfter(mycontainer);
			mycontainer.appendTo("body").css({
				height: "0px",
				overflow: "hidden"
			});
			wgc = $parent.width();
			wgi = 250;
			ncnt = Math.floor(wgc / wgi);
			margin = parseInt($(".photo_gallery", mycontainer).css("margin-left"), 10) + parseInt($(".photo_gallery", mycontainer).css("margin-right"), 10);
			nwgi = Math.floor(wgc / ncnt) - margin;
			$(".photo_gallery", mycontainer).width(nwgi);
			$(".photo_gallery", mycontainer).each(function () {
				setmarginleft = false;
				mygalleryitem = $(this);
				if (isonload) {
					var obj = $("img", mygalleryitem);
					obj.data("width", obj.width()).data("height", obj.height());
				}
				hic = mygalleryitem.height();
				wic = mygalleryitem.width();
				hgi = $("img", mygalleryitem).data("height");
				wgi = $("img", mygalleryitem).data("width");
				sfh = hic / hgi;
				sfw = wic / wgi;
				if (sfh < sfw) {
					sf = sfw;
				} else {
					sf = sfh;
				}
				$("img", mygalleryitem).width(wgi * sf).css("max-width", "none");
				nwgi = $("img", mygalleryitem).width();
				nhgi = $("img", mygalleryitem).height();
				if (sfh < sfw) {
					margintop = ((nhgi - hic) / 2) * -1;
					$("img", mygalleryitem).css("margin-top", margintop).css("margin-left", 0);
				} else {
					marginleft = ((nwgi - wic) / 2) * -1;
					$("img", mygalleryitem).css("margin-top", 0).css("margin-left", marginleft);
				}
			});
			mycontainer.insertAfter(dummy).css({
				height: "auto",
				overflow: "visible"
			});

		});
	}
};


utils.sidemenu = function () {
	var $mainmenu = $("#mainmenu");
	var x = $("li.selected", $mainmenu).parentsUntil( $mainmenu, "li" ).length ? $("li.selected", $mainmenu).parentsUntil( $mainmenu, "li" ) : $("li.selected", $mainmenu);
	if (!$(">ul", $(x[x.length - 1])).length) {
		x = $mainmenu.clone();$("li", x).first().remove();
	}
	var y = $("<ul>").append($(">ul", $(x[x.length - 1])).html());
	$(">li>ul", y).hide();
	$("li.selected", y).parentsUntil(y, "ul").show();
	$("li.selected>ul", y).show();	
	$(".SideMenuJS").append(y);
	if ($("li.selected", y).is(":hidden")) {
		var $tmp = $("li.selected", y).parents("li:first").addClass("selected");
	}
};

utils.footermenu = function () {
	var $mainmenu = $("#mainmenu");
	var $emufootermainmenu  = $("<ul>").appendTo(".emu-footer-main-menu");
	$("> ul > li",$mainmenu).each(function () {
		var $a = $(">a", $(this)).clone();
		if ($a.text() != "") {
			$("<li>").appendTo($emufootermainmenu ).append($a);
		}
	});
	var $emufootertopmenu  = $("<ul>").appendTo(".emu-footer-top-menu");
	$("a",$(".emu-top-menu")).each(function () {
		$("<li>").appendTo($emufootertopmenu ).append($(this).clone());
	});
};

utils.mobilemenu = function () {
//var $mi = $("<img>").attr("src", "/Style%20Library/branding/images/mobile-menu.svg");
	var $mi;
	if  (document.documentElement.lang == "tr-TR")
	{
   		$mi = $("<span class='glyphicon glyphicon-menu-hamburger'></span><span class='emu-mobileMenuText'>MENÜ</span>");
	}else if(document.documentElement.lang == "ru-RU"){
		$mi = $("<span class='glyphicon glyphicon-menu-hamburger'></span><span class='emu-mobileMenuText'>Меню</span>");
	}
	else{
  		$mi = $("<span class='glyphicon glyphicon-menu-hamburger'></span><span class='emu-mobileMenuText'>MENU</span>");
	}	
	var $mobileMenuCont = $("<div>").attr("id", "mobileMenuCont").insertAfter("#mainmenu");
	var $topmenu = $("#topMenu");
	var $mm = $topmenu.clone().attr("id", "mobileMenu").addClass("submenu0").hide().appendTo($mobileMenuCont);
	var $tmm = $("<div></div>").attr("id", "toggleMobileMenu").append($mi).insertBefore($mm).on("click", function (e) {$mm.slideToggle();});;
	$("ul", $mm).each(function () {$(this).hide().addClass("submenu" + $(this).parents("li").length);});
//h
	$('#toggleMobileMenu').after('<div id="mobileSearch" class="glyphicon glyphicon-search"></div>');
    $('#mobileSearch').after('<div id="mobileSearchContainer"><input type="text" class=" mobileSearchField search-query form-control" placeholder="Search"><button class="mobileSearchButton" type="button"><i class=" glyphicon glyphicon-search"></i></button></div>');
	if( $( ".emu-lang-switch" ).length > 0 ){
		var $ttt;
		$(".emu-lang-switch a").each(function(){
		//$ttt = $(this).attr("a");
		$('#toggleMobileMenu').after('<div class="mobileLang"><a href="' + $(this).attr('href') + '">' + $(this).html() + '</a></div>');
		}); 
	}
    $("#mobileSearch" ).click(function() { $( "#mobileSearchContainer" ).slideToggle(function() { });   
    });  
//h
	$("<div class='toggle'><img src='/Style Library/branding/images/mobile-down-arrow.png' /></div>").insertBefore($(".hasvisiblechild > a", $mm)).on("click", function (e) {$(this).siblings("ul").slideToggle();
	});
	$('#mobileMenuCont li div.toggle').click(function() {
    $(this).toggleClass("active");
   	});

};

utils.fancybox = function () {
	if ($.fn.fancybox) {
		$('.fancybox').fancybox({
			openEffect: 'elastic',
			closeEffect: 'elastic',
			prevEffect: 'fade',
			closeBtn: 'false',
			nextEffect: 'fade',			
			autoSize: true,
			loop: false,
			padding: 10,		
			helpers: {
				title: {
					type: 'inside'
				},
				overlay: {
					speedIn: 500,
					opacity: 0.50
				},
				buttons: {},
				media: true,
				thumbs: {
					width: 50,
					height: 50
				}
			}
		});
		$(".fancybox.iframe").fancybox({
			type: 'iframe',
			width: '90%',
			loop: false,
			closeClick: false,
			helpers: {
				overlay: {
					closeClick: false
				}
			}
		});
	}
};

utils.revSlider = function (){
     var options = {
                           startwidth:1170,
                           startheight:600,
                           delay:6000,                     
                           hideThumbs:10,                       
                           onHoverStop:"off",
                           navigationStyle:"square",  //Possible values: "preview1", "preview2","preview3","preview4","round", "square", "round-old", "square-old", "navbar-old"
                           navigationType:"bullet",
                           navigationArrows:"solo",
                                                
                           hideTimerBar:"on",
                           hideThumbs:0, 
                           

           
                           hideArrowsOnMobile:"off",
                           hideBulletsOnMobile:"on",                                           

                           navigationHAlign:"left",
                           navigationVAlign:"top",
                           navigationHOffset:10,
                           navigationVOffset:10,
                           
                           soloArrowLeftHalign:"right",
                           soloArrowLeftValign:"top",
                           soloArrowLeftHOffset:50,
                           soloArrowLeftVOffset:10,

                           soloArrowRightHalign:"right",
                           soloArrowRightValign:"top",
                           soloArrowRightHOffset:10,
                           soloArrowRightVOffset:10
                           
           };     
     //$('.tp-banner').revolution(options);
    jQuery('.tp-banner').each(function(){
    	if($( ".tp-banner" ).parent().hasClass( "wide_slider" )){                                             
                options.startheight = 400;
     	}else{  options.startheight = 600;}
    	jQuery(this).show().revolution(options)
    });
};

function pasteHR() {
	var range = RTE.Cursor.get_range();
    range.deleteContent();
    var selection = range.parentElement();
    if (!selection) {
        return;
    }
    var line = selection.ownerDocument.createElement('hr');
    range.insertNode(line);
    RTE.Cursor.get_range().moveToNode(line);
    RTE.Cursor.update();
};

function pasteHtmlAtRTE(tag, classes, html, attrName, attrValue) {
	var range = RTE.Cursor.get_range();
    range.deleteContent();
    var selection = range.parentElement();
    if (!selection) {
        return;
    }
    var Tag = selection.ownerDocument.createElement(tag);
    Tag.className = classes;
    Tag.setAttribute(attrName, attrValue)    
    Tag.innerHTML = html;
    range.insertNode(Tag);    
    RTE.Cursor.get_range().moveToNode(Tag);
    RTE.Cursor.update(); 
};

function pasteHtmlAtCaret(html) {
    var sel, range;
    if (window.getSelection) {
        // IE9 and non-IE
        sel = window.getSelection();
        if (sel.getRangeAt && sel.rangeCount) {
            range = sel.getRangeAt(0);
            range.deleteContents();

            // Range.createContextualFragment() would be useful here but is
            // non-standard and not supported in all browsers (IE9, for one)
            var el = document.createElement("div");
            el.innerHTML = html;
            var frag = document.createDocumentFragment(), node, lastNode;
            while ( (node = el.firstChild) ) {
                lastNode = frag.appendChild(node);
            }
            range.insertNode(frag);
            
            // Preserve the selection
            if (lastNode) {
                range = range.cloneRange();
                range.setStartAfter(lastNode);
                range.collapse(true);
                sel.removeAllRanges();
                sel.addRange(range);
            }
        }
    } else if (document.selection && document.selection.type != "Control") {
        // IE < 9
        document.selection.createRange().pasteHTML(html);
    }
};

function InsertJumbotrons(param){	
	//var colArr = param.split(",");
	var range = RTE.Cursor.get_range();
    range.deleteContent();
    var selection = range.parentElement();       
    var Jumbotron = selection.ownerDocument.createElement("div");
    Jumbotron.className = "jmb-" + param + " emu-jmb ms-rtestate-write";
    //for(i=0; i<colArr.length; i++){	    
	    var Container = selection.ownerDocument.createElement("div");
  	    Container.className =  " container-fluid ms-rtestate-write";
	    var P = selection.ownerDocument.createElement("p");
	    P.innerHTML="&nbsp;";
	    Container.appendChild(P);
        Jumbotron.appendChild(Container);	
//	} 
    range.insertNode(Jumbotron);
    RTE.Cursor.get_range().moveToNode(Jumbotron);
    RTE.Cursor.update(); 
    RowColFunctions();
};

function InsertColumns(param){	
	var colArr = param.split(",");
	var range = RTE.Cursor.get_range();
    range.deleteContent();
    var selection = range.parentElement();       
    var Row = selection.ownerDocument.createElement("div");
    Row.className = "row ms-rtestate-write";
    for(i=0; i<colArr.length; i++){	    
	    var Col = selection.ownerDocument.createElement("div");
  	    Col.className = colArr[i] + " ms-rtestate-write";
	    var P = selection.ownerDocument.createElement("p");
	    P.innerHTML="&nbsp;";
	    Col.appendChild(P);
        Row.appendChild(Col);	
	} 
    range.insertNode(Row);
    RTE.Cursor.get_range().moveToNode(Row);
    RTE.Cursor.update(); 
    RowColFunctions();
};

function ToggleColumnOrder(){
	var range = RTE.Cursor.get_range();
	var selection = range.parentElement().closest('div[class^="row"]');	
	if( jQuery(selection).hasClass('ms-rtestate-write')){	
		var chk=false;
		var tmp = jQuery(selection).children("div").eq(0).attr('class').split(/\s+/);
		for(i=0; i<tmp.length; i++){
			if(tmp[i].indexOf('col-md-push') > -1){			
				chk=true;
			}
		}
		if(chk){
			jQuery(selection).children("div").eq(0).removeClass(function (index, css) {
	    	return (css.match (/(^|\s)col-md-push\S+/g) || []).join(' ');
			});
			jQuery(selection).children("div").eq(1).removeClass(function (index, css) {
	    	return (css.match (/(^|\s)col-md-pull\S+/g) || []).join(' ');
			});
			jQuery(selection).children("div").eq(0).before(jQuery(selection).children("div").eq(1));
		}
		else{			
			for(i=0; i<2; i++){
				var tmpClassesCol = jQuery(selection).children("div").eq(i).attr('class').split(/\s+/);
				for(j=0; j<2; j++){
					if(tmpClassesCol[j].indexOf('col-md') > -1){
						tmp[i]= tmpClassesCol[j];
					}
				}						
			}					
			jQuery(selection).children("div").eq(0).addClass("col-md-pull-" + tmp[1].substr(7));
			jQuery(selection).children("div").eq(1).addClass("col-md-push-" + tmp[0].substr(7));
			jQuery(selection).children("div").eq(0).before(jQuery(selection).children("div").eq(1));					
		}
	}
};

function SwapColumns(){
    var range = RTE.Cursor.get_range();
    var selection = range.parentElement().closest('div[class^="row"]'); 
    if( jQuery(selection).hasClass('ms-rtestate-write')){   
        var chk=false;
        var tmp = jQuery(selection).children("div").eq(0).attr('class').split(/\s+/);
        for(i=0; i<tmp.length; i++){
            if(tmp[i].indexOf('col-md-push') > -1){         
                chk=true;
            }
        }
        if(chk){
            jQuery(selection).children("div").eq(0).removeClass(function (index, css) {
            return (css.match (/(^|\s)col-md-push\S+/g) || []).join(' ');
            });
            jQuery(selection).children("div").eq(1).removeClass(function (index, css) {
            return (css.match (/(^|\s)col-md-pull\S+/g) || []).join(' ');
            });         
        }
        else{
            var colParent = range.parentElement().closest('div[class^="col"]');
            var SelectedColNumber;
            var ColForSwap;
            jQuery(colParent).addClass("selected-column");
            for(i=0; i<jQuery(selection).children("div").length; i++){
                if(jQuery(selection).children("div").eq(i).hasClass("selected-column")){
                    colNumber=i;
                }                
            }
            ColForSwap = (colNumber+1)%jQuery(selection).children("div").length;
            jQuery(colParent).removeClass("selected-column");
            if (ColForSwap==0){
                jQuery(selection).children("div").eq(ColForSwap).before(jQuery(selection).children("div").eq(colNumber));                  
            }
            else{
                jQuery(selection).children("div").eq(ColForSwap).after(jQuery(selection).children("div").eq(colNumber));                  
            }
        }
    }}

function ToogleButtonSize(){
	var range = RTE.Cursor.get_range();
    var selection = range.parentElement();
	if( jQuery(selection).hasClass('btn')){
		jQuery(selection).toggleClass('btn-lg');
	}
};
function ChangeIconSize(iconSize){	
    var range = RTE.Cursor.get_range();	
	selection = jQuery(range.getMarkers()[1]).next().children(1);
	if(!jQuery(selection).hasClass('glyphicon')){		
		selection = jQuery(range.getMarkers()[0]).prev();
	}
	if(!jQuery(selection).hasClass('glyphicon')){		
		var selection = range.parentElement().closest('span[class^="glyphicon"]');
	}
	if( jQuery(selection).hasClass('glyphicon')){
		jQuery(selection).removeClass('gi-2x gi-3x gi-4x gi-5x gi-6x');
		if (iconSize != null){
			jQuery(selection).addClass(iconSize);
		}
	}
};
function DeleteRow(){
	var range = RTE.Cursor.get_range();
	//var selection = range.parentElement().closest('div[class^="row"]');
	var selection = range.parentElement().closest('div');
	if( jQuery(selection).hasClass('ms-rtestate-write')){		
	    if (confirm("Are you sure you want to Delete!") == true) {
			jQuery(selection).remove();
	    }
	}
};
function DeleteIcon(){
	var range = RTE.Cursor.get_range();	
	selection = jQuery(range.getMarkers()[1]).next().children(1);
	if(!jQuery(selection).hasClass('glyphicon')){		
		selection = jQuery(range.getMarkers()[0]).prev();
	}
	if(!jQuery(selection).hasClass('glyphicon')){		
		var selection = range.parentElement().closest('span[class^="glyphicon"]');
	}
	if( jQuery(selection).hasClass('glyphicon')){		
	    if (confirm("Are you sure you want to delete the ICON?") == true) {
			jQuery(selection).remove();
	    }
	}
};
/*function InsertSpaceToPageContent(param){
		var richHtmlFieldContent = jQuery("#ctl00_PlaceHolderMain_ctl00_RichHtmlField_displayContent")
	if (richHtmlFieldContent.length == 0) richHtmlFieldContent = jQuery("#ctl00_PlaceHolderMain_RichHtmlField1_RichHtmlField_displayContent");	
	if(param =="up"){
			jQuery(richHtmlFieldContent).append( "<p>&nbsp;</p>" );
	}else{	
			jQuery(richHtmlFieldContent).prepend( "<p>&nbsp;</p>" );
		}
};*/
function InsertSpaceToPageContent(param){
	if(param =="up"){
			jQuery("#ctl00_PlaceHolderMain_ctl00_RichHtmlField_displayContent").append( "<p>&nbsp;</p>" );
	}else{	
			jQuery("#ctl00_PlaceHolderMain_ctl00_RichHtmlField_displayContent").prepend( "<p>&nbsp;</p>" );
		}
};
function InsertSpaceToRow(param){
   var range = RTE.Cursor.get_range();
	//var selection = range.parentElement().closest('div[class^="row"]');
	var selection = range.parentElement().closest('div');
	if( jQuery(selection).hasClass('ms-rtestate-write')){
		if(param=="up"){
			jQuery(selection).before( "<p>&nbsp;</p>" );
			}
		else{
			jQuery(selection).after( "<p>&nbsp;</p>" );
		}
	}
};
function InsertSpaceToCol(){
   var range = RTE.Cursor.get_range();
	var selection = range.parentElement().closest('span');
	jQuery(selection).before( "<p>&nbsp;</p>" );			
};
ColResize = function (param){	
	var range = RTE.Cursor.get_range();
	var selectedRow = range.parentElement().closest('div[class^="row"]');
	var selectedCol = range.parentElement().closest('div[class^="col-md-"]');
	jQuery(selectedCol).addClass("selectedCol");
	var colArr = jQuery(selectedRow).children("div");
	var colNumberDec;
	var colNumberInc;
	for (var j=0; j<colArr.length; j++){
		chk=false;
		if (jQuery(colArr[j]).hasClass('selectedCol')){
			jQuery(colArr[j]).removeClass('selectedCol');
			if(param =="minus")	{
				colNumberDec = j;
				colNumberInc = (j+1) % colArr.length;				
				break;
			}else{
				colNumberDec= colNumberInc = (j+1) % colArr.length;
				colNumberInc=j;
			}
		}
	}
	for(var k=3; k<11; k++)
	{
		if(jQuery(colArr[colNumberDec]).hasClass("col-md-" + k)){
			jQuery(colArr[colNumberDec]).attr("class",colArr[colNumberDec].className.replace(k, k-1));
			chk=true;					
		}					
	}		
	if(chk == true){	
		for(var k=9; k>1; k--)
		{			
			if(jQuery(colArr[colNumberInc]).hasClass("col-md-" + k)){
				jQuery(colArr[colNumberInc]).attr("class",colArr[colNumberInc].className.replace(k, k+1));				
			}					
		}					
	}

};
RowColFunctions = function(){
	var richHtmlField = jQuery("#ctl00_PlaceHolderMain_ctl00__ControlWrapper_RichHtmlField");
	if (richHtmlField.length == 0) richHtmlField =jQuery("#ctl00_PlaceHolderMain_RichHtmlField1__ControlWrapper_RichHtmlField");
  	jQuery(".editmode .row.ms-rtestate-write").not(':has(.rowDelete)').prepend("<span class='rowDelete' title='Delete ROW' contenteditable='false'></span>");
  	jQuery(".editmode .emu-jmb.ms-rtestate-write").not(':has(.DeleteJ)').prepend("<span class='DeleteJ' title='Delete Jumbotron' contenteditable='false'></span>");
  	jQuery(".editmode .row.ms-rtestate-write").not(':has(.insertSpaceUp)').prepend("<span class='insertSpaceUp' title='Insert Space UP' contenteditable='false'></span>");
    jQuery(".editmode .emu-jmb.ms-rtestate-write").not(':has(.insertSpaceUpJ)').prepend("<span class='insertSpaceUpJ' title='Insert Space UP' contenteditable='false'></span>");
  	jQuery(".editmode .row.ms-rtestate-write").not(':has(.insertSpaceDown)').prepend("<span class='insertSpaceDown' title='Insert Space Down the ROW' contenteditable='false'></span>");
  	jQuery(".editmode .emu-jmb.ms-rtestate-write").not(':has(.insertSpaceDownJ)').prepend("<span class='insertSpaceDownJ' title='Insert Space Down' contenteditable='false'></span>");
  	jQuery(".editmode [class*='col-md-'].ms-rtestate-write").not(':has(.insertSpaceCol)').append("<span class='insertSpaceCol' title='Insert Space into Column' contenteditable='false'></span>");
  	jQuery(".editmode [class*='col-md-'].ms-rtestate-write").not(':has(.colSwap)').append("<span class='colSwap' title='Swap Columns' contenteditable='false'></span>");
  	jQuery(".editmode [class*='col-md-'].ms-rtestate-write").not(':has(.colMinus)').append("<span class='colMinus' title='Decrease Size' contenteditable='false'></span>");
  	jQuery(".editmode [class*='col-md-'].ms-rtestate-write").not(':has(.colPlus)').append("<span class='colPlus' title='Increase Size' contenteditable='false'></span>");  	    
  	jQuery("#ctl00_PlaceHolderMain_ctl00__ControlWrapper_RichHtmlField").not(':has(.pageContentInsertSpaceUp)').append("<span class='pageContentInsertSpaceUp' title='Insert Space UP' contenteditable='false'></span>");
  	jQuery("#ctl00_PlaceHolderMain_ctl00__ControlWrapper_RichHtmlField").not(':has(.pageContentInsertSpaceDown)').prepend("<span class='pageContentInsertSpaceDown' title='Insert Space Down' contenteditable='false'></span>");

	//finishadding spans
	//removing onclick events
    jQuery(".insertSpaceDown").unbind();
    jQuery(".insertSpaceDownJ").unbind();
	jQuery(".insertSpaceUp").unbind();
	jQuery(".insertSpaceUpJ").unbind();
	jQuery(".rowDelete").unbind();
	jQuery(".DeleteJ").unbind();
	jQuery(".colSwap").unbind();
	jQuery(".insertSpaceCol").unbind();
	jQuery(".colPlus").unbind();
	jQuery(".colMinus").unbind();
	jQuery(".pageContentInsertSpaceUp").unbind();
	jQuery(".pageContentInsertSpaceDown").unbind();
	//adding onclick events
	jQuery(".insertSpaceDown").on("click", function () {InsertSpaceToRow("down");});
	jQuery(".insertSpaceDownJ").on("click", function () {InsertSpaceToRow("down");});
	jQuery(".insertSpaceUp").on("click", function () {InsertSpaceToRow("up");});	
	jQuery(".insertSpaceUpJ").on("click", function () {InsertSpaceToRow("up");});	
	jQuery(".rowDelete").on("click", function () {DeleteRow();});		
	jQuery(".DeleteJ").on("click", function () {DeleteRow();});		
	jQuery(".colSwap").on("click", function () {SwapColumns();});
	jQuery(".insertSpaceCol").on("click", function () {InsertSpaceToCol();});
	jQuery(".colPlus").on("click", function () {ColResize("plus");});
	jQuery(".colMinus").on("click", function () {ColResize("minus");});
	jQuery(".pageContentInsertSpaceUp").on("click", function () {InsertSpaceToPageContent("up");});
	jQuery(".pageContentInsertSpaceDown").on("click", function () {InsertSpaceToPageContent("down");});
};
LinkUnlinkLageImage = function (){
	var range = RTE.Cursor.get_range();
	var element = jQuery(range.$4_0).next();
	if (jQuery(element).is("a") && jQuery(element).hasClass("fancybox")) {	
		jQuery(element).find(">:first-child").unwrap();
	}
	else if (jQuery(element).is("img")) {
		var src = jQuery(element).attr("src");
		if(src.indexOf("?RenditionID") > 0){
			src = src.slice(0,-1) + 7;
			jQuery(element).wrap('<a class="fancybox" href="'+src+'"></a>');
		}
	}
};
clearImageMargins = function(){
	var range = RTE.Cursor.get_range();
	var element = jQuery(range.$4_0).next();
	if (jQuery(element).is("a") && jQuery(element).hasClass("fancybox")) {	
		element = jQuery(element).find(">:first-child");
	}
	if (jQuery(element).is("img")) {
		var src = jQuery(element).css({margin:"0px"});
	}

};
customRenditions = function(param){
	var range = RTE.Cursor.get_range();
	var element = jQuery(range.$4_0).next();
	if (jQuery(element).is("a") && jQuery(element).hasClass("fancybox")) {	
		element = jQuery(element).find(">:first-child");
	}
	if (jQuery(element).is("img")) {
		var src = jQuery(element).attr("src");
		var newSrc = src.split("?");
		if(param == 0){
			jQuery(element).attr("src", newSrc[0]);
		}else{
			jQuery(element).attr("src", newSrc[0] + "?RenditionID=" + param);
		}
	}
	clearImageMargins();
};
function FixWorkspace() {
        // if you are using a header that is affixed to the top (i.e. SharePoint Ribbon) put the ID or class here to change the workspace height accordingly.
        var header = '#myHeader';
    	var width = $(window).width();
        var height;
        if ($(header).length) {
            height = $(window).height() - $(header).height();
        } else {
                height = $(window).height();
        }
    $('#s4-workspace').width(width).height(height);
};

utils.mainmenu = function () {
     $("#mainmenu").find(".selected").parentsUntil($(this), "li").addClass("selectedparent");
};

utils.tablestocols = function () {
    var $tables = $(".ms-rteTable-emu-responsive");
    if ($tables.length > 0) {
        $tables.each(function () {
            var $table = $(this);
            var $rows = $(">tbody>tr", $table);
            $rows.each(function () {
                var $row = $(this);
                var $rownew = $("<div></div>").addClass("row");
                var $cols = $row.children("td");
                var $roww = $row.parent().width();
                $cols.each(function () {
                    var $col = $(this);
                    var $cssta = $col.css("text-align");
                    var $span = Math.round(12 * $col.width() / $roww);
                    var $tmp = $(this.childNodes);
                    $tmp = $("<div class='col-md-" + $span + "'></div>").append($tmp);
                    if ($cssta != "start") {
                        $tmp.css("text-align", $cssta);
                    }
                    $tmp.appendTo($rownew);
                });
                $table.replaceWith($rownew);
            });
        });
    }
};

utils.Tabs = function () {
    $(".tabs-menu a").click(function(event) {
        event.preventDefault();
        $(this).parent().addClass("current");
        $(this).parent().siblings().removeClass("current");
        var tab = $(this).attr("href");
        $(".tab-content").not(tab).css("display", "none");
        $(tab).fadeIn();
        utils.galleryresize();
    });
 };
utils.ccTabs = function() {
    $(".ccTabs-menu a").click(function(event) {
        event.preventDefault();
        var $a = $(this);
        var $li = $a.parent();
        var $menu = $a.parents(".ccTabs-menu").first();
        var $container = $a.parents(".ccTabs-container").first();
        $li.addClass("current");
        $li.siblings().removeClass("current");
        var tab = $a.attr("href");
        $container.find(".tab-content").not(tab).css("display", "none");
        $(tab, $container).show();
    });
};
utils.accordion = function (){
	var acc = document.getElementsByClassName("accordion");
	var i;
	for (i = 0; i < acc.length; i++) {
	    acc[i].onclick = function () 
	    {
	        var panel = this.nextElementSibling;
	        $(panel).slideToggle();
	        this.classList.toggle("active");
	    }
	}
};
utils.ScrollTop = function () {
    jQuery('#s4-workspace').scroll(function() {
        if (jQuery(this).scrollTop() > 250) {
            jQuery('#scrollup').fadeIn(300);
        } else {
            jQuery('#scrollup').fadeOut(300);
        }
    });
    jQuery('#scrollup').click(function(){
        jQuery('#s4-workspace').animate({scrollTop: 0}, 600);
        return false;
    });
};

utils.tablestocolsborder = function () {
	$(".ms-rteTable-emu-responsive").css("border", "#FF0000 1px solid");
};
utils.websites = function () {

    jQuery("#emu-websites" ).click(function() {
    	jQuery("#emu-websites").toggleClass('active');
        jQuery( "#emu-websitesLinks" ).slideToggle(function() {
            if(jQuery('#emu-websitesLinks').is(':visible')){   
                jQuery('#s4-workspace').scrollTo(jQuery('#emu-websites'), 600);
            }
        });
    });
};
utils.videos = function(){
	jQuery("iframe").each(function() {
	    var $iframe = jQuery(this);
	    var match = $iframe.attr("src").match(/^https:\/\/www.youtube/g);
	    if (match) {
	    	$iframe.attr("allowfullscreen", "1");	    	
	        if(!jQuery(this).parentsUntil(".row").hasClass("videoWrapper")){
				jQuery(this).parent().wrap("<div class='videoWrapper'></div>")
	        }        
	    }
	});
};
utils.CheckExternalUrls = function () {
	var extensions = ["pdf", "docx", "doc", "xlsx", "xls", "zip", "rar", "ppt", "pptx", "pps", "csv"];
    $.expr[':'].external = function(obj) {
        return (extensions.indexOf(obj.href.split('.').pop()) + 1) || (!obj.href.match(/^mailto\:/) && (obj.hostname != location.hostname) && !obj.href.match(/^javascript\:/) && !obj.href.match(/^$/))
    };
    $('a:external').attr('target', '_blank').addClass("external-link");
};

utils.Curriculum = function () {
	$(".curriculum a").click(function(){
	  $("#"+ $(this).data("target")).toggleClass("hide");
	});
	var curriculumprev = false;
    $("table.curriculum tbody tr").each(function () {
       var $color1 = "#fcb131";
       var $color2 = "#cccccc";
       var $color3 = "#ffffff";
       var $borderwidth1 = "2px";
       var $borderwidth2 = "2px";
       var $borderwidth3 = "1px";
       var $border1 = $color1 + " " + $borderwidth1 + " solid";
       var $border2 = $color2 + " " + $borderwidth2 + " solid";
       var $border3 = $color3 + " " + $borderwidth3 + " solid";
       var $row = $(this);
       var $prev = $row.prev();
       var $next = $row.next();
       $mycode = $row.data("refcode");
       $prevcode = $prev.data("refcode");
       $nextcode = $next.data("refcode");
       var $msg = ["<tr><td colspan='7'>Aşağıdaki ders grubundan, o dönem açılacak derslere göre sadece 1 ders seçilecektir.</td></tr>", "<tr><td colspan='7'>Depending on the course openings during the relevant semester, only one course will be chosen from the courses below.</td></tr>"];
       var $langCode=1;
       if(document.documentElement.lang == "tr-TR")
          $langCode=0;
       if ($mycode) {
           if ($mycode != $prevcode && $mycode == $nextcode) {
               curriculumprev = true;
               var $message = $($msg[$langCode]).insertBefore($row).css({
                               //"background-color": $color,
                               "color": "#000"
               });
               var $css = {
                               "border-top": $border2,
                               "border-left": $border3,
                              // "border-right": $border3
               };
               $message.css($css);
               $row.css({
                               "border-top": $border1,
                               "border-left": $border1,
                              // "border-right": $border1
               });
           } else if ($mycode == $prevcode && $mycode == $nextcode) {
               $row.css({
                               "border-left": $border1,
                           //    "border-right": $border1
               });
           } else if ($mycode == $prevcode && $mycode != $nextcode) {
               $row.css({
                               "border-bottom": $border1,
                               "border-left": $border1,
                           //    "border-right": $border1
               });
           }
       }
    });
};

//following two functions overriding sharepoint functions to disable "allow xxx to run Microsoft Office"
function ProcessImn(){}
function ProcessImnMarkers(){} 
$(document).ready(function () {
    FixWorkspace();
	utils.sidemenu();
	utils.footermenu();
	utils.mainmenu();
	utils.mobilemenu();	
	utils.revSlider();
	utils.Tabs();
	utils.ccTabs();
	utils.accordion();
	var inDesignMode = document.forms[MSOWebPartPageFormName].MSOLayout_InDesignMode.value;
	if (inDesignMode !== "1")
	{
		utils.tablestocols();
		$( "table" ).addClass("table");
		$( "table" ).wrap( "<div class='table-responsive'></div>" );
		console.log("View MODE");
		ProcessImn();
		ProcessImnMarkers();

	}else{
		$(".emu-body-wraper").addClass("editmode");
		$("#s4-workspace").addClass("editmodeWorkspace");
		$("#scrollup").addClass("emu-hidden");
		console.log("Edit MODE");
		jQuery(".ms-rtestate-write").keydown(function onKeyDown(event) {
		if (event.keyCode == 90 || event.keyCode == 89) {
				setTimeout(RowColFunctions, 500);	
			}
		});
		RowColFunctions();
		window.setInterval(function(){
		   RowColFunctions();
		}, 2000);
	}
	jQuery('.datepicker').datetimepicker({timepicker:false, format:'Y.m.d'});
	jQuery('.datetimepicker').datetimepicker({timepicker:true, format:'Y.m.d H:i', allowTimes:[ '08:00','08:30','09:00','09:30','10:00','10:30','11:00','11:30','12:00','12:30','13:00','13:30','14:00','14:30','15:00','15:30','16:00','16:30','17:00','17:30','18:00','18:30','19:00','19:30','20:00','20:30','21:00','21:30','22:00','22:30','23:00','23:30','24:00']});
	utils.websites();
	utils.ScrollTop();
	utils.videos();
	utils.CheckExternalUrls();
	utils.Curriculum();
});

$(window).load(function($) {
	utils.galleryresize(true);
	utils.fancybox();	
});

$(window).resize(function () {
	FixWorkspace();
	utils.galleryresize();	
});
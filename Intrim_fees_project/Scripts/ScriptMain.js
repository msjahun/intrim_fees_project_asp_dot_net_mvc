
   
        //On page load do this.


        $(document).ready(function () {
            //id="nextLangId" href="/FeesAndFacilities/Index/tr" title="Türkçe">tr

            var langIDPosted = 1;
            //On page load do this.
            langIDPosted = $('#hiddenLanguageId').val()
           
            if (langIDPosted == 1) {
                //we're currently on english site
                var nextLangId = $("#nextLangId");
              //  nextLangId.setAttribute("href", "/FeesAndFacilities/Index/tr").setAttribute("title", "Türkçe").append("tr");
                document.getElementById("nextLangId").innerHTML = "tr";
                document.getElementById("nextLangId").setAttribute("href", "/FeesAndFacilities/Index/tr");
                document.getElementById("nextLangId").setAttribute("title", "Türkçe");
            }
            else if (langIDPosted == 2) {
                //we're currently on Turkish site
                var nextLangId = $("#nextLangId");
               // nextLangId.setAttribute("href", "/FeesAndFacilities/Index/en").setAttribute("title", "English").append("en");
                document.getElementById("nextLangId").innerHTML = "en";
                document.getElementById("nextLangId").setAttribute("href", "/FeesAndFacilities/Index/en");
                document.getElementById("nextLangId").setAttribute("title", "English");
            }
          //  alert(langIDPosted);
            console.log(langIDPosted);
        

            $('#btnClearFilter').on('click', function () {
                location.reload();
                //     $('#minimal-radio-tv-1, #minimal-radio-tv-2,#minimal-radio-internet-1,#minimal-radio-internet-2,#minimal-radio-wc-1,#minimal-radio-wc-2,#minimal-radio-wc-3,#minimal-radio-kitchenette-1,#minimal-radio-kitchenette-2,#minimal-radio-bed-1,#minimal-radio-bed-2,#minimal-checkbox-air_condition,#minimal-checkbox-central,#minimal-checkbox-refriferator,#minimal-checkbox-Laundry,#minimal-checkbox-cafeteria,#minimal-checkbox-room,#minimal-checkbox-generator').iCheck('uncheck');
            });


            $('#btnPost').on('click', function () {

             //   alert("I have entered the function");

                var name_of_dormitoryPosted = "";
                var dormitory_typePosted = 0;
                var min_price_of_roomPosted = 0;
                var max_price_of_roomPosted = 100000000000;
                var room_areaPosted = 0;

                var facility_TVPosted = "";
                var facility_InternetPosted = "";
                var facility_Wc_showerPosted = "";
                var facility_KitchenettePosted = "";
                var facility_bedPosted = "";

                var facility_air_conditionPosted = "";
                var facility_central_acPosted = "";
                var facility_refrigeratorPosted = "";
                var facility_laundryPosted = "";
                var facility_cafeteriaPosted = "";
                var facility_room_telPosted = "";
                var facility_generatorPosted = "";
                var langIDPosted = 1;
                langIDPosted = $('#hiddenLanguageId').val();
               //<a class="" id="nextLangId"  href="/FeesAndFacilities/Index/tr" title="Türkçe">tr</a>

                

                if ($('#minimal-radio-tv-1').is(':checked')) {
                    // console.log("#minimal-radio-tv-1 checked");
                    if (langIDPosted == 2)

                        facility_TVPosted = "TV | Odada";
                    else
                        facility_TVPosted = "TV | In room";
                    console.log(facility_TVPosted);

                }

                if ($('#minimal-radio-tv-2').is(':checked')) {
                    //console.log("#minimal-radio-tv-2 checked");
                    if (langIDPosted == 2)
                        facility_TVPosted = "TV | Salonda";
                    else
                        facility_TVPosted = "TV | In Hall";

                    console.log(facility_TVPosted);
                }


                if ($('#minimal-radio-internet-1').is(':checked')) {
                    //console.log(" #minimal-radio-internet-1 checked");
                    if (langIDPosted == 2)
                        facility_InternetPosted = "Internet | Kablolu";
                    else
                        facility_InternetPosted = "Internet | Cable";
                    console.log(facility_InternetPosted);
                }

                if ($('#minimal-radio-internet-2').is(':checked')) {
                    //console.log("#minimal-radio-internet-2 checked");
                    if (langIDPosted == 2)
                        facility_InternetPosted = "Internet | Kablosuz";
                    else
                        facility_InternetPosted = "Internet | Wireless";
                    console.log(facility_InternetPosted);

                }


                if ($('#minimal-radio-wc-1').is(':checked')) {
                    //console.log("#minimal-radio-wc-1 checked");
                    if (langIDPosted == 2)
                        facility_Wc_showerPosted = "WC - Dus | Odada";
                    else
                        facility_Wc_showerPosted = "WC-shower | In room";

                    console.log(facility_Wc_showerPosted);
                }

                if ($('#minimal-radio-wc-2').is(':checked')) {
                    // console.log("#minimal-radio-wc-2 checked");
                    if (langIDPosted == 2)
                        facility_Wc_showerPosted = "WC - Dus | Ortak";
                    else
                        facility_Wc_showerPosted = "WC-shower | Common";
                    console.log(facility_Wc_showerPosted);
                }

                if ($('#minimal-radio-wc-3').is(':checked')) {
                    console.log("#minimal-radio-wc-3 checked");
                    if (langIDPosted == 2)
                        var facility_Wc_showerPosted = "WC - Dus | Katta";
                    else
                        var facility_Wc_showerPosted = "WC-shower | Flats";

                }

                if ($('#minimal-radio-kitchenette-1').is(':checked')) {
                    // console.log("#minimal-radio-kitchenette-1 checked");
                    if (langIDPosted == 2)
                        facility_KitchenettePosted = "Mutfak | Odada";
                    else
                        console.log(facility_KitchenettePosted);
                }


                if ($('#minimal-radio-kitchenette-2').is(':checked')) {
                    console.log("#minimal-radio-kitchenette-2 checked");
                    if (langIDPosted == 2)
                        facility_KitchenettePosted = "Mutfak | Katta";
                    else
                        facility_KitchenettePosted = "Kitchenette | Flats";
                    console.log(facility_KitchenettePosted);
                }

                if ($('#minimal-radio-bed-1').is(':checked')) {
                    console.log("#minimal-radio-bed-1 checked");
                    if (langIDPosted == 2)
                        facility_bedPosted = "Yatak Türü | Ranza";
                    else
                        facility_bedPosted = "Bed | Bunk";
                    console.log(facility_bedPosted);
                }

                if ($('#minimal-radio-bed-2').is(':checked')) {
                    // console.log("#minimal-radio-bed-2 checked");
                    if (langIDPosted == 2)
                        facility_bedPosted = "Yatak Türü | Normal";
                    else
                        facility_bedPosted = "Bed | Normal";
                    console.log(facility_bedPosted);

                }

                if ($('#minimal-checkbox-air_condition').is(':checked')) {
                    //console.log("#minimal-checkbox-air_condition");
                    if (langIDPosted == 2)
                        facility_air_conditionPosted = "Klima";
                    else
                        facility_air_conditionPosted = "Air-condition";
                    console.log(facility_air_conditionPosted);

                }

                if ($('#minimal-checkbox-central').is(':checked')) {
                    //  console.log("#minimal-checkbox-central is cheched");
                    if (langIDPosted == 2)
                        facility_central_acPosted = "Merkezi Isitma | Isitma";
                    else
                        facility_central_acPosted = "Central conditioning system | Cooling";
                    console.log(facility_central_acPosted);
                }


                if ($('#minimal-checkbox-refriferator').is(':checked')) {
                    //  console.log("#minimal-checkbox-refriferator is cheched");
                    if (langIDPosted == 2)
                        facility_refrigeratorPosted = "Buzdolabi";
                    else
                        facility_refrigeratorPosted = "Refrigerator";
                    console.log(facility_refrigeratorPosted);
                }


                if ($('#minimal-checkbox-Laundry').is(':checked')) {
                    //console.log("#minimal-checkbox-Laundry is cheched");
                    if (langIDPosted == 2)
                        facility_laundryPosted = "Çamasirhane";
                    else
                        facility_laundryPosted = "Laundry";
                    console.log(facility_laundryPosted);
                }


                if ($('#minimal-checkbox-cafeteria').is(':checked')) {
                    // console.log("#minimal-checkbox-cafeteria is cheched");
                    if (langIDPosted == 2)
                        facility_cafeteriaPosted = "Kafeterya";
                    else
                        facility_cafeteriaPosted = "Cafeteria";
                    console.log(facility_cafeteriaPosted);

                }


                if ($('#minimal-checkbox-room').is(':checked')) {
                    //    console.log("#minimal-checkbox-room is cheched");
                    if (langIDPosted == 2)
                        facility_room_telPosted = "Oda Telefonmu";
                    else
                        facility_room_telPosted = "Room tel.";
                    console.log(facility_room_telPosted);

                }



                if ($('#minimal-checkbox-generator').is(':checked')) {
                    //console.log("#minimal-checkbox-generator is cheched");
                    if (langIDPosted == 2)
                        facility_generatorPosted = "Jeneratör";
                    else
                        facility_generatorPosted = "Generator";
                    console.log(facility_generatorPosted);
                }

                if ($('#selectedDormitoryType').find(":selected").text().length != 0) {
                    //console.log("Selected dormitory type :" + $('#selectedDormitoryType').find(":selected").text());

                    dormitory_typePosted = parseInt($('#selectedDormitoryType').find(":selected").val());
                    console.log(dormitory_typePosted);
                }

                if ($('#selectedDormitoryName').find(":selected").text().length != 0) {
                    //  console.log("Selected dormitory name:" + $('#selectedDormitoryName').find(":selected").text());
                    name_of_dormitoryPosted = $('#selectedDormitoryName').find(":selected").text();
                    console.log(name_of_dormitoryPosted);
                }

                if ($('#selectedRoomArea').find(":selected").text().length != 0) {
                    //    console.log("Selected room area :" + $('#selectedRoomArea').find(":selected").text());
                    room_areaPosted = parseInt($('#selectedRoomArea').find(":selected").val());
                    console.log(room_areaPosted);
                }




                var minPrice = $('#range').val().substr(0, $('#range').val().indexOf(';'));
                min_price_of_roomPosted = minPrice;

                var maxPrice = $('#range').val().substr($('#range').val().indexOf(";") + 1);
                max_price_of_roomPosted = maxPrice;
                console.log("price range: " + minPrice + " " + maxPrice);


              


                document.getElementById('content_to_replace').scrollIntoView(true);


                $.ajax({
                    type: "POST",
                    url: "http://localhost:52343/api/room_facility",

                    beforeSend: function (xhr) {
                        xhr.setRequestHeader("XSRF-TOKEN",
                            $('input:hidden[name="__RequestVerificationToken"]').val());

                     //   alert("I am inside post");
                    },

                    data: JSON.stringify({


                        name_of_dormitory: name_of_dormitoryPosted,
                        dormitory_type: dormitory_typePosted,
                        min_price_of_room: min_price_of_roomPosted,
                        max_price_of_room: max_price_of_roomPosted,
                        room_area: room_areaPosted,
                        langId: langIDPosted,
                        facility_TV: facility_TVPosted,
                        facility_Internet: facility_InternetPosted,
                        facility_Wc_shower: facility_Wc_showerPosted,
                        facility_Kitchenette: facility_KitchenettePosted,
                        facility_bed: facility_bedPosted,

                        facility_air_condition: facility_air_conditionPosted,
                        facility_central_ac: facility_central_acPosted,
                        facility_refrigerator: facility_refrigeratorPosted,
                        facility_laundry: facility_laundryPosted,
                        facility_cafeteria: facility_cafeteriaPosted,
                        facility_room_tel: facility_room_telPosted,
                        facility_generator: facility_generatorPosted

                    }),
                    //data is sent when json is strintify;
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    success: function (response) {
                    //    alert("I have return " + response);
                        var dvItems = $("#content_to_replace");
                        dvItems.empty();
                        //empty #dvPostItems
                        // alert(response);



                        // search_result_no.append("About 219,000,000 results");
                        //  <h2 class="default-title" ></h2>
                        //     <div class="line-centered"></div>
                        var resultSize = 0;
                        $.each(response, function (i, item) {
                            resultSize = i + 1;
                            //var $tr = $('<li>').append(item.bank_name).appendTo(dvItems);
                            //$('<li>').append(item.dormitory_account).appendTo(dvItems);
                            //$('<li>').append(item.name_of_room).appendTo(dvItems);

                            //$.each(item.facility, function (k, v) {  // The contents inside stars
                            //    $('<li>').append(v).appendTo(dvItems);
                            //});

                            //$('<li>').append(item.icons_of_facilities).appendTo(dvItems);
                            //$('<li>').append(item.usd_account_number).appendTo(dvItems);
                            //$('<li>').append("End ").appendTo(dvItems);
                            ////okaaaay! it's here that you'll arrange your markup/html and then just append the data then post it., so return json from the other page

                            var section = $('<section>').addClass("default-section padd-top-40 no-padd-bottom").appendTo(dvItems);
                            var div_autocontainer = $('<div>').addClass("auto-container").appendTo(section);
                            var div_row_clearfix = $('<div>').addClass("row clearfix").appendTo(div_autocontainer);
                            var div_contact_us = $('<div>').addClass("contact-us no-padd-bottom no-padd-top").appendTo(div_row_clearfix);
                            var div_auto_container = $('<div>').addClass("auto-container").appendTo(div_contact_us);
                            //<section class="default-section padd-top-40 no-padd-bottom">
                            //  <div class="auto-container">
                            // <div class="row clearfix">
                            //  <div class="contact-us no-padd-bottom no-padd-top">
                            //    <div class="auto-container">

                            var div_odaler = $('<div>').attr('id', 'odalar').appendTo(div_auto_container);
                            var div_item_box_portfolio = $('<div>').addClass("item-box portfolio-item mix mix-all room_cift_kisilik").appendTo(div_odaler);
                            var div_inner_box = $('<div>').addClass("inner-box").appendTo(div_item_box_portfolio);

                            var div_row_clearfix2 = $('<div>').addClass("row clearfix").appendTo(div_inner_box);
                            var div_col_md_6_col = $('<div>').addClass("col-md-6 col-sm-6 col-xs-12").appendTo(div_row_clearfix2);
                            var figure_image = $('<figure>').addClass("image").appendTo(div_col_md_6_col);
                            var a_href_class_light_box = $('<a>').attr('href', '').attr('title', item.name_of_dormitory + " | " + item.name_of_room).appendTo(figure_image);
                            var image_src_dormitory = $('<img>').attr('src', item.url_of_room_image).attr('alt', item.name_of_dormitory + " | " + item.name_of_room).appendTo(a_href_class_light_box);
                            // <div id="odalar">
                            // <div class="item-box portfolio-item mix mix-all room_cift_kisilik">
                            //  <div class="inner-box">
                            // <div class="row clearfix">

                            // <div class="col-md-6 col-sm-6 col-xs-12">
                            //<!--Image-->
                            //  <figure class="image">
                            // <a href="" class="lightbox-image" title="Alfam Vista | Double Room">
                            //  <img src="https://dormitories.emu.edu.tr/PhotoGalleries/dormitories/popart/DOUBLE%20SUIT%20ROOM.jpg?RenditionID=7" alt="Alfam Vista | Double Room">




                            var div_col_md_6_col2 = $('<div>').addClass("col-md-6 col-sm-6 col-xs-12").appendTo(div_row_clearfix2);
                            var div_cont_column = $('<div>').addClass("cont-column").appendTo(div_col_md_6_col2);
                            var div_inner_box2 = $('<div>').addClass("inner-box").appendTo(div_cont_column);
                            var h3_heref = $('<h3>').appendTo(div_inner_box2);
                            var a_href_javas = $('<a>').attr('href', 'javascript:;').append(item.name_of_dormitory + " | " + item.name_of_room).appendTo(h3_heref);
                            var h3_heref = $('<hr>').appendTo(div_inner_box2);
                            var div_row_clearfix3 = $('<div>').addClass("row clearfix").appendTo(div_inner_box2);
                            var div_description = $('<div>').addClass("description").appendTo(div_row_clearfix3);
                            var ul_styled_list_two = $('<ul>').addClass("styled-list-two").appendTo(div_description);

                            $.each(item.facility, function (k, facility_) {  // The contents inside stars
                                //   $('<li>').append(v).appendTo(dvItems);

                                var div_col_md_6_col3 = $('<div>').addClass("col-lg-6 col-md-12 col-xs-12").appendTo(ul_styled_list_two);
                                var li_image = $('<li>').appendTo(div_col_md_6_col3);
                                var image_src_facility = $('<img>').attr('src', facility_.facility_icon_url).attr('alt', facility_.facility_name).appendTo(li_image);
                                li_image.append(" " + facility_.facility_name);

                            });
                            //<div class="col-md-6 col-sm-6 col-xs-12">
                            //  <!--Content-Column-->
                            // <div class="cont-column">
                            // <div class="inner-box">
                            // <h3><a href="javascript:;">Pop-ART | Double Room</a></h3>
                            //<hr>
                            //  <div class="row clearfix">
                            // <div class="description">
                            // <ul class="styled-list-two">

                            //<div class="col-lg-6 col-md-12 col-xs-12">
                            //   <li>
                            //     <img src="./Dormitories_files/thumbnail(3).png" alt="Aspirator"> Aspirator

                            // <img src="./Dormitories_files/thumbnail(3).png" alt="Aspirator"> Aspirator
                            //var div_col_md_6_col4 = $('<div>').addClass("col-lg-6 col-md-12 col-xs-12").appendTo(ul_styled_list_two);
                            //var li_image2 = $('<li>').appendTo(div_col_md_6_col4);
                            //var a_more_info_facility = $('<a>').append("More information ").appendTo(li_image2);
                            //var i_fa_angle_down = $('<i>').addClass("fa fa-angle-down").appendTo(a_more_info_facility);

                            //<div class="col-lg-6 col-md-12 col-xs-12">
                            //   <li>
                            //    <a>More information
                            //       <i class="fa fa-angle-down ">

                            //var br_2 = $('<br>').appendTo(div_item_box_portfolio);
                            // var hrr_2 = $('<hr>').appendTo(div_item_box_portfolio);
                            //<br>
                            var div_class_row3x = $('<div>').addClass("row").appendTo(div_item_box_portfolio);
                            var div_col_md_10x = $('<div>').addClass("col-md-10").appendTo(div_class_row3x);
                            var hrr_2 = $('<hr>').appendTo(div_col_md_10x);

                            var table_reteable = $('<table>').addClass("ms-rteTable-Bootstrap-style-1").attr('width', '100%').attr('cellspacing', '0').appendTo(div_col_md_10x);

                            var tbody1x = $('<tbody>').appendTo(table_reteable);
                            var tr1x = $('<tr>').addClass("ms-rteTableOddRow-Bootstrap-style-1").appendTo(tbody1x);
                            var td1x = $('<td>').addClass("ms-rteTableEvenCol-Bootstrap-style-1").attr('style', 'width&#58;0%;').appendTo(tr1x);
                            var strong1x = $('<strong>').append("Dormitory").appendTo(td1x);

                            //var td2x = $('<td>').addClass("ms-rteTableOddCol-Bootstrap-style-1").attr('style', 'width&#58;20%;').appendTo(tr1x);
                            //var strong2x = $('<strong>').append("Bank Name").appendTo(td2x);

                            var td3x = $('<td>').addClass("ms-rteTableEvenCol-Bootstrap-style-1").attr('style', 'width&#58;30%;').appendTo(tr1x);
                            var strong3x = $('<strong>').append("Turkish Liras").appendTo(td3x);

                            var td4x = $('<td>').addClass("ms-rteTableOddCol-Bootstrap-style-1").attr('style', 'width&#58;35%;').appendTo(tr1x);
                            var strong4x = $('<strong>').append("USD").appendTo(td4x);


                            //<div class="row">
                            //  <div class="col-md-10">
                            // <table class="ms-rteTable-Bootstrap-style-1" width="100%" style="" cellspacing="0">
                            // <tbody>
                            //  <tr class="ms-rteTableOddRow-Bootstrap-style-1">
                            // <td class="ms-rteTableEvenCol-Bootstrap-style-1" style="width&#58;0%;">
                            // <strong>Dormitory Name</strong>
                            // <td class="ms-rteTableOddCol-Bootstrap-style-1" style="width&#58;20%;">
                            //   <strong>Bank Name

                            // <td class="ms-rteTableEvenCol-Bootstrap-style-1" style="width&#58;30%;">
                            //       <strong>Turkish Liras

                            //<td class="ms-rteTableOddCol-Bootstrap-style-1" style="width&#58;35%;">
                            //  <strong>USD

                            var trx2x = $('<tr>').addClass("ms-rteTableEvenRow-Bootstrap-style-1").appendTo(tbody1x);
                            var tdx2x = $('<td>').addClass("ms-rteTableEvenCol-Bootstrap-style-1").attr('style', 'width&#58;15%;').appendTo(trx2x);
                            var strongx2x = $('<strong>').append(item.dormitory_account).appendTo(tdx2x);

                            //    <tr class="ms-rteTableEvenRow-Bootstrap-style-1">
                            //     <td class="ms-rteTableEvenCol-Bootstrap-style-1" style="width&#58;15%;">
                            //       <strong>Alfam</strong>
                            //  </td>

                            //var tdx3x = $('<td>').addClass("ms-rteTableOddCol-Bootstrap-style-1").attr('style', 'width&#58;20%;').append(item.bank_name).appendTo(trx2x);
                            ////<td class="ms-rteTableOddCol-Bootstrap-style-1" style="width&#58;20%;">
                            //                      </td>
                            var tdx4x = $('<td>').addClass("ms-rteTableEvenCol-Bootstrap-style-1").attr('style', 'width&#58;30%;').appendTo(trx2x);


                            $.each(item.turkish_lira_account_number, function (k, tl_acc_n) {  // The contents inside stars
                                //   $('<li>').append(v).appendTo(dvItems);


                                var ptdx4x1 = $('<p>').append(tl_acc_n).appendTo(tdx4x);

                            });
                            //<td class="ms-rteTableEvenCol-Bootstrap-style-1" style="width&#58;30%;">
                            //     <p>Account No&#58; 6820-174392</p><p>IBAN&#58; TR39 0006 4000 0016 8200 174392</p>
                            // </td>

                            var tdx5x = $('<td>').addClass("ms-rteTableOddCol-Bootstrap-style-1").attr('style', 'width&#58;35%;').appendTo(trx2x);

                            $.each(item.usd_account_number, function (k, usd_acct_no) {  // The contents inside stars
                                //   $('<li>').append(v).appendTo(dvItems);

                                var ptdx5x1 = $('<p>').append(usd_acct_no).appendTo(tdx5x);

                            });

                            //  <td class="ms-rteTableOddCol-Bootstrap-style-1" style="width&#58;35%;">
                            //    <p>Account No&#58; 6820-57259</p>
                            //  <p>IBAN&#58; TR04 0006 4000 0026 8200 057259</p>
                            //  </td>

                            var div_style_text_align = $('<div>').attr("style", "text-align&#58;left;  padding-left: 20px; padding-right: 20px;").appendTo(div_class_row3x);
                            var aa_button_official_website = $('<a>').attr("href", item.dormitory_website).attr("target", "_blank").addClass("btn btn-color02").append("&#160;Official " + item.name_of_dormitory + " website&#160;").appendTo(div_style_text_align);

                            //  <div style="text-align&#58;left;  padding-left: 20px; padding-right: 20px;">
                            //     <a class="btn btn-color02" href="https://dormitories.emu.edu.tr/Documents/fees/dau-yurt-paket-ucretleri-emu-dorm-fees-2017-18.pdf" target="_blank">
                            //         &#160;Official Dormitory website&#160;

                            var brxx1 = $('<br>').appendTo(div_odaler);
                            var brxx2 = $('<br>').appendTo(div_odaler);

                            var div_inner_box = $('<div>').addClass("line-centered").appendTo(div_odaler);

                            var hrxx2 = $('<hr>').appendTo(div_odaler);
                            //   <br><br>
                            //     <div class="line-centered"></div>
                            //    <hr>



                        });
                        var search_result_no = $("#searchNoResult");

                        search_result_no.empty();


                        var search_result_text;
                        if (resultSize == 0)
                            if (langIDPosted == 2)
                                search_result_text = $('<h2>').addClass("default-title").append("Sonuç bulunamadı. Lütfen başka bir filtre kombinasyonunu deneyin.").appendTo(search_result_no);
                            else
                                search_result_text = $('<h2>').addClass("default-title").append("No Results found, please try another filter combination").appendTo(search_result_no);

                        else
                            if (langIDPosted == 2)
                                search_result_text = $('<h2>').addClass("default-title").append("Yaklaşık " + resultSize + " oda bulundu").appendTo(search_result_no);
                            else
                                search_result_text = $('<h2>').addClass("default-title").append("About " + resultSize + " rooms found").appendTo(search_result_no);

                        var search_result_divider = $('<div>').addClass("line-centered").appendTo(search_result_no);

                    },
                    failure: function (response) {
                        alert(response);
                    }
                });
            })

        });
   


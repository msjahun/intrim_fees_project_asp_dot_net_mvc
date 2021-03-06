﻿using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Threading;
using System.Web;
using System.Web.Mvc;

namespace Intrim_fees_project.Controllers
{
    public class FeesAndFacilitiesController : Controller
    {
        // GET: FeesAndFacilities
        public ActionResult Index(string id ="en")
        {
            CultureInfo ci = new CultureInfo(id);
            Thread.CurrentThread.CurrentCulture = ci;
            Thread.CurrentThread.CurrentUICulture = ci;
            //Number Format



            //Content Format
            // ViewBag.ContentFormatMessage = Resources.Content.Message;
            ViewBag.ContentFormat_btn_bot_dormitofies_fees = Resources.Content.btn_bot_dormitofies_fees;
            ViewBag.ContentFormat_btn_bot_dormitories_fees_2018 = Resources.Content.btn_bot_dormitories_fees_2018;
            ViewBag.ContentFormat_btn_clear_filter = Resources.Content.btn_clear_filter;
            ViewBag.ContentFormat_btn_emu_dormitories_fees = Resources.Content.btn_emu_dormitories_fees;
            ViewBag.ContentFormat_btn_search = Resources.Content.btn_search;
            ViewBag.ContentFormat_emu_intro_text = Resources.Content.emu_intro_text;
            ViewBag.ContentFormat_filter_glide_price_range = Resources.Content.filter_glide_price_range;
            ViewBag.ContentFormat_filter_head_internet = Resources.Content.filter_head_internet;
            ViewBag.ContentFormat_filter_head_tv = Resources.Content.filter_head_tv;
            ViewBag.ContentFormat_filter_header_bed = Resources.Content.filter_header_bed;
            ViewBag.ContentFormat_filter_header_kitchenette = Resources.Content.filter_header_kitchenette;
            ViewBag.ContentFormat_filter_header_more_options = Resources.Content.filter_header_more_options;
            ViewBag.ContentFormat_filter_header_nececities = Resources.Content.filter_header_nececities;
            ViewBag.ContentFormat_filter_header_other_options = Resources.Content.filter_header_other_options;
            ViewBag.ContentFormat_filter_header_wc_shower = Resources.Content.filter_header_wc_shower;
            ViewBag.ContentFormat_filter_option_air_condition = Resources.Content.filter_option_air_condition;
            ViewBag.ContentFormat_filter_option_bed_bunk = Resources.Content.filter_option_bed_bunk;
            ViewBag.ContentFormat_filter_option_bed_normal = Resources.Content.filter_option_bed_normal;
            ViewBag.ContentFormat_filter_option_cafeteria = Resources.Content.filter_option_cafeteria;
            ViewBag.ContentFormat_filter_option_center_heating_cooling = Resources.Content.filter_option_center_heating_cooling;
            ViewBag.ContentFormat_filter_option_generator = Resources.Content.filter_option_generator;
            ViewBag.ContentFormat_filter_option_internet_wireless = Resources.Content.filter_option_internet_wireless;
            ViewBag.ContentFormat_filter_option_internt_cable = Resources.Content.filter_option_internt_cable;
            ViewBag.ContentFormat_filter_option_kitchenette_flats = Resources.Content.filter_option_kitchenette_flats;
            ViewBag.ContentFormat_filter_option_kitchenette_room = Resources.Content.filter_option_kitchenette_room;
            ViewBag.ContentFormat_filter_option_laundry = Resources.Content.filter_option_laundry;
            ViewBag.ContentFormat_filter_option_refrigerator = Resources.Content.filter_option_refrigerator;
            ViewBag.ContentFormat_filter_option_room_tel = Resources.Content.filter_option_room_tel;
            ViewBag.ContentFormat_filter_option_tv_hall = Resources.Content.filter_option_tv_hall;
            ViewBag.ContentFormat_filter_option_tv_room = Resources.Content.filter_option_tv_room;
            ViewBag.ContentFormat_filter_option_wc_shower_common = Resources.Content.filter_option_wc_shower_common;
            ViewBag.ContentFormat_filter_option_wc_shower_flats = Resources.Content.filter_option_wc_shower_flats;
            ViewBag.ContentFormat_filter_option_wc_shower_room = Resources.Content.filter_option_wc_shower_room;
            ViewBag.ContentFormat_filter_select_dormitory_name = Resources.Content.filter_select_dormitory_name;
            ViewBag.ContentFormat_filter_select_dormitory_type = Resources.Content.filter_select_dormitory_type;
            ViewBag.ContentFormat_filter_select_room_area = Resources.Content.filter_select_room_area;
            ViewBag.ContentFormat_instruction_text = Resources.Content.instruction_text;
            ViewBag.ContentFormat_lang_code = Resources.Content.lang_code;
            ViewBag.ContentFormat_lang_trans_link = Resources.Content.lang_trans_link;
            ViewBag.ContentFormat_Message = Resources.Content.Message;
            ViewBag.ContentFormat_language_id = Resources.Content.language_id;


            ViewBag.ContentFormat_filter_range_10_to_20 = Resources.Content.filter_range_10_to_20;
            ViewBag.ContentFormat_filter_range_21_to_25 = Resources.Content.filter_range_21_to_25;
            ViewBag.ContentFormat_filter_range_26_to_30 = Resources.Content.filter_range_26_to_30;
            ViewBag.ContentFormat_filter_range_greater_than_30 = Resources.Content.filter_range_greater_than_30;

       
            ViewBag.ContentFormat_filter_dormitory_type_emu_dormitories = Resources.Content.filter_dormitory_type_emu_dormitories;
            ViewBag.ContentFormat_filter_dormitory_type_bot_dormitories = Resources.Content.filter_dormitory_type_bot_dormitories;



                ViewBag.ContentFormat_static_text_fees_and_facilities = Resources.Content.static_text_fees_and_facilities;
                ViewBag.ContentFormat_static_text_emu_dormitories = Resources.Content.static_text_emu_dormitories;
                ViewBag.ContentFormat_static_text_emu_dormitories0 = Resources.Content.static_text_emu_dormitories0;
                ViewBag.ContentFormat_static_text_emu_dormitories_1 = Resources.Content.static_text_emu_dormitories_1;
                ViewBag.ContentFormat_ories_2 = Resources.Content.ories_2;
                ViewBag.ContentFormat_ories_3 = Resources.Content.ories_3;
                ViewBag.ContentFormat_ories_fall_semester = Resources.Content.ories_fall_semester;
                ViewBag.ContentFormat_ories_spring_semester = Resources.Content.ories_spring_semester;
                ViewBag.ContentFormat_ories_installment_during_registration = Resources.Content.ories_installment_during_registration;
                ViewBag.ContentFormat_installment_date_2019 = Resources.Content.installment_date_2019;
                ViewBag.ContentFormat_installment_date_november_2019 = Resources.Content.installment_date_november_2019;
                ViewBag.ContentFormat_installment_date_april_2019 = Resources.Content.installment_date_april_2019;
                ViewBag.ContentFormat_installment_date_december_2018 = Resources.Content.installment_date_december_2018;
                ViewBag.ContentFormat_Installment_date_may_2019 = Resources.Content.Installment_date_may_2019;
                ViewBag.ContentFormat_emu_dormitories_fees_pdf = Resources.Content.emu_dormitories_fees_pdf;
                ViewBag.ContentFormat_emu_dormitories_bank_accounts = Resources.Content.emu_dormitories_bank_accounts;
                ViewBag.ContentFormat_bank_name = Resources.Content.bank_name;
                ViewBag.ContentFormat_iban_tl = Resources.Content.iban_tl;
                ViewBag.ContentFormat_iban_usd = Resources.Content.iban_usd;
                ViewBag.ContentFormat_emu_bot_dormitories = Resources.Content.emu_bot_dormitories;
                ViewBag.ContentFormat_emu_bot_dormitories1 = Resources.Content.emu_bot_dormitories1;
                ViewBag.ContentFormat_emu_bot_dormitories2 = Resources.Content.emu_bot_dormitories2;
                ViewBag.ContentFormat_emu_bot_dormitories3 = Resources.Content.emu_bot_dormitories3;
                ViewBag.ContentFormat_emu_bot_dormitories4 = Resources.Content.emu_bot_dormitories4;
                ViewBag.ContentFormat_emu_bot_dormitories5 = Resources.Content.emu_bot_dormitories5;
                ViewBag.ContentFormat_emu_bot_dormitories6 = Resources.Content.emu_bot_dormitories6;
                ViewBag.ContentFormat_emu_bot_dormitories7 = Resources.Content.emu_bot_dormitories7;
                ViewBag.ContentFormat_emu_bot_dormitories8 = Resources.Content.emu_bot_dormitories8;
                ViewBag.ContentFormat_private_dormitories_in_the_campus = Resources.Content.private_dormitories_in_the_campus;
                ViewBag.ContentFormat_private_dormitory_in_campus_link = Resources.Content.private_dormitory_in_campus_link;
                ViewBag.ContentFormat_ories_installment_october = Resources.Content.ories_installment_october;


           ViewBag.ContentFormat_sort_by = Resources.Content.sort_by;
           ViewBag.ContentFormat_sort_by_price = Resources.Content.sort_by_price;
           ViewBag.ContentFormat_sort_by_az = Resources.Content.sort_by_az;
           ViewBag.ContentFormat_sort_by_area = Resources.Content.sort_by_area;



            return View("Index");

        }

        public ActionResult Change(string id)
        {
            CultureInfo ci = new CultureInfo(id);
            Thread.CurrentThread.CurrentCulture = ci;
            Thread.CurrentThread.CurrentUICulture = ci;
            //Number Format

            

            //Content Format
            //ViewBag.ContentFormatMessage = Resources.Content.Message;
            //ViewBag.ContentFormat_LANG_CODE = Resources.Content.lang_code;
            //ViewBag.ContentFormat_LANG_TRANS_LINK = Resources.Content.lang_trans_link;

            

            return View("Index");


        }

    }
}
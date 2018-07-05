using System;
using System.Collections;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Web.Http;
using System.Web.Http.Description;
using System.Web.Http.Results;

using Intrim_fees_project.Models;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace Intrim_fees_project.Controllers
{
    public class room_facilityController : ApiController
    {
        public string Message { get; set; }
        public List<string> MessageList { get; set; }

        public void OnGet()
        {
            Message = "On Demo Page";
        }



        // POST: api/room_facility
        [Route("api/room_facility")]
        [HttpPost]
        [ResponseType(typeof(room_facility))]
        public HttpResponseMessage Postroom_facility(PostData2 data)
        {
          
            string name_of_dormitoryPosted = " ";
            int dormitory_typePosted = 1;
            double min_price_of_roomPosted = 0;
            double max_price_of_roomPosted = 10000;
            int room_areaPosted = 0;
            int langIDPosted = 0;

            string facility_TVPosted = " ";
            string facility_InternetPosted = " ";
            string facility_Wc_showerPosted = " ";
            string facility_KitchenettePosted = " ";
            string facility_bedPosted = " ";

            string facility_air_conditionPosted = " ";
            string facility_central_acPosted = " ";
            string facility_refrigeratorPosted = " ";
            string facility_laundryPosted = " ";
            string facility_cafeteriaPosted = " ";
            string facility_room_telPosted = " ";
            string facility_generatorPosted = " ";

            var obj = data;
            name_of_dormitoryPosted = obj.name_of_dormitory;
            dormitory_typePosted = obj.dormitory_type;
            min_price_of_roomPosted = obj.min_price_of_room;
            max_price_of_roomPosted = obj.max_price_of_room;
            room_areaPosted = obj.room_area;
            langIDPosted = obj.langId;

            facility_TVPosted = obj.facility_TV;
            facility_InternetPosted = obj.facility_Internet;
            facility_Wc_showerPosted = obj.facility_Wc_shower;
            facility_KitchenettePosted = obj.facility_Kitchenette;
            facility_bedPosted = obj.facility_bed;

            facility_air_conditionPosted = obj.facility_air_condition;
            facility_central_acPosted = obj.facility_central_ac;
            facility_refrigeratorPosted = obj.facility_refrigerator;
            facility_laundryPosted = obj.facility_laundry;
            facility_cafeteriaPosted = obj.facility_cafeteria;
            facility_room_telPosted = obj.facility_room_tel;
            facility_generatorPosted = obj.facility_generator;

            {
                //    MemoryStream stream = new MemoryStream();
                //     Request.Body.CopyTo(stream);
                //    stream.Position = 0;

                //    using (StreamReader reader = new StreamReader(stream))
                //    {
                //        string requestBody = reader.ReadToEnd();
                //        if (requestBody.Length > 0)
                //        {
                //            var obj = JsonConvert.DeserializeObject<PostData2>(requestBody);
                //            if (obj != null)
                //            {
                //                name_of_dormitoryPosted = obj.name_of_dormitory;
                //                dormitory_typePosted = obj.dormitory_type;
                //                min_price_of_roomPosted = obj.min_price_of_room;
                //                max_price_of_roomPosted = obj.max_price_of_room;
                //                room_areaPosted = obj.room_area;
                //                langIDPosted = obj.langId;

                //                facility_TVPosted = obj.facility_TV;
                //                facility_InternetPosted = obj.facility_Internet;
                //                facility_Wc_showerPosted = obj.facility_Wc_shower;
                //                facility_KitchenettePosted = obj.facility_Kitchenette;
                //                facility_bedPosted = obj.facility_bed;

                //                facility_air_conditionPosted = obj.facility_air_condition;
                //                facility_central_acPosted = obj.facility_central_ac;
                //                facility_refrigeratorPosted = obj.facility_refrigerator;
                //                facility_laundryPosted = obj.facility_laundry;
                //                facility_cafeteriaPosted = obj.facility_cafeteria;
                //                facility_room_telPosted = obj.facility_room_tel;
                //                facility_generatorPosted = obj.facility_generator;



                //            }
                //        }
                //    }
                //}


                List<PostData> arr = new List<PostData>();
                List<string> tr_acct_num, usd_acct_num;
                List<Facility> faci = new List<Facility>();
                List<string> listDormitories = new List<string>();
                List<string> listRoom = new List<string>();


                using (var context = new Entities())
                {
                    var dormitories = context.dormitories_table
                                        .Include(dormitory_trans => dormitory_trans.dormitories_table_translation)
                                        .Include(dormitory_room => dormitory_room.room_table)

                                        .ToList();




                    usd_acct_num = new List<string>();
                    usd_acct_num.Add("Account No: 6820-57259db");
                    usd_acct_num.Add("IBAN: TR04 0006 4000 0026 8200 057259db");

                    context.dormitories_table.ToList().ForEach(dorm =>
                    {
                        dorm.dormitories_table_translation.Where(r => r.language_id == langIDPosted).ToList().ForEach(dorm_trans =>
                        {




                            context.room_table.Where(r => r.dormitory_id == dorm.id).Include(r => r.room_table_translation).Include(r => r.room_facility).ToList().ForEach(room_t =>
                            {


                                room_t.room_table_translation.Where(r => r.language_id == langIDPosted).ToList().ForEach(room_trans =>
                                {
                                    tr_acct_num = new List<string>();
                                ///  tr_acct_num.Add("Account No: 6820-174392db");
                                //tr_acct_num.Add("IBAN: TR39 0006 4000 0016 8200 174392db");
                                usd_acct_num = new List<string>();
                                    string usdd = "";
                                    string trr = "";
                                //usd_acct_num.Add("Account No: 6820-57259db");
                                //usd_acct_num.Add("IBAN: TR04 0006 4000 0026 8200 057259db");

                                context.dormitory_bank_account_table.Include(r => r.bank_currency_table).Where(c => c.dormitory_id == room_t.dormitory_id && room_trans.room_table_non_trans_id == room_t.id).ToList().ForEach(dorm_bank_acc =>
                                    {
                                        dorm_bank_acc.bank_currency_table.Where(c => c.currency_name == "USD").ToList().ForEach(bk_curr =>
                                        {
                                            usdd += dorm_bank_acc.bank_name;
                                            context.account_parameter_values.Where(c => c.currency_id == bk_curr.id).Include(c => c.account_parameter_values_translation).ToList().ForEach(acct_param_val =>
                                            {
                                                acct_param_val.account_parameter_values_translation.Where(c => c.language_id == langIDPosted).ToList().ForEach(acc_param_val_trans =>
                                                {
                                                // acc_param_val_trans.Value;

                                                context.account_information_parameter.Include(c => c.account_information_parameter_translation).Where(c => c.id == acct_param_val.parameter_id).ToList().ForEach(acc_info_param =>
                                                    {
                                                        acc_info_param.account_information_parameter_translation.Where(c => c.language_id == langIDPosted).ToList().ForEach(acc_info_param_trans =>
                                                        {
                                                            usdd += "<br>" + acc_info_param_trans.parameter + ":" + acc_param_val_trans.value;
                                                        //acc_info_param_trans.Parameter;
                                                    });
                                                    });
                                                });
                                            });

                                            usd_acct_num.Add(usdd);
                                            usdd = "";

                                        });



                                        dorm_bank_acc.bank_currency_table.Where(c => c.currency_name == "TL").ToList().ForEach(bk_curr =>
                                        {
                                            trr += dorm_bank_acc.bank_name;

                                            context.account_parameter_values.Where(c => c.currency_id == bk_curr.id).Include(c => c.account_parameter_values_translation).ToList().ForEach(acct_param_val =>
                                            {
                                                acct_param_val.account_parameter_values_translation.Where(c => c.language_id == langIDPosted).ToList().ForEach(acc_param_val_trans =>
                                                {
                                                // acc_param_val_trans.Value;

                                                context.account_information_parameter.Include(c => c.account_information_parameter_translation).Where(c => c.id == acct_param_val.parameter_id).ToList().ForEach(acc_info_param =>
                                                    {
                                                        acc_info_param.account_information_parameter_translation.Where(c => c.language_id == langIDPosted).ToList().ForEach(acc_info_param_trans =>
                                                        {
                                                            trr += "<br>" + acc_info_param_trans.parameter + ":" + acc_param_val_trans.value;
                                                        //acc_info_param_trans.Parameter;
                                                    });
                                                    });
                                                });
                                            });

                                            tr_acct_num.Add(trr);
                                            trr = "";

                                        });
                                    });

                                    faci = new List<Facility>();
                                //I smell desaster from this part
                                context.room_facility.Where(r => r.room_id == room_t.id).Include(r => r.facility_table).ToList().ForEach(room_faci =>
                                    {
                                        context.facility_table.Where(r => r.id == room_faci.facility_id).Include(r => r.facility_table_translation).ToList().ForEach(facii =>
                                        {
                                            facii.facility_table_translation.Where(r => r.language_id == langIDPosted).ToList().ForEach(faci_trans =>
                                            {
                                                string facility_o = "";
                                                context.facility_option.Where(r => r.facility_id == room_faci.facility_id && facii.id == room_faci.facility_id)
                                                            .Include(r => r.facility_option_translation).ToList().ForEach(faci_op =>
                                                            {
                                                                faci_op.facility_option_translation
                                                                            .Where(r => r.language_id == langIDPosted && r.facility_option_non_trans_id == room_faci.facility_option_id)

                                                                        .ToList().ForEach(faci_op_trans =>
                                                                        {
                                                                            facility_o += " | " + faci_op_trans.facility_option;

                                                                        });

                                                            });

                                                faci.Add(new Facility { facility_name = faci_trans.facility_title + facility_o, facility_icon_url = facii.facility_icon_url });




                                            });
                                        });


                                    });






                                    faci.Add(new Facility { facility_name = "Room Area: " + room_t.room_area + " m" + "<sup style=\"font-size: smaller; \">2</sup>", facility_icon_url = "../../Content/Dormitories_files/room_area.jpg" });
                                    faci.Add(new Facility { facility_name = "Price: " + dorm.room_price_currency + " " + room_t.room_price, facility_icon_url = "../../Content/Dormitories_files/price.png" });


                                    arr.Add(new PostData
                                    {
                                        name_of_dormitory = dorm_trans.dormitory_name,
                                        name_of_room = room_trans.room_title + " (" + dorm_trans.gender_allocation + ")",
                                        url_of_room_image = room_t.room_picture_url,
                                        facility = faci,
                                        dormitory_type = dorm.dormitory_type_id,
                                        price_of_room = room_t.room_price,
                                        room_area = room_t.room_area,
                                        dormitory_account = dorm_trans.dormitory_name,
                                        bank_name = "bank name",
                                        turkish_lira_account_number = tr_acct_num,
                                        usd_account_number = usd_acct_num,
                                        dormitory_website = "dormitory website"
                                    });
                                });

                            });




                        });
                    });










                }
                //tr_acct_num = new List<string>();
                //tr_acct_num.Add("Account No: 6820-174392db");
                //tr_acct_num.Add("IBAN: TR39 0006 4000 0016 8200 174392db");

                //usd_acct_num = new List<string>();
                //usd_acct_num.Add("Account No: 6820-57259db");
                //usd_acct_num.Add("IBAN: TR04 0006 4000 0026 8200 057259db");

                //faci = new List<Facility>();
                //faci.Add(new Facility { facility_name = "buckets", facility_icon_url = "./Dormitories_files/thumbnail(3).png" });
                //faci.Add(new Facility { facility_name = "broom", facility_icon_url = "./Dormitories_files/thumbnail(3).png" });
                //faci.Add(new Facility { facility_name = "broom", facility_icon_url = "./Dormitories_files/thumbnail(5).png" });
                //faci.Add(new Facility { facility_name = "broom", facility_icon_url = "./Dormitories_files/thumbnail(4).png" });
                //faci.Add(new Facility { facility_name = "broom", facility_icon_url = "./Dormitories_files/thumbnail(4).png" });

                //arr.Add(new PostData
                //{
                //    name_of_dormitory = "Sample dormitory",
                //    name_of_room = "Sample room",
                //    url_of_room_image = "https://dormitories.emu.edu.tr/PhotoGalleries/dormitories/popart/TEK%20K%C4%B0%C5%9E%C4%B0L%C4%B0K%20EXCLUS%C4%B0VE.jpg?RenditionID=7",
                //    facility = faci,
                //    room_area = 25,
                //    dormitory_type = 1,
                //    dormitory_account = "dormitory_account",
                //    bank_name = "bank name",
                //    price_of_room = 2700,
                //    turkish_lira_account_number = tr_acct_num,
                //    usd_account_number = usd_acct_num,
                //    dormitory_website = "dormitory website"
                //});

                //var faci_query = from Facility f in arr
                //                 where (f.facility_name.Contains("TV"))
                //                 select f;
                //var query = from PostData s in arr
                //            where (s.facility.
                //            select s;

                //var query = from s in arr
                //            where s.Facility.Any(c => c.facility_name.contains("TV"))
                //            select s;

                //  PostData query = arr.fin
                ArrayList sa = new ArrayList();
                //sa.Add("Kitchenette | Flats");
                //sa.Add("TV | In room");
                //sa.Add("Central conditioning system | Cooling");

                sa.Add(facility_TVPosted);
                sa.Add(facility_InternetPosted);
                sa.Add(facility_Wc_showerPosted);
                sa.Add(facility_KitchenettePosted);
                sa.Add(facility_bedPosted);

                sa.Add(facility_air_conditionPosted);
                sa.Add(facility_central_acPosted);
                sa.Add(facility_refrigeratorPosted);
                sa.Add(facility_laundryPosted);
                sa.Add(facility_cafeteriaPosted);
                sa.Add(facility_room_telPosted);
                sa.Add(facility_generatorPosted);

                //string name_of_dormitoryPosted = " ";



                var query = arr;

                if (room_areaPosted == 0)
                {

                    if (dormitory_typePosted == 0)
                    {
                        foreach (var q in sa)
                            query = query
                           .Where(item =>
                              item.name_of_dormitory.Contains(name_of_dormitoryPosted) &&


                              item.price_of_room >= min_price_of_roomPosted && item.price_of_room <= max_price_of_roomPosted &&
                              item.facility.Any(fac => fac.facility_name.Contains(q.ToString())))
                           .ToList();
                    }
                    else
                    {
                        foreach (var q in sa)
                            query = query
                           .Where(item =>
                              item.name_of_dormitory.Contains(name_of_dormitoryPosted) &&
                              item.dormitory_type == dormitory_typePosted &&

                              item.price_of_room >= min_price_of_roomPosted && item.price_of_room <= max_price_of_roomPosted &&
                              item.facility.Any(fac => fac.facility_name.Contains(q.ToString())))
                           .ToList();
                    }
                }
                else
                {

                    if (dormitory_typePosted == 0)
                    {
                        foreach (var q in sa)
                            query = query
                           .Where(item =>
                              item.name_of_dormitory.Contains(name_of_dormitoryPosted) &&

                              item.room_area == room_areaPosted &&
                              item.price_of_room >= min_price_of_roomPosted && item.price_of_room <= max_price_of_roomPosted &&
                              item.facility.Any(fac => fac.facility_name.Contains(q.ToString())))
                           .ToList();
                    }
                    else
                    {
                        foreach (var q in sa)
                            query = query
                           .Where(item =>
                              item.name_of_dormitory.Contains(name_of_dormitoryPosted) &&
                              item.dormitory_type == dormitory_typePosted &&
                              item.room_area == room_areaPosted &&
                              item.price_of_room >= min_price_of_roomPosted && item.price_of_room <= max_price_of_roomPosted &&
                              item.facility.Any(fac => fac.facility_name.Contains(q.ToString())))
                           .ToList();
                    }
                }






                //return new JsonResult(query);



             //   return CreatedAtRoute("DefaultApi", new { id = data.room_area }, query);

                return new HttpResponseMessage()
                {
                    Content = new StringContent(JArray.FromObject(query).ToString(), Encoding.UTF8, "application/json")
                };
            }






        }

        public class PostData2
        {
            public string name_of_dormitory { get; set; }
            public int dormitory_type { get; set; }

            public double min_price_of_room { get; set; }
            public double max_price_of_room { get; set; }
            public int room_area { get; set; }
            public int langId { get; set; }

            public string facility_TV { get; set; }
            public string facility_Internet { get; set; }
            public string facility_Wc_shower { get; set; }
            public string facility_Kitchenette { get; set; }
            public string facility_bed { get; set; }

            public string facility_air_condition { get; set; }
            public string facility_central_ac { get; set; }
            public string facility_refrigerator { get; set; }
            public string facility_laundry { get; set; }
            public string facility_cafeteria { get; set; }
            public string facility_room_tel { get; set; }
            public string facility_generator { get; set; }

        }

        public class PostData
        {
            public string name_of_dormitory { get; set; }
            public string name_of_room { get; set; }
            public double price_of_room { get; set; }
            public int dormitory_type { get; set; }
            public int room_area { get; set; }
            public string url_of_room_image { get; set; }
            public List<Facility> facility { get; set; }
            public string dormitory_account { get; set; }
            public string bank_name { get; set; }
            public List<string> turkish_lira_account_number { get; set; }
            public List<string> usd_account_number { get; set; }
            public string dormitory_website { get; set; }

        }

        public class Facility
        {
            public string facility_name { get; set; }
            public string facility_icon_url { get; set; }
        }
    }

}
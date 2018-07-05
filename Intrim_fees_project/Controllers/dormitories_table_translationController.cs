using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Web.Http;
using System.Web.Http.Description;
using Intrim_fees_project.Models;
using Newtonsoft.Json.Linq;

namespace Intrim_fees_project.Controllers
{
    public class dormitories_table_translationController : ApiController
    {
        private Entities1 db = new Entities1();

        // POST: api/room_facility
        
       
       

        // POST: api/dormitories_table_translation
        [Route("api/dormitories_table_translation")]
        [HttpPost]
        [ResponseType(typeof(dormitories_table_translation))]
        public HttpResponseMessage Postdormitories_table_translation(PostData2 data)
        {
            int dormitory_typePosted = 1;
            int langIDPosted = 0;
            var obj = data;

            dormitory_typePosted = obj.dormitory_type;
            langIDPosted = obj.langId;

            List<string> listDormitories = new List<string>();


            listDormitories.Add("");

            using (var context = new Entities1())
            {
                var dormitories = context.dormitories_table
                                    .Include(dormitory_trans => dormitory_trans.dormitories_table_translation)
                                    .Include(dormitory_room => dormitory_room.room_table)

                                    .ToList();



                context.dormitories_table.Where(d => d.dormitory_type_id == dormitory_typePosted).ToList().ForEach(dorm =>
                 {
                     dorm.dormitories_table_translation.Where(r => r.language_id == langIDPosted).ToList().ForEach(dorm_trans =>
                     {
                         listDormitories.Add(dorm_trans.dormitory_name);
                     });


                     });

                }



               //   listDormitories.Add("Marmara");
            //listDormitories.Add("Marmara");
            //listDormitories.Add("Marmara");
            //listDormitories.Add("Marmara");
            //listDormitories.Add("Marmara");

            return new HttpResponseMessage()
            {
                Content = new StringContent(JArray.FromObject(listDormitories).ToString(), Encoding.UTF8, "application/json")
            };
        }

        
    }

    public class PostData2
    {
        public int dormitory_type { get; set; }
        public int langId { get; set; }
    }
}
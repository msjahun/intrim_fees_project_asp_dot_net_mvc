//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Intrim_fees_project.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class facility_table_translation
    {
        public int language_id { get; set; }
        public int facility_table_non_trans_id { get; set; }
        public string facility_title { get; set; }
        public string facility_description { get; set; }
    
        public virtual facility_table facility_table { get; set; }
        public virtual language_table language_table { get; set; }
    }
}

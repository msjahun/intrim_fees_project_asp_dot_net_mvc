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
    
    public partial class dormitory_information_table_translation
    {
        public int language_id { get; set; }
        public int dormitory_info_non_trans_id { get; set; }
        public string information { get; set; }
    
        public virtual dormitory_information_table dormitory_information_table { get; set; }
        public virtual language_table language_table { get; set; }
    }
}

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
    
    public partial class account_parameter_values_translation
    {
        public int language_id { get; set; }
        public int account_params_values_non_trans_id { get; set; }
        public string value { get; set; }
    
        public virtual account_parameter_values account_parameter_values { get; set; }
        public virtual language_table language_table { get; set; }
    }
}
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
    
    public partial class bank_currency_table
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public bank_currency_table()
        {
            this.account_parameter_values = new HashSet<account_parameter_values>();
        }
    
        public int id { get; set; }
        public int bank_id { get; set; }
        public string currency_name { get; set; }
    
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<account_parameter_values> account_parameter_values { get; set; }
        public virtual dormitory_bank_account_table dormitory_bank_account_table { get; set; }
    }
}

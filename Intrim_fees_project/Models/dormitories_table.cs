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
    
    public partial class dormitories_table
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public dormitories_table()
        {
            this.dormitories_table_translation = new HashSet<dormitories_table_translation>();
            this.dormitory_bank_account_table = new HashSet<dormitory_bank_account_table>();
            this.room_table = new HashSet<room_table>();
        }
    
        public int id { get; set; }
        public int dormitory_type_id { get; set; }
        public string room_price_currency { get; set; }
        public string room_price_currency_symbol { get; set; }
    
        public virtual dormitory_type dormitory_type { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<dormitories_table_translation> dormitories_table_translation { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<dormitory_bank_account_table> dormitory_bank_account_table { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<room_table> room_table { get; set; }
    }
}

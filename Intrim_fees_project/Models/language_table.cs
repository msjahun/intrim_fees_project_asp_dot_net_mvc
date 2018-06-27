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
    
    public partial class language_table
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public language_table()
        {
            this.account_information_parameter_translation = new HashSet<account_information_parameter_translation>();
            this.account_parameter_values_translation = new HashSet<account_parameter_values_translation>();
            this.dormitories_table_translation = new HashSet<dormitories_table_translation>();
            this.dormitory_information_table_translation = new HashSet<dormitory_information_table_translation>();
            this.dormitory_type_translation = new HashSet<dormitory_type_translation>();
            this.facility_option_translation = new HashSet<facility_option_translation>();
            this.facility_table_translation = new HashSet<facility_table_translation>();
            this.room_table_translation = new HashSet<room_table_translation>();
        }
    
        public int id { get; set; }
        public string name { get; set; }
        public string language_code { get; set; }
    
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<account_information_parameter_translation> account_information_parameter_translation { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<account_parameter_values_translation> account_parameter_values_translation { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<dormitories_table_translation> dormitories_table_translation { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<dormitory_information_table_translation> dormitory_information_table_translation { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<dormitory_type_translation> dormitory_type_translation { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<facility_option_translation> facility_option_translation { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<facility_table_translation> facility_table_translation { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<room_table_translation> room_table_translation { get; set; }
    }
}

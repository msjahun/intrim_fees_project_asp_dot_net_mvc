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
    
    public partial class facility_option
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public facility_option()
        {
            this.facility_option_translation = new HashSet<facility_option_translation>();
        }
    
        public int id { get; set; }
        public int facility_id { get; set; }
    
        public virtual facility_table facility_table { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<facility_option_translation> facility_option_translation { get; set; }
    }
}
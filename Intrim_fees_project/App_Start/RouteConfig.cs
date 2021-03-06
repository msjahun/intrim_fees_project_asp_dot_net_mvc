﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace Intrim_fees_project
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");
            routes.MapRoute(
               "Fees",                                           // Route name
               "Fees/{lang}",                            // URL with parameters
               new { controller = "FeesAndFacilities", action = "Index" }  // Parameter defaults
           );
            routes.MapRoute(
                name: "Default",
                url: "{controller}/{action}/{id}",
                defaults: new { controller = "FeesAndFacilities", action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}

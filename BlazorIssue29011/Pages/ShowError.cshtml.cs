using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace BlazorIssue29011.Pages
{
    public class ShowErrorModel : PageModel
    {
        public IActionResult OnGet()
        {
            var personalData = new Dictionary<string, string>();
            personalData.Add("TEST", "TEST");
            Response.Headers.Add("Content-Disposition", "attachment; filename=test.json");
            return new FileContentResult(System.Text.Json.JsonSerializer.SerializeToUtf8Bytes(personalData), "application/json");
        }
    }
}

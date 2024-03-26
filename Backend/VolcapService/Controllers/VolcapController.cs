using Microsoft.AspNetCore.Mvc;

namespace VolcapService.Controllers
{
    public class VolcapController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}

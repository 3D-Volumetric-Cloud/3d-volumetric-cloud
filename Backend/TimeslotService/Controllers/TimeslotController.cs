using Microsoft.AspNetCore.Mvc;

namespace TimeslotService.Controllers
{
    public class TimeslotController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}

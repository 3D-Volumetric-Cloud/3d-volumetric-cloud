using Microsoft.AspNetCore.Mvc;

namespace MarketplaceService.Controllers
{
    public class MarketplaceController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}

using Microsoft.AspNetCore.Mvc;
using Mission04_alexm99.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Mission04_alexm99.Controllers
{
    public class SomethinController : Controller
    {
        public IActionResult Index()
        {

            return View();
        }

        [HttpGet]
        public IActionResult GradeCalculator()
        {
            return View();
        }

        [HttpPost]
        public IActionResult GradeCalculator(GradeCalculatorModel model)
        {
            return View();
        }
    }
}

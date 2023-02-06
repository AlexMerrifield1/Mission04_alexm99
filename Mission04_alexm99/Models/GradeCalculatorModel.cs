using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Mission04_alexm99.Models
{
    public class GradeCalculatorModel
    {
        //This will build the entire get/set for you
        [Required]
        [Range (0,100)]
        public string Assignments { get; set; }
        [Range(0, 100)]
        public string Group_Project { get; set; }
        [Range(0, 100)]
        public string Quizzes { get; set; }
        [Range(0, 100)]
        public string Midterm_Exam { get; set; }
        [Range(0, 100)]
        public string Final_Exam { get; set; }
        [Range(0, 100)]
        public string INTEX { get; set; }

    }
}

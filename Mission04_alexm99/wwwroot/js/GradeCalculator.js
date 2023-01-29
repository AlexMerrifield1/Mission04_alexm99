$('#btnSend').click(function () {
  var assignments = $('#txtAssignments').val();
  var groupProject = $('#txtGroupProject').val();
  var quizzes = $('#txtQuizzes').val();
  var midtermExam = $('#txtMidtermExam').val();
  var finalExam = $('#txtFinalExam').val();
  var intex = $('#txtINTEX').val();

  var assignmentPercentage = 0.50;
  var otherPercentage = 0.10;
  var perc = 0;

  //Percentage Calculation
  var perc = (assignmentPercentage * assignments) + (otherPercentage * groupProject) + (otherPercentage * quizzes) + (otherPercentage * midtermExam) + (otherPercentage * finalExam) + (otherPercentage * intex);

  //LetterGrade Calculation
  if (perc >= 94) {
    letterGrade = "A";
  } else if (perc >= 90) {
    letterGrade = "A-";
  } else if (perc >= 87) {
    letterGrade = "B+";
  } else if (perc >= 84) {
    letterGrade = "B";
  } else if (perc >= 80) {
    letterGrade = "B-";
  } else if (perc >= 77) {
    letterGrade = "C+";
  } else if (perc >= 74) {
    letterGrade = "C";
  } else if (perc >= 70) {
    letterGrade = "C-";
  } else if (perc >= 67) {
    letterGrade = "D+";
  } else if (perc >= 64) {
    letterGrade = "D";
  } else if (perc >= 60) {
    letterGrade = "D-";
  } else {
    letterGrade = "E";
  }

  $('#finalPercentage').val(perc);
  $('#letterGrade').val(letterGrade);

})

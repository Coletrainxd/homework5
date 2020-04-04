// var nineamBtn = document.querySelector("#nineam");
// var tenamBtn = document.querySelector("#tenam");
// var elevenamBtn = document.querySelector("#elevenam");
// var twelvepmBtn = document.querySelector("#twelvepm");
// var onepmBtn = document.querySelector("#onepm");
// var twopmBtn = document.querySelector("#twopm");
// var threepmBtn = document.querySelector("#threepm");
// var fourpmBtn = document.querySelector("#fourpm");
// var fivepmBtn = document.querySelector("#fivepm");

// function saveTaskNineAm() {
//   var nineAmInput = document.getElementById("nineAmID").value;
//   document.getElementById("nineAmID").placeholder = nineAmInput;
// }
// function saveTaskTenAm() {
//   var tenAmInput = document.getElementById("tenAmID").value;
//   document.getElementById("tenAmID").placeholder = tenAmInput;
// }
// function saveTaskElevenAm() {
//   var elevenAmInput = document.getElementById("tenAmID").value;
//   document.getElementById("tenAmID").placeholder = tenAmInput;
// }

// nineamBtn.addEventListener("click", saveTaskNineAm);
// tenamBtn.addEventListener("click", saveTaskTenAm);
// elevenamBtn.addEventListener("click", saveTaskElevenAm);
// twelvepmBtn.addEventListener("click", saveTaskTwelvePm);
// onepmBtn.addEventListener("click", saveTaskOnePm);
// twopmBtn.addEventListener("click", saveTaskTwoPm);
// threepmBtn.addEventListener("click", saveTaskThreePm);
// fourpmBtn.addEventListener("click", saveTaskFourPm);
// fivepmBtn.addEventListener("click", saveTaskFivePm);

$(document).ready(function () {
  $(".saveBtn").on("click", function () {
    var value = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    localStorage.setItem(time, value);
  });
  function hourupdate() {
    var currentHour = moment().hours();
    $(".time-block").each(function () {
      var blockHour = parseInt($(this).attr("id").split("-")[1]);
      if (blockHour < currentHour) {
        $(this).addClass("past");
      } else if (blockHour === currentHour) {
        $(this).removeClass("past");
        $(this).addClass("present");
      } else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
      }
    });
  }
  hourupdate();
  var interval = setInterval(hourupdate, 20000);
  $("#hour-9 .description").val(localStorage.getItem("hour-9"));

  $("#currentDay").text(moment().format("dddd, MMMM Do"));
});

$(document).ready (function () {
  $(".arrow").click(function () {
    $(".expand").slideToggle(600);
  });

  $(".hamburger").click(function () {
    $("nav").slideToggle(600);
    $("nav ul li").css("display", "block");
  });
});

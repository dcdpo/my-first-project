$(".title").click(function () {
    var x = $(this).siblings("p");
    if (x.css("display") == "none") {
      x.slideDown();
    } else {
      x.slideUp();
    }
  });
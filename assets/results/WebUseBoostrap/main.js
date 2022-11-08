$(window).scroll(function () {
  $(".slideScroll").each(function () {
    var pos = $(this).offset().top;
    var winTop = $(window).scrollTop();
    if (pos < winTop + 600) {
      $(this).addClass("slide");
    }
  });
});
$(".icon-srtop").on("click", function () {
  $(window).scrollTop(0);
});
$(window).ready(function () {
  $(".modal").modal("show");
  $(".btn-modal").on("click", function () {
    $(".modal").modal("show");
  });
  $(window).scroll(function () {
    let height = document.documentElement.scrollHeight;
    let topheight = document.documentElement.scrollTop;
    let client_height = document.documentElement.clientHeight;

    let value = Math.floor((topheight / (height - client_height)) * 100);
    $('.value').css('width', value + '%');
  });
});

$(window).scroll(function() {
    $(".slideScroll").each(function(){
      var pos = $(this).offset().top;
      var winTop = $(window).scrollTop();
      console.log(winTop);
      if (pos < winTop + 600) {
        $(this).addClass("slide");
      }
    });
});
$('.icon-srtop').on('click', function(){
    $(window).scrollTop(0)
})
$(window).ready(function(){
    $('.modal').modal('show');
    $('.btn-modal').on('click', function(){
        $('.modal').modal('show');
    })
})
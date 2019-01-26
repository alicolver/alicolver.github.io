function adjustStyle(width) {
    width = parseInt(width);
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
      $("#size-stylesheet").attr("href", "css/mobile.css");
    } else {
       $("#size-stylesheet").attr("href", "css/index.css"); 
    }
}
  
$(function() {
    adjustStyle($(this).width());
    $(window).resize(function() {
      adjustStyle($(this).width());
    });
});
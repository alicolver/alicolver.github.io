function adjustStyle(width) {
    width = parseInt(width);
    if (width < 1001) {
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
$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        "items": 1,
       
        "loop": true,
        "autoplay": true,
        nav:false
       
    });
  $(".tab_head ul li a").click(function () {
      var $this = $(this)
      console.log($this);
      $(".tab_head ul li a").removeClass("active");
      $this.addClass("active");
       clicked_tab = $this.data("id");
     
      $(".tab_body div.item").removeClass("active")
      $(`#${clicked_tab}`).addClass("active")
  })
  
   
});
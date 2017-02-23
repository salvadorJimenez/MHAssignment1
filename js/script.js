$(document).ready(function(){
  var scroll_start = 0;
  var startchange = $('#changeNav');
  var offset = startchange.offset();
  if (startchange.length){
   $(document).scroll(function() { 
      scroll_start = $(this).scrollTop();
      if(scroll_start >= offset.top) {
        $(".navbar-default").css('background-color', '#333');
      }else{
        $(".navbar-default").css('background-color', 'rgba(0, 0, 0, 0.24)');
      }
   });
  }
	$(window).on('resize', function(){
		var width=$(window).width();
		console.log(width);
		if(width<760){
			$("#menu li").on("click","a",function(){
				$(".navbar-toggle").click();
			});
		}
	});
});
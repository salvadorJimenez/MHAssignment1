$(document).ready(function(){
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
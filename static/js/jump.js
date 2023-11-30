$(document).ready(function() {
    $("#clicksource a").click(function()
		{
			var href=$(this).attr("href");
			// -80 for floating nav bar
			var pos= $(href).offset().top-80; 
			$("html,body").animate({scrollTop:pos},800);
			return false;
		}
	);
});
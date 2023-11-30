$(document).ready(function() {
    $("#clicksource a").click(function()
		{
			var href=$(this).attr("href");
			var pos= $(href).offset().top;
			$("html,body").animate({scrollTop:pos},800);
			return false;
		}
	);
});
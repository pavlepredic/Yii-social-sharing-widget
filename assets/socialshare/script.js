$(".social-provider-icon").click(function(event) {
	event.preventDefault();
	window.open($(this).attr("href"), "Sharing", "directories=0,height=600,width=800,location=0,menubar=0,status=0,titlebar=0,toolbar=0");
});
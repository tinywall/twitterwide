var cssstyle="<style>"+
"#page-container{width:auto;}"+
"</style>";
$(document).ready(function(){
	$('body').append(cssstyle);
		calcSize();
		$('body').append("<style>#timeline,.profile-page-header,.content-main{width:"+rightWidth+"px;}#timeline, .profile-page-header, .content-main{float:right;}</style>");
	$(window).resize(function() {
		calcSize();
		$('#timeline,.profile-page-header,.content-main').css('width',rightWidth+'px');
	});
	/*$(document).click(function(){
		setSize();
	});*/
});
function calcSize(){
	totalWidth=$(window).width();
	leftWidth=$('.dashboard').width();
	rightWidth=totalWidth-leftWidth-70;	
}
define(function(){
	function Footer(){

	}
	Footer.prototype.init=function(){
		$("#footer").load("/html/component/footer.html");
	}
	return new Footer();
})
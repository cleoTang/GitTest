define(function(){
	function Fixed(){

	}
	// return 123;
	Fixed.prototype.init=function(){
		$("#fixed").load("/html/component/fixed.html");
		require(["config"],function(){
			require(["jquery"],function($){
				
				$("#hot").hover(function(){
					$("#none_img").css("display","block")
				},function(){
					$("#none_img").css("display","none");
				});
				//滚动触发事件
				$(window).scroll(function(){
					var scroTop=$(window).scrollTop();
					if(scroTop>0){
//						console.log(2);
						$("#hot").stop().animate({bottom:'+43px'},"slow");
					}else{
						$("#hot").stop().animate({bottom:'+2px'},"slow");
					}
					$("#top").on("click",function(){
						if(scroTop!=0){
							//将当前窗口的内容区滚动高度改为0，即顶部
//							console.log(1);
							$("body,html").stop().animate({scrollTop:0},"fast");
							
						}
						
					})
				})
				
				
		})
		})
	}
	return new Fixed();
})
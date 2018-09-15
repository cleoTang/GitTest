require(["config"],function(){
	//再引入依赖的模块
	require(["jquery","cookie"],function($){
		// $.cookie('usernum');
		var num=$.cookie('usernum');
		console.log($.cookie('usernum'));
		if(num){
			$("#login_wrap span").addClass("none");
			$("#login_wrap").html(num);
			// var txt=$(this).html();
			$("#login_wrap").hover(function(){
				$(this).css("color","#c8b4a3");
			},function(){
				$(this).css("color","#3C2314");
			});
		}else{
			$("#login_wrap span").removeClass("none");
		}

		//点击导航 对应页面改变颜色
		$("#ul").on("click","a",function(){
			console.log($(this));
			$(this).addClass("ac");
		})
		
	})
})

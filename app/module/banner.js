define(function(){
	function Banner(){
		// console.log(12);
	}
	Banner.prototype.init=function(select){
		var box = $(select),
		ul = $(select+" ul"),
		aLi = $(select+" ul li"),
		ol = $(select+" ol"),
		aBtn = $(select+" ol li");
		// console.log(aBtn);
		var index = 0;//存当前处于第几张图
		var flag = false;//没有播放
		var timer=null//控制定时器
		//按钮切换
		aBtn.hover(function(){
			if(!flag){
				flag=true;
				 $(this).addClass("ac").siblings().removeClass("ac");
				aLi.eq(index).stop().fadeOut();
				index=$(this).index();
				aLi.eq(index).stop().fadeIn(1000,function(){
					flag=false;
				});
			}	   
		});
	function goNext(){
		if(!flag){
			flag=true;
			aLi.eq(index).stop().fadeOut();
			index++;
			if(index>aLi.length-1)index=0;
			aLi.eq(index).stop().fadeIn(1000,function(){
				flag=false;
			});
			aBtn.eq(index).addClass("ac").siblings().removeClass("ac");
		}
		
	}
	var play=(function auto(){
		timer=setInterval(function(){
			goNext();
	   	 },3000);
		return auto;
	})();
	// 鼠标划上图片停止轮播
	box.hover(function(){
		clearInterval(timer);
	},function(){
		play();
	});

	}
	return new Banner();
})
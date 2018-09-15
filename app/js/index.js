//首先引入config
require(["config"],function(){
	//再引入依赖的模块
	require(["jquery","footer","banner","url","template","fixed","cookie"],function($,footer,banner,url,template,fixed){
		footer.init();
		// console.log(banner);
		banner.init("#banner");
		fixed.init();
		//登录显示用户名
		var num=$.cookie('usernum');
//		console.log(num);
		// console.log(123);
		if(num){
			$("#login_wrap span").addClass("none");
			$("#login_wrap").html(num);
			$("#login_wrap").hover(function(){
				$(this).css("color","#c8b4a3");
			},function(){
				$(this).css("color","#3C2314");
			});
			// console.log($("#login_wrap"));
		}else{
			$("#login_wrap span").removeClass("none");
		}
		$(function(){
			$.get(url.url+"/index.php",function(data){
				data=JSON.parse(data);
				console.log(data);
				var html = template("list",{data: data});
				$("#indexlist").html(html);
				$("#item_module li").on("click",function(){
					var index=$(this).index()+1;
					console.log(index);
					$.cookie('id',index,{path:'/'});
					
				})
			})
		})
		var shopcar=$.cookie('shopcar');
			var data=JSON.parse(shopcar);
			var number=0;
			for(var i=0;i<data.length;i++){
				number+=data[i].num;

			}
		$("#shop_bag_number").html(number);
		//图片动画效果

		// $(".c1").hover(function(){
		// 	// $(this).
		// 	$(".imgbox").addClass("ac");
		// 	$(".imgbottom img").animate({width: '330px',height:'330px'}, "slow");
		// 	console.log(123);
		// },function(){
		// 	$(".imgbottom img").animate({width: '280px',height:'280px',opacity:'0'}, "normal",function(){
		// 		$(".imgbox").removeClass("ac");
		// 		$(".imgbottom img").css("opacity",'1');

		// 	});

		// });
	})
})
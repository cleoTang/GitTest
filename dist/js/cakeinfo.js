//首先引入config
require(["config"],function(){
	//再引入依赖的模块
	require(["jquery","header","footer","banner","url","template","fixed","cookie"],function($,header,footer,banner,url,template,fixed){
		header.init();
		footer.init();
		fixed.init();
		$(function(){
			var id=$.cookie('id');
//			 console.log(id);
//			console.log(location.href);
			$.get(url.url+"/cakeinfo.php",{"id":id},function(data){
				data=JSON.parse(data);
				 console.log(data);
				var html = template("info_list",{data: data});
				$("#jiazai").html(html);
				
				//轮播图
				banner.init(".banner");
				$("#btn li").on('click',function(){
					$(this).addClass("bc").siblings().removeClass("bc");
					$("#mark .mark_item").eq($(this).index()).show().siblings().hide();
				});
				
				//加入购物车
				$(".p1").on("click",function(){
					//判断当前点击是哪个选项卡 cookie存取蛋糕大小
					for(var i=0;i<4;i++){
						if($("#btn").children().eq(i).hasClass('bc')){
							var size=i;
						}
					}
					//找到蛋糕的尺寸大小
					var cakesize=$(this).parent().prev().children().eq(0).children().eq(size).html();
					//找出蛋糕的价格大小
					var cakeurl=$(this).parent().parent().children().eq(3).children().eq(size).children().eq(1);
					
					var cakepeople=cakeurl.children().eq(1).children().eq(1).html();
					
					var cakePeopleNum=cakeurl.children().eq(2).children().eq(1).html();
					
					var cakeprice=cakeurl.children().eq(4).children().eq(0).html();
					//获取cookie
					var shopcar=$.cookie('shopcar');
					
					//判断之前cookie是否有这个字段
					if(shopcar){
						shopcar=JSON.parse(shopcar);
					}else{
						shopcar=[];
					}
					//遍历当前cookie是否有点击加购商品 有就加一
					for(var i=0;i<shopcar.length;i++){
						if(shopcar[i].name==data[0].name && shopcar[i].cakeprice==cakeprice){
							shopcar[i].num++;
							
							var arr=JSON.stringify(shopcar);
							$.cookie("shopcar", arr, {path :'/'});
							alert("蛋糕添加成功！");
							// console.log(shopcar[i].num);
							return;
					}
				}
				
				//添加商品
				var obj = {
					name:data[0].name,
					num:1,
					src:data[0].imgtop,
					id:id,
					size:cakesize,
					cakepeople:cakepeople,
					cakePeopleNum:cakePeopleNum,
					cakeprice:cakeprice
					}
				shopcar.push(obj);
				var arr=JSON.stringify(shopcar);
				$.cookie("shopcar", arr, {path :'/'});
//				 console.log(arr);
				 console.log($.cookie('shopcar'));
				alert("蛋糕添加成功！");
				})	

			
		})	
		})

		})
		
	})
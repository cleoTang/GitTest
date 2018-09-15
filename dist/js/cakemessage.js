//首先引入config
require(["config"],function(){
	//再引入依赖的模块
	require(["jquery","header","footer","cookie","template","fixed"],function($,header,footer,cookie,template,fixed){
		//异步加载头部
		header.init();
		//异步加载尾部
		footer.init();
		fixed.init();
		//动态添加购物车
		var shopcar=$.cookie('shopcar');
		console.log($.cookie('shopcar'));
		var data=JSON.parse(shopcar);
		// console.log(data);
		var html = template("list",{data: data});
		$("#cakes_wrap1").html(html);
		
			//利用事件委托来写控制减

			$(".cakes_wrap").on("click",".sub",function(event){
				// console.log(data);
				var num1=$(this).next().html();
				var target = $(event.target);
				num1--;
				if(num1<0){
					// 删除蛋糕事件
					$(this).parents(".cakes_item").remove();
				}
				$(this).next().html(num1);
				//修改cookie
				//遍历cookie
				console.log($(this).parents(".cakes_item").children().eq(0).children().eq(1).children().eq(0).html());
				var name=$(this).parents(".cakes_item").children().eq(0).children().eq(1).children().eq(0).html();
				for(var i=0;i<data.length;i++){
					if(data[i].name==name){
						data[i].num=num1;
						// console.log(data);
						var arr=JSON.stringify(data);
						$.cookie("shopcar", arr, {path :'/'});
					}
				}
				
				//价格改变
				var price=$(this).parent().prev().children().eq(0).children().eq(0).html();
				var tolprice=num1*price;
				var total=$(this).parent().next().children().eq(0).children().eq(0);
				total.html(tolprice);
				var a=$(".number span").html();
				$(".allmoney").html(a);
				//重新获取cookie 设置总价格
				var allmoney=$.cookie('shopcar');
				allmoney=JSON.parse(allmoney);
				var aMoney=0;
				for(var i=0;i<allmoney.length;i++){
					aMoney+=allmoney[i].cakeprice*allmoney[i].num;
				}
				$(".allmoney").html(aMoney);
			})
			
			//利用事件委托来写控制加
			$(".cakes_wrap").on("click",".add",function(event){
				var target = $(event.target);
				var num1=$(this).prev().html();
				num1++;
				$(this).prev().html(num1);
				//加的时候修改cookie值
				var name=$(this).parents(".cakes_item").children().eq(0).children().eq(1).children().eq(0).html();
				for(var i=0;i<data.length;i++){
					if(data[i].name==name){
						data[i].num=num1;
						var arr=JSON.stringify(data);
						$.cookie("shopcar", arr, {path :'/'});
					}
				}
				var price=$(this).parent().prev().children().eq(0).children().eq(0).html();
				var tolprice=num1*price;
				var total=$(this).parent().next().children().eq(0).children().eq(0);
				total.html(tolprice);

				//重新获取cookie 设置总价格
				var allmoney=$.cookie('shopcar');
				allmoney=JSON.parse(allmoney);
				var aMoney=0;
				for(var i=0;i<allmoney.length;i++){
					aMoney+=allmoney[i].cakeprice*allmoney[i].num;
				}
				$(".allmoney").html(aMoney);
				
			})

			//利用事件委托来写删除
			$(".cakes_wrap").on("click",".del",function(event){
				var target = $(event.target);
				var r=confirm("确认删除?");
				if(r==true){
					$(this).parents(".cakes_item").remove();
					var name=$(this).parents(".cakes_item").children().eq(0).children().eq(1).children().eq(0).html();
					for(var i=0;i<data.length;i++){
						if(data[i].name==name){
							//删除
							data.splice(i,1);
							var arr=JSON.stringify(data);
							$.cookie("shopcar", arr, {path :'/'});
						}
					}
				}
				
			})

			//全部清空事件
			$("#alldel").on("click",function(){
				var r=confirm("确认清空全部商品?");
				if(r==true){
					$(".shopcake").remove();
					$(".new").addClass("newac");
					var arr=[];
					
					$.cookie("shopcar", arr, {path :'/'});
				}
			})

			//商品总件数
			var shopcar1=$.cookie('shopcar');
//			console.log($.cookie('shopcar'));
			var data2=JSON.parse(shopcar1);
			var ele=data2.length;
//			console.log(ele);
			$(".allnum").html(ele);
			//获取cookie 设置总价格
			var aMoney=0;
			for(var i=0;i<data.length;i++){
				aMoney+=data[i].cakeprice*data[i].num;
			}
			$(".allmoney").html(aMoney);
//			console.log(aMoney);

		})

	})

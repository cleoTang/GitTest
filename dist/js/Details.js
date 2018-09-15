//首先引入config
require(["config"],function(){
	//再引入依赖的模块
	require(["jquery","header","footer","template","url","fixed","cookie"],function($,header,footer,template,url,fixed){
		header.init();
		footer.init();
		fixed.init();
	
	$(function(){
		var index=1;
		var pageCount=8;
		var allNum;
		var allNum1;
		function page(){
			
			//获取数据库全部产品信息
			$.get(url.url+"/Details.php",{index:index,pageCount:pageCount},function(data1){
			data1=JSON.parse(data1);
//			console.log(data1);
			data=data1.data;
			allNum1=data1.allNum;
			//计算有多少页
			allNum=Math.ceil(allNum1/pageCount);
			var html = template("list",{data: data});
			$("#allitem").html(html);
			//清空按钮的元素
			$("#pagination").html("");
			//拼接分页按钮
			$("#pagination").append('<li class="prev"><<</li><li class="next">>></li>');
			//拼接分页
			for(var i=1;i<=allNum;i++){
				$("<li>"+i+"</li>").insertBefore(".next"); 
			}
			$("#item_module li").on("click",function(){
				//获取当前点击li的data-cn值
				var index=$(this).attr("data-cn");
				$.cookie('id',index,{path:'/'});

			})
		})

	}
		page();
		//点击分类获取数据库数据
		$("#classify li").on("click",function(){
			$("#pagination").html("");
			var classfiy=$(this).children().eq(0).html();
			var type=null;
			if(classfiy=="巧克力"){type="a";}
			if(classfiy=="芝士"){type="b";}
			if(classfiy=="慕斯"){type="c";}
			if(classfiy=="冰激凌"){type="d";}
			if(classfiy=="含酒"){type="e";}
			if(classfiy=="坚果"){type="f";}
			if(classfiy=="奶油"){type="g";}
			if(classfiy=="水果"){type="h";}
			if(classfiy=="咖啡"){type="i";}
			// console.log(type);
			$.get(url.url+"/Details.php",{type:type,index:index,pageCount:pageCount},function(data1){
			data1=JSON.parse(data1);
			data=data1.data;
//			console.log(data);
			var html = template("list",{data: data});
			$("#allitem").html(html);
			$("#item_module li").on("click",function(){
				//获取当前点击li的data-cn值
				var index=$(this).attr("data-cn");
				$.cookie('id',index,{path:'/'});

			})
		})
		})
			
		
		
	  //分页按钮的点击事件  委托事件
		$("#pagination").on("click","li",function(){
			var str=$(this).html();
			if(!isNaN(str)){
				index=str;
			}else if($(this).attr("class")=="prev"){
				index--;
				if(index<1) index=1;
			}else if($(this).attr("class")=="next"){
				index++;
				if(index>allNum)index=allNum;
			}
			page();
		})
	})
	
	
	
	});
})

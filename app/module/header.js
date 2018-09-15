define(function(){
	function Header(){

	}
	Header.prototype.init=function(){
		$("#header").load("/html/component/header.html");
		 //首先引入config
		require(["config"],function(){
			//再引入依赖的模块
			require(["jquery","cookie"],function($,cookie){
//				 console.log($.cookie('shopcar'));
//				console.log(12);
				var shopcar=$.cookie('shopcar');
				var datanum=JSON.parse(shopcar);
				var number=0;
				for(var i=0;i<datanum.length;i++){
					number+=datanum[i].num;

				}
				$("#shop_bag_number").html(number);
//				window.location.reload();
			})
		})
	}

	return new Header();
})


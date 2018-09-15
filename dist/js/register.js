//首先引入config
require(["config"],function(){
	//再引入依赖的模块
	require(["jquery","header","footer","yzm","url","fixed"],function($,header,footer,yzm,url,fixed){
		header.init();
		footer.init();
		yzm.init("#yzm");
		fixed.init();
		// console.log(yzm.init());

		//表单验证
		var arr=[false,false,false,false];

		//提交顾客信息
		$("#btn").on("click",function(){
			var str=arr.every(function(item){
					return item==true;
		 		})
			if(str){
				var usernum=$("input:eq(0)").val();
				var password=$("input:eq(1)").val();
				$.get(url.url+"/register.php",{"usernum":usernum,"password":password},function(data){
					data = JSON.parse(data);
					if(data.code){
						alert("注册成功！");
						window.location.href ="/html/login.html";
					}else{
						alert("注册失败！");
					}
					

				});
			}
		})
		//验证手机号
		$("input:eq(0)").blur(function(){
			var str=$(this).val();
			var reg=/^1{1}\d{10}$/;
			// console.log($(this).next());
			if(reg.test(str)){
					arr[0]=true;
					$(this).next().removeClass("bl");
			}else{
					arr[0]=false;
					$(this).next().addClass("bl");
				}
			
		})
		//验证密码
		$("input:eq(1)").blur(function(){
			var str=$(this).val();
			var reg=/^.{6,}$/;
			// console.log($(this).next());
			if(reg.test(str)){
					arr[1]=true;
					$(this).next().removeClass("bl");
			}else{
					arr[1]=false;
					$(this).next().addClass("bl");
				}
			
		})
		//确认密码
		$("input:eq(2)").blur(function(){
			var str=$(this).val();
			var str1=$("input:eq(1)").val();
			// console.log($(this).next());
			if(str==str1){
					arr[2]=true;
					$(this).next().removeClass("bl");
			}else{
					arr[2]=false;
					$(this).next().addClass("bl");
				}
			
		})

		//验证码验证
		$("input:eq(3)").blur(function(){
			var str=$(this).val();
			var str1=$("#yzm").html();
			// console.log(str1.toLowerCase());
			// console.log($(this).next());
			if(str.toLowerCase()==str1.toLowerCase()){
					arr[3]=true;
					$(this).next().removeClass("bl");
			}else{
					arr[3]=false;
					$(this).next().addClass("bl");
				}
			
		})
	})
})
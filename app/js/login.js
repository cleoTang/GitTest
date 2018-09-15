//首先引入config
require(["config"],function(){
	//再引入依赖的模块
	require(["jquery","header","footer","fixed","yzm","url","cookie"],function($,header,footer,fixed,yzm,url){
		header.init();
		footer.init();
		fixed.init();
		yzm.init("#yzm");

		$("#login_btn").on("click",function(){
			var usernum=$("input:eq(0)").val();
			var password=$("input:eq(1)").val();
			$.get(url.url+"/login.php",{"usernum":usernum,"password":password},function(data){
				
				//验证用户德登录的账户密码
				if(data=="[]"){
					alert("该用户未注册！")
				}else{
					data=JSON.parse(data);
//					console.log(data);
//					console.log(data[0].password);
					if(data[0].password==password){
						// document.cookie="usernum="+usernum;
						$.cookie('usernum',usernum,{path:'/'});

						window.location.href="/index.html";
					}else{
						alert("密码错误");
					}
				}
			})
		})

		//验证手机号
		$("input:eq(0)").blur(function(){
			var str=$(this).val();
			var reg=/^1{1}\d{10}$/;
			// console.log($(this).next());
			if(reg.test(str)){
					
					$(this).next().removeClass("ac");
			}else{
					
					$(this).next().addClass("ac");
				}
			
		})

		//验证密码
		$("input:eq(1)").blur(function(){
			var str=$(this).val();
			var reg=/^.{6,}$/;
			// console.log($(this).next());
			if(reg.test(str)){
					
					$(this).next().removeClass("ac");
			}else{
					
					$(this).next().addClass("ac");
				}
			
		})

		//验证码验证
		$("input:eq(2)").blur(function(){
			var str=$(this).val();
			var str1=$("#yzm").html();
			// console.log(str1.toLowerCase());
			// console.log($(this).next());
			if(str.toLowerCase()==str1.toLowerCase()){
					
					$(this).next().removeClass("ac");
			}else{
					
					$(this).next().addClass("ac");
				}
			
		})

	})
})
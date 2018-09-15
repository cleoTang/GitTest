define(function(){
	function Yzm(){

	}
	Yzm.prototype.init=function(span){
		//生成验证码
		var arr=yzm();
		$(span).html(arr);
		$(span).on("click",function(){
			arr=yzm();
			$(span).html(arr);
		})

		function yzNum(){
			var num=parseInt(Math.random()*10+48);
			//fromCharCode()
			return String.fromCharCode(num);
		}
		
		function yzLower(){
			var lower=parseInt(Math.random()*26+97);
			return String.fromCharCode(lower);
		}
		
		function yzUpper(){
			var upper=parseInt(Math.random()*26+65);
			return String.fromCharCode(upper);
		}
		
		function yz(){
				var num=parseInt(Math.random()*3);
				switch(num){
					case 0:return yzNum();
					case 1:return yzLower();
					case 2:return yzUpper();
				}
			}

		function yzm(){
			var arr=[];
			for(var i=0;i<4;i++){
			     arr.push(yz());
			}
			return arr.join("");
		}
	}
	return new Yzm();
})
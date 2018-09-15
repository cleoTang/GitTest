//模块的依赖
define(function(){
	class Toast{
		constructor(){
		}
		init(ele){
			var _this = this;
			this.ele = ele;
			/*this.ele.onclick = function(){
				_this.pop();
			}*/
			$(this.ele).on("click",function(){
				_this.pop();
			})
		}
		pop(){
			//弹出框功能
			alert(123);
		}
	}
	return new Toast();
})
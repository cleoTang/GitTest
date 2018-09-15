define(function(){
	//console.log($);
	function Tab(){
	}

	Tab.prototype.init = function(ele){
		var _this = this;
		this.btn = ele.btn;
		this.show = ele.show;
		for (var i = 0; i < this.btn.length; i++) {

			this.btn[i].onclick = (function(index){
				return function(){
					_this.change(index);
				}
			})(i)
		}
	}
	Tab.prototype.change = function(index){
		for (var i = 0; i < this.btn.length; i++) {
			this.btn[i].className = "";
			this.show[i].className = "";
		}
		this.btn[index].className = "ac";
		this.show[index].className = "ac";
	}

	return new Tab();
})
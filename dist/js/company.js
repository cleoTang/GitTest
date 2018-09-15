//首先引入config
require(["config"],function(){
	//再引入依赖的模块
	require(["header","footer","fixed"],function(header,footer,fixed){
		header.init();
		footer.init();
		fixed.init();
	})
})
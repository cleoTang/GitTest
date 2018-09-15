require.config({
	baseUrl: "/",
	paths: {
		"jquery": "libs/jquery-1.12.4",
		"tab": "module/tab",
		"toast": "module/toast",
		"template": "libs/template-web",
		"url": "module/url",
		"header":"module/header",
		"footer":"module/footer",
		"banner":"module/banner",
		"fixed":"module/fixed",
		"yzm":"module/yzm",
		"cookie":"libs/jquery.cookie",
		"template":"libs/template-web"
	},
	shim: {
		toast:{
			deps:["jquery"]
		},
		header:{
			deps:["jquery"]
		},
		footer:{
			deps:["jquery"]
		},
		banner:{
			deps:["jquery"]
		},
		fixed:{
			deps:["jquery"]
		},
		yzm:{
			deps:["jquery"]
		},
		cookie:{
			deps:["jquery"]
		}

	}
})
var gulp = require("gulp");
var minifyCss = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var connect = require('gulp-connect');
var concat = require("gulp-concat");
var babel = require('gulp-babel');
var sass = require('gulp-sass');

//默认任务
gulp.task("default", function(){
	console.log("gulp default");
});
//自定义任务
gulp.task("hello", function(){
	//自定义的任务代码
	console.log("hello gulp");
});

gulp.task("html", function(){
	//stream 流  读取
	//"app/**/*.html"  指的是app下面所有子目录的所有html文件
	gulp.src("app/**/*.html")
	.pipe(gulp.dest("dist"))
	.pipe(connect.reload());
});

gulp.task("css", function(){
	//app的css压缩，放到dist里面
	gulp.src("app/css/**/*.css")
	.pipe(minifyCss())
	.pipe(gulp.dest("dist/css"))
	.pipe(connect.reload());

})

gulp.task("js", function(){
	gulp.src(["app/**/*.js","!app/libs/*.js"])
	/*.pipe(babel({
		presets: ['@babel/env']
	}))
	.pipe(uglify())*/
	.pipe(gulp.dest("dist"))
	.pipe(connect.reload());
});

gulp.task("server", function(){
	//开启一个服务
	connect.server({
        livereload: true,
        port: 2333,
        root:"dist"
    });
})

gulp.task("watch", function(){
	//第一个参数指要watch的文件，第二个参数文件内容改变之后分配的任务
	gulp.watch("app/js/**/*.js",["js"]);
	gulp.watch("app/css/**/*.css",["css"]);
	gulp.watch("app/**/*.html",["html"]);
	gulp.watch("app/scss/**/*.scss",["sass"]);
	gulp.watch("app/images/**/*",["images"]);
});

//处理图片，位置迁移
gulp.task("img", function(){
	gulp.src("app/images/**/*")
	.pipe(gulp.dest("dist/images"));
});

//复制移动第三方js
gulp.task("libs", function(){
	gulp.src("app/libs/**/*")
	.pipe(gulp.dest("dist/libs"));
})

gulp.task("sass", function(){
	//吧scss文件编译成css，并且放到dist里面
	gulp.src("app/scss/*.scss")
	.pipe(sass())
	.pipe(gulp.dest("dist/css"))
	.pipe(connect.reload());
})

gulp.task("default",["server","html","js","css","watch","img","sass","libs"]);




// 引入本地安装的gulp
var gulp = require('gulp');

var less = require('gulp-less');

var cssmin = require('gulp-cssmin');

var imagemin = require('gulp-imagemin');

var uglify = require('gulp-uglify');

var concat = require('gulp-concat');

// 返回值gulp是一个对象，借助此对象可以实现任务清单订制
// 通过一系列方法实现

// 定义任务(将less转成css)
gulp.task('less', function () {
	
	// 借助gulp.src来指定less文件位置
	gulp.src('./public/less/*.less')
		// 借助于gulp插件实现less 转 css 的操作
		.pipe(less())
		.pipe(cssmin())
		// 通过gulp.dest进行存储
		.pipe(gulp.dest('./release/public'));

});

// 处理图片(压缩图片)
gulp.task('image', function () {

	gulp.src('./public/images/**/*')
		.pipe(imagemin())
		.pipe(gulp.dest('./release/public/images'));

});

// 压缩JS
gulp.task('js', function () {

	gulp.src('./scripts/*.js')
		.pipe(concat('all.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./release'))

});
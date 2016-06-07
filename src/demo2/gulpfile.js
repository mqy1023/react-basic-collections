var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var react = require('gulp-react');
var htmlreplace = require('gulp-html-replace');

//指定文件输入和输出路径
var path = {
    HTML: 'src/index.html',
    ALL: ['src/js/*.js', 'src/js/**/*.js', 'src/index.html'],
    JS: ['src/js/Child.js', 'src/js/Parent.js', 'src/js/App.js'], //一个个顺序地指定js，因为默认*.js默认按abc..xyz顺序拼接成build.min.js
    MINIFIED_OUT: 'build.min.js',
    DEST_SRC: 'dist/js',
    DEST_BUILD: 'dist/build/',
    DEST: 'dist'
};
//jsx转换成js任务
gulp.task('transform', function(){
    gulp.src(path.JS)
        .pipe(react())
        .pipe(gulp.dest(path.DEST_SRC));
});
//复制index.html文件
gulp.task('copy', function(){
    gulp.src(path.HTML)
        .pipe(gulp.dest(path.DEST));
});
//监视path.ALL下所有文件，一有变动执行transform任务和copy任务
gulp.task('watch', function(){
    gulp.watch(path.ALL, ['transform', 'copy']);
});
//默认任务
gulp.task('default', ['watch','transform', 'copy']);//启动监视并执行transform和copy任务

//***************生产版**********
gulp.task('build', function(){
    gulp.src(path.JS)
        .pipe(react())
        .pipe(concat(path.MINIFIED_OUT))
        .pipe(uglify(path.MINIFIED_OUT))
        .pipe(gulp.dest(path.DEST_BUILD));
});

gulp.task('replaceHTML', ['build'], function(){
    gulp.src(path.HTML)
        .pipe(htmlreplace({
            'js': 'build/' + path.MINIFIED_OUT
        }))
        .pipe(gulp.dest(path.DEST));
});

gulp.task('production', ['replaceHTML']);
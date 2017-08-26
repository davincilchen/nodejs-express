/*
https://gulpjs.com/
npm i gulp-csso jshint gulp-jshint jshint-stylish -D --save-dev
http://jshint.com/docs/options/
*/

var gulp = require('gulp');
var $ = require('gulp-load-plugins')(); //要有括號


/*
gulp.task('default', function () {
    return gulp.src('./main.css')
        .pipe(csso())
        .pipe(gulp.dest('./out'));
});
*/

/*
var csso = require('gulp-csso');
//taks 1
//minify css
gulp.task('css', function () {   //任務名稱css 是自訂 , gulp 任務名稱 , gulp css
    return gulp.src('public/stylesheets/style.css')
        .pipe(csso())
        .pipe(gulp.dest('public/dist/css'));
});
*/




//minify css
gulp.task('css', function () {   //任務名稱css 是自訂 , gulp 任務名稱 , gulp css
    return gulp.src('public/stylesheets/style.css')
        .pipe($.csso())
        .pipe(gulp.dest('public/dist/css'));
});


 

//Lint Javascritp //檢查語法 
gulp.task('lint', function () { //任務名稱lint 是自訂 , gulp 任務名稱 , gulp lint
    return gulp.src('routes/*.js') //檢查此路徑下所有js檔的語法
        .pipe($.jshint())  //load 'gulp-jshint'  載入 , 但如果電腦沒裝jshint套件 會載入失敗
        .pipe($.jshint.reporter('jshint-stylish')); //load 
}); // run   npm i gulp-load-plugins --save-de
// run npm i glup-lint lint  -D --save-dev //不然會找不到 $.jshint
// run   npm i jshint --save-dev
// run   npm i jshint --save-dev
// run   npm i jshint-stylish --save-dev
//run  glup jshint  or glup lint




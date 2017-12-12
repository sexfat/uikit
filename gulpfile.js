var gulp = require('gulp');
var prompt = require("gulp-prompt");
var mamp = require('gulp-mamp');


//樣式 sass style
// var styles = require('./gulp/scripts/style.js');



// 刷新瀏覽器並同步
var browerSync = require('./gulp/task/browerSync.js');
// 選擇 1.html 使用app/html   2.pug 使用app/pug  3. all 使用全部
var selectMoudule = new browerSync('all') // html or pug or all


//打包

var build = require('./gulp/scripts/copy_dist.js');
var build = require('./gulp/scripts/connect-php.js');


//壓縮




//==================
// 執行指令
//==================


// 一般開發
gulp.task('default', ['styles', 'static' , 'libs']);

//server 專案
gulp.task('server', ['styles', 'connect-sync']);

//打包專案
gulp.task('build', ['dist']);
//壓縮專案

//清除檔案

gulp.task('clear', ['clean']);

//test function
// gulp.task('test', ['styles']);








// gulp.task('pugs', ['compilePug']);




//test

//==========================
// 打包進去 dist folder
//==========================

var gulp = require('gulp'),
    gulpHtmlVersion = require('gulp-html-version'); //增加版本號
    cssmin = require('gulp-cssmin');
    // urlAdjuster = require('gulp-css-url-adjusters'); // 更換 css 檔案路徑


var clean = require('./clean.js');




var web = {
    assets: [
        'assets/fonts/*',
        'assets/images/*',
        'assets/js/*'
    ],
    libs: []
};






//先清空資料夾 在放新檔案

gulp.task('dist' , ['clean'] ,function () {

    //html
    return gulp.src('*.html', {
            base: './dest'
        })
        //增加版本好
        .pipe(gulpHtmlVersion({
            paramName: 'version',
            paramType: 'timestamp',
            suffix: ['css', 'js', 'jpg']
        }))
        .pipe(gulp.dest('./dist'))

        //css
        &&
        gulp.src('assets/css/*', {
            base: './dest'
        })
        // .pipe(urlAdjuster({
        //     replace: ['./assets/images/', './assets/images/']
        // }))
        .pipe(cssmin({
            keepSpecialComments: '*'
        }))
        .pipe(gulp.dest('./dist/'))

        // all files
        &&
        gulp.src(web.assets, {
            base: './dest'
        })
        .pipe(gulp.dest('./dist/'))
        //js       
        &&
        gulp.src('assets/js', {
            base: './dest'
        })
        .pipe(gulp.dest('./dist/'))
});
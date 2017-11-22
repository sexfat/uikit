var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    plumber = require('gulp-plumber'),
    reload = browserSync.reload;

//html style
require('../scripts/html_template.js');
require('../scripts/html_pug.js');
require('../scripts/jshint.js');
require('../scripts/style.js');




var web = {
    sass: [
        'dev/sass/*.scss',
        'dev/sass/**/*.scss',
        'dev/sass/**/**/*.scss'
    ],
    css: [
        './dest/assets/css/*.css',
        './dest/assets/css/**/*.css'
    ]
};


// 用 module 的概念傳遞值
module.exports = function (fnc) {

    //broswerSync static
    gulp.task('static', ['styles', 'fileinclude'], function () {
        browserSync.init({
            server: {
                baseDir: "./dest",
                index: "index.html"
            }
        });
        gulp.watch(web.sass, ['styles']).on('change', reload); //watch  sass
        gulp.watch('./dest/*.html').on('change', reload); // 
        if (fnc == 'html') {
            gulp.watch(['./dev/app/html/*.html', './dev/app/html/**/*.html'], ['fileinclude']).on('change', reload); //watch  sass
        } else if (fnc == 'pug') {
            gulp.watch(['./dev/app/pug/*.pug', './dev/app/pug/**/*.pug'], ['compilePug']).on('change', reload); //watch  sass     
        } else if (fnc == 'all') {
            gulp.watch(['./dev/app/pug/*.pug', './dev/app/pug/**/*.pug'], ['compilePug']).on('change', reload); //watch  sass
            gulp.watch(['./dev/app/html/*.html', './dev/app/html/**/*.html'], ['fileinclude']).on('change', reload); //watch  sasss
        }
        // gulp.watch('assets/css/*.css', ['css']).on('change', reload); //watch  autofixser
        gulp.watch('dev/js/*.js', ['lint']).on('change', reload); //watch  js lint
    });
}
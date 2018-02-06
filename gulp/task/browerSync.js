var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    plumber = require('gulp-plumber'),
    // php = require('../scripts/connect-php.js'),   
    reload = browserSync.reload;

// 用 module 的概念傳遞值
module.exports = function (fnc) {


    if (fnc == 'html') {
        require('../scripts/html_template.js');
    }
    else if (fnc == 'pug') {
        require('../scripts/html_pug.js');
    }
    else if (fnc == 'all') {
        require('../scripts/html_template.js');
        require('../scripts/html_pug.js');
    }


    //html style

   
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
        ],
        php: [
            '*.php',
            '**/*.php'            
        ]
    };

    //broswerSync static
    gulp.task('static', ['sass'], function () {
        browserSync.init({
            server: {
                baseDir: "./dest",
                index: 'animation.html'
            }
        });
        gulp.watch(web.sass, ['sass']).on('change', reload); //watch  sass
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











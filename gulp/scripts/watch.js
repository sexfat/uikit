var gulp = require('gulp'),
    watch = require('gulp-watch'),
    reload = browserSync.reload;


var web = {
    sass: [
        'sass/*.scss',
        'sass/**/*.scss',
        'sass/**/**/*.scss'
    ]
};


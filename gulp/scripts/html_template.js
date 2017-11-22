var gulp = require('gulp'),
    fileinclude = require('gulp-file-include');

gulp.task('fileinclude', function () {
    return gulp.src(['dev/app/html/*.html'])
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(gulp.dest('./dest'));
});
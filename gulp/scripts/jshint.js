var gulp = require('gulp'),
    jshint = require('gulp-jshint');


gulp.task('lint', function () {
    return gulp.src('./dev/js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(gulp.dest('./dest/assets/js/'));
});
var gulp = require('gulp'),
    autoprefixer = require('autoprefixer'),
    gulpPlumber = require('gulp-plumber'),
    postcss = require('gulp-postcss');

gulp.task('autoprefixer', function () {
    var plugins = [
        autoprefixer({
            broswer: ['last 1 vrsion']
        })
    ];
    return gulp.src('./dest/assets/css/*.css')
        .pipe(gulpPlumber())
        .pipe(postcss(plugins))
        .pipe(gulp.dest('./dest/assets/css/bundle/'));
});
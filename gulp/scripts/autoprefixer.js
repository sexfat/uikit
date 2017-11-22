var autoprefixer = require('autoprefixer'),
    postcss = require('gulp-postcss');

gulp.task('css', function () {
    var plugins = [
        autoprefixer({
            broswer: ['last 1 vrsion']
        })
    ];
    return gulp.src('./css/*.css')
        .pipe(gulpPlumber())
        .pipe(postcss(plugins))
        .pipe(gulp.dest('./css/autoprefixer'));
});
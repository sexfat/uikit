var  sass = require('gulp-sass');

//  sass
gulp.task('styles', function () {
    return gulp.src(web.sass) //要處理的scss檔案
        //  .pipe(gulpPlumber())
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sass({
            outputStyle: 'expanded' // compact , expanded, nested
        }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./dest/assets/css')) //指定編譯後的路徑
});
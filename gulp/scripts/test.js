//選擇器
gulp.task('test', function () {
    gulp.src('test.js')
        .pipe(prompt.confirm('Are you ready for Gulp?'))
        .pipe(gulp.dest('dest'));

});


gulp.task('test2', function () {
    gulp.src('test.js')
        .pipe(prompt.confirm({
            message: 'continue ok?',
            default: true
        }))
        .pipe(gulp.dest('dest'));

});


gulp.task('test3', function () {
    gulp.src('test.js')
        .pipe(prompt.prompt({
            type: 'input',
            name: 'task',
            message: 'which one task you can run?'
        }, function (res) {
            console.log('輸入:', res.task);
        }));
    // .pipe(gulp.dest('dest'));

});
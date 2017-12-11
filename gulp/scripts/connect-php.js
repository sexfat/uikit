var gulp = require('gulp'),
    connect = require('gulp-connect-php');

gulp.task('php', function () {
    connect.server({
        base: './dest',
        index: "index.php",
        keepalive: true,
        port: 8080,
        open: false
    });
});
// var gulp = require('gulp'),
//     connect = require('gulp-connect-php'),
//     browserSync = require('browser-sync'),
//     reload = browserSync.reload;

// gulp.task('php', function () {
//     connect.server({
//         base: './dest',
//         index: "index.php",
//         keepalive: true,
//         port: 8080,
//         open: false
//     });
// });



// gulp.task('connect-sync', function () {
//     connect.server({
//         port: 8002,
//         base: './dest'
//     }, function () {
//         browserSync({
//             proxy: 'localhost:8002'
//         });
//         gulp.watch("./dest/*.php").on("change", browserSync.reload);
//     });
// });
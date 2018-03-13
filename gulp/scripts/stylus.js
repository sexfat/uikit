var gulp = require('gulp'),
  notify = require('gulp-notify'),
  sourcemaps = require('gulp-sourcemaps'),
  plumber = require('gulp-plumber'),
  stylus = require('gulp-stylus');


gulp.task('one', function () {
  return gulp.src('dev/sty/*.styl')
    .pipe(plumber())
    .pipe(stylus())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dest/assets/css'));
});

gulp.task('stylus_follow', function () {
  //監看所有檔案
  gulp.watch('dev/sty/*.styl', ['one']);
});
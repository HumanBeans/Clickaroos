var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    livereload = require('gulp-livereload'),
    mocha = require('gulp-mocha'),
    nodemon = require('gulp-nodemon');

gulp.task('styles', function() {
  return gulp.src(['client/**/*.scss', 'client/assets/*.scss'])
    .pipe(sass({ style: 'expanded' }))
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
    .pipe(concat('main.css'))
    .pipe(gulp.dest('client/assets/css'))
    .pipe(rename({suffix: '.min'}))
    .pipe(minifycss())
    .pipe(gulp.dest('client/assets/css'))
    .pipe(notify({ message: 'Styles task complete' }));
});

gulp.task('scripts', function() {
  return gulp.src(['client/**/*.js', '!client/**/*.spec.js', '!client/assets/lib/*.js'])
    // .pipe(jshint('.jshintrc'))
    // .pipe(jshint.reporter('default'))
    .pipe(concat('main.js'))
    .pipe(gulp.dest('client/assets/js'))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('client/assets/js'))
    .pipe(notify({ message: 'Scripts task complete' }));
});

gulp.task('default', function() {
  gulp.start('styles', 'scripts');
});

gulp.task('watch', function() {
  gulp.watch(['client/**/*.scss', 'client/assets/*.scss'], ['styles']);
  gulp.watch('client/**/*.js', ['scripts']);

  livereload.listen();
  gulp.watch(['dist/**']).on('change', livereload.changed);
});

gulp.task('mocha', function(){
  return gulp.src('server/**/*.spec.js', {read: false})
    .pipe(mocha({reporter: 'spec'}));
});

gulp.task('watch-mocha', function(){
  gulp.watch(['server/**/*.js'], ['mocha']);
});

gulp.task('server-test', function(){
  gulp.start('mocha', 'watch-mocha');
});

gulp.task('serve', function(){
  nodemon({script: 'server/server.js'});
});

gulp.task('seed', function(){
  require('./server/config/seed');
});

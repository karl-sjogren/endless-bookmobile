/* global require, __dirname */
var gulp = require('gulp'),
    less = require('gulp-less'),
    livereload = require('gulp-livereload'),
    express = require('express'),
    concat = require('gulp-concat'),
    babel = require('gulp-babel'),
    sourcemaps = require('gulp-sourcemaps'),
    uglify = require('gulp-uglify');

function startExpress() {
  var app = express();
  app.use(express.static(__dirname + '/wwwroot'));
  app.listen(4000);
}

gulp.task('default', ['styles', 'scripts', 'vendor-scripts', 'html', 'json', 'images', 'videos'], function() {
  livereload.listen();
  gulp.watch('assets/styles/**/*.less', ['styles']);
  gulp.watch('assets/js/**/*.js', ['scripts']);
  gulp.watch('assets/**/*.html', ['html']);
  gulp.watch('assets/**/*.{jpg,png}', ['images']);

  startExpress();
});

gulp.task('styles', function() {
  gulp.src(['bower_components/normalize-css/normalize.css', 'assets/styles/main.less'])
    .pipe(sourcemaps.init())
    .pipe(less())
    .pipe(concat('main.css'))
    .pipe(gulp.dest('wwwroot'))
    .pipe(sourcemaps.write('.'))
    .pipe(livereload());
});

gulp.task('vendor-scripts', function () {
  return gulp.src([
      'bower_components/almond/almond.js'
    ])
    .pipe(sourcemaps.init())
    .pipe(concat('vendor.js'))
    .pipe(uglify())
    .pipe(gulp.dest('wwwroot'))
    .pipe(sourcemaps.write('.'))
    .pipe(livereload());
});

gulp.task('scripts', function () {
  return gulp.src('assets/js/**/*.js')
    .pipe(sourcemaps.init())
    .pipe(babel({
      modules: 'amd',
      moduleIds: true
    })).on('error', function(e) {
      console.error('>>> ERROR', e);
      this.emit('end');
    })
    .pipe(concat('app.js'))
    .pipe(uglify())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('wwwroot'))
    .pipe(livereload());
});

gulp.task('html', function () {
  return gulp.src('assets/**/*.html')
    .pipe(gulp.dest('wwwroot'))
    .pipe(livereload());
});

gulp.task('json', function () {
  return gulp.src('assets/**/*.json')
    .pipe(gulp.dest('wwwroot'))
    .pipe(livereload());
});

gulp.task('images', function () {
  return gulp.src('assets/**/*.{jpg,png}')
    .pipe(gulp.dest('wwwroot/'))
    .pipe(livereload());
});

gulp.task('videos', function () {
  return gulp.src('assets/video/*.*')
    .pipe(gulp.dest('wwwroot/video'))
    .pipe(livereload());
});

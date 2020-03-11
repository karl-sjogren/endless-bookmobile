/* global require, __dirname */
const { src, dest, series, parallel, watch } = require('gulp');
const babel = require('gulp-babel');
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const livereload = require('gulp-livereload');
const express = require('express');

const less = require('./tasks/less-task');
console.log(less);

function startExpress() {
  var app = express();
  app.use(express.static(__dirname + '/wwwroot'));
  app.listen(4000);
}

exports.default = 
  series(
    parallel(stylesTask, scriptsTask, vendorScriptsTask, htmlTask, jsonTask, imagesTask, videosTask),
    watchTask
  );

function watchTask(cb) {
  watch('assets/styles/**/*.less', stylesTask);
  watch('assets/js/**/*.js', scriptsTask);
  watch('assets/**/*.html', htmlTask);
  watch('assets/**/*.{jpg,png}', imagesTask);

  startExpress();
  livereload.listen();
}

function stylesTask() {
  return src(['node_modules/normalize-css/normalize.css', 'assets/styles/main.less'])
    .pipe(sourcemaps.init())
    .pipe(less())
    .pipe(concat('main.css'))
    .pipe(dest('wwwroot'))
    .pipe(sourcemaps.write('.'))
    .pipe(livereload());
}

function vendorScriptsTask() {
  return src(['node_modules/almond/almond.js'])
    .pipe(sourcemaps.init())
    .pipe(concat('vendor.js'))
    .pipe(uglify())
    .pipe(dest('wwwroot'))
    .pipe(sourcemaps.write('.'))
    .pipe(livereload());
}

function scriptsTask() {
  return src('assets/js/**/*.js')
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
    .pipe(dest('wwwroot'))
    .pipe(livereload());
}

function htmlTask() {
  return src('assets/**/*.html')
    .pipe(dest('wwwroot'))
    .pipe(livereload());
}

function jsonTask() {
  return src('assets/**/*.json')
    .pipe(dest('wwwroot'))
    //pipe(livereload());
}

function imagesTask() {
  return src('assets/**/*.{jpg,png}')
    .pipe(dest('wwwroot/'))
    .pipe(livereload());
}

function videosTask() {
  return src('assets/video/*.*')
    .pipe(dest('wwwroot/video'))
    .pipe(livereload());
}

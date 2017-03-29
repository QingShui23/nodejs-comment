
/**
 * Gulp
*/ 
var gulp = require('gulp'),
del      = require('del'),
gulpif   = require('gulp-if'),
rev      = require('gulp-rev'),
notify   = require('gulp-notify'),
uglify   = require('gulp-uglify'),
plumber  = require('gulp-plumber'),
cleanCss = require('gulp-clean-css'),
revcollector = require('gulp-rev-collector'),
autoprefixer = require('gulp-autoprefixer'),
browserify = require("browserify"),
source = require("vinyl-source-stream");


/**
 * 模块加载
*/ 
gulp.task("module", () => {
  return browserify("src/js/entry.js")
    .transform("babelify")
    .bundle()
    .pipe(source("bundle.js"))
    .pipe(gulp.dest("dist/"));
});


gulp.task('default', function(){
  gulp.start('module');
});

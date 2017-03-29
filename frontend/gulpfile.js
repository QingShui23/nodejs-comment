
/**
 * Gulp
*/ 
const gulp = require('gulp'),
fs         = require("fs"),
del        = require('del'),
gulpif     = require('gulp-if'),
rev        = require('gulp-rev'),
notify     = require('gulp-notify'),
uglify     = require('gulp-uglify'),
plumber    = require('gulp-plumber'),
cleanCss   = require('gulp-clean-css'),
revcollector = require('gulp-rev-collector'),
autoprefixer = require('gulp-autoprefixer'),
browserify = require('browserify'),
source = require('vinyl-source-stream');


/**
 * 模块加载
*/ 
gulp.task('module', () => {
  return browserify('src/js/entry.js')
    .transform('babelify', {presets: ['es2015']})
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('src/js/'));
});

/**
 * 压缩 CSS
*/ 
gulp.task('css', function() {
  return gulp.src('src/**/*.css')
    .pipe(plumber())
    .pipe(rev())
    .pipe(gulp.dest('src-dist/'))
    .pipe(rev.manifest('cssmanifest.json'))
    .pipe(gulp.dest('dist/'));
});

/**
 * 压缩 JS
*/ 
gulp.task('js', function() {
  return gulp.src('src/**/*.js')
    .pipe(plumber())
    .pipe(rev())
    .pipe(gulp.dest('src-dist/'))
    .pipe(rev.manifest('jsmanifest.json'))
    .pipe(gulp.dest('dist/'));
});


/**
 * 压缩 添加版本戳
*/ 
gulp.task('jsp', function() {
  return gulp.src(['dist/cssmanifest.json', 'dist/jsmanifest.json', 'src/**/*.jsp', 'src/**/*.html'])
    .pipe(revcollector({replaceReved: true}))
    .pipe(gulp.dest('src-dist/'));
});

/**
 * 清除过期文件
*/
gulp.task('del', function(){
  return del(['dist/**/*', 'src-dist/**/*']);
});


/**
 * 搬运所有的文件
*/
gulp.task('copy', ['del'], function(){
  return gulp.src(['src/**/*', '!src/**/*.css', '!src/**/*.js', '!src/**/*.jsp', '!src/**/*.html'])
    .pipe(gulp.dest('src-dist/'));
});


/**
 * 默认任务
*/
gulp.task('default', ['copy', 'css', 'js'], function(){
  gulp.start('jsp');
});

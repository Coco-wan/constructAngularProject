/**
 *  Welcome to your gulpfile!
 *  The gulp tasks are split into several files in the gulp directory
 *  because putting it all here was too long
 */

'use strict';

var gulp = require('gulp');
var stylus = require('gulp-stylus');
var wrench = require('wrench');


//// stylus
//gulp.task('stylus', function () {
//  gulp.src('./static/stylus/screen.styl')
//    .pipe(stylus({error: true, use: [nib()]}))
//    .pipe(minifyCSS())
//    .pipe(gulp.dest('./static/css/'));
//});

//var sourcemaps = require('gulp-sourcemaps');
//
//// Get one .styl file and render
//gulp.task('one', function () {
//  return gulp.src('./css/one.styl')
//    .pipe(stylus())
//    .pipe(gulp.dest('./css/build'));
//});
//
//// Options
//// Options compress
//gulp.task('compress', function () {
//  return gulp.src('./css/compressed.styl')
//    .pipe(stylus({
//      compress: true
//    }))
//    .pipe(gulp.dest('./css/build'));
//});
//
//
//// Set linenos
//gulp.task('linenos', function () {
//  return gulp.src('./css/linenos.styl')
//    .pipe(stylus({linenos: true}))
//    .pipe(gulp.dest('./css/build'));
//});
//
//// Include css
//// Stylus has an awkward and perplexing 'include css' option
//gulp.task('include-css', function() {
//  return gulp.src('./css/*.styl')
//    .pipe(stylus({
//      'include css': true
//    }))
//    .pipe(gulp.dest('./'));
//
//});
//
//// Inline sourcemaps
//gulp.task('sourcemaps-inline', function () {
//  return gulp.src('./css/sourcemaps-inline.styl')
//    .pipe(sourcemaps.init())
//    .pipe(stylus())
//    .pipe(sourcemaps.write())
//    .pipe(gulp.dest('./css/build'));
//});
//
//// External sourcemaps
//gulp.task('sourcemaps-external', function () {
//  return gulp.src('./css/sourcemaps-external.styl')
//    .pipe(sourcemaps.init())
//    .pipe(stylus())
//    .pipe(sourcemaps.write('.'))
//    .pipe(gulp.dest('./css/build'));
//});
//
//// Pass an object in raw form to be accessable in stylus
//var data = {red: '#ff0000'};
//gulp.task('pass-object', function () {
//  gulp.src('./sty/main.styl')
//    .pipe(stylus({ rawDefine: { data: data }}))
//    .pipe(gulp.dest('./css/build'));
//});





/**
 *  This will load all js or coffee files in the gulp directory
 *  in order to load all gulp tasks
 */
wrench.readdirSyncRecursive('./gulp').filter(function(file) {
  return (/\.(js|coffee)$/i).test(file);
}).map(function(file) {
  require('./gulp/' + file);
});


/**
 *  Default task clean temporaries directories and launch the
 *  main optimization build task
 */
gulp.task('default', ['clean'], function () {
  gulp.start('build');
});

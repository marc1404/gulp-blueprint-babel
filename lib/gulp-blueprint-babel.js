var browserify = require('browserify');
var babelify = require('babelify');
var plumber = require('gulp-plumber');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var sourcemaps = require('gulp-sourcemaps');
var ngAnnotate = require('gulp-ng-annotate');
var uglify = require('gulp-uglify');

module.exports = init;

function init(options){
  options = defaultOptions(options);

  registerTask(options);
}

function defaultOptions(options){
  options = options || {};
  options.gulp = options.gulp || require('gulp');
  options.task = options.task || 'js';
  options.dependencies = options.dependencies || ['clean'];
  options.input = options.input || 'app.js';
  options.browserify = options.browserify || { debug: true, baseDir: 'app/client' };
  options.output = options.output || 'app.min.js';
  options.dest = options.dest || 'public';

  return options;
}

function registerTask(options){
  var gulp = options.gulp;

  gulp.task(options.task, options.dependencies, function(){
    return browserify(options.entry, options.browserify)
      .transform(babelify)
      .bundle().on('error', function(err){
        console.error(err.message);
      })
      .pipe(plumber())
      .pipe(source(options.output))
      .pipe(buffer())
      .pipe(sourcemaps.init({ loadMaps: true }))
      .pipe(ngAnnotate())
      .pipe(uglify())
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest(options.dest));
  });
}
require('should');

var gulp = require('gulp');
var babel = require('../lib/gulp-blueprint-babel');
var sinon = require('sinon');
var clean = sinon.spy();

gulp.task('clean', clean);
babel();

describe('when running the js task', function(){

  it('should complete without an error', function(){
    gulp.start('js');
  });

  it('should have called clean() exactly once', function(){
    clean.calledOnce.should.be.exactly(true);
  });

});
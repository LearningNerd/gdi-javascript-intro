// Include gulp
var gulp = require('gulp');
// Include plugins
var concat = require('gulp-concat');
var fileinclude = require('gulp-file-include');

 // Concatenate slides into one file for RevealJS slideshow
gulp.task('slides', function() {
    return gulp.src('slides/*.html')
      .pipe(concat('index.html', {newLine: ''}))
	  .pipe(fileinclude({
        prefix: '@@',
        basepath: './'
      }))
      .pipe(gulp.dest('./'));
});

// Watch slides
gulp.task('watch', function() {
	gulp.watch('slides/*.html', ['slides']);
});

 // Default Task
gulp.task('default', ['slides', 'watch']);

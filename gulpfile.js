var gulp = require('gulp'),
watch = require('gulp-watch'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
postcssImport = require('postcss-import');

gulp.task('default', function() {
  console.log("Yes!");
});

gulp.task('html', function() {
  console.log('HTML watch activated.');
});

gulp.task('styles', function() {
  gulp.src('./app/assets/styles/styles.css')
    .pipe(postcss([postcssImport, cssvars, nested, autoprefixer]))
    .pipe(gulp.dest('./app/temp/styles'));
});

gulp.task('watch', function() {
  watch('./app/index.html', function() {
    gulp.start('html');
  });

  watch('./app/assets/styles/**/*.css', function() {
    gulp.start('styles');
  });
});

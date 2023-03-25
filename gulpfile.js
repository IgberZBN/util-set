const gulp = require('gulp');
const uglify = require('gulp-uglify');
const plumber = require('gulp-plumber');
const sass = require('gulp-sass')(require('sass'));
const rename = require('gulp-rename');
sass.compiler = require('node-sass');

gulp.task('default', watchFunction);

function watchFunction() {
  gulp.watch('./src/js/*.js', minifierJs);
  gulp.watch('./src/sass/*.sass', minifierSass);
  gulp.watch('./src/sass/*.sass', compileSass);
}

function minifierJs() {
  return gulp
    .src('./src/js/*.js')
    .pipe(plumber())
    .pipe(uglify())
    .pipe(rename({ suffix: '-min' }))
    .pipe(gulp.dest('./assets/js'));
}

function minifierSass() {
  return gulp
    .src('./src/sass/*.sass')
    .pipe(
      sass({
        outputStyle: 'compressed',
      }).on('error', sass.logError)
    )
    .pipe(rename({ suffix: '-min' }))
    .pipe(gulp.dest('./assets/css'));
}

function compileSass() {
  return gulp
    .src('./src/sass/*.sass')
    .pipe(
      sass({
        outputStyle: 'expanded',
      }).on('error'),
      sass.logError
    )
    .pipe(gulp.dest('./src/css'));
}

const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const browserSync = require('browser-sync').create();
const autoprefixer = require('gulp-autoprefixer');
const purify = require('gulp-purifycss');


gulp.task('hello',()=>{
  console.log('hello vinh');
})

gulp.task('sass',()=>{
  return gulp.src('app/scss/*.scss')
             .pipe(sourcemaps.init({largeFile: true}))
             .pipe(sass().on('error',sass.logError))
             .pipe(sourcemaps.write())
             .pipe(gulp.dest('app/css'))
             .pipe(browserSync.stream());

});


/* gulp.task('watch',()=>{
  gulp.watch('app/scss/*.scss',gulp.series('sass'));
}); */

gulp.task('browserSync',()=>{
  browserSync.init({
    server: {
      baseDir: 'app',
    }
  })
});

gulp.task('serve', ()=>{
  browserSync.init({
    server: 'app',
    notify: false,
  });
  gulp.watch('app/scss/*.scss',gulp.series('sass'));
  gulp.watch("app/*.html").on('change', browserSync.reload);
});

gulp.task('default', () =>
    gulp.src('app/css/*.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('dist'))
);


gulp.task('purify', function() {
  return gulp.src('app/css/main.css')
    .pipe(purify(['app/**/*.js', 'app/**/*.html']))
    .pipe(gulp.dest('./dist/'));
});

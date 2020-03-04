var gulp = require('gulp');
var livereload = require('gulp-livereload')
var uglify = require('gulp-uglifyjs');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');




gulp.task('imagemin', function () {
    return gulp.src('./themes/custom/coursity/src/images/*')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest('./themes/custom/coursity/dist/images/'));
});


gulp.task('sass', function () {
  gulp.src(['./themes/custom/coursity/src/css/lib/**/*.css','./themes/custom/coursity/src/css/sass/**/*.scss'])
    .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 7', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./themes/custom/coursity/dist/css'));
});


gulp.task('uglify', function() {
  gulp.src('./themes/custom/coursity/src/js/**/*.js')
    .pipe(uglify('main.min.js'))
    .pipe(gulp.dest('./themes/custom/coursity/dist/js'))
});

gulp.task('watch', function(){
    livereload.listen();

    gulp.watch(['./themes/custom/coursity/src/css/lib/**/*.css','./themes/custom/coursity/src/css/sass/*.scss'], ['sass']);
    gulp.watch('./themes/custom/coursity/src/js/**/*.js', ['uglify']);
    gulp.watch('./themes/custom/coursity/src/images/*', ['imagemin']);
    gulp.watch(['./themes/custom/coursity/style.css', './themes/custom/coursity/**/*.twig', './themes/custom/coursity/js/*.js'], function (files){
        livereload.changed(files)
    });
});

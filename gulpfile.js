var gulp = require('gulp');
var connect = require('gulp-connect');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
gulp.task('connect',function(){
    connect.server({
        "root":'./',
        "port":'3000',
        "livereload":true
    })
});
gulp.task('ys',function(){
    gulp.src(['js/a.js','js/b.js'])
        .pipe(concat('addJs.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist'))
})
gulp.task("default",['connect','ys']);

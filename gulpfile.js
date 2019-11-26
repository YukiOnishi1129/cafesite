const gulp = require("gulp");

gulp.task('sass', () => {
    const sass = require('gulp-sass');
    return gulp
        .src('scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('css'))
});
import gulp from 'gulp';
import gutil from 'gulp-util';
import sass from 'gulp-sass';
import postcss from 'gulp-postcss';
import concat from 'gulp-concat';
import uglify from 'gulp-uglify';
import cleanCSS from 'gulp-clean-css';
import sourceMaps from 'gulp-sourcemaps';
import rename from 'gulp-rename';
import autoprefixer from 'gulp-autoprefixer';
import babelify from 'babelify';
import babel from 'gulp-babel';

gulp.task('sass', () => {
	return gulp.src('src/**/*.scss')
		.pipe(sass())
		.pipe(concat('styles.css'))
        // .pipe(postcss([ autoprefixer() ]))
		.pipe(autoprefixer())
		// .pipe(gulp.dest('lib'))
		.pipe(sourceMaps.init())
		.pipe(cleanCSS({
			level: 2,
			compatibility: 'ie8', 
		}))
	    .on('error', err => gutil.log(gutil.colors.red('[Error]'), err.toString()))
		.pipe(sourceMaps.write())
		.pipe(rename('styles.min.css'))
		.pipe(gulp.dest('lib'));
});

gulp.task('js', () => {
	return gulp.src('src/**/*.js')
		.pipe(concat('scripts.js'))
		.pipe(babel())
		.pipe(sourceMaps.init())
		.pipe(uglify())
	    .on('error', err => gutil.log(gutil.colors.red('[Error]'), err.toString()))
		.pipe(sourceMaps.write())
		.pipe(rename('scripts.min.js'))
		.pipe(gulp.dest('lib'));
});

gulp.task('default', ['sass', 'js'], () => {
	return gulp.watch('src/**/*.scss', ['sass', 'js']);
});

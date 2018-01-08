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
import del from 'del';
import browserify from 'browserify';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';

gulp.task('clean', () => del.sync('lib'));

gulp.task('sass', () => {
	return gulp.src('src/**/*.scss')
		.pipe(sass())
		.pipe(concat('styles.css'))
		.pipe(autoprefixer())
		.pipe(sourceMaps.init())
		.pipe(cleanCSS({
			level: 2,
			compatibility: 'ie8', 
		}))
		.pipe(sourceMaps.write())
		.pipe(rename('styles.min.css'))
		.pipe(gulp.dest('lib'))
		.on('error', err => gutil.log(gutil.colors.red('[Error]'), err.toString()));
});

gulp.task('js', () => {
	browserify({
		entries: 'src/js/app.js',
		debug: true
	})
    .transform(babelify.configure({ presets: ['es2015'] }))
	.bundle()
	.pipe(source('scripts.min.js'))
	.pipe(buffer())
	.pipe(sourceMaps.init())
	.pipe(uglify())
	.pipe(sourceMaps.write())
	.pipe(gulp.dest('./lib'))
	.on('error', err => gutil.log(gutil.colors.red('[Error]'), err.toString()));
});

gulp.task('default', ['clean', 'sass', 'js'], () => {
	return gulp.watch('src/**/*.scss', ['sass', 'js']);
});

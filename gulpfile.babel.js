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
import notify from 'gulp-notify';
import eslint from 'gulp-eslint';
import babelify from 'babelify';
import babel from 'gulp-babel';
import del from 'del';
import browserify from 'browserify';
import browserSync from 'browser-sync';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';

const sync = browserSync.create();
const reload = sync.reload;

gulp.task('clean', () => del.sync('lib'));

gulp.task('eslint', done => {
	gulp.src('src/**/*.js')
		.pipe(eslint())
		.pipe(eslint.format())
		.pipe(eslint.failOnError())
	console.log('Everything good!')
	done();
});

gulp.task('sass', done => {
	gulp.src('src/**/*.scss')
		.pipe(sass())
		.pipe(sourceMaps.init())
		.pipe(concat('styles.css'))
		.pipe(autoprefixer())
		.pipe(cleanCSS({
			level: 2,
			compatibility: 'ie8', 
		}))
		.pipe(sourceMaps.write())
		.pipe(rename('styles.min.css'))
		.pipe(gulp.dest('lib'))
		.on('error', err => gutil.log(gutil.colors.red('[Error]'), err.toString()));
	done();
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
	.pipe(gutil.env.type === 'production' ? uglify() : gutil.noop()) 
	.pipe(sourceMaps.write())
	.pipe(gulp.dest('./lib'))
	.on('error', err => gutil.log(gutil.colors.red('[Error]'), err.toString()));
});

gulp.task('serve', () => {
	sync.init({
		server: {
			baseDir: './'
		}
	});
});

gulp.task('watch', ['serve'], () => {
	gulp.watch('./src/**/*.js', ['eslint', 'js'])
		.on('change', reload);
	gulp.watch('./src/**/*.scss', ['sass'])
		.on('change', reload);
	gulp.watch('**.html')
		.on('change', reload);
});

gulp.task('default', ['eslint', 'clean', 'sass', 'js', 'watch']);


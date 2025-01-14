import {
	src,
	dest,
} from 'gulp';
import sass from 'gulp-sass';
import concat from "gulp-concat";
import wait from "gulp-wait";
import Fiber from "fibers";
import postcss from 'gulp-postcss';
import cleanCSS from 'gulp-clean-css';
import autoprefixer from 'autoprefixer';
import sourcemap from 'gulp-sourcemaps';
import cssSort from 'css-declaration-sorter';

const cssTask = () => {
	return src([
			'src/sass/_abstracts/**.sass',
			'src/sass/_globals/**.sass',
			'src/sass/pages/**/**.sass'
		])
		.pipe(concat("main.min.sass"))
		.pipe(sourcemap.init())
		.pipe(sass({
			sync: true,
			fiber: Fiber,
		}).on('error', sass.logError))
		.pipe(postcss([
			autoprefixer({
				cascade: false,
			}),
			cssSort({
				order: 'concentric-css',
			}),
		]))
		.pipe(cleanCSS({
			compatibility: 'ie9'
		}))
		.pipe(sourcemap.write('.'))
		.pipe(dest('_dist/css'))
};

module.exports = {
	cssTask
};
import {
	src,
	dest
} from "gulp";
import plumber from "gulp-plumber";
import uglifyBabel from "gulp-terser";
import babel from "gulp-babel";
import rename from "gulp-rename";
import sourcemap from "gulp-sourcemaps";

const jsFullPageTask = () => {
	return src(["src/js/fullpage.js"])
		.pipe(sourcemap.init())
		.pipe(plumber())
		.pipe(babel({
			presets: ["@babel/preset-env"]
		}))
		.pipe(uglifyBabel())
		.pipe(rename("fullpage.min.js"))
		.pipe(sourcemap.write("."))
		.pipe(dest("_dist/js"))
}

module.exports = {
	jsFullPageTask
};
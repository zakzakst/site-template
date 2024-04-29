/**
 * モジュール読み込み
 */
import gulp from "gulp";
const { src, dest } = gulp;
import plumber from "gulp-plumber";
import sassGlob from "gulp-sass-glob-use-forward";
import gulpSass from "gulp-sass";
import * as sassCompiler from "sass";
const sass = gulpSass(sassCompiler);
import postcss from "gulp-postcss";
import autoprefixer from "autoprefixer";
import stylelint from "stylelint";

/**
 * 変数設定
 */
const files = "./src/sass/style.scss";
const dist = "./dist/assets/css";
const sassConf = {
  outputStyle: "compressed",
};
const postcssPlugin = [
  autoprefixer(),
  stylelint({
    fix: true,
  }),
];

/**
 * 関数
 */
const SASS_BUILD = () => {
  return src(files)
    .pipe(plumber())
    .pipe(sassGlob())
    .pipe(sass(sassConf))
    .pipe(postcss(postcssPlugin))
    .pipe(dest(dist));
};

export { SASS_BUILD };

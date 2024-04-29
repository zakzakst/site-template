/**
 * モジュール読み込み
 */
import gulp from "gulp";
const { src, dest } = gulp;
import plumber from "gulp-plumber";
import nunjucksRender from "gulp-nunjucks-render";
import htmlhint from "gulp-htmlhint";
import htmlbeautify from "gulp-html-beautify";
import minifyInline from "gulp-minify-inline";
import minifyInlineJSON from "gulp-minify-inline-json";
import gulpIf from "gulp-if";
import htmlmin from "gulp-htmlmin";
import rename from "gulp-rename";

/**
 * 変数設定
 */
const files = ["src/nunjucks/pages/**/*.njk", "!src/nunjucks/pages/**/_*.njk"];
const dist = "./dist";
const root = "src/nunjucks/";
const minifyHtml = false;
const htmlbeautifyConf = {
  indent_size: 2,
  preserve_newlines: false,
};
const htmlminConf = {
  collapseWhitespace: true,
  removeComments: true,
};
import CONSTANTS from "../src/nunjucks/constants.js";

/**
 * 関数
 */
const NUNJUCKS_BUILD = () => {
  return src(files)
    .pipe(plumber())
    .pipe(
      nunjucksRender({
        path: [root],
        data: CONSTANTS,
      })
    )
    .pipe(htmlhint(".htmlhintrc"))
    .pipe(htmlhint.reporter())
    .pipe(htmlbeautify(htmlbeautifyConf))
    .pipe(minifyInline())
    .pipe(minifyInlineJSON())
    .pipe(gulpIf(minifyHtml, htmlmin(htmlminConf)))
    .pipe(rename({ extname: ".html" }))
    .pipe(dest(dist));
};

export { NUNJUCKS_BUILD };

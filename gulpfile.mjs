/**
 * モジュール読み込み
 */
import gulp from "gulp";
const { task, watch, series } = gulp;

/**
 * タスクモジュール読み込み
 */
import { NUNJUCKS_BUILD } from "./tasks/nunjucks-build.mjs";
import { SASS_BUILD } from "./tasks/sass-build.mjs";
import { WEBPACK } from "./tasks/webpack.mjs";
import { IMAGE_MIN } from "./tasks/image-min.mjs";
import { BROWSER_START, BROWSER_RELOAD } from "./tasks/browser-sync.mjs";

/**
 * タスク定義
 */
task("watchFiles", (done) => {
  watch("./src/nunjucks/**/*.njk", series(NUNJUCKS_BUILD, BROWSER_RELOAD));
  watch("./src/sass/**/*.scss", series(SASS_BUILD, BROWSER_RELOAD));
  watch("./src/js/**/*.js", series(WEBPACK, BROWSER_RELOAD));
  done();
});
task("default", series(BROWSER_START, "watchFiles"));
task("build", series(NUNJUCKS_BUILD, SASS_BUILD, WEBPACK));
task("nunjucksBuild", series(NUNJUCKS_BUILD));
task("sassBuild", series(SASS_BUILD));
task("webpack", series(WEBPACK));
task("imageMin", series(IMAGE_MIN));

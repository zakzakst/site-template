/**
 * モジュール読み込み
 */
import browsersync from "browser-sync";

const browsersyncCreated = browsersync.create();

/**
 * 変数設定
 */
const browsersyncConf = {
  server: {
    baseDir: "./dist",
  },
};

/**
 * 関数
 */
const BROWSER_START = (done) => {
  browsersyncCreated.init(browsersyncConf);
  done();
};

const BROWSER_RELOAD = (done) => {
  browsersyncCreated.reload();
  done();
};

export { BROWSER_START, BROWSER_RELOAD };

/**
 * モジュール読み込み
 */
import gulp from 'gulp'
const { dest } = gulp
import webpackStream from 'webpack-stream'
import webpack from 'webpack'

/**
 * 変数設定
 */
const dist = './dist/assets/js'
import webpackConf from '../webpack.config.mjs'

/**
 * 関数
 */
const WEBPACK = () => {
  return webpackStream(webpackConf, webpack).pipe(dest(dist))
}

export { WEBPACK }

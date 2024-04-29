/**
 * モジュール読み込み
 */
import gulp from 'gulp'
const { src, dest } = gulp
import imagemin, { svgo, gifsicle } from 'gulp-imagemin'
import mozjpeg from 'imagemin-mozjpeg'
import pngquant from 'imagemin-pngquant'
import changed from 'gulp-changed'

/**
 * 変数設定
 */
const files = './src/img/**/*.{jpg,jpeg,png,gif,svg}'
const dist = './dist/assets/img'
const imageminPlugin = [
  mozjpeg({
    quality: 80,
  }),
  pngquant({
    quality: [0.65, 0.8],
    speed: 1,
  }),
  svgo(),
  gifsicle(),
]

/**
 * 関数
 */
const IMAGE_MIN = () => {
  return src(files)
    .pipe(changed(dist))
    .pipe(imagemin(imageminPlugin))
    .pipe(dest(dist))
}

export { IMAGE_MIN }

const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const rename = require('gulp-rename');

function compileSass() {
    return gulp
        .src('src/styles/global.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss([autoprefixer(), cssnano()]))
        .pipe(rename('main.min.css'))
        .pipe(gulp.dest('public/styles')); // Caminho para a pasta de destino do CSS compilado
}

function watchSass() {
    gulp.watch('src/**/*.scss', compileSass);
}

exports.default = gulp.series(compileSass, watchSass);
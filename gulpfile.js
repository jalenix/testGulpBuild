// Подключение модулей
const gulp = require('gulp')
const less = require('gulp-less')
const rename = require('gulp-rename')
const cleanCss = require('gulp-clean-css')
const babel = require('gulp-babel')
const uglify = require('gulp-uglify')
const concat = require('gulp-concat')
const del = require('del')

// Пути к файлам
const paths = {
    styles: {
        src: 'src/style/**/*.less',
        dest: 'dist/css/'
    },
    scripts: {
        src: 'src/script/**/*.js',
        dest: 'dist/js/'
    }
}

// Очистка каталога
function clean() {
    return del(['dist'])
}

// Функция обработки стилей
function styles() {
    return gulp.src(paths.styles.src)
        .pipe(less())
        .pipe(cleanCss())
        .pipe(rename({
            basename: 'main',
            suffix: '.min'
        }))
        .pipe(gulp.dest(paths.styles.dest))
}

// Функция обработки скриптов
function scripts() {
    return gulp.src(paths.scripts.src, {
        sourcemaps: true
    })
    .pipe(babel())
    .pipe(uglify())
    .pipe(concat('main.min.js'))
    .pipe(gulp.dest(paths.scripts.dest))
}

function watch() {
    gulp.watch(paths.styles.src, styles)
    gulp.watch(paths.scripts.src, scripts) 
}

const build = gulp.series(clean, gulp.parallel(styles, scripts), watch)

exports.clean = clean
exports.styles = styles
exports.scrpits = scripts
exports.watch = watch
exports.build = build
exports.default = build
// node.js Packages / Dependencies
const gulp          = require('gulp');
const sass          = require('gulp-sass');
const uglify        = require('gulp-uglify');
const rename        = require('gulp-rename');
const concat        = require('gulp-concat');
const cleanCSS      = require('gulp-clean-css');
const imageMin      = require('gulp-imagemin');
const pngQuint      = require('imagemin-pngquant'); 
const browserSync   = require('browser-sync').create();
const autoprefixer  = require('gulp-autoprefixer');
const jpgRecompress = require('imagemin-jpeg-recompress'); 
const clean         = require('gulp-clean');

// Import configuration
const config = require('./config/gulp/config');

// Compile SCSS
gulp.task('sass', () => {
    return gulp.src(config.paths.src.scss)
        .pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(gulp.dest(config.paths.dist.css))
        .pipe(browserSync.stream());
});

// Minify + Combine CSS
gulp.task('css', () => {
    return gulp.src(config.paths.dist.css + '/*.css')
        .pipe(cleanCSS({ compatibility: 'ie8' }))
        .pipe(concat(config.output.cssName))
        .pipe(gulp.dest(config.paths.dist.css));
});

// Minify + Combine JS
gulp.task('js', () => {
    return gulp.src(config.paths.src.js)
        .pipe(uglify())
        .pipe(concat(config.output.jsName))
        .pipe(gulp.dest(config.paths.dist.js))
        .pipe(browserSync.stream());
});

// Optimize Images
gulp.task('img', () => {
    return gulp.src(config.paths.src.imgs)
        .pipe(imageMin([
            imageMin.gifsicle(),
            imageMin.jpegtran(),
            imageMin.optipng(),
            imageMin.svgo(),
            pngQuint(),
            jpgRecompress()
        ]))
        .pipe(gulp.dest(config.paths.dist.imgs));
});

// Copy vendors
gulp.task('vendors', () => {
    return gulp.src(config.paths.src.vendors)
        .pipe(gulp.dest(config.paths.dist.vendors));
});

// Clean dist
gulp.task('clean', () => {
    return gulp.src(config.paths.dist.root)
        .pipe(clean());
});

// Build task
gulp.task('build', gulp.series('clean', 'sass', 'css', 'js', 'vendors', 'img'));

// Development task with watch
gulp.task('dev', gulp.series('build', () => {
    browserSync.init({
        server: {
            baseDir: config.paths.src.root
        }
    });

    gulp.watch(config.paths.watch.scss, gulp.series('sass'));
    gulp.watch(config.paths.watch.js, gulp.series('js'));
    gulp.watch(config.paths.watch.html).on('change', browserSync.reload);
    gulp.watch(config.paths.watch.imgs, gulp.series('img'));
}));

// Default task
gulp.task('default', gulp.series('dev'));
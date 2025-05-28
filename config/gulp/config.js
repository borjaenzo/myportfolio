// Paths configuration
module.exports = {
    paths: {
        src: {
            root: 'src',
            html: 'src/**/*.html',
            scss: 'src/assets/scss/**/*.scss',
            js: 'src/assets/js/**/*.js',
            imgs: 'src/assets/imgs/**/*.+(png|jpg|gif|svg)',
            vendors: 'src/assets/vendors/**/*.*',
            components: 'src/components/**/*.*'
        },
        dist: {
            root: 'public',
            css: 'public/css',
            js: 'public/js',
            imgs: 'public/imgs',
            vendors: 'public/vendors'
        },
        watch: {
            scss: 'src/assets/scss/**/*.scss',
            js: 'src/assets/js/**/*.js',
            html: 'src/**/*.html',
            imgs: 'src/assets/imgs/**/*.+(png|jpg|gif|svg)',
            components: 'src/components/**/*.*'
        }
    },
    output: {
        cssName: 'portfolio.min.css',
        jsName: 'portfolio.min.js'
    }
}; 
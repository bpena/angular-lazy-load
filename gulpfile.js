var gulp        = require('gulp'),
    minifyJS    = require('gulp-uglify'),
    minifyHTML  = require('gulp-html-minify'),
    replace     = require('gulp-replace')
    usemin      = require('gulp-usemin');

var _path       = {
    base: '/angular-lazy-load/app/',
    baseDist: '/angular-lazy-load/dist/',
    exportFolder: 'dist/',
    fontsHtml: 'app/**/*.html',
    fontsJs: 'app/**/*.js',
    indexHTML: 'app/index.html'
};

gulp.task('usemin', function() {
    return gulp.src(_path.indexHTML)
        .pipe(usemin({
            css: [ ],
            html: [
                replace('.js', '.min.js'),
                minifyHTML({ empty: true }) ],
            js: [ minifyJS() ]
        }))
        .pipe(gulp.dest(_path.exportFolder));
});

gulp.task('minifyJS', function() {
    return gulp.src(_path.fontsJs)
        .pipe(minifyJS())
        //.pipe(replace(_path.base, _path.baseDist))
        .pipe(gulp.dest(_path.exportFolder));
});

gulp.task('minifyHTML', function() {
    return gulp.src(_path.fontsHtml)
        .pipe(minifyHTML())
        .pipe(gulp.dest(_path.exportFolder));
});


gulp.task('build', ['usemin', 'minifyHTML', 'minifyJS']);

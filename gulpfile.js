var gulp         = require('gulp'), 
    sass         = require('gulp-sass'), 
    browserSync  = require('browser-sync'), 
    del          = require('del'),
    autoprefixer = require('gulp-autoprefixer'),
    browserify = require('browserify'),
    babelify = require('babelify'),
    source = require('vinyl-source-stream'),
    cssmin = require('gulp-cssmin'),
    streamify = require('gulp-streamify'),
    uglify = require('gulp-uglify');

var path = {
    build: {
        html: 'dist/',
        js: 'dist/js/',
        css: 'dist/css/'
        
    },
    src: {
        html: './index.html',
        js: 'src/js/main.js',
        css: 'src/css/main.sass'
    },
    watch: {
        html: './index.html',
        js: 'src/js/**/*.js',
        css: 'src/css/*.sass'
    },
    clean: './dist'
};

gulp.task('browser-sync', function() {
    browserSync({ 
        server: { 
            baseDir: './dist'
        },
        notify: false 
    });
});

gulp.task('clean', function() {
    return del.sync(path.clean); 
});

gulp.task('sass:build', function(){ 
    return gulp.src(path.src.css) 
        .pipe(sass()) 
        .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true })) 
        .pipe(cssmin()) 
        .pipe(gulp.dest(path.build.css)) 
        .pipe(browserSync.reload({stream: true})) 
});

gulp.task('js:build', function () {
    return browserify({entries: path.src.js, debug: true})
        .transform('babelify', {presets: ['es2015', 'react']})
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(streamify(uglify()))
        .pipe(gulp.dest(path.build.js))
        .pipe(browserSync.reload({stream: true}))
});

gulp.task('html:build', function () {
    return gulp.src(path.src.html)
        .pipe(gulp.dest(path.build.html))
        .pipe(browserSync.reload({stream: true}))
});

gulp.task('watch', ['browser-sync'], function() {
    gulp.watch(path.watch.html, ['html:build']); 
    gulp.watch(path.watch.js, ['js:build']); 
    gulp.watch(path.watch.css, ['sass:build']); 
    
});

gulp.task('build', [
    'clean',
    'html:build',
    'js:build',
    'sass:build'
]);

gulp.task('default', ['watch']);    
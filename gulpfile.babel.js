import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import browserSync from 'browser-sync';
import childProcess from 'child_process';
import webpack from 'webpack-stream';

const $ = gulpLoadPlugins();
const reload = browserSync.reload;

// =======================
//  TASKS FOR DEVELOPMENT
// =======================

// Starts browsersync and file watching
gulp.task('serve', ['browser-sync'], () => {
  gulp.watch(['_scss/**/*.scss'], ['sass']);
  gulp.watch(['_js/**/*.js'], ['js']);
  gulp.watch(['assets/**/*'], ['imagemin']);
  gulp.watch(['_data/*', '*.html', '_layouts/**/*', '_includes/**/*','_portfolio/**/*', 'posts/**/*'], ['build:reload']);
});

// Builds Jekyll site (including drafts)
gulp.task('build', done => {
  return childProcess.spawn('jekyll', ['build', '--drafts'], {stdio: 'inherit'}).on('close', done);
});

// First runs jekyll build task, then reloads browser
gulp.task('build:reload', ['build'], () => { reload(); });

// ======================
//  TASKS FOR DEPLOYMENT
// ======================

// First run htmlmin, then deploy to the site folder
gulp.task('deploy', ['htmlmin'], () => {
  return gulp.src('./_site/**/*');
});

// First run htmlmin, then deploy to github
gulp.task('ghPages', ['htmlmin'], () => {
  return gulp.src('./_site/**/*').pipe($.ghPages({branch: 'gh-pages'}));
});

// First run build:prod and then minify HTML
gulp.task('htmlmin', ['build:prod'], () => {
  return gulp.src('./_site/**/*.html')
    .pipe($.htmlmin( {collapseWhitespace: true}))
    .pipe(gulp.dest('./_site/'))
    .pipe(reload({stream: true}));
});

// Runs jekyll build for 'production' environment
gulp.task('build:prod', ['js', 'sass', 'imagemin'], done => {
  var productionEnv = process.env;
      productionEnv.JEKYLL_ENV = 'production';

  return childProcess.spawn('jekyll', ['build'], {stdio: 'inherit' , env: productionEnv}).on('close', done);
});

// ====================
//  OTHER USEFUL TASKS
// ====================

// Browser sync + styles for the notification
gulp.task('browser-sync', ['js', 'sass', 'imagemin', 'build'], () => {
  browserSync({
    notify: {
      styles: [
        'font-family: sans-serif',
        'font-weight: bold;',
        'padding: 10px;',
        'margin: 0;',
        'position: fixed;',
        'font-size: 0.6em;',
        'line-height: 0.8em;',
        'z-index: 9999;',
        'left: 5px;',
        'top: 5px;',
        'color: #fff;',
        'border-radius: 2px',
        'background-color: #333;',
        'background-color: rgba(50,50,50,0.8);'
      ]
    },
    server: {
      baseDir: '_site'
    }
  });
});

// Compile sass + livereload with css injection + minificiation
gulp.task('sass', () => {
  return gulp.src('_scss/main.scss')
    .pipe($.sass({
      includePaths: ['scss'],
      onError: browserSync.notify
    }))
    .pipe($.autoprefixer(['last 15 versions', '> 1%', 'ie 8'], {cascade: true}))
    .pipe($.rename({extname: '.css'}))
    .pipe(gulp.dest('_site/css'))
    .pipe(reload({stream: true}))
    .pipe($.cleanCss({keepBreaks: false, keepSpecialComments:true}))
    .pipe($.rename({extname: '.min.css'}))
    .pipe(gulp.dest('_site/css'));
});

// Compile JavaScript files + uglifies files
gulp.task('js', () => {
  return gulp.src('_js/main.js')
    .pipe(webpack({
      module: {
        loaders: [{
          test: /\.js$/,
          loader: 'babel',
          exclude: '/node_modules/',
          query: { compact: false }
        }]
      }
    }))
    .pipe($.rename('main.js'))
    .pipe(gulp.dest('_site/scripts'))
    .pipe(reload({stream: true}))
    .pipe($.uglify({onError: browserSync.notify}))
    .pipe($.rename({extname: '.min.js'}))
    .pipe(gulp.dest('_site/scripts'));
});

// Optimise images + copy any other assets
gulp.task('imagemin', () => {
  return gulp.src('_assets/*')
    .pipe($.imagemin())
    .pipe(gulp.dest('_site/assets'));
});

gulp.task('default', ['serve']);

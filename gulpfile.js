var gulp = require('gulp'),
    browserify = require('browserify'),
    hbsfy = require('hbsfy'),
    source = require('vinyl-source-stream'),
    fs = require('fs'),
    path = require('path'),

    readControllers = function(dir) {
      return fs.readdirSync(dir)
        .map(function(item) {
          return {name: item, full: path.join(dir, item)};
        })
        .filter(function(item) {
          return fs.statSync(item.full).isFile();
        })
        .map(function(item) {
          return {
            file: '.' + path.sep + item.full,
            expose: 'controllers/' + path.parse(item.name).name
          };
        });
    };

// console.log(readControllers('./src/js/controllers'));

gulp.task('js:browserify', function() {
  return browserify({
      entries: ['./src/js/initialize.js'],
      extensions: ['.hbs'],
      debug: true
    })
    .require(readControllers('./src/js/controllers'))
    .transform(hbsfy)
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('./assets/js/'));
});

gulp.task('default', ['js:browserify']);

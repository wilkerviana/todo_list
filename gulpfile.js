'use strict';

const gulp = require('gulp'),
	view = require('gulp-pug'),
	style = require('gulp-stylus'),
  plumber = require('gulp-plumber'),
  watch = require('gulp-watch'),
  image = require('gulp-imagemin'),
  jshint = require('gulp-jshint'),
  browserSync = require('browser-sync').create(),
  webpack = require('webpack-stream');

gulp.task('browserSync', ['build'], function(){
	browserSync.init({
		server:{
			baseDir: 'dist'
		}
  });

	gulp.watch('src/**/*.js', ['script']);
	gulp.watch('src/images/**/*', ['image']);
	gulp.watch('src/**/*.styl', ['style']);
  gulp.watch('src/**/*.pug', ['view']);
  gulp.watch('dist/**/*').on('change', () => {
    browserSync.reload();
  });
});

gulp.task('style', () => {
  gulp.src('src/style/*.styl')
    .pipe(plumber({
      handleError: function(error) {
        console.log(error);
        this.emit('end');
      }
    }))
    .pipe(style({
      compress: true
    }))
    .pipe(gulp.dest('dist/css'));
});

gulp.task('view', () => {
  gulp.src('src/view/*.pug')
    .pipe(view({
      pretty: true
    }))
    .pipe(gulp.dest('dist/'));
});

gulp.task('image', () => {
  gulp.src('src/images/**/*')
    .pipe(image())
    .pipe(gulp.dest('dist/images'));
});

gulp.task('script', () => {
  gulp.src('src/script/index.js')
    .pipe(webpack({
      output: {
        filename: '[name].js'
      }
    }))
    .pipe(gulp.dest('dist/js'))
});

gulp.task('build', ['image', 'script', 'style', 'view']);

// default task on gulp
gulp.task('default',['browserSync']);

module.exports = function(grunt) {
  'use strict';

  grunt.initConfig({

    connect: {
      server: {
        options: {
          base: '.',
          port: 8787,
          hostname: '0.0.0.0',
          open: true,
          debug: true,
          middleware: function (connect, options) {
            return [
              require('connect-livereload')({ port: 35353 }),
              connect.static(options.base)
            ];
          }
        }
      }
    },

    watch: {
      reload: {
        files: ['app/js/**/*.js','app/index.html'],
        tasks: [],
        options: {
          livereload: 35353
        }
      },
      scss: {
        files: ['app/scss/**/*.scss'],
        tasks: ['compass'],
        options: {
          livereload: 35353
        }
      }
    },

    compass: {
      build: {
        options: {
          relativeAssets: true,
          sassDir: 'app/scss',
          cssDir: 'app/css',
          imagesDir: 'app/img',
          environment: 'development',
          outputStyle: 'expanded'
        }
      }
    }

  });

  // Load task modules.
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-compass');

  // Default task.
  grunt.registerTask('default', 'server');
  grunt.registerTask('server', ['connect','watch']);

};
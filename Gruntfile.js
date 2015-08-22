'use strict';

module.exports = function (grunt) {

  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.initConfig({
    browserify: {
      dev: {
        files: {
          'public/main.js': ['public/app/**/*.js']
        },
        options: {
          transform: ['reactify']
        }
      }
    },
    watch: {
      react: {
        files: [
          'public/app/**/*.{js,json}'
        ],
        tasks: ['browserify']
      }
    }
  });

  grunt.registerTask('build', ['browserify']);
  grunt.registerTask('serve', ['browserify', 'watch']);
  grunt.registerTask('default', ['build']);
};
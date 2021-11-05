module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    eslint: {
      target: ['src/**/*.js']
    },
    githooks: {
      all: {
        'pre-commit': 'eslint' // Will run the eslint task at every commit
      }
    }
  });

  // Load the plugins
  grunt.loadNpmTasks('grunt-eslint');
  grunt.loadNpmTasks('grunt-githooks');

};


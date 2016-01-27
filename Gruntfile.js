module.exports = function (grunt) {
  
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        mangle: true
      },
      build: {
        files: [{
          expand: true,
          cwd: 'app/js/',
          src: ['*.js', '**/*.js'],
          dest: 'app/js-min/',
          ext: '.min.js'
        }]
      }
    },
    concat: {
      options: {
        stripBanners: true,
        separator: ';',
        banner: '/*!\n * <%= pkg.name %> v<%= pkg.version %>\n */\n'
      },
      dist: {
        src: ['app/js-min/**/*.js'],
        dest: 'app/js-dist/full.min.js',
      },
      dev: {
        src: ['app/js/**/*.js'],
        dest: 'app/js-dist/full.js',
      }      
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Load the plugin that provides the "concat" task.
  grunt.loadNpmTasks('grunt-contrib-concat');

  // Default task(s).
  grunt.registerTask('default', ['uglify', 'concat']);

};

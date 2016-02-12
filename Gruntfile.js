module.exports = function (grunt) {
  
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    clean: {
      build: {
        src: [ 'build' ]
      },
      css: {
        src: [ 'build/css/*', '!build/css/full.min.css' ]
      },
      js: {
        src: [ 'build/js/*', '!build/js/full.min.js' ]
      }
    },    
    copy: {
      build: {
        cwd: 'app',
        src: [ '**' ],
        dest: 'build',
        expand: true
      }
    },
    cssmin: {
      build: {
        files: {
          'build/css/full.min.css': [ 'build/css/*.css' ]
        }
      }
    },    
    uglify: {
      options: {
        mangle: true
      },
      build: {
        files: [{
          expand: true,
          cwd: 'build/js/',
          src: ['*.js', '**/*.js'],
          dest: 'build/js/',
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
        src: ['build/js/**/*.min.js'],
        dest: 'build/js/full.min.js',
      }
    },
    watch: {
      build: {
        files: ['app/**/*'],
        tasks: ['build'],
        options: {
          spawn: false,
          interrupt: true
        },
      },
    },
    jshint: {
      all: ['Gruntfile.js', 'app/js/**/*.js']
    },
    connect: {
      dev: {
        options: {
          port: 8000,
          base: 'app',
          hostname: '*',
          debug: true,
          open: true
        }
      },
      prod: {
        options: {
          port: 8000,
          base: 'build',
          hostname: '*',
          debug: true,
          open: true
        }
      }    
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Load the plugin that provides the "concat" task.
  grunt.loadNpmTasks('grunt-contrib-concat');

  // Load the plugin that provides the "watch" task.
  grunt.loadNpmTasks('grunt-contrib-watch');  

    // Load the plugin that provides the "jshint" task.
  grunt.loadNpmTasks('grunt-contrib-jshint');  

  // connect plugin
  grunt.loadNpmTasks('grunt-contrib-connect');

  // copy
  grunt.loadNpmTasks('grunt-contrib-copy');

  // clean
  grunt.loadNpmTasks('grunt-contrib-clean');

  // css minification
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  // Default task(s).
  grunt.registerTask('default', ['dev']);
  // run developer version
  grunt.registerTask('dev', ['connect:dev', 'watch']);
  // run production version (minified)
  grunt.registerTask('prod', ['build', 'connect:prod', 'watch']);
  // build only (minify, concat, etc)
  grunt.registerTask('build', ['clean:build', 'copy', 'cssmin', 'clean:css', 'uglify', 'concat', 'clean:js']);

};

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
    },
    watch: {
      scripts: {
        files: ['app/js/**/*.js'],
        tasks: ['uglify', 'concat'],
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
      server: {
        options: {
          port: 8000,
          base: 'app',
          hostname: '*',
          debug: true,
          open: true
        }
      }    
    },
    'http-server': {
      dev: {
        root: 'app',
        port: 8000,
        host: "0.0.0.0",
        cache: 10,
        showDir : true,
        autoIndex: true,
        ext: "html",

        // run in parallel with other tasks 
        runInBackground: true,

        // specify a logger function. By default the requests are 
        // sent to stdout. 
        //logFn: function(req, res, error) { },

        openBrowser : true
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

  // http-server plugin
  grunt.loadNpmTasks('grunt-http-server');

  // Default task(s).
  grunt.registerTask('default', ['uglify', 'concat', 'connect', 'watch']);
  grunt.registerTask('http-server', ['uglify', 'concat', 'http-server', 'watch']);

};

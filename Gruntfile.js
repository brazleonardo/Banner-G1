module.exports = function (grunt) {
    grunt.initConfig({
    
        cssmin: {
            target: {
                files: {
                    'dist/css/vendor.min.css': 'src/css/vendor.css',
                    'dist/css/styles.min.css': 'src/css/styles.css'
                }
            }
        },

        sass: {
            dist: {
              files: {
                'src/css/styles.css': 'src/css/styles.scss'
              }
            }
        },
 
        jshint: {
            jsFiles: ['src/js/**/*.js']                             
        },
 
        concat: {
            css: {
                files: {'src/css/vendor.css': 'src/css/vendor/*.css' }
            },
            js: {
                files: {'src/js/vendor.js': 'src/js/vendor/*.js' }
            }
        },
 
        uglify: {
            bundle: {
                files: {
                    'dist/js/vendor.min.js': 'src/js/vendor.js',
                    'dist/js/scripts.min.js': 'src/js/scripts.js'
                }
            }
        }
    });
    
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
 
    grunt.registerTask('default', ['cssmin:target', 'sass', 'jshint:jsFiles', 'concat:js', 'uglify:bundle',]);
};
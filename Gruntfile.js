/*
 * Setup options for grunt to work with.
 */
module.exports = function(grunt) {
	// Project configuration.
	grunt.initConfig({
		uglify: {
			production: {
				options: {
					preserveComments: 'some'
				},
				files: {
					'js/tooltips.js': ['src/js/tooltips.js'],
					'js/admin.js': ['src/js/admin.js']
				}
			}
		},
		compass: {
			production: {
				options: {
					sassDir: 'src/scss',
					cssDir: 'css',
					environment: 'production'
				}
			}
		},
		watch: {
			scripts: {
				files: ['src/js/*.js'],
				tasks: 'uglify'
			},
			styles: {
				files: ['src/scss/*.scss'],
				tasks: 'compass'
			}
		}
	});

	// Load the plugin that provides the "uglify" task.
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-watch');

};
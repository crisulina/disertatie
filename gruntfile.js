module.exports = function (grunt) {
	
	grunt.initConfig({
		symlink: {
			options: {
				overwrite: true
			},
			jquery: {
				files: [
					{
						src: 'assets/bower_components/foundation/js/vendor/jquery.js',
						dest: 'assets/public/js/jquery.js'
					}
				]
			},
			modernizr: {
				files: [
					{
						src: 'assets/bower_components/foundation/js/vendor/modernizr.js',
						dest: 'assets/public/js/modernizr.js'
					}
				]
			},
			foundation: {
				files: [
					{
						src: 'assets/bower_components/foundation/js/foundation.min.js',
						dest: 'assets/public/js/foundation.min.js'
					}
				]
			}
		},
		sass: {
			options: {
				includePaths: ['assets/bower_components/foundation/scss']
			},
			dist: {
				options: {
					outputStyle: 'compressed'
				},
				files: {
					'assets/public/css/app.css': 'assets/scss/app.scss'
				}
			}
		},
		watch: {
			sass: {
				files: 'assets/scss/**/*.scss',
				tasks: ['sass']
			}
		}
	});

	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-symlink');

	grunt.registerTask('build', ['symlink', 'sass']);
	grunt.registerTask('default', ['build', 'watch']);

};
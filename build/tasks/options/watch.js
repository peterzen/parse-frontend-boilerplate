module.exports = {
    scripts: {
        files: ['build/index.html', 'build/requirejs.json', 'build/config/config.json', 'build/config/development.json',  'build/config/production.json', 'app/**/*.js'],
        tasks: ['less', 'build'],
        options: {
	        livereload: true,
            spawn: false
        }
    },
	less: {
		options: {
			livereload: true
		},
		files: ['frontend/less/**/*.less', 'frontend/app/modules/**/less/*.less'],
		tasks: ['less:development']
	},
	hbs: {
		files: ['frontend/app/**/*.hbs'],
		options: {
			livereload: true
		}
	},
	livereload: {
		options: {
			livereload: true
		},
		files: ['frontend/static_files/**/*']
	},
    tests: {
        files: ['build/test-main.js', 'build/requirejs.json'],
        tasks: ['buildTest'],
        options: {
            spawn: false
        }
    }
};
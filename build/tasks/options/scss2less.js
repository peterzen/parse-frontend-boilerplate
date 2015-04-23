module.exports = {
	convert: {
		options: {
			paths: ["./"]
		},
		files: [{
			expand: true,
			cwd: '.',
			src: 'frontend/bower_components/magnific-popup/src/css/*.scss',
			dest: 'less-conv',
			ext: '.less',
			rename: function(dest, src) { return dest + '/' + src.replace('_','');}
		}]
	}
};

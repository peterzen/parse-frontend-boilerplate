
module.exports = {
    development: {
        options: {
            paths: ["frontend/less"]
        },
        files: {
	        "frontend/static_files/css/bootstrap.css": "frontend/less/bootstrap.less",
	        "frontend/static_files/css/main.css": "frontend/less/main.less"
        }
    },
    production: {
        options: {
            paths: ["frontend/less"],
            plugins: [
                new (require('less-plugin-autoprefix'))({browsers: ["last 2 versions"]}),
                //new (require('less-plugin-clean-css'))(cleanCssOptions)
            ],
            modifyVars: {
                imgPath: '"http://mycdn.com/path/to/images"',
                bgColor: 'red'
            }
        },
        files: {
	        "build/dist/static_files/css/bootstrap.css": "frontend/less/bootstrap.less",
            "build/dist/static_files/css/main.css": "frontend/less/main.less"
        }
    }
};



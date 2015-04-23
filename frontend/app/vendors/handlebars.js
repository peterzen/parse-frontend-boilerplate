define(function (require) {
	'use strict';

	var _ = require('underscore');
	var Handlebars = require('handlebars');
	var Marionette = require('backbone.marionette');
	var moment = require('moment');

	return function () {

		/**
		 * Handlebars setup
		 */
		Marionette.Renderer.render = function (source, context) {
			var template = Handlebars.compile(source);
			return template(context);
		};
		/**
		 * Base helpers
		 */
		Handlebars.registerHelper('staticFile', function (file) {
			return window.application.paths.staticFiles + file;
		});

		Handlebars.registerHelper('moment', function (context, block) {
			if (context && context.hash) {
				block = _.cloneDeep(context);
				context = undefined;
			}
			var date = moment(context);

			for (var i in block.hash) {
				if (date[i]) {
					date = date[i](block.hash[i]);
				} else {
					console.log('moment.js does not support "' + i + '"');
				}
			}
			return date;
		});

		Handlebars.registerHelper('duration', function (context, block) {
			if (context && context.hash) {
				block = _.cloneDeep(context);
				context = 0;
			}
			var duration = moment.duration(context);

			for (var i in block.hash) {
				if (duration[i]) {
					duration = duration[i](block.hash[i]);
				} else {
					console.log('moment.js duration does not support "' + i + '"');
				}
			}
			return duration;
		});

		Handlebars.registerHelper('equal', function (lvalue, rvalue, options) {
			if (arguments.length < 3) {
				throw new Error('Handlebars Helper equal needs 2 parameters');
			}
			if (lvalue != rvalue) {
				return options.inverse(this);
			} else {
				return options.fn(this);
			}
		});


	};
});







define(function (require) {
	'use strict';

	var Handlebars = require('handlebars');
	var Marionette = require('backbone.marionette');

	return Marionette.ItemView.extend({

		template: Handlebars.compile(require('text!./../templates/index.hbs'))
	});

});

define(function (require) {
	'use strict';

	var Parse = require('parse-js-sdk');
	var Backbone = require('backbone');
	var Marionette = require('backbone.marionette');

	/**
	 * @type {Marionette.Application}
	 */
	var app = window.app = new Marionette.Application();

	// Get the current logged in Parse user
	app.user = Parse.User.current();
	if (app.user) {
		app.vent.trigger('user:login');
	}

	/**
	 * Load our application
	 */
	require('autoload/vendors')(app);
	require('autoload/plugins')(app);
	require('autoload/modules')(app);

	// register Marionette Behaviors
	Marionette.Behaviors.behaviorsLookup = function () {
		return app.Behaviors;
	};

	app.addRegions({
		'container': 'main',
		'header': 'header',
		'footer': 'footer',
		'modals': {
			selector: '.modal-container',
			regionClass: Backbone.Marionette.Modals
		}
	});

	app.on('start', function (options) {
		if (!Backbone.history.start({pushState: options.pushState})) {
			Backbone.history.navigate('home', {trigger: true});
		}
	});

	return app;
});

define(function (require) {
	'use strict';

	var Marionette = require('backbone.marionette');


	return function (app) {

		/**
		 * Example Marionette behavior
		 * http://marionettejs.com/docs/v2.4.1/marionette.behavior.html
		 */
		window.Behaviors = app.Behaviors = {};

		app.Behaviors.ExampleBehavior = Marionette.Behavior.extend({
		});


	};
});







define(function (require) {
	'use strict';

	return function (app) {
		/** Autoload plugins */
		require('vendors/bootstrap')(app);
		require('vendors/google')(app);
		require('vendors/marionette')(app);
		require('vendors/parse.com')(app);
	};

});


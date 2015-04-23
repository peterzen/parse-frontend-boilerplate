define(function (require) {
	'use strict';

	var $ = require('jquery');
	var _ = require('underscore');
	require('snackbarjs');

	return function (app) {

		var options = {
			style: 'toast'
		};

		var _snackbar = function(content, className){
			$.snackbar(_.extend(options, {
				content: content,
				style: className
			}));
		};

		app.commands.setHandler('user:notify:error', function(content){
			_snackbar(content, 'toast error');
		});

		app.commands.setHandler('user:notify:success', function(content){
			_snackbar(content, 'toast success');
		});


	};
});







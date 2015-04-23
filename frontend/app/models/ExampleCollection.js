define(function (require) {
	'use strict';

	var BaseCollection = require('models/BaseCollection');
	var ExampleModel = require('models/ExampleModel');

	return BaseCollection.extend({

		model: ExampleModel
	});
});

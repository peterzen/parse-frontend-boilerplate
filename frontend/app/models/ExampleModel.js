define(function (require) {
	'use strict';

	var Parse = require('parse-js-sdk');
	var BaseModel = require('models/BaseModel');

	var ExampleModel = BaseModel.extend('ExampleModel', {
		defaults: {
		},

		fetchMetadata: function (url) {

			var promise = new Parse.Promise(),
				self = this;

			Parse.Cloud.run('findObject', {
				url: url
			}, {
				success: function (exampleObject) {
					console.log(exampleObject);
					self.set(exampleObject);
					promise.resolve(self);
				},
				error: function (error) {
					console.log(error);
					promise.reject(error);
				}
			});

			return promise;
		},


	}, {});



	return ExampleModel;
});

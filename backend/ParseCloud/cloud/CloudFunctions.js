
// Example Parse cloud function
// https://www.parse.com/docs/cloud_code_guide#functions-calling

var ParseModel = Parse.Object.extend('ExampleModel');

Parse.Cloud.define('findObject', function (request, response) {
	'use strict';

	var query = new Parse.Query(ParseModel);

	query.equalTo('objectId', request.params.id);
	query.find()
		.done(function (result) {
			if (result) {
				response.success(result);
			} else {
				response.error('Not found');
			}
		})
		.fail(function (error) {
			response.error(error);
		});
});



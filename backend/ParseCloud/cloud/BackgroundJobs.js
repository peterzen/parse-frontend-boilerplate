

// Example Parse background job
// https://www.parse.com/docs/cloud_code_guide#jobs

var ParseModel = Parse.Object.extend('ParseObject');

Parse.Cloud.job('updateParseModelBackgroundJob', function (request, status) {

	'use strict';

	var query = new Parse.Query(ParseModel);

	query.count().done(function (count) {
		console.log(' updateParseModelBackgroundJob: ' + count);
	});

	query.each(function (model) {

		// do stuff on model

		if (model.dirty('ExampleAttribute')) {
			model.save();
		}

	}).then(function () {
		status.success('updateParseModelBackgroundJob: completed');
	}, function (error) {
		status.error('updateParseModelBackgroundJob: failed: ' + error);
	});

});


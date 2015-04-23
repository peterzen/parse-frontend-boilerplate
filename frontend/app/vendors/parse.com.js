define(function (require) {
    'use strict';

	require(['parse-js-sdk'], function(Parse){

		Parse.initialize(window.application.parse.appId, window.application.parse.javascriptKey);

		window.fbAsyncInit = function () {
			// init the FB JS SDK
			Parse.FacebookUtils.init({
				appId: window.application.facebookUtils.appId, // Facebook App ID
				status: false, // check login status
				cookie: true, // enable cookies to allow Parse to access the session
				xfbml: false,  // parse XFBML,
				version: 'v2.2'
			});
		};

		(function (d, s, id) {
			var js, fjs = d.getElementsByTagName(s)[0];
			if (d.getElementById(id)) {
				return;
			}
			js = d.createElement(s);
			js.id = id;
			js.src = window.application.facebookUtils.jsUrl;
			fjs.parentNode.insertBefore(js, fjs);
		}(document, 'script', 'facebook-jssdk'));

	});

	return function(){};

});







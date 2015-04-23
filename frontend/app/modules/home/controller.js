define(function (require) {
    'use strict';

    var Backbone = require('backbone');
    var Marionette = require('backbone.marionette');
    var IndexView = require('./views/index');

    return Marionette.Controller.extend({

        initialize: function (options) {
            this.app = options.app;
            this.logger = options.logger;
        },
        index : function () {
            var model = new Backbone.Model({
	            message: 'Hello world!'
            });
            this.app.container.show(new IndexView({
                model: model
            }));
        }
    });

});

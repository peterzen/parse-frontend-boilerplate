define(function (require) {
    'use strict';

    var Marionette = require('backbone.marionette');

    var Router = Marionette.AppRouter.extend({

        appRoutes: {
            'home' : 'index'
        }
    });

    return Router;
});

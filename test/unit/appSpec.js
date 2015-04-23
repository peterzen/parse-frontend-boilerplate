define(function (require) {
    'use strict';

    var app = require('app');
    var Marionette = require('backbone.marionette');

    describe('app', function () {

        it('is an instance of marionette.application', function () {
            expect(app instanceof Marionette.Application).toBe(true);
        });

    });

});
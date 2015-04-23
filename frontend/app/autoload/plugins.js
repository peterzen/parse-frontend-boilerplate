define(function (require) {
    'use strict';

    return function (app) {
        /** Autoload plugins */
        require('plugins/behaviors')(app);
        require('plugins/logger')(app);
        require('plugins/snackbar')(app);
    };

});


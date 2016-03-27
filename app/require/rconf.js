/**
 * RequireJS config object used in dev and testing. Not part of compiled files
 */
define(['./paths', './shims'], function(paths, shims) {
    'use strict';

    var config = {
        baseUrl: 'app',
        paths: paths,
        shim: shims
    };

    return config;
});

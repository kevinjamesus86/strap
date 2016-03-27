define([
    'angular',
    'ngComponentRouter'
], function defineMain(
    angular,
    ngComponentRouter
) {
    'use strict';

    var module = angular.module('strap', [
        ngComponentRouter.name
    ]);

    module.config(['$compileProvider', function($compileProvider) {
        $compileProvider.onChangesTtl(5);
        $compileProvider.debugInfoEnabled(false);
    }]);

    return module;
});

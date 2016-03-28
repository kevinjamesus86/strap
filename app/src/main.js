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

    module.config([
        '$compileProvider',
        '$rootScopeProvider',
    function($compileProvider, $rootScopeProvider) {
        $compileProvider.debugInfoEnabled(false);
        // this is sorta like a challenge
        $compileProvider.onChangesTtl(5);
        $rootScopeProvider.digestTtl(5);
    }]);

    ////////////////
    // strap up main
    ////////////////

    module.component('main', {
        template: '<h1>{{$ctrl.msg}}</h1>',
        bindings: {
            msg: '@'
        }
    });

    return module;
});

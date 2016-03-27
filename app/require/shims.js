define({
    angular: {
        exports: 'angular'
    },
    ngAria: {
        deps: ['angular'],
        init: function(angular) {
            return angular.module('ngAria');
        }
    },
    ngAnimate: {
        deps: ['angular'],
        init: function(angular) {
            return angular.module('ngAnimate');
        }
    },
    ngCookies: {
        deps: ['angular'],
        init: function(angular) {
            return angular.module('ngCookies');
        }
    },
    ngComponentRouter: {
        deps: ['angular'],
        init: function(angular) {
            return angular.module('ngComponentRouter');
        }
    },
    ngResource: {
        deps: ['angular'],
        init: function(angular) {
            return angular.module('ngResource');
        }
    },
    ngSanitize: {
        deps: ['angular'],
        init: function(angular) {
            return angular.module('ngSanitize');
        }
    },
    ngMocks: {
        deps: ['angular'],
        init: function(angular) {
            return angular.module('ngMocks');
        }
    }
});

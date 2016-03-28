require.config({
    baseUrl : '',
    paths: {
        angular: '../../assets/angular/angular',
        angularRoute: '../../assets/ui-router/release/angular-ui-router',
        ocLazyLoad: '../../assets/ocLazyLoad/dist/ocLazyLoad'
    },
    shim: {
        'angular': {
            'exports': 'angular'
        },
        'angularRoute': {
            deps : ['angular']
        },
        'ocLazyLoad': {
            deps : ['angular']
        }
    }
});


require([
        'angular',
        './application'
    ],
    function (angular) {
        angular.element(document).ready(function() {
            angular.bootstrap(document, ['app'])
        })
    });
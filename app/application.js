(function() {
    var dependencies = [
        'angular',
        'angularRoute',
        'ocLazyLoad',

        '../../copia/dist/module'
    ];

    define(dependencies, function (angular) {

        var modules = ['ui.router','oc.lazyLoad', 'module2'];

        return angular
                .module('app', modules)
                .config(['$stateProvider', '$urlRouterProvider', config]);

        function config ($stateProvider, $urlRouterProvider) {

            $urlRouterProvider.otherwise('/home');

            $stateProvider

                .state('home', {
                    url: '/home',
                    templateUrl: 'home.html'
                })

                .state('module1', {
                    url: '/module1',
                    templateUrl: 'module1/module1.html',
                    resolve: {
                        load: function($ocLazyLoad) {

                            return $ocLazyLoad.load ({
                                name: 'module1',
                                files: ['module1/module.js']

                            });
                        }
                    }
                });
        }

        return app;
    });
})();
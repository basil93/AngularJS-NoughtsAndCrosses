(function (angular) {
    var bazAppModule = angular.module('bazApp', ['ngRoute', 'bazPeople', 'bazCourses']); // root module declaration

    bazAppModule.config(config);

    function config($routeProvider) {
        $routeProvider
            .when('/people', {
                controller: 'PeopleController',
                templateUrl: 'app/people/people-partial.html'
            })
            .when('/courses', {
                controller: 'CoursesController',
                templateUrl: 'app/courses/courses-partial.html'})
            .otherwise({
                redirectTo: '/'
            });
    }

})(angular); // IIFE

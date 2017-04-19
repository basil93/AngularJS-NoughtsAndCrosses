(function (angular) {
    var peopleModule = angular.module('bazPeople');

    peopleModule.controller('PeopleController', PeopleController);

    function PeopleController($scope, peopleFactory) {
        $scope.filteredPerson = '';
        $scope.people = peopleFactory.people;

        $scope.add = add;
        $scope.remove = remove;

        function add() {
            peopleFactory.add($scope.newPerson);
            $scope.newCourseName = '';
        }

        function remove(course) {
            peopleFactory.remove(course);
        }
    }
})(angular); // IIFE

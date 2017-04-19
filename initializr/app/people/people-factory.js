(function (angular) {
    var peopleModule = angular.module('bazPeople');

    peopleModule.factory('peopleFactory', PeopleFactory);

    function PeopleFactory(){
        var people = ['James', 'Bob', 'Tim'];

        return {
            people: people,
            add: add,
            remove: remove
        };

        function add(course) {
            if (people.indexOf(course) === -1) {
                people.push(course);
            }
        }

        function remove(course) {
            if (people.indexOf(course) !== -1) {
                var index = people.indexOf(course);
                people.splice(index, 1);
            }
        }
    }
})(angular);

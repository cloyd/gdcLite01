(function() {
    'use strict';

    angular
        .module('gdcLite')
        .factory('gdcLiteAPI', gdcLiteAPI);

    gdcLiteAPI.$inject = ['Restangular'];
    /* @ngInject */

    function gdcLiteAPI(Restangular) {


        function getDanceClasses(){
            return Restangular.service('danceclasses');
        }
         function getDanceClass(classId){
            return Restangular.one('danceclasses',classId);
        }

        function getTeachers(){
            return Restangular.service('teachers');
        }
        function getTeacher(teacherId){
            return Restangular.one('teachers',teacherId);
        }

        function getLocations(){
            return Restangular.service('locations');
        }

        return{
            getDanceClasses: getDanceClasses,
            getDanceClass: getDanceClass,
            getTeachers: getTeachers,
            getLocations: getLocations,
            getTeacher: getTeacher
        };
    };
})();
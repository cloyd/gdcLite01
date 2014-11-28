(function() {
    'use strict';

    angular
        .module('gdcLite')
        .controller('TeacherDetailCtrl', TeacherDetailCtrl);

        TeacherDetailCtrl.$inject = ['$stateParams','gdcLiteAPI'];

    /* @ngInject */
    function TeacherDetailCtrl($stateParams,gdcLiteAPI) {
        /*jshint validthis: true */
        var vm = this;
        var teacherId = Number($stateParams.id);

        gdcLiteAPI.getTeacher(teacherId).get().then(function(data){
            vm.teacher = data;
        });

    }
})();
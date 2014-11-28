(function() {
    'use strict';

    angular
        .module('gdcLite')
        .controller('TeachersCtrl', TeachersCtrl);

        TeachersCtrl.$inject = ['gdcLiteAPI'];
    /* @ngInject */
    function TeachersCtrl(gdcLiteAPI) {
        /*jshint validthis: true */
        var vm = this;
        vm.title = 'TeachersCtrl';


        gdcLiteAPI.getTeachers().getList().then(function(teachers) {
            vm.teachers = teachers;
        });


    }
})();
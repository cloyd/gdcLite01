(function() {
    'use strict';

    angular
        .module('gdcLite')
        .controller('LocationMapCtrl', LocationMapCtrl);
        LocationMapCtrl.$inject = ['$stateParams','gdcLiteAPI'];
    /* @ngInject */
    function LocationMapCtrl($stateParams,gdcLiteAPI) {
        /*jshint validthis: true */
        var vm = this;

        vm.locationId = Number($stateParams.id);
        vm.markerKey = "markr-" + vm.locationId;

        console.log("Marker Key", vm.markerKey);

        vm.map = {
            center:{
                latitude: 14.636963,
                longitude:121.030221,
            },
            zoom:16
        };
        vm.markerKey = 123123123;
        vm.marker = {
            latitude: 14.636963,
            longitude: 121.030221,
            title: "test title",
            showWindow: true
        };


    }
})();
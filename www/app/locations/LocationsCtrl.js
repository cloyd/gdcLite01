(function() {
    'use strict';

    angular
        .module('gdcLite')
        .controller('LocationsCtrl', LocationsCtrl);
        LocationsCtrl.$inject = ['gdcLiteAPI'];
    /* @ngInject */
    function LocationsCtrl(gdcLiteAPI) {
        /*jshint validthis: true */
        var vm = this;
        vm.title = 'LocationsCtrl';

        gdcLiteAPI.getLocations().getList().then(function(data) {
            vm.locations = data;
        });
    }
})();
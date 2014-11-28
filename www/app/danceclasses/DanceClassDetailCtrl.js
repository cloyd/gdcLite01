(function() {
    'use strict';

    angular
        .module('gdcLite')
        .controller('DanceClassDetailCtrl', DanceClassDetailCtrl);
        DanceClassDetailCtrl.$inject = ['gdcLiteAPI','$stateParams','$ionicLoading'];
    /* @ngInject */
    function DanceClassDetailCtrl(gdcLiteAPI,$stateParams,$ionicLoading) {
        /*jshint validthis: true */
        var vm = this;

        var videos = [];

        var danceclassId = Number($stateParams.id);

         $ionicLoading.show({
            template: '<h2 class="icon ion-loading-c"></h2>',
            animation: 'fade-in'
        });


        vm.classVideo = {
            name: 'Talk Dirty by Poppers',
            youtubeId: 'MU6F5S5MVdo',
            publishdate: 'Nov 7, 2014'
          };

        gdcLiteAPI.getDanceClass(danceclassId).get().then(function(data){
            vm.danceclass = data;
            $ionicLoading.hide();
        });







    }
})();
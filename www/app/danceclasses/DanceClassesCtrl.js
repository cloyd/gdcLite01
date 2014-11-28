(function() {
    'use strict';

    angular
        .module('gdcLite')
        .controller('DanceClassesCtrl', DanceClassesCtrl);

         DanceClassesCtrl.$inject = ['gdcLiteAPI','$scope','$ionicLoading'];
    /* @ngInject */
    function DanceClassesCtrl(gdcLiteAPI,$scope,$ionicLoading) {
        /*jshint validthis: true */
        var vm = this;

        $ionicLoading.show({
            template: '<h2 class="icon ion-loading-c"></h2>',
            animation: 'fade-in'
        });



        gdcLiteAPI.getDanceClasses().getList().then(function(data) {
            vm.danceClasses = data;
            $ionicLoading.hide();
        });

        vm.loadList = function() {
             gdcLiteAPI.getDanceClasses().getList().then(function(data) {
                vm.danceClasses = data;
            }).finally(function(){
                $scope.$broadcast('scroll.refreshComplete');
            });
        };



    }
})();
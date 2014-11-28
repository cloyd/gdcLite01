(function() {
    'use strict';

    angular
        .module('gdcLite', ['ionic','restangular','ng.group','uiGmapgoogle-maps'])
        .run(function($ionicPlatform) {
            $ionicPlatform.ready(function() {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if(window.cordova && window.cordova.plugins.Keyboard) {
              cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if(window.StatusBar) {
              // org.apache.cordova.statusbar required
              StatusBar.styleDefault();
            }
          });
        })

        .config(function($stateProvider, $urlRouterProvider, RestangularProvider) {

          RestangularProvider.setBaseUrl('http://gdclite-api:8888/public/api/v1/');

          // RestangularProvider.setBaseUrl('http://laraveltest.gforceofficial.com/public/api/v1/');

           RestangularProvider.addResponseInterceptor(function(data, operation, what, url, response, deferred) {
              var extractedData;
              // .. to look for getList operations
              if (operation === "getList" || operation === "get") {
                // .. and handle the data and meta data
                extractedData = data.data;
              }
              else {
                extractedData = data;
              }
              return extractedData;
            });



          // Ionic uses AngularUI Router which uses the concept of states
          // Learn more here: https://github.com/angular-ui/ui-router
          // Set up the various states which the app can be in.
          // Each state's controller can be found in controllers.js
          $stateProvider

            // setup an abstract state for the tabs directive
            .state('tab', {
              url: "/tab",
              abstract: true,
              templateUrl: "app/layout/tabs.html"
            })
            .state('tab.classes', {
              url: '/classes',
              views: {
                'tab-classes': {
                  templateUrl: 'app/danceclasses/classes.html',
                  controller: 'DanceClassesCtrl as vm'
                }
              }
            })
            .state('tab.classDetail', {
              url: '/classDetail/:id',
              views: {
                'tab-classes': {
                  templateUrl: 'app/danceclasses/classDetail.html',
                  controller: 'DanceClassDetailCtrl as vm'
                }
              }
            })
            .state('tab.teachers', {
              url: '/teachers',
              views: {
                'tab-teachers': {
                  templateUrl: 'app/teachers/teachers.html',
                  controller: 'TeachersCtrl as vm'
                }
              }
            })
            .state('tab.teacherDetail', {
              url: "/teachers/:id",
              views: {
                "tab-teachers": {
                 templateUrl: "app/teachers/teacherDetail.html",
                 controller: 'TeacherDetailCtrl as vm'
                }
              }
            })
            .state('tab.locations', {
              url: '/locations',
              views: {
                'tab-locations': {
                  templateUrl: 'app/locations/locations.html',
                  controller: 'LocationsCtrl as vm'
                }
              }
            })
            .state('tab.locationMap', {
              url: '/locationMap/:id',
              views: {
                'tab-locations': {
                  templateUrl: 'app/locations/locationMap.html',
                  controller: 'LocationMapCtrl as vm'
                }
              }
            })
            .state('tab.about', {
              url: '/about',
              views: {
                'tab-about': {
                  templateUrl: 'app/about/about.html'
                }
              }
            })
            .state('tab.testview', {
              url: '/testview',
              views: {
                'tab-about': {
                  templateUrl: 'app/about/testview.html'
                }
              }
            })
            ;

          // if none of the above states are matched, use this as the fallback
          $urlRouterProvider.otherwise('/tab/classes');

    });

})();
// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('eNetMobile', ['ionic', 'mobiscroll-select', 'mobiscroll-datetime', 'mobiscroll-number'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

//Overwriting Ionic: Getting rid of the Text next to Back Button
.config(function($ionicConfigProvider) {
    $ionicConfigProvider.backButton.previousTitleText(false); //add .text('') to get rid of "Back"
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html",
        controller: 'menuCtrl'
  })

  .state('app.search', {
    url: "/search",
    views: {
      'menuContent': {
        templateUrl: "templates/search.html"
      }
    }
  })

  .state('app.paycheck', {
    url: "/paycheck",
    views: {
      'menuContent': {
        templateUrl: "templates/paycheck.html"
      }
    }
  })
    .state('app.submitTime', {
      url: "/submitTime",
      views: {
        'menuContent': {
          templateUrl: "templates/submitTime.html",
          controller: 'timeCtrl'
        }
      }
    })

    .state('login', {
      url: "/login",
      templateUrl: "templates/login.html",
      controller: 'loginCtrl'
    })

    .state('app.searchResult', {
        url: "/search/searchResult",
        views: {
            'menuContent': {
                templateUrl: "templates/searchResult.html",
                controller: 'searchResultCtrl'
            }
        }
    });

        // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');
});

angular.module('eNetMobile')
    .controller('loginCtrl', function($scope, $ionicModal, $timeout, $state) {
        // Form data for the login modal
        $scope.loginData = {};

        // Create the login modal that we will use later
        //$ionicModal.fromTemplateUrl('templates/login.html', {
        //    scope: $scope
        //}).then(function(modal) {
        //    $scope.modal = modal;
        //});

        // Triggered in the login modal to close it
        $scope.closeLogin = function() {
            //$scope.modal.hide();
        };

        // Open the login modal
        //$scope.login = function() {
        //    $scope.modal.show();
        //};

        // Perform the login action when the user submits the login form
        $scope.doLogin = function() {
            console.log('Doing login', $scope.loginData);
            $state.go("app.paycheck")
            // Simulate a login delay. Remove this and replace with your login
            // code if using a login system
            $timeout(function() {
                //$scope.closeLogin();
            }, 1000);
        };
    })

    .controller('timeCtrl', function($scope) {
      $scope.playlists = [
        { title: 'Reggae', id: 1 },
        { title: 'Chill', id: 2 },
        { title: 'Dubstep', id: 3 },
        { title: 'Indie', id: 4 },
        { title: 'Rap', id: 5 },
        { title: 'Cowbell', id: 6 }
      ];
    })

    .controller('PlaylistCtrl', function($scope, $stateParams) {
    })

    .controller('menuCtrl', function($scope, $ionicModal) {
        $scope.profile = {
            fName: '',
            lName: '',
            email: '',
            phone: ''
        };

        $ionicModal.fromTemplateUrl('templates/profile.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function(modal){
            $scope.modal = modal
        });

        $scope.openModal = function() {
            $scope.modal.show();
        };

        $scope.closeModal = function() {
            $scope.modal.hide();
        };

        $scope.$on('$destroy', function() {
            $scope.modal.remove();
        });
    });

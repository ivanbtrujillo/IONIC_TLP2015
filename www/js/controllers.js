angular.module('starter.controllers', ['ngMap'])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {


})

.controller('ClientesCtrl', function($scope, $http) {
  $http.get('http://www.w3schools.com/angular/customers.php').
    success(function(data) {
      $scope.clientes = data.records;
      console.log(JSON.stringify(data.records));
      console.log($scope.clientes);
    }).
    error(function(err) {
      console.log('ERROR: '+err);
    });

})

.controller('MapCtrl', function($scope) {

})

.controller('LinternaCtrl', function($scope,$cordovaFlashlight) {

  $scope.encender = function() {


    $cordovaFlashlight.switchOn()
        .then(
          function (success) { /* success */ },
          function (error) { /* error */ });
  }

  $scope.apagar = function() {


    $cordovaFlashlight.switchOff()
      .then(
        function (success) { /* success */ },
        function (error) { /* error */ });
  }

});

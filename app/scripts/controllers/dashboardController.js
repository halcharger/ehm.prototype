angular.module('EHM')
  .controller('DashboardController',
  function (productService, $scope) {

    $scope.products = productService.products;

  });
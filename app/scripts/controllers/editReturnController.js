angular.module('EHM')
  .controller('EditReturnController',
  function (productService, $scope) {

    $scope.products = productService.products;

  });

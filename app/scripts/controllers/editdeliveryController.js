angular.module('EHM')
  .controller('EditDeliveryController',
  function (productService, $scope) {

    $scope.products = productService.products;

  });

angular.module('EHM')
  .controller('EditQuoteController',
  function (productService, $scope) {

    $scope.products = productService.products;

  });

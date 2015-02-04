angular.module('EHM')
  .controller('ModalInstanceController',
  function ($scope, $modalInstance, productService) {

    $scope.products = productService.products;

    $scope.ok = function () {
    $modalInstance.close();
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
});

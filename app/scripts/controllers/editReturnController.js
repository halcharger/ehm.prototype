angular.module('EHM')
  .controller('EditReturnController',
  function (productService, $scope, $modal) {

    $scope.products = productService.products;

    $scope.openEdit = function (size) {
      var modalInstance = $modal.open({
        templateUrl: 'editReturnLineItemModalContent.html',
        controller: 'ModalInstanceController',
        size: size
      });
    };

    $scope.openDelete = function (size) {
      var modalInstance = $modal.open({
        templateUrl: 'deleteReturnLineItemModalContent.html',
        controller: 'ModalInstanceController',
        size: size
      });
    };


  });

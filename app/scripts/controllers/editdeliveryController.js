angular.module('EHM')
  .controller('EditDeliveryController',
  function (productService, $scope, $modal) {

    $scope.products = productService.products;
    $scope.selectedProduct = 'Kwikstage 152x76 J Head Spigot';

    $scope.openEdit = function (size) {
      var modalInstance = $modal.open({
        templateUrl: 'editDeliveryLineItemModalContent.html',
        controller: 'ModalInstanceController',
        size: size
      });
    };

    $scope.openDelete = function (size) {
      var modalInstance = $modal.open({
        templateUrl: 'deleteDeliveryLineItemModalContent.html',
        controller: 'ModalInstanceController',
        size: size
      });
    };

  });

angular.module('EHM')
  .controller('EditQuoteController',
  function (productService, $scope, $modal) {

    $scope.products = productService.products;

    $scope.openEdit = function (size) {
      var modalInstance = $modal.open({
        templateUrl: 'editQuoteLineItemModalContent.html',
        controller: 'ModalInstanceController',
        size: size
      });
    };

    $scope.openDelete = function (size) {
      var modalInstance = $modal.open({
        templateUrl: 'deleteQuoteLineItemModalContent.html',
        controller: 'ModalInstanceController',
        size: size
      });
    };


  });

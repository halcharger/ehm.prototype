'use strict';

angular.module('EHM')
  .controller('MovementsController',
  function ($scope, $modal, $log) {

    $scope.items = ['item1', 'item2', 'item3'];

    $scope.open = function (size) {
      console.log('opening modal...');
      var modalInstance = $modal.open({
        templateUrl: 'viewMovementModalContent.html',
        controller: 'ModalInstanceController',
        size: size,
        resolve: {
          items: function () {
            return $scope.items;
          }
        }
      });

      modalInstance.result.then(function (selectedItem) {
        $scope.selected = selectedItem;
      }, function () {
        $log.info('Modal dismissed at: ' + new Date());
      });
    };
  });

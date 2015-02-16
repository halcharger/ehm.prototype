angular.module('EHM')
  .controller('DashboardController',
  function (productService, $scope) {

    $scope.products = productService.products;

    $scope.chartObject = {
      "type": "LineChart",
      "displayed": true,
      "data": {
        "cols": [
          {
            "id": "week",
            "label": "Week",
            "type": "string",
            "p": {}
          },
          {
            "id": "balance-id",
            "label": "Balance",
            "type": "number",
            "p": {}
          }
        ],
        "rows": [
          {"c": [{"v": "Week 1"},{"v": 19}]},
          {"c": [{"v": "Week 2"},{"v": 43}]},
          {"c": [{"v": "Week 3"},{"v": 64}]},
          {"c": [{"v": "Week 4"},{"v": 75}]},
          {"c": [{"v": "Week 5"},{"v": 89}]},
          {"c": [{"v": "Week 6"},{"v": 80}]},
          {"c": [{"v": "Week 7"},{"v": 75}]},
          {"c": [{"v": "Week 8"},{"v": 62}]}
        ]
      },
      "options": {
        "isStacked": "true",
        "fill": 20,
        "displayExactValues": true,
        "vAxis": {
          "title": "Balance",
          "gridlines": {
            "count": 10
          }
        },
        "hAxis": {
          "title": "Date"
        }
      },
      "formatters": {}
    }
  });

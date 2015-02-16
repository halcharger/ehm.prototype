angular.module('EHM')
  .controller('DashboardController',
  function (productService, $scope) {

    $scope.products = productService.products;

    $scope.chart = {
      "type": "ColumnChart",
      "cssStyle": "height:200px; width:300px;",
      "data": {
        "cols": [
          {
            "id": "measurement",
            "label": "Measurement",
            "type": "string",
            "p": {}
          },
          {
            "id": "delivered-id",
            "label": "Delivered",
            "type": "number",
            "p": {}
          },
          {
            "id": "outstanding-id",
            "label": "Outstanding",
            "type": "number",
            "p": {}
          }
        ],
        "rows": [
          {
            "c": [
              {
                "v": "Qty"
              },
              {
                "v": 75,
                "f": "42 items"
              },
              {
                "v": 25,
                "f": "12 items"
              }
            ]
          },
          {
            "c": [
              {
                "v": "Meters Squared"
              },
              {
                "v": 73,
                "f": "450 meters squared"
              },
              {
                "v": 27,
                "f": "112 meters squared"
              },
              {
                "v": 12
              },
              {
                "v": 2
              }
            ]
          },
          {
            "c": [
              {
                "v": "Tonnage"
              },
              {
                "v": 84,
                "f": "24 tonnes"
              },
              {
                "v": 16,
                "f": "6 tonnes"
              }
            ]
          }
        ]
      },
      "options": {
        "isStacked": "true",
        legend: { position: 'top' },
        "fill": 20,
        "displayExactValues": true,
        "vAxis": {
          "title": "%",
          "gridlines": {
            "count": 6
          }
        },
        "hAxis": {
          "title": "Measurement"
        }
      },
      "formatters": {},
      "displayed": true
    }

    $scope.chartObject = {
      "type": "LineChart",
      "displayed": true,
      "curveType": "function",
      "data": {
        "cols": [
          {
            "id": "week",
            "label": "Week",
            "type": "string",
            "p": {}
          },
          {
            "id": "tonnage-id",
            "label": "Tonnage",
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
        "legend": { position: 'top' },
        "curveType":"function",
        "fill": 20,
        "displayExactValues": true,
        "height":300,
        "hAxis.maxTextLines":1,
        "vAxis": {
          "title": "Balance",
          "gridlines": {
            "count": 6
          }
        },
        "hAxis": {
          "title": ""
        }
      },
      "formatters": {}
    }
  });

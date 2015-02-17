angular.module('EHM')
  .controller('OnsiteBalanceOverTimeController',
  function ($scope) {

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
        "colors":['#578ebe', '#e04a49', '#44b6ae'],
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

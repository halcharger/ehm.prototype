angular.module('EHM')
  .controller('PercentageDeliveredController',
  function ($scope) {

    $scope.chart = {
      "type": "ColumnChart",
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
            "type": "number"
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
        "colors":['#578ebe', '#e04a49', '#44b6ae'],
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

  });

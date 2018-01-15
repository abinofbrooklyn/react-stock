"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

var _actionTypes = require("../actions/actionTypes");

var apiMiddleware = function apiMiddleware(_ref) {
  var dispatch = _ref.dispatch,
      getState = _ref.getState;
  return function (next) {
    return function (action) {
      if (action.type !== _actionTypes.ADD_STOCK) {
        return next(action);
      }
      var API_KEY = "F080D7PBWUWT4LP0";
      var url = "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=" + action.stockSymbol + "&apikey=" + API_KEY;

      fetch(url).then(function (response) {
        return response.json();
      }).then(function (json) {
        var lastDate = json["Meta Data"]["3. Last Refreshed"];
        var lastClosingPrice = json["Time Series (Daily)"][lastDate]["4. close"];

        return next(_extends({}, action, { stockPrice: lastClosingPrice }));
      });
    };
  };
};

exports.default = apiMiddleware;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pZGRsZXdhcmUvYXBpTWlkZGxld2FyZS5qcyJdLCJuYW1lcyI6WyJhcGlNaWRkbGV3YXJlIiwiZGlzcGF0Y2giLCJnZXRTdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJuZXh0IiwiQVBJX0tFWSIsInVybCIsInN0b2NrU3ltYm9sIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwibGFzdERhdGUiLCJsYXN0Q2xvc2luZ1ByaWNlIiwic3RvY2tQcmljZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLElBQU0sZ0JBQWdCLFNBQWhCLEFBQWdCLG9CQUFBO01BQUcsQUFBSCxnQkFBRyxBQUFIO01BQWEsQUFBYixnQkFBYSxBQUFiO1NBQTRCLGdCQUFBO1dBQVEsa0JBQVUsQUFDbEU7VUFBSSxPQUFPLEFBQVAsc0JBQUosV0FBK0IsQUFDN0I7ZUFBTyxLQUFLLEFBQUwsQUFBUCxBQUNEO0FBQ0Q7VUFBTSxVQUFVLEFBQWhCLEFBQ0E7VUFBTSwrRUFBNkUsT0FBTyxBQUFwRiwyQkFBMEcsQUFBaEgsQUFFQTs7WUFBTSxBQUFOLEtBQVcsQUFBWCxLQUFpQixvQkFBQTtlQUFZLFNBQVMsQUFBVCxBQUFaO0FBQWpCLFNBQThDLEFBQTlDLEtBQW9ELGdCQUFRLEFBQ3hEO1lBQU0sV0FBVyxLQUFLLEFBQUwsYUFBa0IsQUFBbEIsQUFBakIsQUFDQTtZQUFNLG1CQUFtQixLQUFLLEFBQUwsdUJBQTRCLEFBQTVCLFVBQXNDLEFBQXRDLEFBQXpCLEFBRUE7O2VBQU8sa0JBQVUsQUFBVixVQUFrQixZQUFZLEFBQTlCLEFBQVAsQUFDRDtBQUxILEFBTUQ7QUFiaUQ7QUFBNUI7QUFBdEI7O2tCQWVlLEEiLCJmaWxlIjoiYXBpTWlkZGxld2FyZS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvYWJpbmFicmFoYW0vY29kZS9yZWFjdC1zdG9jay1hcHAifQ==
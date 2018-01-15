"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actionTypes = require("../actions/actionTypes");

function _toConsumableArray(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }return arr2;
  } else {
    return Array.from(arr);
  }
}

var stocksReducer = function stocksReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments[1];

  switch (action.type) {
    case _actionTypes.ADD_STOCK:
      return [].concat(_toConsumableArray(state), [{ symbol: action.stockSymbol, price: action.stockPrice }]);
    case _actionTypes.DELETE_STOCK:
      return state.filter(function (stock) {
        return stock.symbol !== action.stockSymbol;
      });
    default:
      return state;
  }
};

exports.default = stocksReducer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZHVjZXJzL3N0b2Nrc1JlZHVjZXIuanMiXSwibmFtZXMiOlsic3RvY2tzUmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsInN5bWJvbCIsInN0b2NrU3ltYm9sIiwicHJpY2UiLCJzdG9ja1ByaWNlIiwiZmlsdGVyIiwic3RvY2siXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNLGdCQUFnQixTQUFoQixBQUFnQixnQkFBc0I7TUFBckIsQUFBcUIsNEVBQWYsQUFBZTtNQUFYLEFBQVcsbUJBRTFDOztVQUFRLE9BQVIsQUFBZSxBQUNiO3NCQUNFOzBDQUFBLEFBQVksU0FBTyxFQUFFLFFBQVEsT0FBVixBQUFpQixhQUFhLE9BQU8sT0FBeEQsQUFBbUIsQUFBNEMsQUFDakU7c0JBQ0U7bUJBQU8sQUFBTSxPQUFRLGlCQUFBO2VBQVMsTUFBQSxBQUFNLFdBQVcsT0FBMUIsQUFBaUM7QUFBdEQsQUFBTyxBQUNULE9BRFM7QUFFUDthQU5KLEFBTUksQUFBTyxBQUVaOztBQVZEOztrQkFZZSxBIiwiZmlsZSI6InN0b2Nrc1JlZHVjZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2FiaW5hYnJhaGFtL2NvZGUvcmVhY3Qtc3RvY2stYXBwIn0=
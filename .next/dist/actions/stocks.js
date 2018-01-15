"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addStock = addStock;
exports.deleteStock = deleteStock;

var _actionTypes = require("./actionTypes");

function addStock(stockSymbol) {
  return {
    type: _actionTypes.ADD_STOCK,
    stockSymbol: stockSymbol
  };
}

function deleteStock(stockSymbol) {
  return {
    type: _actionTypes.DELETE_STOCK,
    stockSymbol: stockSymbol
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjdGlvbnMvc3RvY2tzLmpzIl0sIm5hbWVzIjpbImFkZFN0b2NrIiwiZGVsZXRlU3RvY2siLCJzdG9ja1N5bWJvbCIsInR5cGUiXSwibWFwcGluZ3MiOiI7Ozs7O1FBRWdCLEEsVyxBQUFBO1EsQUFPQSxjQUFBLEE7O0FBVGhCOztBQUVPLFNBQUEsQUFBUyxTQUFULEFBQWtCLGFBQWEsQUFDcEM7O3VCQUFPLEFBRUw7aUJBRkYsQUFBTyxBQUlSO0FBSlEsQUFDTDs7O0FBS0csU0FBQSxBQUFTLFlBQVQsQUFBcUIsYUFBYSxBQUN2Qzs7dUJBQU8sQUFFTDtpQkFGRixBQUFPLEFBSVI7QUFKUSxBQUNMIiwiZmlsZSI6InN0b2Nrcy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvYWJpbmFicmFoYW0vY29kZS9yZWFjdC1zdG9jay1hcHAifQ==
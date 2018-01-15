'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _StockApp = require('../components/StockApp');

var _StockApp2 = _interopRequireDefault(_StockApp);

var _store = require('../store');

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = function () {
  return _react2.default.createElement(_reactRedux.Provider, { store: _store2.default }, _react2.default.createElement(_StockApp2.default, null));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7a0JBRWUsWUFBQTtTQUFNLGdCQUFBLDBCQUFBLFlBQVUsZUFBVixBQUNuQiw2REFEbUIsQUFBTjtBIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9hYmluYWJyYWhhbS9jb2RlL3JlYWN0LXN0b2NrLWFwcCJ9
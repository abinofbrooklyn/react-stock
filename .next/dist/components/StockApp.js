'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require("react-redux");

var _stocks = require('../actions/stocks');

var _DisplayedStock = require('./DisplayedStock');

var _DisplayedStock2 = _interopRequireDefault(_DisplayedStock);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var StockApp = function (_React$Component) {
  _inherits(StockApp, _React$Component);

  function StockApp() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, StockApp);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = StockApp.__proto__ || Object.getPrototypeOf(StockApp)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      stockSymbol: ""
    }, _this.handleChange = function (e) {
      _this.setState({ stockSymbol: e.target.value });
    }, _this.handleClick = function (e) {
      _this.props.dispatch((0, _stocks.addStock)(_this.state.stockSymbol));
      _this.setState({ stockSymbol: "" });
    }, _this.handleDelete = function (stock) {
      _this.props.dispatch((0, _stocks.deleteStock)(stock.symbol));
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(StockApp, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement('div', null, _react2.default.createElement('h3', null, 'Stock App'), _react2.default.createElement('input', { value: this.state.stockSymbol, onChange: this.handleChange }), _react2.default.createElement('button', { onClick: this.handleClick }, 'Add Stock'), _react2.default.createElement('ul', null, this.props.stocks.map(function (stock) {
        return _react2.default.createElement(_DisplayedStock2.default, { stock: stock, onDelete: _this2.handleDelete });
      })));
    }
  }]);

  return StockApp;
}(_react2.default.Component);

function mapStateToProps(storeState, componentProps) {
  return {
    stocks: storeState.stocks
  };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(StockApp);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvU3RvY2tBcHAuanMiXSwibmFtZXMiOlsiU3RvY2tBcHAiLCJzdGF0ZSIsInN0b2NrU3ltYm9sIiwiaGFuZGxlQ2hhbmdlIiwiZSIsInNldFN0YXRlIiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVDbGljayIsInByb3BzIiwiZGlzcGF0Y2giLCJoYW5kbGVEZWxldGUiLCJzdG9jayIsInN5bWJvbCIsInN0b2NrcyIsIm1hcCIsIkNvbXBvbmVudCIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0b3JlU3RhdGUiLCJjb21wb25lbnRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0ksQUFFTTs7Ozs7Ozs7Ozs7Ozs7MExBQ0osQTttQkFBUSxBLEFBQ087QUFEUCxBQUNOLGEsQUFHRixlQUFlLFVBQUEsQUFBQyxHQUFNLEFBQ3BCO1lBQUEsQUFBSyxTQUFTLEVBQUUsYUFBYSxFQUFBLEFBQUUsT0FBL0IsQUFBYyxBQUF3QixBQUN2QztBLGFBRUQsQSxjQUFjLFVBQUEsQUFBQyxHQUFNLEFBQ25CO1lBQUEsQUFBSyxNQUFMLEFBQVcsU0FBUyxzQkFBUyxNQUFBLEFBQUssTUFBbEMsQUFBb0IsQUFBb0IsQUFDeEM7WUFBQSxBQUFLLFNBQVMsRUFBRSxhQUFoQixBQUFjLEFBQWUsQUFDOUI7QSxhQUVELEEsZUFBZSxVQUFBLEFBQUMsT0FBVSxBQUN4QjtZQUFBLEFBQUssTUFBTCxBQUFXLFNBQVMseUJBQVksTUFBaEMsQUFBb0IsQUFBa0IsQUFDdkM7QTs7Ozs7NkJBRU87bUJBQ047OzZCQUNFLGNBQUEsT0FDRSxzQkFBQSxjQUFBLE1BQUEsTUFERixBQUNFLEFBQ0EsdURBQU8sT0FBTyxLQUFBLEFBQUssTUFBbkIsQUFBeUIsYUFBYSxVQUFVLEtBRmxELEFBRUUsQUFBcUQsQUFDckQsaUNBQUEsY0FBQSxZQUFRLFNBQVMsS0FBakIsQUFBc0IsZUFIeEIsQUFHRSxBQUNBLDhCQUFBLGNBQUEsTUFDSSxXQUFBLEFBQUssTUFBTCxBQUFXLE9BQVgsQUFBa0IsSUFBSyxpQkFBUyxBQUNoQztlQUFPLDBEQUFnQixPQUFoQixBQUF1QixPQUFPLFVBQVUsT0FBL0MsQUFBTyxBQUE2QyxBQUNyRDtBQVJQLEFBQ0UsQUFJRSxBQUNJLEFBTVQsU0FYRzs7Ozs7RUFwQmlCLGdCQUFNLEE7O0FBa0M3QixTQUFBLEFBQVMsZ0JBQVQsQUFBeUIsWUFBekIsQUFBcUMsZ0JBQWdCLEFBQ25EOztZQUNVLFdBRFYsQUFBTyxBQUNjLEFBRXRCO0FBSFEsQUFDTDs7O2tCQUlXLHlCQUFBLEFBQVEsaUJBQVIsQUFBeUIsQSIsImZpbGUiOiJTdG9ja0FwcC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvYWJpbmFicmFoYW0vY29kZS9yZWFjdC1zdG9jay1hcHAifQ==
webpackHotUpdate(5,{

/***/ 393:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(405);

var _stocks = __webpack_require__(433);

var _DisplayedStock = __webpack_require__(436);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/abinabraham/code/react-stock-app/components/StockApp.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/abinabraham/code/react-stock-app/components/StockApp.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5jM2Q1MzI3MGM1ZGJkMGE0YWFlOS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TdG9ja0FwcC5qcz8wNzg2MjA5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgYWRkU3RvY2ssIGRlbGV0ZVN0b2NrIH0gZnJvbSBcIi4uL2FjdGlvbnMvc3RvY2tzXCI7XG5pbXBvcnQgRGlzcGxheWVkU3RvY2sgIGZyb20gXCIuL0Rpc3BsYXllZFN0b2NrXCI7XG5cbmNsYXNzIFN0b2NrQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHsgXG4gIHN0YXRlID0ge1xuICAgIHN0b2NrU3ltYm9sOiBcIlwiXG4gIH07XG4gIFxuICBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBzdG9ja1N5bWJvbDogZS50YXJnZXQudmFsdWUgfSk7XG4gIH07XG4gIFxuICBoYW5kbGVDbGljayA9IChlKSA9PiB7XG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaChhZGRTdG9jayh0aGlzLnN0YXRlLnN0b2NrU3ltYm9sKSk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHN0b2NrU3ltYm9sOiBcIlwiIH0pO1xuICB9XG4gIFxuICBoYW5kbGVEZWxldGUgPSAoc3RvY2spID0+IHtcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKGRlbGV0ZVN0b2NrKHN0b2NrLnN5bWJvbCkpO1xuICB9XG4gIFxuICByZW5kZXIoKXtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGgzPlN0b2NrIEFwcDwvaDM+XG4gICAgICAgIDxpbnB1dCB2YWx1ZT17dGhpcy5zdGF0ZS5zdG9ja1N5bWJvbH0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfS8+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5oYW5kbGVDbGlja30+QWRkIFN0b2NrPC9idXR0b24+XG4gICAgICAgIDx1bD5cbiAgICAgICAgICB7IHRoaXMucHJvcHMuc3RvY2tzLm1hcCggc3RvY2sgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIDxEaXNwbGF5ZWRTdG9jayBzdG9jaz17c3RvY2t9IG9uRGVsZXRlPXt0aGlzLmhhbmRsZURlbGV0ZX0gLz47XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2Rpdj5cbiAgICApOyBcbiAgfVxufVxuXG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoc3RvcmVTdGF0ZSwgY29tcG9uZW50UHJvcHMpIHtcbiAgcmV0dXJuIHsgXG4gICAgc3RvY2tzOiBzdG9yZVN0YXRlLnN0b2NrcyBcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKFN0b2NrQXBwKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL1N0b2NrQXBwLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdBO0FBSUE7QUFHQTtBQUNBO0FBQ0E7QUFHQTtBQUNBOzs7Ozs7QUFHQTtBQUNBO0FBQ0E7QUFBQTtBQU1BO0FBS0E7Ozs7O0FBL0JBO0FBQ0E7QUFpQ0E7O0FBRUE7QUFBQTs7O0FBSUE7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
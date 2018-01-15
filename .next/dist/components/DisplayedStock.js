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

var DisplayedStock = function (_React$Component) {
  _inherits(DisplayedStock, _React$Component);

  function DisplayedStock() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, DisplayedStock);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = DisplayedStock.__proto__ || Object.getPrototypeOf(DisplayedStock)).call.apply(_ref, [this].concat(args))), _this), _this.handleDelete = function () {
      _this.props.onDelete(_this.props.stock);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(DisplayedStock, [{
    key: 'render',
    value: function render() {
      var stock = this.props.stock;

      return _react2.default.createElement('li', { key: stock.symbol }, stock.symbol, ' ', stock.price, ' ', _react2.default.createElement('button', { onClick: this.handleDelete }, 'X'));
    }
  }]);

  return DisplayedStock;
}(_react2.default.Component);

exports.default = DisplayedStock;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvRGlzcGxheWVkU3RvY2suanMiXSwibmFtZXMiOlsiRGlzcGxheWVkU3RvY2siLCJoYW5kbGVEZWxldGUiLCJwcm9wcyIsIm9uRGVsZXRlIiwic3RvY2siLCJzeW1ib2wiLCJwcmljZSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVNLEE7Ozs7Ozs7Ozs7Ozs7O3NNQUNGLEEsZUFBZSxZQUFNLEFBQ25CO1lBQUssQUFBTCxNQUFXLEFBQVgsU0FBb0IsTUFBSyxBQUFMLE1BQVcsQUFBL0IsQUFDRDtBOzs7Ozs2QkFFUTtVQUNDLEFBREQsUUFDVyxLQUFLLEFBRGhCLE1BQ0MsQUFERCxBQUdQOzthQUNFLGdCQUFBLGNBQUEsUUFBSSxLQUFLLE1BQU0sQUFBZixBQUNHLGdCQUFNLEFBRFQsUUFDa0IsV0FBTSxBQUR4QixPQUMrQixxQkFBQSxjQUFBLFlBQVEsU0FBUyxLQUFLLEFBQXRCLGdCQUFBLEFBRC9CLEFBREYsQUFLRDs7Ozs7RUFid0IsZ0JBQU0sQTs7a0JBZ0JwQixBIiwiZmlsZSI6IkRpc3BsYXllZFN0b2NrLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9hYmluYWJyYWhhbS9jb2RlL3JlYWN0LXN0b2NrLWFwcCJ9
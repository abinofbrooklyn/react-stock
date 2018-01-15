'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = require('redux');

var _reducers = require('./reducers');

var _reducers2 = _interopRequireDefault(_reducers);

var _apiMiddleware = require('./middleware/apiMiddleware');

var _apiMiddleware2 = _interopRequireDefault(_apiMiddleware);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

var initialState = {
    stocks: []
};

var composeEnhancers = void 0;

if (process.env.NODE_ENV !== 'production' && typeof window !== "undefined") {
    composeEnhancers = window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || _redux.compose;
} else {
    composeEnhancers = _redux.compose;
}

var store = (0, _redux.createStore)(_reducers2.default, initialState, composeEnhancers((0, _redux.applyMiddleware)(_apiMiddleware2.default)));
exports.default = store;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0b3JlLmpzIl0sIm5hbWVzIjpbImluaXRpYWxTdGF0ZSIsInN0b2NrcyIsImNvbXBvc2VFbmhhbmNlcnMiLCJwcm9jZXNzIiwiZW52IiwiTk9ERV9FTlYiLCJ3aW5kb3ciLCJfX1JFRFVYX0RFVlRPT0xTX0VYVEVOU0lPTl9DT01QT1NFX18iLCJzdG9yZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7QUFFQSxJQUFJO1lBQUosQUFBbUIsQUFDVjtBQURVLEFBQ2pCOztBQUdGLElBQUksd0JBQUo7O0FBRUEsSUFBSSxRQUFBLEFBQVEsSUFBUixBQUFZLGFBQVosQUFBeUIsZ0JBQWdCLE9BQUEsQUFBTyxXQUFwRCxBQUErRCxhQUFhLEFBQ3hFO3VCQUFvQixVQUFVLE9BQVgsQUFBa0IsK0NBQXJDLEFBQ0g7QUFGRCxPQUVPLEFBQ0g7OEJBQ0g7OztBQUVELElBQUksUUFBUSw0Q0FBQSxBQUF5QixjQUFjLGlCQUFpQiw0Q0FBcEUsQUFBWSxBQUF1QztrQkFDcEMsQSIsImZpbGUiOiJzdG9yZS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvYWJpbmFicmFoYW0vY29kZS9yZWFjdC1zdG9jay1hcHAifQ==
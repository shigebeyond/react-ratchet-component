'use strict';

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _extends = require('babel-runtime/helpers/extends')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

exports.__esModule = true;

var _Modal2 = require('./Modal');

var _Modal3 = _interopRequireDefault(_Modal2);

var ActionSheet = (function (_Modal) {
  _inherits(ActionSheet, _Modal);

  function ActionSheet() {
    _classCallCheck(this, ActionSheet);

    _Modal.apply(this, arguments);
  }

  _createClass(ActionSheet, null, [{
    key: 'defaultProps',
    value: _extends({}, _Modal3['default'].defaultProps, {
      ratClass: 'actionsheet'
    }),
    enumerable: true
  }]);

  return ActionSheet;
})(_Modal3['default']);

exports['default'] = ActionSheet;
module.exports = exports['default'];
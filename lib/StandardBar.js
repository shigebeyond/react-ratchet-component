'use strict';

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

exports.__esModule = true;

var _utilsStyleMaps = require('./utils/styleMaps');

var _NavBar2 = require('./NavBar');

var _NavBar3 = _interopRequireDefault(_NavBar2);

var StandardBar = (function (_NavBar) {
  _inherits(StandardBar, _NavBar);

  function StandardBar() {
    _classCallCheck(this, StandardBar);

    _NavBar.apply(this, arguments);
  }

  return StandardBar;
})(_NavBar3['default']);

StandardBar.defaultProps = {
  ratClass: 'bar',
  ratStyle: _utilsStyleMaps.BAR_STYLES.STANDARD
};

exports['default'] = StandardBar;
module.exports = exports['default'];
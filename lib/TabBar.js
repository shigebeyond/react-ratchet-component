'use strict';

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

exports.__esModule = true;

var _utilsStyleMaps = require('./utils/styleMaps');

var _NavBar2 = require('./NavBar');

var _NavBar3 = _interopRequireDefault(_NavBar2);

var _TabItem = require('./TabItem');

var _TabItem2 = _interopRequireDefault(_TabItem);

var TabBar = (function (_NavBar) {
  _inherits(TabBar, _NavBar);

  function TabBar() {
    _classCallCheck(this, TabBar);

    _NavBar.apply(this, arguments);
  }

  return TabBar;
})(_NavBar3['default']);

TabBar.defaultProps = {
  ratClass: 'bar',
  ratStyle: _utilsStyleMaps.BAR_STYLES.TAB
};

TabBar.Item = _TabItem2['default'];

exports['default'] = TabBar;
module.exports = exports['default'];
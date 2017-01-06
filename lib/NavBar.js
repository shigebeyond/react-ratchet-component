define('src/NavBar.jsx', function(require, exports, module) {

  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
      value: true
  });
  
  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
  
  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
  
  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
  
  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
  
  var _react = require('node_modules/react/react');
  
  var _react2 = _interopRequireDefault(_react);
  
  var _classnames = require('node_modules/classnames/index');
  
  var _classnames2 = _interopRequireDefault(_classnames);
  
  var _utilsComponentDecorators = require('src/utils/componentDecorators');
  
  var _utilsRatchetUtils = require('src/utils/ratchetUtils');
  
  var _utilsRatchetUtils2 = _interopRequireDefault(_utilsRatchetUtils);
  
  var _utilsStyleMaps = require('src/utils/styleMaps');
  
  var _NavTitle = require('src/NavTitle.jsx');
  
  var _NavTitle2 = _interopRequireDefault(_NavTitle);
  
  var NavBar = (function (_React$Component) {
      _inherits(NavBar, _React$Component);
  
      function NavBar() {
          _classCallCheck(this, _NavBar);
  
          _get(Object.getPrototypeOf(_NavBar.prototype), 'constructor', this).apply(this, arguments);
      }
  
      _createClass(NavBar, [{
          key: 'render',
          value: function render() {
              var title = undefined,
                  children = this.props.children,
                  classes = _utilsRatchetUtils2['default'].getClassSet(this.props),
                  child = undefined;
  
              console.log("render.......", children);
  
              //从this.props.children取出navbar的title，在渲染时，方便添加特定样式
              if (Array.isArray(children)) {
  
                  for (var i = 0; i < children.length; i++) {
                      child = children[i];
                      if (typeof child === 'string') {
                          title = child;
                          children.splice(i, 1);
                          break;
                      }
                  };
              } else {
                  //子节点只有一个的时候，且是string，把它设为title
                  if (typeof children === 'string') {
                      title = children;
                      children = null;
                  }
              }
  
              console.log('render.', title);
  
              return _react2['default'].createElement(
                  'nav',
                  _extends({}, this.props, {
                      className: (0, _classnames2['default'])(classes, this.props.className) }),
                  children,
                  title ? _react2['default'].createElement(
                      _NavTitle2['default'],
                      null,
                      title
                  ) : null
              );
          }
      }]);
  
      var _NavBar = NavBar;
      NavBar = (0, _utilsComponentDecorators.classesDecorator)('bar')(NavBar) || NavBar;
      NavBar = (0, _utilsComponentDecorators.stylesDecorator)(_utilsStyleMaps.BAR_STYLES.values(), 'nav')(NavBar) || NavBar;
      return NavBar;
  })(_react2['default'].Component);
  
  NavBar.Title = _NavTitle2['default'];
  
  exports['default'] = NavBar;
  module.exports = exports['default'];

});

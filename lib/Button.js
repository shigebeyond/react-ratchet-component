define('src/Button.jsx', function(require, exports, module) {

  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
      value: true
  });
  
  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  
  var _react = require('node_modules/react/react');
  
  var _react2 = _interopRequireDefault(_react);
  
  var _classnames = require('node_modules/classnames/index');
  
  var _classnames2 = _interopRequireDefault(_classnames);
  
  var _Icon = require('src/Icon.jsx');
  
  var _Icon2 = _interopRequireDefault(_Icon);
  
  var _Badge = require('src/Badge.jsx');
  
  var _Badge2 = _interopRequireDefault(_Badge);
  
  var _utilsComponentDecorators = require('src/utils/componentDecorators');
  
  var _utilsRatchetUtils = require('src/utils/ratchetUtils');
  
  var _utilsRatchetUtils2 = _interopRequireDefault(_utilsRatchetUtils);
  
  var _utilsStyleMaps = require('src/utils/styleMaps');
  
  var Button = _react2['default'].createClass({
      displayName: 'Button',
  
      propTypes: {
          block: _react2['default'].PropTypes.bool,
          href: _react2['default'].PropTypes.string,
          target: _react2['default'].PropTypes.string,
          type: _react2['default'].PropTypes.oneOf(['button', 'reset', 'submit'])
      },
      getDefaultProps: function getDefaultProps() {
          return {
              block: false,
              outlined: false
          };
      },
  
      render: function render() {
          var _extends2;
  
          var classes = _utilsRatchetUtils2['default'].getClassSet(this.props);
          var blockClass = _utilsRatchetUtils2['default'].prefix(this.props, 'block');
          var outlinedClass = _utilsRatchetUtils2['default'].prefix(this.props, 'outlined');
          var renderFuncName = undefined;
  
          classes = _extends({}, classes, (_extends2 = {}, _defineProperty(_extends2, blockClass, this.props.block), _defineProperty(_extends2, outlinedClass, this.props.outlined), _extends2));
  
          renderFuncName = this.props.ratStyle === _utilsStyleMaps.BUTTON_STYLES.LINK || this.props.href === '' || this.props.href || this.props.target ? 'renderAnchor' : 'renderButton';
          return this[renderFuncName](classes);
      },
  
      renderAnchor: function renderAnchor(classes) {
          var Component = this.props.eleType || 'a';
          var href = this.props.href || 'javascript:;';
  
          return _react2['default'].createElement(
              Component,
              _extends({}, this.props, {
                  href: href,
                  className: (0, _classnames2['default'])(classes, this.props.className) }),
              this.props.children
          );
      },
  
      renderButton: function renderButton(classes) {
          var Component = this.props.eleType || 'button';
  
          return _react2['default'].createElement(
              Component,
              _extends({}, this.props, {
                  type: this.props.type || 'button',
                  className: (0, _classnames2['default'])(classes, this.props.className) }),
              this.props.children
          );
      }
  });
  
  exports['default'] = (0, _utilsComponentDecorators.stylesDecorator)(_utilsStyleMaps.BUTTON_STYLES.values(), (0, _utilsComponentDecorators.classesDecorator)('btn', Button));
  module.exports = exports['default'];

});

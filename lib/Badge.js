define('src/Badge.jsx', function(require, exports, module) {

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
  
  var _utilsComponentDecorators = require('src/utils/componentDecorators');
  
  var _utilsRatchetUtils = require('src/utils/ratchetUtils');
  
  var _utilsRatchetUtils2 = _interopRequireDefault(_utilsRatchetUtils);
  
  var _utilsStyleMaps = require('src/utils/styleMaps');
  
  var Badge = _react2['default'].createClass({
      displayName: 'Badge',
  
      getDefaultProps: function getDefaultProps() {
          return {
              inverted: false
          };
      },
  
      render: function render() {
          var Component = this.props.eleType || 'span';
          var classes = _utilsRatchetUtils2['default'].getClassSet(this.props);
          var invertedClass = _utilsRatchetUtils2['default'].prefix(this.props, 'inverted');
          classes = _extends(_defineProperty({}, invertedClass, this.props.inverted), classes);
  
          return _react2['default'].createElement(
              Component,
              _extends({}, this.props, {
                  className: (0, _classnames2['default'])(classes, this.props.className) }),
              this.props.children
          );
      }
  });
  
  exports['default'] = (0, _utilsComponentDecorators.stylesDecorator)(_utilsStyleMaps.BADGE_STYLES.values(), (0, _utilsComponentDecorators.classesDecorator)('badge', Badge));
  module.exports = exports['default'];

});

define('src/SegmentedControl.jsx', function(require, exports, module) {

  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
      value: true
  });
  
  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _react = require('node_modules/react/react');
  
  var _react2 = _interopRequireDefault(_react);
  
  var _classnames = require('node_modules/classnames/index');
  
  var _classnames2 = _interopRequireDefault(_classnames);
  
  var _utilsRatchetUtils = require('src/utils/ratchetUtils');
  
  var _utilsRatchetUtils2 = _interopRequireDefault(_utilsRatchetUtils);
  
  var _Control = require('src/Control.jsx');
  
  var _Control2 = _interopRequireDefault(_Control);
  
  var SegmentedControl = _react2['default'].createClass({
      displayName: 'SegmentedControl',
  
      getDefaultProps: function getDefaultProps() {
          return {
              ratClass: 'segmented-control'
          };
      },
  
      render: function render() {
          var classes = _utilsRatchetUtils2['default'].getClassSet(this.props);
  
          return _react2['default'].createElement(
              'div',
              _extends({}, this.props, {
                  className: (0, _classnames2['default'])(classes, this.props.className) }),
              this.props.children
          );
      }
  });
  
  SegmentedControl.Control = _Control2['default'];
  
  exports['default'] = SegmentedControl;
  module.exports = exports['default'];

});

define('src/Control.jsx', function(require, exports, module) {

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
  
  var Control = _react2['default'].createClass({
      displayName: 'Control',
  
      propTypes: {
          active: _react2['default'].PropTypes.bool
      },
  
      getDefaultProps: function getDefaultProps() {
          return {
              ratClass: 'control-item',
              active: false
          };
      },
  
      render: function render() {
          var activeClass = 'active',
              classes = _utilsRatchetUtils2['default'].getClassSet(this.props);
  
          classes[activeClass] = this.props.active;
  
          return _react2['default'].createElement(
              'a',
              _extends({}, this.props, {
                  className: (0, _classnames2['default'])(classes, this.props.className) }),
              this.props.children
          );
      }
  });
  
  exports['default'] = Control;
  module.exports = exports['default'];

});

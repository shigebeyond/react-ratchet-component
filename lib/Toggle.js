define('src/Toggle.jsx', function(require, exports, module) {

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
  
  var Toggle = _react2['default'].createClass({
      displayName: 'Toggle',
  
      propTypes: {
          active: _react2['default'].PropTypes.bool
      },
      render: function render() {
          var Component = this.props.eleType || 'div';
          var classes = {
              active: this.props.active
          };
  
          return _react2['default'].createElement(
              Component,
              _extends({}, this.props, {
                  className: (0, _classnames2['default'])('toggle', classes, this.props.className),
                  onClick: this.props.onClick }),
              _react2['default'].createElement('div', { className: 'toggle-handle' })
          );
      }
  });
  
  exports['default'] = Toggle;
  module.exports = exports['default'];

});

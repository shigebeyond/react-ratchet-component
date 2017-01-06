define('src/NavTitle.jsx', function(require, exports, module) {

  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _react = require('node_modules/react/react');
  
  var _react2 = _interopRequireDefault(_react);
  
  var _Icon = require('src/Icon.jsx');
  
  var _Icon2 = _interopRequireDefault(_Icon);
  
  var NavTitle = _react2['default'].createClass({
    displayName: 'NavTitle',
  
    propTypes: {
      icon: _react2['default'].PropTypes.string
    },
  
    render: function render() {
  
      return _react2['default'].createElement(
        'h1',
        _extends({}, this.props, {
          className: 'title' }),
        this.props.children,
        this.props.icon ? _react2['default'].createElement(_Icon2['default'], { ratStyle: this.props.icon }) : null
      );
    }
  });
  
  exports['default'] = NavTitle;
  module.exports = exports['default'];

});

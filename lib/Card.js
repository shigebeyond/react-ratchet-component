define('src/Card.jsx', function(require, exports, module) {

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
  
  var Card = _react2['default'].createClass({
      displayName: 'Card',
  
      render: function render() {
          var Component = this.props.eleType || 'div';
  
          return _react2['default'].createElement(
              Component,
              _extends({}, this.props, {
                  className: (0, _classnames2['default'])('card', this.props.className) }),
              this.props.children
          );
      }
  });
  
  exports['default'] = Card;
  module.exports = exports['default'];

});

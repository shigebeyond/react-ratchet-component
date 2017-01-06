define('src/List.jsx', function(require, exports, module) {

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
  
  var _ListItem = require('src/ListItem.jsx');
  
  var _ListItem2 = _interopRequireDefault(_ListItem);
  
  var List = _react2['default'].createClass({
      displayName: 'List',
  
      getDefaultProps: function getDefaultProps() {
          return {
              ratClass: 'table-view'
          };
      },
  
      render: function render() {
          return _react2['default'].createElement(
              'ul',
              _extends({}, this.props, {
                  className: (0, _classnames2['default'])(_utilsRatchetUtils2['default'].prefix(this.props), this.props.className) }),
              this.props.children
          );
      }
  });
  
  List.Item = _ListItem2['default'];
  
  exports['default'] = List;
  module.exports = exports['default'];

});

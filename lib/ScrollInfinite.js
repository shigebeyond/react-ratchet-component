define('src/ScrollInfinite.jsx', function(require, exports, module) {

  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
      value: true
  });
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _react = require('node_modules/react/react');
  
  var _react2 = _interopRequireDefault(_react);
  
  var ScrollInfinite = _react2['default'].createClass({
      displayName: 'ScrollInfinite',
  
      render: function render() {
          var wrapStyle = {
              display: 'none',
              textAlign: 'center',
              fontSize: '12px',
              height: '20px',
              lineHeight: '20px'
          };
  
          return _react2['default'].createElement(
              'div',
              { style: wrapStyle },
              '上滑加载更多...'
          );
      }
  });
  
  exports['default'] = ScrollInfinite;
  module.exports = exports['default'];

});

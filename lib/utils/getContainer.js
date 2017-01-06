define('src/utils/getContainer', function(require, exports, module) {

  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  exports['default'] = getContainer;
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _reactDom = require('node_modules/react-dom/index');
  
  var _reactDom2 = _interopRequireDefault(_reactDom);
  
  function getContainer(container, defaultContainer) {
    container = typeof container === 'function' ? container() : container;
    return _reactDom2['default'].findDOMNode(container) || defaultContainer;
  }
  
  module.exports = exports['default'];

});

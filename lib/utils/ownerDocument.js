define('src/utils/ownerDocument', function(require, exports, module) {

  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _reactDom = require('node_modules/react-dom/index');
  
  var _reactDom2 = _interopRequireDefault(_reactDom);
  
  var _domHelpersOwnerDocument = require('dom-helpers/ownerDocument');
  
  var _domHelpersOwnerDocument2 = _interopRequireDefault(_domHelpersOwnerDocument);
  
  exports['default'] = function (componentOrElement) {
    return (0, _domHelpersOwnerDocument2['default'])(_reactDom2['default'].findDOMNode(componentOrElement));
  };
  
  module.exports = exports['default'];

});

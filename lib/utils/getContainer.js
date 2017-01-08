'use strict';

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

exports.__esModule = true;
exports['default'] = getContainer;

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function getContainer(container, defaultContainer) {
  container = typeof container === 'function' ? container() : container;
  return _reactDom2['default'].findDOMNode(container) || defaultContainer;
}

module.exports = exports['default'];
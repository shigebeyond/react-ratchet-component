define('src/ListItem.jsx', function(require, exports, module) {

  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
      value: true
  });
  
  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
  
  var _react = require('node_modules/react/react');
  
  var _react2 = _interopRequireDefault(_react);
  
  var _classnames = require('node_modules/classnames/index');
  
  var _classnames2 = _interopRequireDefault(_classnames);
  
  var _Link = require('src/Link.jsx');
  
  var _Link2 = _interopRequireDefault(_Link);
  
  var ListItem = _react2['default'].createClass({
      displayName: 'ListItem',
  
      propTypes: {
          divider: _react2['default'].PropTypes.bool,
          navigate: _react2['default'].PropTypes.bool
      },
  
      getDefaultProps: function getDefaultProps() {
          return {
              divider: false,
              navigate: false
          };
      },
  
      render: function render() {
          var _props = this.props;
          var divider = _props.divider;
          var navigate = _props.navigate;
          var children = _props.children;
          var href = _props.href;
          var push = _props.push;
  
          var other = _objectWithoutProperties(_props, ['divider', 'navigate', 'children', 'href', 'push']);
  
          var navigateClass = 'navigate-right';
          var itemClass = divider ? 'table-view-divider' : 'table-view-cell';
  
          return _react2['default'].createElement(
              'li',
              _extends({}, other, {
                  className: (0, _classnames2['default'])(itemClass, this.props.className) }),
              navigate || href || push ? _react2['default'].createElement(
                  _Link2['default'],
                  { className: navigate ? navigateClass : '', href: href, push: push },
                  children
              ) : children
          );
      }
  });
  
  exports['default'] = ListItem;
  module.exports = exports['default'];

});

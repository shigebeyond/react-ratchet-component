define('src/TabItem.jsx', function(require, exports, module) {

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
  
  var TabItem = _react2['default'].createClass({
      displayName: 'TabItem',
  
      propTypes: {
          active: _react2['default'].PropTypes.bool
      },
  
      getDefaultProps: function getDefaultProps() {
          return {
              ratClass: 'tab-item',
              active: false
          };
      },
  
      render: function render() {
          var title = undefined,
              children = this.props.children,
              child = undefined,
              activeClass = 'active',
              classes = _utilsRatchetUtils2['default'].getClassSet(this.props);
  
          classes[activeClass] = this.props.active;
  
          //从this.props.children取出tab-item的label，在渲染时，方便添加特定样式
          if (Array.isArray(children)) {
  
              for (var i = 0; i < children.length; i++) {
                  child = children[i];
  
                  if (typeof child === 'string') {
                      title = child;
                      children.splice(i, 1);
                      break;
                  }
              };
          } else {
              //子节点只有一个的时候，且是string，把它设为title
              if (typeof children === "string") {
                  title = children;
                  children = null;
              }
          }
  
          return _react2['default'].createElement(
              'a',
              _extends({}, this.props, {
                  className: (0, _classnames2['default'])(classes, this.props.className) }),
              children,
              title ? _react2['default'].createElement(
                  'span',
                  { className: 'tab-label' },
                  title
              ) : null
          );
      }
  });
  
  exports['default'] = TabItem;
  module.exports = exports['default'];

});

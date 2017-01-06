define('src/Icon.jsx', function(require, exports, module) {

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
  
  var _utilsComponentDecorators = require('src/utils/componentDecorators');
  
  var _utilsRatchetUtils = require('src/utils/ratchetUtils');
  
  var _utilsRatchetUtils2 = _interopRequireDefault(_utilsRatchetUtils);
  
  var _utilsStyleMaps = require('src/utils/styleMaps');
  
  var Icon = _react2['default'].createClass({
      displayName: 'Icon',
  
      propTypes: {
          href: _react2['default'].PropTypes.string,
          target: _react2['default'].PropTypes.string,
          eleType: _react2['default'].PropTypes.oneOf(['a', 'span'])
      },
  
      render: function render() {
          var Component = this.props.eleType || 'span';
          var classes = _utilsRatchetUtils2['default'].getClassSet(this.props);
          var isLink = this.props.eleType === 'a' && (this.props.href || this.props.href === '');
          var href = isLink ? this.props.href || 'javascript:;' : null;
  
          return _react2['default'].createElement(Component, _extends({}, this.props, {
              href: isLink ? href : null,
              className: (0, _classnames2['default'])(classes, this.props.className) }));
      }
  });
  
  exports['default'] = (0, _utilsComponentDecorators.stylesDecorator)(_utilsStyleMaps.ICON_STYLES.values(), (0, _utilsComponentDecorators.classesDecorator)('icon', Icon));
  module.exports = exports['default'];

});

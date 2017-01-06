define('src/Media.jsx', function(require, exports, module) {

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
  
  var _classnames = require('node_modules/classnames/index');
  
  var _classnames2 = _interopRequireDefault(_classnames);
  
  var Media = _react2['default'].createClass({
      displayName: 'Media',
  
      propTypes: {
          src: _react2['default'].PropTypes.string,
          alt: _react2['default'].PropTypes.string,
          icon: _react2['default'].PropTypes.string
      },
  
      render: function render() {
          var Component = this.props.eleType || 'div';
          var Mbody = this.props.mbodyType || 'div';
          var isImg = this.props.src == '' || this.props.src ? true : false;
  
          return _react2['default'].createElement(
              Component,
              _extends({}, this.props, {
                  className: (0, _classnames2['default'])('media', this.props.className) }),
              isImg ? _react2['default'].createElement('img', { src: this.props.src, alt: this.props.alt, className: 'media-object pull-left' }) : _react2['default'].createElement(_Icon2['default'], { ratStyle: this.props.icon, className: 'media-object pull-left' }),
              _react2['default'].createElement(
                  Mbody,
                  { className: 'media-body' },
                  this.props.children
              )
          );
      }
  });
  
  exports['default'] = Media;
  module.exports = exports['default'];

});

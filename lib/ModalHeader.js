define('src/ModalHeader.jsx', function(require, exports, module) {

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
  
  var _NavBar = require('src/NavBar.jsx');
  
  var _NavBar2 = _interopRequireDefault(_NavBar);
  
  var _Link = require('src/Link.jsx');
  
  var _Link2 = _interopRequireDefault(_Link);
  
  var ModalHeader = _react2['default'].createClass({
  	displayName: 'ModalHeader',
  
  	propTypes: {
  		closeButton: _react2['default'].PropTypes.bool
  	},
  
  	getDefaultProps: function getDefaultProps() {
  		return { closeButton: true };
  	},
  
  	contextTypes: {
  		onModalHide: _react2['default'].PropTypes.func
  	},
  
  	render: function render() {
  		return _react2['default'].createElement(
  			_NavBar2['default'],
  			_extends({}, this.props, {
  				className: (0, _classnames2['default'])('modal-header', this.props.className) }),
  			this.props.closeButton ? this.renderCloseButton() : null,
  			this.props.children
  		);
  	},
  
  	renderCloseButton: function renderCloseButton() {
  		return _react2['default'].createElement(_Link2['default'], { right: true, icon: 'close', onTouchEnd: this.context.onModalHide || this.props.onHide });
  	}
  });
  
  exports['default'] = ModalHeader;
  module.exports = exports['default'];

});

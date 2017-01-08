'use strict';

var _extends = require('babel-runtime/helpers/extends')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _NavBar = require('./NavBar');

var _NavBar2 = _interopRequireDefault(_NavBar);

var _Link = require('./Link');

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
				className: _classnames2['default']('modal-header', this.props.className) }),
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
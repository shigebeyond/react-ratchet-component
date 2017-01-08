'use strict';

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _extends = require('babel-runtime/helpers/extends')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Button = require('./Button');

var _Button2 = _interopRequireDefault(_Button);

var NavButton = (function (_React$Component) {
	_inherits(NavButton, _React$Component);

	function NavButton() {
		_classCallCheck(this, NavButton);

		_React$Component.apply(this, arguments);
	}

	NavButton.prototype.render = function render() {
		var className = this.props.className ? this.props.className : '';

		this.props.left && (className += ' pull-left');
		this.props.right && (className += ' pull-right');

		return _react2['default'].createElement(
			_Button2['default'],
			_extends({}, this.props, { className: className.trim() }),
			' ',
			this.props.children,
			' '
		);
	};

	return NavButton;
})(_react2['default'].Component);

;

exports['default'] = NavButton;
module.exports = exports['default'];
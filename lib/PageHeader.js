'use strict';

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _extends = require('babel-runtime/helpers/extends')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _utilsComponentDecorators = require('./utils/componentDecorators');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _utilsRatchetUtils = require('./utils/ratchetUtils');

var _utilsRatchetUtils2 = _interopRequireDefault(_utilsRatchetUtils);

var _NavBar = require('./NavBar');

var _NavBar2 = _interopRequireDefault(_NavBar);

var PageHeader = (function (_React$Component) {
	_inherits(PageHeader, _React$Component);

	function PageHeader() {
		_classCallCheck(this, _PageHeader);

		_React$Component.apply(this, arguments);
	}

	PageHeader.prototype.render = function render() {
		return _react2['default'].createElement(
			'div',
			_extends({}, this.props, {
				role: 'header',
				className: _classnames2['default'](_utilsRatchetUtils2['default'].getClassSet(this.props), this.props.className)
			}),
			this.props.children
		);
	};

	var _PageHeader = PageHeader;
	PageHeader = _utilsComponentDecorators.classesDecorator('header')(PageHeader) || PageHeader;
	return PageHeader;
})(_react2['default'].Component);

exports['default'] = PageHeader;
module.exports = exports['default'];
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

var _PageHeader = require('./PageHeader');

var _PageHeader2 = _interopRequireDefault(_PageHeader);

var _PageContent = require('./PageContent');

var _PageContent2 = _interopRequireDefault(_PageContent);

var Page = (function (_React$Component) {
	_inherits(Page, _React$Component);

	function Page() {
		_classCallCheck(this, _Page);

		_React$Component.apply(this, arguments);
	}

	Page.prototype.render = function render() {
		return _react2['default'].createElement(
			'div',
			_extends({}, this.props, {
				role: 'page',
				className: _classnames2['default'](_utilsRatchetUtils2['default'].getClassSet(this.props), this.props.className) }),
			this.props.children
		);
	};

	var _Page = Page;
	Page = _utilsComponentDecorators.classesDecorator('page')(Page) || Page;
	return Page;
})(_react2['default'].Component);

Page.Header = _PageHeader2['default'];
Page.Content = _PageContent2['default'];

exports['default'] = Page;
module.exports = exports['default'];
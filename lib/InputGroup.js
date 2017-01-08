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

var _utilsComponentDecorators = require('./utils/componentDecorators');

var _utilsRatchetUtils = require('./utils/ratchetUtils');

var _utilsRatchetUtils2 = _interopRequireDefault(_utilsRatchetUtils);

var InputGroup = (function (_React$Component) {
	_inherits(InputGroup, _React$Component);

	function InputGroup() {
		_classCallCheck(this, _InputGroup);

		_React$Component.apply(this, arguments);
	}

	InputGroup.prototype.render = function render() {
		return _react2['default'].createElement(
			'div',
			_extends({}, this.props, {
				className: _classnames2['default'](_utilsRatchetUtils2['default'].getClassSet(this.props), this.props.className) }),
			this.props.children
		);
	};

	var _InputGroup = InputGroup;
	InputGroup = _utilsComponentDecorators.classesDecorator('input-group')(InputGroup) || InputGroup;
	return InputGroup;
})(_react2['default'].Component);

exports['default'] = InputGroup;
module.exports = exports['default'];
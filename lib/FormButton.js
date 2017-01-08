'use strict';

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _objectWithoutProperties = require('babel-runtime/helpers/object-without-properties')['default'];

var _extends = require('babel-runtime/helpers/extends')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Button = require('./Button');

var _Button2 = _interopRequireDefault(_Button);

var FormButton = (function (_React$Component) {
    _inherits(FormButton, _React$Component);

    function FormButton() {
        _classCallCheck(this, FormButton);

        _React$Component.apply(this, arguments);
    }

    FormButton.prototype.render = function render() {
        var _props = this.props;
        var children = _props.children;
        var value = _props.value;

        var other = _objectWithoutProperties(_props, ['children', 'value']);

        var val = children ? children : value;

        return _react2['default'].createElement(_Button2['default'], _extends({}, other, { eleType: 'input', ref: 'input', key: 'input', value: val }));
    };

    return FormButton;
})(_react2['default'].Component);

exports['default'] = FormButton;
module.exports = exports['default'];
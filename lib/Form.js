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

var Form = (function (_React$Component) {
    _inherits(Form, _React$Component);

    function Form() {
        _classCallCheck(this, _Form);

        _React$Component.apply(this, arguments);
    }

    Form.prototype.render = function render() {
        var classes = _utilsRatchetUtils2['default'].getClassSet(this.props);

        return _react2['default'].createElement(
            'form',
            _extends({}, this.props, {
                className: _classnames2['default'](classes, this.props.className) }),
            this.props.children
        );
    };

    var _Form = Form;
    Form = _utilsComponentDecorators.classesDecorator('form')(Form) || Form;
    Form = _utilsComponentDecorators.stylesDecorator(['listview'])(Form) || Form;
    return Form;
})(_react2['default'].Component);

exports['default'] = Form;
module.exports = exports['default'];
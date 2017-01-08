'use strict';

var _extends = require('babel-runtime/helpers/extends')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Icon = require('./Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _Badge = require('./Badge');

var _Badge2 = _interopRequireDefault(_Badge);

var _utilsComponentDecorators = require('./utils/componentDecorators');

var _utilsRatchetUtils = require('./utils/ratchetUtils');

var _utilsRatchetUtils2 = _interopRequireDefault(_utilsRatchetUtils);

var _utilsStyleMaps = require('./utils/styleMaps');

var Button = _react2['default'].createClass({
    displayName: 'Button',

    propTypes: {
        block: _react2['default'].PropTypes.bool,
        href: _react2['default'].PropTypes.string,
        target: _react2['default'].PropTypes.string,
        type: _react2['default'].PropTypes.oneOf(['button', 'reset', 'submit'])
    },
    getDefaultProps: function getDefaultProps() {
        return {
            block: false,
            outlined: false
        };
    },

    render: function render() {
        var _extends2;

        var classes = _utilsRatchetUtils2['default'].getClassSet(this.props);
        var blockClass = _utilsRatchetUtils2['default'].prefix(this.props, 'block');
        var outlinedClass = _utilsRatchetUtils2['default'].prefix(this.props, 'outlined');
        var renderFuncName = undefined;

        classes = _extends({}, classes, (_extends2 = {}, _extends2[blockClass] = this.props.block, _extends2[outlinedClass] = this.props.outlined, _extends2));

        renderFuncName = this.props.ratStyle === _utilsStyleMaps.BUTTON_STYLES.LINK || this.props.href === '' || this.props.href || this.props.target ? 'renderAnchor' : 'renderButton';
        return this[renderFuncName](classes);
    },

    renderAnchor: function renderAnchor(classes) {
        var Component = this.props.eleType || 'a';
        var href = this.props.href || 'javascript:;';

        return _react2['default'].createElement(
            Component,
            _extends({}, this.props, {
                href: href,
                className: _classnames2['default'](classes, this.props.className) }),
            this.props.children
        );
    },

    renderButton: function renderButton(classes) {
        var Component = this.props.eleType || 'button';

        return _react2['default'].createElement(
            Component,
            _extends({}, this.props, {
                type: this.props.type || 'button',
                className: _classnames2['default'](classes, this.props.className) }),
            this.props.children
        );
    }
});

exports['default'] = _utilsComponentDecorators.stylesDecorator(_utilsStyleMaps.BUTTON_STYLES.values(), _utilsComponentDecorators.classesDecorator('btn', Button));
module.exports = exports['default'];
'use strict';

var _extends = require('babel-runtime/helpers/extends')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var SliderItem = _react2['default'].createClass({
    displayName: 'SliderItem',

    propTypes: {
        className: _react2['default'].PropTypes.string
    },
    render: function render() {
        var Component = this.props.eleType || 'div';

        return _react2['default'].createElement(
            Component,
            _extends({}, this.props, {
                className: _classnames2['default']('slide', this.props.className) }),
            this.props.children
        );
    }
});

exports['default'] = SliderItem;
module.exports = exports['default'];
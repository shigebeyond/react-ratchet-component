'use strict';

var _extends = require('babel-runtime/helpers/extends')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var Toggle = _react2['default'].createClass({
    displayName: 'Toggle',

    propTypes: {
        active: _react2['default'].PropTypes.bool
    },
    render: function render() {
        var Component = this.props.eleType || 'div';
        var classes = {
            active: this.props.active
        };

        return _react2['default'].createElement(
            Component,
            _extends({}, this.props, {
                className: _classnames2['default']('toggle', classes, this.props.className),
                onClick: this.props.onClick }),
            _react2['default'].createElement('div', { className: 'toggle-handle' })
        );
    }
});

exports['default'] = Toggle;
module.exports = exports['default'];
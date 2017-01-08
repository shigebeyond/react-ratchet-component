'use strict';

var _extends = require('babel-runtime/helpers/extends')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _utilsRatchetUtils = require('./utils/ratchetUtils');

var _utilsRatchetUtils2 = _interopRequireDefault(_utilsRatchetUtils);

var Control = _react2['default'].createClass({
    displayName: 'Control',

    propTypes: {
        active: _react2['default'].PropTypes.bool
    },

    getDefaultProps: function getDefaultProps() {
        return {
            ratClass: 'control-item',
            active: false
        };
    },

    render: function render() {
        var activeClass = 'active',
            classes = _utilsRatchetUtils2['default'].getClassSet(this.props);

        classes[activeClass] = this.props.active;

        return _react2['default'].createElement(
            'a',
            _extends({}, this.props, {
                className: _classnames2['default'](classes, this.props.className) }),
            this.props.children
        );
    }
});

exports['default'] = Control;
module.exports = exports['default'];
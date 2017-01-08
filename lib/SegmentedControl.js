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

var _Control = require('./Control');

var _Control2 = _interopRequireDefault(_Control);

var SegmentedControl = _react2['default'].createClass({
    displayName: 'SegmentedControl',

    getDefaultProps: function getDefaultProps() {
        return {
            ratClass: 'segmented-control'
        };
    },

    render: function render() {
        var classes = _utilsRatchetUtils2['default'].getClassSet(this.props);

        return _react2['default'].createElement(
            'div',
            _extends({}, this.props, {
                className: _classnames2['default'](classes, this.props.className) }),
            this.props.children
        );
    }
});

SegmentedControl.Control = _Control2['default'];

exports['default'] = SegmentedControl;
module.exports = exports['default'];
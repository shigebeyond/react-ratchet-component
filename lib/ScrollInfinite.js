'use strict';

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var ScrollInfinite = _react2['default'].createClass({
    displayName: 'ScrollInfinite',

    render: function render() {
        var wrapStyle = {
            display: 'none',
            textAlign: 'center',
            fontSize: '12px',
            height: '20px',
            lineHeight: '20px'
        };

        return _react2['default'].createElement(
            'div',
            { style: wrapStyle },
            '上滑加载更多...'
        );
    }
});

exports['default'] = ScrollInfinite;
module.exports = exports['default'];
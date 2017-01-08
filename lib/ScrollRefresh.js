'use strict';

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var ScrollRefresh = _react2['default'].createClass({
    displayName: 'ScrollRefresh',

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
            '下拉刷新...'
        );
    }
});

exports['default'] = ScrollRefresh;
module.exports = exports['default'];
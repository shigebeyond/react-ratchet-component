'use strict';

var _objectWithoutProperties = require('babel-runtime/helpers/object-without-properties')['default'];

var _extends = require('babel-runtime/helpers/extends')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Link = require('./Link');

var _Link2 = _interopRequireDefault(_Link);

var ListItem = _react2['default'].createClass({
    displayName: 'ListItem',

    propTypes: {
        divider: _react2['default'].PropTypes.bool,
        navigate: _react2['default'].PropTypes.bool
    },

    getDefaultProps: function getDefaultProps() {
        return {
            divider: false,
            navigate: false
        };
    },

    render: function render() {
        var _props = this.props;
        var divider = _props.divider;
        var navigate = _props.navigate;
        var children = _props.children;
        var href = _props.href;
        var push = _props.push;

        var other = _objectWithoutProperties(_props, ['divider', 'navigate', 'children', 'href', 'push']);

        var navigateClass = 'navigate-right';
        var itemClass = divider ? 'table-view-divider' : 'table-view-cell';

        return _react2['default'].createElement(
            'li',
            _extends({}, other, {
                className: _classnames2['default'](itemClass, this.props.className) }),
            navigate || href || push ? _react2['default'].createElement(
                _Link2['default'],
                { className: navigate ? navigateClass : '', href: href, push: push },
                children
            ) : children
        );
    }
});

exports['default'] = ListItem;
module.exports = exports['default'];
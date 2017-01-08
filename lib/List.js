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

var _ListItem = require('./ListItem');

var _ListItem2 = _interopRequireDefault(_ListItem);

var List = _react2['default'].createClass({
    displayName: 'List',

    getDefaultProps: function getDefaultProps() {
        return {
            ratClass: 'table-view'
        };
    },

    render: function render() {
        return _react2['default'].createElement(
            'ul',
            _extends({}, this.props, {
                className: _classnames2['default'](_utilsRatchetUtils2['default'].prefix(this.props), this.props.className) }),
            this.props.children
        );
    }
});

List.Item = _ListItem2['default'];

exports['default'] = List;
module.exports = exports['default'];
'use strict';

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

var _utilsStyleMaps = require('./utils/styleMaps');

var Badge = _react2['default'].createClass({
    displayName: 'Badge',

    getDefaultProps: function getDefaultProps() {
        return {
            inverted: false
        };
    },

    render: function render() {
        var _extends2;

        var Component = this.props.eleType || 'span';
        var classes = _utilsRatchetUtils2['default'].getClassSet(this.props);
        var invertedClass = _utilsRatchetUtils2['default'].prefix(this.props, 'inverted');
        classes = _extends((_extends2 = {}, _extends2[invertedClass] = this.props.inverted, _extends2), classes);

        return _react2['default'].createElement(
            Component,
            _extends({}, this.props, {
                className: _classnames2['default'](classes, this.props.className) }),
            this.props.children
        );
    }
});

exports['default'] = _utilsComponentDecorators.stylesDecorator(_utilsStyleMaps.BADGE_STYLES.values(), _utilsComponentDecorators.classesDecorator('badge', Badge));
module.exports = exports['default'];
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

var Icon = _react2['default'].createClass({
    displayName: 'Icon',

    propTypes: {
        href: _react2['default'].PropTypes.string,
        target: _react2['default'].PropTypes.string,
        eleType: _react2['default'].PropTypes.oneOf(['a', 'span'])
    },

    render: function render() {
        var Component = this.props.eleType || 'span';
        var classes = _utilsRatchetUtils2['default'].getClassSet(this.props);
        var isLink = this.props.eleType === 'a' && (this.props.href || this.props.href === '');
        var href = isLink ? this.props.href || 'javascript:;' : null;

        return _react2['default'].createElement(Component, _extends({}, this.props, {
            href: isLink ? href : null,
            className: _classnames2['default'](classes, this.props.className) }));
    }
});

exports['default'] = _utilsComponentDecorators.stylesDecorator(_utilsStyleMaps.ICON_STYLES.values(), _utilsComponentDecorators.classesDecorator('icon', Icon));
module.exports = exports['default'];
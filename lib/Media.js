'use strict';

var _extends = require('babel-runtime/helpers/extends')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon = require('./Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var Media = _react2['default'].createClass({
    displayName: 'Media',

    propTypes: {
        src: _react2['default'].PropTypes.string,
        alt: _react2['default'].PropTypes.string,
        icon: _react2['default'].PropTypes.string
    },

    render: function render() {
        var Component = this.props.eleType || 'div';
        var Mbody = this.props.mbodyType || 'div';
        var isImg = this.props.src == '' || this.props.src ? true : false;

        return _react2['default'].createElement(
            Component,
            _extends({}, this.props, {
                className: _classnames2['default']('media', this.props.className) }),
            isImg ? _react2['default'].createElement('img', { src: this.props.src, alt: this.props.alt, className: 'media-object pull-left' }) : _react2['default'].createElement(_Icon2['default'], { ratStyle: this.props.icon, className: 'media-object pull-left' }),
            _react2['default'].createElement(
                Mbody,
                { className: 'media-body' },
                this.props.children
            )
        );
    }
});

exports['default'] = Media;
module.exports = exports['default'];
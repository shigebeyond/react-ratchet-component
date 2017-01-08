'use strict';

var _extends = require('babel-runtime/helpers/extends')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon = require('./Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var NavTitle = _react2['default'].createClass({
  displayName: 'NavTitle',

  propTypes: {
    icon: _react2['default'].PropTypes.string
  },

  render: function render() {

    return _react2['default'].createElement(
      'h1',
      _extends({}, this.props, {
        className: 'title' }),
      this.props.children,
      this.props.icon ? _react2['default'].createElement(_Icon2['default'], { ratStyle: this.props.icon }) : null
    );
  }
});

exports['default'] = NavTitle;
module.exports = exports['default'];
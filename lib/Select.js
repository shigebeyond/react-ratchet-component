'use strict';

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Input = require('./Input');

var _Input2 = _interopRequireDefault(_Input);

var _List = require('./List');

var _List2 = _interopRequireDefault(_List);

var _ActionSheet = require('./ActionSheet');

var _ActionSheet2 = _interopRequireDefault(_ActionSheet);

var Select = _react2['default'].createClass({
    displayName: 'Select',

    PropTypes: {
        defaultValue: _react2['default'].PropTypes.string,
        onChange: _react2['default'].PropTypes.func
    },
    childContextTypes: {
        onClick: _react2['default'].PropTypes.func
    },
    getChildContext: function getChildContext() {
        var _this = this;
        return {
            onClick: function onClick(value, text) {
                _this._onChange(value, text);
            }
        };
    },
    _onChange: function _onChange(value, text) {
        this.setState({
            text: text,
            value: value,
            showlist: false
        });
        this.props.onChange && this.props.onChange(value, text);
    },
    _showActionSheet: function _showActionSheet() {
        this.setState({ showlist: true });
    },
    _hideActionSheet: function _hideActionSheet() {
        this.setState({ showlist: false });
    },
    _getSelectOption: function _getSelectOption(value) {
        var selectOptions = [];
        if (value) {
            _react2['default'].Children.map(this.props.children, function (option) {
                if (option.props.value === value) {
                    selectOptions.push(option);
                }
            });
        } else {
            selectOptions.push(this.props.children[0]);
        }
        return selectOptions[0];
    },
    getInitialState: function getInitialState() {
        var option = this._getSelectOption(this.props.defaultValue);
        return {
            text: option.props.text,
            value: option.props.value,
            showlist: false
        };
    },
    render: function render() {
        var modalStyle = { position: 'absolute' };
        var backdropStyle = { position: 'absolute' };

        return _react2['default'].createElement(
            'div',
            { className: 'form-select' },
            _react2['default'].createElement(_Input2['default'], { type: 'text', value: this.state.text, onClick: this._showActionSheet, readOnly: true }),
            _react2['default'].createElement(
                _ActionSheet2['default'],
                {
                    show: this.state.showlist,
                    onHide: this._hideActionSheet,
                    style: modalStyle,
                    backdropStyle: backdropStyle,
                    container: this.props.container },
                _react2['default'].createElement(
                    _List2['default'],
                    null,
                    this.props.children
                )
            )
        );
    }
});

Select.option = _react2['default'].createClass({
    displayName: 'option',

    propTypes: {
        value: _react2['default'].PropTypes.string,
        text: _react2['default'].PropTypes.string
    },
    contextTypes: {
        onClick: _react2['default'].PropTypes.func
    },
    render: function render() {
        var value = this.props.value,
            text = this.props.text;
        return _react2['default'].createElement(
            _List2['default'].Item,
            { value: value, onClick: this.context.onClick.bind(this, value, text) },
            text
        );
    }
});

exports['default'] = Select;
module.exports = exports['default'];
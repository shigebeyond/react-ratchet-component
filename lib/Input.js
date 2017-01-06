define('src/Input.jsx', function(require, exports, module) {

  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  
  var _react = require('node_modules/react/react');
  
  var _react2 = _interopRequireDefault(_react);
  
  var _classnames2 = require('node_modules/classnames/index');
  
  var _classnames3 = _interopRequireDefault(_classnames2);
  
  var _utilsComponentDecorators = require('src/utils/componentDecorators');
  
  var _utilsRatchetUtils = require('src/utils/ratchetUtils');
  
  var _utilsRatchetUtils2 = _interopRequireDefault(_utilsRatchetUtils);
  
  var _Icon = require('src/Icon.jsx');
  
  var _Icon2 = _interopRequireDefault(_Icon);
  
  var Input = _react2['default'].createClass({
    displayName: 'Input',
  
    propTypes: {
      icon: _react2['default'].PropTypes.string,
      label: _react2['default'].PropTypes.node,
      checked: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.number, _react2['default'].PropTypes.bool]),
      defaultChecked: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.number, _react2['default'].PropTypes.bool]),
      disabled: _react2['default'].PropTypes.bool,
      multiple: _react2['default'].PropTypes.bool,
      labelClassName: _react2['default'].PropTypes.string,
      onChange: _react2['default'].PropTypes.func
    },
    getDefaultProps: function getDefaultProps() {
      return {
        ratClass: 'form-input',
        // checked: 0,
        defaultChecked: 0, //这里使用数字，以便和它的样式关联
        disabled: false,
        multiple: false,
        onChange: function onChange() {}
      };
    },
    getInitialState: function getInitialState() {
      var checked = false,
          props = this.props;
      if ('checked' in props) {
        checked = props.checked;
      } else {
        checked = props.defaultChecked;
      }
      return {
        checked: checked
      };
    },
    componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
      if (this.isCheckboxOrRadio() && 'checked' in nextProps) {
        this.setState({
          checked: nextProps.checked
        });
      }
    },
    handleChange: function handleChange(e) {
      var checked = e.target.checked;
      if (!('checked' in this.props)) {
        this.setState({
          checked: checked ? 1 : 0
        });
      }
      this.props.onChange(e, !!this.state.checked);
    },
    /**
     * 提供对外的获取input.value的方法
     * @return {[type]} [description]
     */
    getValue: function getValue() {
      if (this.props.type) {
        if (this.props.type === 'select' && this.props.multiple) {
          return this.getSelectedOptions();
        }
        return this.getInputDOMNode().value;
      }
      throw new Error('Cannot use getValue without specifying input type.');
    },
    getSelectedOptions: function getSelectedOptions() {
      var values = [];
  
      Array.prototype.forEach.call(this.getInputDOMNode().getElementsByTagName('option'), function (option) {
        if (option.selected) {
          var value = option.getAttribute('value') || option.innerHtml;
          values.push(value);
        }
      });
  
      return values;
    },
    getChecked: function getChecked() {
      return this.getInputDOMNode().checked;
    },
    getInputDOMNode: function getInputDOMNode() {
      return this.refs.input;
    },
    isCheckboxOrRadio: function isCheckboxOrRadio() {
      return this.props.type === 'checkbox' || this.props.type === 'radio';
    },
    isFile: function isFile() {
      return this.props.type === 'file';
    },
    hasLabel: function hasLabel() {
      return !!this.props.label;
    },
    renderLabel: function renderLabel(children) {
      var classes = {
        'input-label': true
      };
  
      classes[this.props.labelClassName] = this.props.labelClassName;
  
      return this.hasLabel() ? _react2['default'].createElement(
        'label',
        { htmlFor: this.props.id, className: (0, _classnames3['default'])(classes), key: 'label' },
        children,
        this.props.label
      ) : children;
    },
    renderInput: function renderInput() {
      var _classnames;
  
      if (!this.props.type) {
        return this.props.children;
      }
  
      var classes = _utilsRatchetUtils2['default'].getClassSet(this.props);
  
      //为input添加has-icon样式，以便它适应有icon的情况
      this.props.icon && (classes['has-icon'] = true);
  
      switch (this.props.type) {
        case 'select':
          return _react2['default'].createElement(
            'select',
            _extends({}, this.props, { className: (0, _classnames3['default'])(classes, this.props.className), ref: 'input', key: 'input' }),
            this.props.children
          );
        case 'textarea':
          return _react2['default'].createElement('textarea', _extends({}, this.props, { className: (0, _classnames3['default'])(classes, this.props.className), ref: 'input', key: 'input' }));
        case 'file':
          return _react2['default'].createElement(
            'a',
            { href: 'javascript:;', className: 'input-upload', key: 'input-upload' },
            _react2['default'].createElement('input', _extends({}, this.props, { className: (0, _classnames3['default'])(classes, this.props.className), ref: 'input', key: 'input' })),
            '选择文件...'
          );
        case 'radio':
        case 'checkbox':
          var props = this.props;
          var prefixCls = 'rc-' + props.type;
          var checked = this.state.checked;
  
          if (typeof checked === 'boolean') {
            checked = checked ? 1 : 0;
          }
  
          var classes = (0, _classnames3['default'])((_classnames = {}, _defineProperty(_classnames, prefixCls, true), _defineProperty(_classnames, prefixCls + '-checked', !!checked), _defineProperty(_classnames, prefixCls + '-checked-' + checked, !!checked), _defineProperty(_classnames, prefixCls + '-disabled', props.disabled), _classnames));
  
          return _react2['default'].createElement(
            'span',
            { className: (0, _classnames3['default'])(classes, props.className) },
            _react2['default'].createElement('span', { className: prefixCls + '-inner' }),
            _react2['default'].createElement('input', _extends({}, props, {
              ref: 'input',
              key: 'input',
              defaultChecked: !!props.defaultChecked,
              className: prefixCls + '-input',
              checked: !!checked,
              onChange: this.handleChange }))
          );
        default:
          // const className = this.isCheckboxOrRadio() || this.isFile() ? '' : 'form-control';
          return _react2['default'].createElement('input', _extends({}, this.props, { className: (0, _classnames3['default'])(classes, this.props.className), ref: 'input', key: 'input' }));
      }
    },
    renderIcon: function renderIcon() {
      return this.props.icon ? _react2['default'].createElement(_Icon2['default'], { ratStyle: this.props.icon, key: 'icon' }) : null;
    },
    renderChildren: function renderChildren() {
      //如果input型为radio或checkbox，用label把input包起来，且不处理icon
      return this.isCheckboxOrRadio() ? this.renderLabel(this.renderInput()) : [this.renderLabel(), this.renderInput(), this.renderIcon()];
    },
    renderWapper: function renderWapper(children) {
      var classes = { 'input-wapper': true };
      this.hasLabel() && (classes['input-label-wapper'] = true);
      this.isFile() && (classes['input-file-wapper'] = true);
      this.isCheckboxOrRadio() && (classes['radioandcheckbox-wapper'] = true);
  
      return _react2['default'].createElement(
        'div',
        { className: (0, _classnames3['default'])(classes), key: 'wapper' },
        children
      );
    },
    render: function render() {
  
      return this.renderWapper(this.renderChildren());
    }
  });
  
  exports['default'] = Input;
  module.exports = exports['default'];

});

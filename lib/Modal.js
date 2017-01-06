define('src/Modal.jsx', function(require, exports, module) {

  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
  
  var _react = require('node_modules/react/react');
  
  var _react2 = _interopRequireDefault(_react);
  
  var _BaseModal = require('src/BaseModal.jsx');
  
  var _BaseModal2 = _interopRequireDefault(_BaseModal);
  
  var _Fade = require('src/Fade.jsx');
  
  var _Fade2 = _interopRequireDefault(_Fade);
  
  var _ModalHeader = require('src/ModalHeader.jsx');
  
  var _ModalHeader2 = _interopRequireDefault(_ModalHeader);
  
  var _NavTitle = require('src/NavTitle.jsx');
  
  var _NavTitle2 = _interopRequireDefault(_NavTitle);
  
  var _ModalBody = require('src/ModalBody.jsx');
  
  var _ModalBody2 = _interopRequireDefault(_ModalBody);
  
  var _classnames = require('node_modules/classnames/index');
  
  var _classnames2 = _interopRequireDefault(_classnames);
  
  var _utilsRatchetUtils = require('src/utils/ratchetUtils');
  
  var _utilsRatchetUtils2 = _interopRequireDefault(_utilsRatchetUtils);
  
  var Modal = _react2['default'].createClass({
  
    displayName: 'Modal',
  
    propTypes: _extends({}, _BaseModal2['default'].propTypes, {
  
      /**
       * Open and close the Modal with a slide and fade animation.
       */
      animation: _react2['default'].PropTypes.bool,
  
      /**
       * When `true` The modal will show itself.
       */
      show: _react2['default'].PropTypes.bool,
  
      /**
       * A callback fired when the header closeButton or non-static backdrop is
       * clicked. Required if either are specified.
       */
      onHide: _react2['default'].PropTypes.func
    }),
  
    getDefaultProps: function getDefaultProps() {
      return _extends({}, _BaseModal2['default'].defaultProps, {
        ratClass: 'modal',
        animation: true
      });
    },
  
    //传递给子组件的属性，见Modal.Header
    childContextTypes: {
      onModalHide: _react2['default'].PropTypes.func
    },
  
    getChildContext: function getChildContext() {
      return { onModalHide: this.props.onHide };
    },
  
    render: function render() {
      var _this = this;
  
      var _props = this.props;
      var children = _props.children;
      var animation = _props.animation;
      var style = _props.style;
  
      var props = _objectWithoutProperties(_props, ['children', 'animation', 'style']);
  
      var modalStyles = _extends({}, style, { display: 'block' });
      var inClass = { 'in': props.show && !animation };
  
      return _react2['default'].createElement(
        _BaseModal2['default'],
        _extends({}, props, {
          show: props.show,
          ref: function (ref) {
            _this._wrapper = ref && ref.refs.modal;
            _this._backdrop = ref && ref.refs.backdrop;
          },
          onEntering: this._onShow,
          onExited: this._onHide,
          backdropClassName: (0, _classnames2['default'])(_utilsRatchetUtils2['default'].prefix(props, 'backdrop'), inClass),
          containerClassName: _utilsRatchetUtils2['default'].prefix(props, 'open'),
          transition: animation ? _Fade2['default'] : undefined,
          dialogTransitionTimeout: 300,
          backdropTransitionTimeout: 150
        }),
        _react2['default'].createElement(
          'div',
          { className: _utilsRatchetUtils2['default'].prefix(props), style: modalStyles },
          _react2['default'].createElement(
            'div',
            { className: _utilsRatchetUtils2['default'].prefix(props, 'content') },
            children
          )
        )
      );
    },
  
    _onShow: function _onShow() {
      if (this.props.onEntering) {
        var _props2;
  
        (_props2 = this.props).onEntering.apply(_props2, arguments);
      }
    },
  
    _onHide: function _onHide() {
      if (this.props.onExited) {
        var _props3;
  
        (_props3 = this.props).onExited.apply(_props3, arguments);
      }
    }
  
  });
  
  Modal.Header = _ModalHeader2['default'];
  Modal.Title = _NavTitle2['default'];
  Modal.Body = _ModalBody2['default'];
  
  exports['default'] = Modal;
  module.exports = exports['default'];

});

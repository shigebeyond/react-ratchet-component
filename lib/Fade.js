define('src/Fade.jsx', function(require, exports, module) {

  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
  
  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
  
  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
  
  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
  
  var _react = require('node_modules/react/react');
  
  var _react2 = _interopRequireDefault(_react);
  
  var _classnames = require('node_modules/classnames/index');
  
  var _classnames2 = _interopRequireDefault(_classnames);
  
  var _Transition = require('src/Transition.jsx');
  
  var _Transition2 = _interopRequireDefault(_Transition);
  
  var _reactPropTypesLibDeprecated = require('react-prop-types/lib/deprecated');
  
  var _reactPropTypesLibDeprecated2 = _interopRequireDefault(_reactPropTypesLibDeprecated);
  
  var Fade = (function (_React$Component) {
    _inherits(Fade, _React$Component);
  
    function Fade() {
      _classCallCheck(this, Fade);
  
      _get(Object.getPrototypeOf(Fade.prototype), 'constructor', this).apply(this, arguments);
    }
  
    // Explicitly copied from Transition for doc generation.
    // TODO: Remove duplication once #977 is resolved.
  
    _createClass(Fade, [{
      key: 'render',
      value: function render() {
        var timeout = this.props.timeout || this.props.duration;
  
        return _react2['default'].createElement(
          _Transition2['default'],
          _extends({}, this.props, {
            timeout: timeout,
            className: (0, _classnames2['default'])(this.props.className, 'fade'),
            enteredClassName: 'in',
            enteringClassName: 'in'
          }),
          this.props.children
        );
      }
    }]);
  
    return Fade;
  })(_react2['default'].Component);
  
  Fade.propTypes = {
    /**
     * Show the component; triggers the fade in or fade out animation
     */
    'in': _react2['default'].PropTypes.bool,
  
    /**
     * Unmount the component (remove it from the DOM) when it is faded out
     */
    unmountOnExit: _react2['default'].PropTypes.bool,
  
    /**
     * Run the fade in animation when the component mounts, if it is initially
     * shown
     */
    transitionAppear: _react2['default'].PropTypes.bool,
  
    /**
     * Duration of the fade animation in milliseconds, to ensure that finishing
     * callbacks are fired even if the original browser transition end events are
     * canceled
     */
    timeout: _react2['default'].PropTypes.number,
  
    /**
     * duration
     * @private
     */
    duration: (0, _reactPropTypesLibDeprecated2['default'])(_react2['default'].PropTypes.number, 'Use `timeout`.'),
  
    /**
     * Callback fired before the component fades in
     */
    onEnter: _react2['default'].PropTypes.func,
    /**
     * Callback fired after the component starts to fade in
     */
    onEntering: _react2['default'].PropTypes.func,
    /**
     * Callback fired after the has component faded in
     */
    onEntered: _react2['default'].PropTypes.func,
    /**
     * Callback fired before the component fades out
     */
    onExit: _react2['default'].PropTypes.func,
    /**
     * Callback fired after the component starts to fade out
     */
    onExiting: _react2['default'].PropTypes.func,
    /**
     * Callback fired after the component has faded out
     */
    onExited: _react2['default'].PropTypes.func
  };
  
  Fade.defaultProps = {
    'in': false,
    timeout: 300,
    unmountOnExit: false,
    transitionAppear: false
  };
  
  exports['default'] = Fade;
  module.exports = exports['default'];

});

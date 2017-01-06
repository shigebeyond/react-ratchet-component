define('src/utils/componentDecorators', function(require, exports, module) {

  /**
   *  componentDecorators 装饰器（ES7）
   */
  
  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
      value: true
  });
  
  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
  
  var _react = require('node_modules/react/react');
  
  function curry(fn) {
      return function () {
          for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
          }
  
          var last = args[args.length - 1];
          //classesDecorator, stylesDecorator可能不是使用注解（ES7装饰器）方式引用，这里作兼容处理
          if (typeof last === 'function') {
              return fn.apply(undefined, args);
          }
          return function (Component) {
              return fn.apply(undefined, args.concat([Component]));
          };
      };
  }
  
  /**
   * 设置Component.proTypes.ratClass 以及 Component.defaultProps.ratClass
   * 兼容ES7 decorator方式调用，见curry()
   */
  var classesDecorator = curry(function (defaultClass, Component) {
      var propTypes = Component.propTypes || (Component.propTypes = {});
      var defaultProps = Component.defaultProps || (Component.defaultProps = {});
  
      propTypes.ratClass = _react.PropTypes.string;
      defaultProps.ratClass = defaultClass;
  
      return Component;
  });
  
  /**
   * 设置Component.propTypes的值
   * 兼容ES7 decorator方式调用，见curry()
   */
  var stylesDecorator = curry(function (styles, defaultStyle, Component) {
      if (typeof defaultStyle !== 'string') {
          Component = defaultStyle;
          defaultStyle = undefined;
      }
  
      var existing = Component.STYLES || [];
      var propTypes = Component.propTypes || {};
  
      styles.forEach(function (style) {
          if (existing.indexOf(style) === -1) {
              existing.push(style);
          }
      });
  
      //用于后面校验ratStyle的值，它必须是existing里的其中一个值
      var propType = _react.PropTypes.oneOf(existing);
  
      // expose the values on the propType function for documentation
      Component.STYLES = propType._values = existing;
  
      Component.propTypes = _extends({}, propTypes, {
          ratStyle: propType
      });
  
      //设置defaultProps.ratStyle的值
      if (defaultStyle !== undefined) {
          var defaultProps = Component.defaultProps || (Component.defaultProps = {});
          defaultProps.ratStyle = defaultStyle;
      }
  
      return Component;
  });
  
  exports.classesDecorator = classesDecorator;
  exports.stylesDecorator = stylesDecorator;

});

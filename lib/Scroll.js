define('src/Scroll.jsx', function(require, exports, module) {

  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();
  
  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
  
  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
  
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
  
  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
  
  var _react = require('node_modules/react/react');
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactDom = require('node_modules/react-dom/index');
  
  var _reactDom2 = _interopRequireDefault(_reactDom);
  
  var _deepEqual = require('node_modules/deep-equal/index');
  
  var _deepEqual2 = _interopRequireDefault(_deepEqual);
  
  var _ScrollInfinite = require('src/ScrollInfinite.jsx');
  
  var _ScrollInfinite2 = _interopRequireDefault(_ScrollInfinite);
  
  var _ScrollRefresh = require('src/ScrollRefresh.jsx');
  
  var _ScrollRefresh2 = _interopRequireDefault(_ScrollRefresh);
  
  var PropTypes = _react2['default'].PropTypes;
  
  // Events available on iScroll instance
  // [`iScroll event name`, `react component event name`]
  var availableEvents = [['beforeScrollStart', "onBeforeScrollStart"], ['scrollCancel', "onScrollCancel"], ['scrollStart', "onScrollStart"], ['scroll', "onScroll"], ['scrollEnd', "onScrollEnd"], ['flick', "onFlick"], ['zoomStart', "onZoomStart"], ['zoomEnd', "onZoomEnd"]];
  
  var iScrollPropType = function iScrollPropType(props, propName, componentName) {
    var iScroll = props[propName];
    var proto = iScroll && iScroll.prototype;
  
    if (!iScroll || !proto || !proto.version || !proto.scrollTo) {
      return new Error(componentName + ": iScroll not passed to component props.");
    } else {
      if (!/^5\..*/.test(proto.version)) {
        console.warn(componentName + ": different version than 5.x.y of iScroll is required. Some features won't work properly.");
      }
  
      if (props.options && props.options.zoom && !proto.zoom) {
        console.warn(componentName + ": options.zoom is set, but iscroll-zoom version is not required. Zoom feature won't work properly.");
      }
    }
  };
  
  // Generate propTypes with event function validating
  var propTypes = {
    defer: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.bool, _react2['default'].PropTypes.number]),
    options: PropTypes.object,
    //iScroll: iScrollPropType,
    onRefresh: PropTypes.func
  };
  
  for (var i = 0; i < availableEvents.length; i++) {
    propTypes[availableEvents[i][1]] = PropTypes.func;
  }
  
  var Scroll = (function (_React$Component) {
    _inherits(Scroll, _React$Component);
  
    _createClass(Scroll, null, [{
      key: 'displayName',
      value: 'Scroll',
      enumerable: true
    }, {
      key: 'propTypes',
      value: propTypes,
      enumerable: true
    }, {
      key: 'defaultProps',
      value: {
        defer: 0,
        options: {
          mouseWheel: true,
          scrollbars: true,
          fadeScrollbars: true,
          probeType: 3
        },
        style: {
          position: "relative",
          height: "100%",
          width: "100%",
          overflow: "hidden"
        },
        onScroll: function onScroll() {},
        onScrollEnd: function onScrollEnd() {}
      },
      enumerable: true
    }]);
  
    function Scroll(props) {
      _classCallCheck(this, Scroll);
  
      _get(Object.getPrototypeOf(Scroll.prototype), 'constructor', this).call(this, props);
      this._queuedCallbacks = [];
      this._iScrollBindedEvents = {};
      this.state = {
        showInfinite: false
      };
    }
  
    _createClass(Scroll, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        this.iScroll = require('iscroll/build/iscroll-probe');
        this._initializeIScroll();
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this._teardownIScroll();
      }
  
      // There is no state, we can compare only props.
    }, {
      key: 'shouldComponentUpdate',
      value: function shouldComponentUpdate(nextProps) {
        return !(0, _deepEqual2['default'])(this.props, nextProps);
      }
  
      // Check if iScroll options has changed and recreate instance with new one
    }, {
      key: 'componentDidUpdate',
      value: function componentDidUpdate(prevProps) {
        var _this2 = this;
  
        // If options are same, iScroll behaviour will not change. Just refresh events and trigger refresh
        if ((0, _deepEqual2['default'])(prevProps.options, this.props.options)) {
          this._updateIScrollEvents(prevProps, this.props);
          this.refresh();
  
          // If options changed, we will destroy iScroll instance and create new one with same scroll position
          // TODO test if this will work with indicators
        } else {
            this.withIScroll(true, function (iScrollInstance) {
              // Save current state
              var x = iScrollInstance.x;
              var y = iScrollInstance.y;
              var scale = iScrollInstance.scale;
  
              // Destroy current and Create new instance of iScroll
              _this2._teardownIScroll();
              _this2._initializeIScroll();
  
              _this2.withIScroll(true, function (newIScrollInstance) {
                // Restore previous state
                if (scale && newIScrollInstance.zoom) newIScrollInstance.zoom(scale, 0, 0, 0);
  
                newIScrollInstance.scrollTo(x, y);
              });
            });
          }
      }
    }, {
      key: 'getIScroll',
      value: function getIScroll() {
        return this._iScrollInstance;
      }
    }, {
      key: 'getIScrollInstance',
      value: function getIScrollInstance() {
        console.warn("Function 'getIScrollInstance' is deprecated. Instead use 'getIScroll'");
        return this._iScrollInstance;
      }
    }, {
      key: 'withIScroll',
      value: function withIScroll(waitForInit, callback) {
        if (!callback && typeof waitForInit == "function") {
          callback = waitForInit;
        }
  
        if (this.getIScroll()) {
          callback(this.getIScroll());
        } else if (waitForInit === true) {
          this._queuedCallbacks.push(callback);
        }
      }
    }, {
      key: 'refresh',
      value: function refresh() {
        this.withIScroll(function (iScrollInstance) {
          return iScrollInstance.refresh();
        });
      }
    }, {
      key: '_runInitializeIScroll',
      value: function _runInitializeIScroll() {
        var _this3 = this;
  
        // const {iScroll, options} = this.props
  
        // Create iScroll instance with given options
  
        var iScrollInstance = new this.iScroll(_reactDom2['default'].findDOMNode(this), this.props.options);
        this._iScrollInstance = iScrollInstance;
  
        // TODO there should be new event 'onInitialize'
        this._triggerRefreshEvent();
  
        // Patch iScroll instance .refresh() function to trigger our onRefresh event
        var origRefresh = iScrollInstance.refresh;
  
        iScrollInstance.refresh = function () {
          origRefresh.apply(iScrollInstance);
          _this3._triggerRefreshEvent();
        };
  
        // Bind iScroll events
        this._bindIScrollEvents();
  
        this._callQueuedCallbacks();
      }
    }, {
      key: '_initializeIScroll',
      value: function _initializeIScroll() {
        var _this4 = this;
  
        var defer = this.props.defer;
  
        if (defer === false) {
          this._runInitializeIScroll();
        } else {
          setTimeout(function () {
            return _this4._runInitializeIScroll();
          }, defer);
        }
      }
    }, {
      key: '_callQueuedCallbacks',
      value: function _callQueuedCallbacks() {
        var callbacks = this._queuedCallbacks,
            len = callbacks.length;
  
        this._queuedCallbacks = [];
  
        for (var _i = 0; _i < len; _i++) {
          callbacks[_i](this.getIScroll());
        }
      }
    }, {
      key: '_teardownIScroll',
      value: function _teardownIScroll() {
        if (this._iScrollInstance) {
          this._iScrollInstance.destroy();
          this._iScrollInstance = undefined;
        }
      }
    }, {
      key: '_bindIScrollEvents',
      value: function _bindIScrollEvents() {
        // Bind events on iScroll instance
        this._iScrollBindedEvents = {};
        this._updateIScrollEvents({}, this.props);
      }
  
      // Iterate through available events and update one by one
    }, {
      key: '_updateIScrollEvents',
      value: function _updateIScrollEvents(prevProps, nextProps) {
        var len = availableEvents.length;
  
        for (var _i2 = 0; _i2 < len; _i2++) {
          var _availableEvents$_i2 = _slicedToArray(availableEvents[_i2], 2);
  
          var iScrollEventName = _availableEvents$_i2[0];
          var reactEventName = _availableEvents$_i2[1];
  
          this._updateIScrollEvent(iScrollEventName, prevProps[reactEventName], nextProps[reactEventName]);
        }
      }
  
      //拦截scroll、scrollEnd事件
    }, {
      key: '_currentEventBefore',
      value: function _currentEventBefore(iScrollEventName, iScrollInstance) {
        var infiniteEl = _reactDom2['default'].findDOMNode(this.refs.infinite),
            refreshEl = _reactDom2['default'].findDOMNode(this.refs.refresh);
  
        if (iScrollEventName == 'scroll') {
          if (this.props.infinite && iScrollInstance.y < 0 && iScrollInstance.y < iScrollInstance.maxScrollY - 5) {
            infiniteEl.innerHTML = '上滑加载更多...';
            infiniteEl.style.display = 'block';
          } else if (this.props.refresh && iScrollInstance.y > 0 && iScrollInstance.y >= 5) {
            refreshEl.innerHTML = '松开刷新...';
            refreshEl.style.display = 'block';
          }
        }
  
        if (iScrollEventName == 'scrollEnd') {
          if (this.props.infinite && iScrollInstance.y < 0 && iScrollInstance.y <= iScrollInstance.maxScrollY) {
            infiniteEl.innerHTML = '正在加载...';
            this.props.onInfinite && this.props.onInfinite();
          } else if (this.props.refresh && iScrollInstance.y >= 0 && iScrollInstance.y < 5) {
            refreshEl.innerHTML = '正在刷新...';
            this.props.onPullRefresh && this.props.onPullRefresh(function () {
              refreshEl.style.display = 'none';
            });
          }
        }
      }
  
      // Unbind and/or Bind event if it was changed during update
    }, {
      key: '_updateIScrollEvent',
      value: function _updateIScrollEvent(iScrollEventName, prevEvent, currentEvent) {
        var _this5 = this;
  
        var _this = this;
        if (prevEvent !== currentEvent) {
          this.withIScroll(true, function (iScrollInstance) {
            var currentEvents = _this5._iScrollBindedEvents;
  
            if (prevEvent) {
              iScrollInstance.off(iScrollEventName, currentEvents[iScrollEventName]);
              currentEvents[iScrollEventName] = undefined;
            }
  
            if (currentEvent) {
              var wrappedCallback = function wrappedCallback() {
                _this._currentEventBefore(iScrollEventName, iScrollInstance);
  
                for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                  args[_key] = arguments[_key];
                }
  
                currentEvent.apply(undefined, [iScrollInstance].concat(args));
              };
  
              iScrollInstance.on(iScrollEventName, wrappedCallback);
              currentEvents[iScrollEventName] = wrappedCallback;
            }
          });
        }
      }
    }, {
      key: '_triggerRefreshEvent',
      value: function _triggerRefreshEvent() {
        var onRefresh = this.props.onRefresh;
  
        if (onRefresh) {
          this.withIScroll(function (iScrollInstance) {
            return onRefresh(iScrollInstance);
          });
        }
      }
    }, {
      key: 'render',
      value: function render() {
        // Keep only html properties
        var htmlProps = {};
  
        for (var prop in this.props) {
          if (!propTypes[prop]) {
            htmlProps[prop] = this.props[prop];
          }
        }
  
        var children = htmlProps.children;
  
        var otherProps = _objectWithoutProperties(htmlProps, ['children']);
  
        return _react2['default'].createElement(
          'div',
          otherProps,
          _react2['default'].createElement(
            'div',
            null,
            this.props.refresh ? _react2['default'].createElement(Scroll.refresh, { ref: 'refresh' }) : null,
            children,
            this.props.infinite ? _react2['default'].createElement(Scroll.infinite, { ref: 'infinite' }) : null
          )
        );
      }
    }]);
  
    return Scroll;
  })(_react2['default'].Component);
  
  Scroll.infinite = _ScrollInfinite2['default'];
  Scroll.refresh = _ScrollRefresh2['default'];
  
  exports['default'] = Scroll;
  module.exports = exports['default'];

});

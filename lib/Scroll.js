'use strict';

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _objectWithoutProperties = require('babel-runtime/helpers/object-without-properties')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _deepEqual = require('deep-equal');

var _deepEqual2 = _interopRequireDefault(_deepEqual);

var _ScrollInfinite = require('./ScrollInfinite');

var _ScrollInfinite2 = _interopRequireDefault(_ScrollInfinite);

var _ScrollRefresh = require('./ScrollRefresh');

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

    _React$Component.call(this, props);
    this._queuedCallbacks = [];
    this._iScrollBindedEvents = {};
    this.state = {
      showInfinite: false
    };
  }

  Scroll.prototype.componentDidMount = function componentDidMount() {
    this.iScroll = require('iscroll/build/iscroll-probe');
    this._initializeIScroll();
  };

  Scroll.prototype.componentWillUnmount = function componentWillUnmount() {
    this._teardownIScroll();
  };

  // There is no state, we can compare only props.

  Scroll.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
    return !_deepEqual2['default'](this.props, nextProps);
  };

  // Check if iScroll options has changed and recreate instance with new one

  Scroll.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
    var _this2 = this;

    // If options are same, iScroll behaviour will not change. Just refresh events and trigger refresh
    if (_deepEqual2['default'](prevProps.options, this.props.options)) {
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
  };

  Scroll.prototype.getIScroll = function getIScroll() {
    return this._iScrollInstance;
  };

  Scroll.prototype.getIScrollInstance = function getIScrollInstance() {
    console.warn("Function 'getIScrollInstance' is deprecated. Instead use 'getIScroll'");
    return this._iScrollInstance;
  };

  Scroll.prototype.withIScroll = function withIScroll(waitForInit, callback) {
    if (!callback && typeof waitForInit == "function") {
      callback = waitForInit;
    }

    if (this.getIScroll()) {
      callback(this.getIScroll());
    } else if (waitForInit === true) {
      this._queuedCallbacks.push(callback);
    }
  };

  Scroll.prototype.refresh = function refresh() {
    this.withIScroll(function (iScrollInstance) {
      return iScrollInstance.refresh();
    });
  };

  Scroll.prototype._runInitializeIScroll = function _runInitializeIScroll() {
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
  };

  Scroll.prototype._initializeIScroll = function _initializeIScroll() {
    var _this4 = this;

    var defer = this.props.defer;

    if (defer === false) {
      this._runInitializeIScroll();
    } else {
      setTimeout(function () {
        return _this4._runInitializeIScroll();
      }, defer);
    }
  };

  Scroll.prototype._callQueuedCallbacks = function _callQueuedCallbacks() {
    var callbacks = this._queuedCallbacks,
        len = callbacks.length;

    this._queuedCallbacks = [];

    for (var _i = 0; _i < len; _i++) {
      callbacks[_i](this.getIScroll());
    }
  };

  Scroll.prototype._teardownIScroll = function _teardownIScroll() {
    if (this._iScrollInstance) {
      this._iScrollInstance.destroy();
      this._iScrollInstance = undefined;
    }
  };

  Scroll.prototype._bindIScrollEvents = function _bindIScrollEvents() {
    // Bind events on iScroll instance
    this._iScrollBindedEvents = {};
    this._updateIScrollEvents({}, this.props);
  };

  // Iterate through available events and update one by one

  Scroll.prototype._updateIScrollEvents = function _updateIScrollEvents(prevProps, nextProps) {
    var len = availableEvents.length;

    for (var _i2 = 0; _i2 < len; _i2++) {
      var _availableEvents$_i2 = availableEvents[_i2];
      var iScrollEventName = _availableEvents$_i2[0];
      var reactEventName = _availableEvents$_i2[1];

      this._updateIScrollEvent(iScrollEventName, prevProps[reactEventName], nextProps[reactEventName]);
    }
  };

  //拦截scroll、scrollEnd事件

  Scroll.prototype._currentEventBefore = function _currentEventBefore(iScrollEventName, iScrollInstance) {
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
  };

  // Unbind and/or Bind event if it was changed during update

  Scroll.prototype._updateIScrollEvent = function _updateIScrollEvent(iScrollEventName, prevEvent, currentEvent) {
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
  };

  Scroll.prototype._triggerRefreshEvent = function _triggerRefreshEvent() {
    var onRefresh = this.props.onRefresh;

    if (onRefresh) {
      this.withIScroll(function (iScrollInstance) {
        return onRefresh(iScrollInstance);
      });
    }
  };

  Scroll.prototype.render = function render() {
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
  };

  return Scroll;
})(_react2['default'].Component);

Scroll.infinite = _ScrollInfinite2['default'];
Scroll.refresh = _ScrollRefresh2['default'];

exports['default'] = Scroll;
module.exports = exports['default'];
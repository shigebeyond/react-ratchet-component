'use strict';

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

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

var _NavTitle = require('./NavTitle');

var _NavTitle2 = _interopRequireDefault(_NavTitle);

var NavBar = (function (_React$Component) {
    _inherits(NavBar, _React$Component);

    function NavBar() {
        _classCallCheck(this, _NavBar);

        _React$Component.apply(this, arguments);
    }

    NavBar.prototype.render = function render() {
        var title = undefined,
            children = this.props.children,
            classes = _utilsRatchetUtils2['default'].getClassSet(this.props),
            child = undefined;

        console.log("render.......", children);

        //从this.props.children取出navbar的title，在渲染时，方便添加特定样式
        if (Array.isArray(children)) {

            for (var i = 0; i < children.length; i++) {
                child = children[i];
                if (typeof child === 'string') {
                    title = child;
                    children.splice(i, 1);
                    break;
                }
            };
        } else {
            //子节点只有一个的时候，且是string，把它设为title
            if (typeof children === 'string') {
                title = children;
                children = null;
            }
        }

        console.log('render.', title);

        return _react2['default'].createElement(
            'nav',
            _extends({}, this.props, {
                className: _classnames2['default'](classes, this.props.className) }),
            children,
            title ? _react2['default'].createElement(
                _NavTitle2['default'],
                null,
                title
            ) : null
        );
    };

    var _NavBar = NavBar;
    NavBar = _utilsComponentDecorators.classesDecorator('bar')(NavBar) || NavBar;
    NavBar = _utilsComponentDecorators.stylesDecorator(_utilsStyleMaps.BAR_STYLES.values(), 'nav')(NavBar) || NavBar;
    return NavBar;
})(_react2['default'].Component);

NavBar.Title = _NavTitle2['default'];

exports['default'] = NavBar;
module.exports = exports['default'];
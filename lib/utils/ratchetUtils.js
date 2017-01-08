'use strict';

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

exports.__esModule = true;

var _react = require('react');

var _invariant = require('invariant');

var _invariant2 = _interopRequireDefault(_invariant);

var _styleMaps = require('./styleMaps');

var _styleMaps2 = _interopRequireDefault(_styleMaps);

function prefix(props, variant) {
    if (props === undefined) props = {};

    _invariant2['default']((props.ratClass || '').trim(), 'A `ratClass` prop is required for this component');
    return props.ratClass + (variant ? '-' + variant : '');
}

function getClassSet(props) {
    var classes = {},
        ratClass = prefix(props),
        ratStyle = props.ratStyle;

    if (ratClass) {

        //设置默认的ratClass为true
        classes[ratClass] = true;

        if (ratStyle) {

            //默认的ratClass是自动配置的
            if (ratStyle.indexOf(ratClass) === 0) {
                console.error('ratStyle will automatically prefix custom values with the ratClass, so there is no need to append it manually. (ratStyle: ' + ratStyle + ', ratClass: ' + ratClass + ')');
                classes[ratStyle] = true;
            } else {
                classes[prefix(props, ratStyle)] = true;
            }
        }
    }

    return classes;
}

exports['default'] = {
    prefix: prefix, getClassSet: getClassSet
};
module.exports = exports['default'];
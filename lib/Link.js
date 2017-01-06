define('src/Link.jsx', function(require, exports, module) {

  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
      value: true
  });
  
  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  
  var _react = require('node_modules/react/react');
  
  var _react2 = _interopRequireDefault(_react);
  
  // import ReactDOM from 'react-dom';
  
  var _classnames = require('node_modules/classnames/index');
  
  var _classnames2 = _interopRequireDefault(_classnames);
  
  var _utilsRatchetUtils = require('src/utils/ratchetUtils');
  
  var _utilsRatchetUtils2 = _interopRequireDefault(_utilsRatchetUtils);
  
  // import Ajax from './utils/ajax';
  // import getContainer from './utils/getContainer';
  // import ownerDocument from './utils/ownerDocument';
  // import {transform} from 'babel-core';
  // import presetEs2015 from 'babel-preset-es2015';
  // import presetReact from 'babel-preset-react';
  
  var Link = _react2['default'].createClass({
      displayName: 'Link',
  
      propTypes: {
          href: _react2['default'].PropTypes.string,
          icon: _react2['default'].PropTypes.string,
          left: _react2['default'].PropTypes.bool,
          right: _react2['default'].PropTypes.bool
      },
      getDefaultProps: function getDefaultProps() {
          return {
              ratClass: 'link',
              left: false,
              right: false
          };
      },
  
      render: function render() {
          var _extends2;
  
          var classes = _utilsRatchetUtils2['default'].getClassSet(this.props),
              iconProps = { ratClass: 'icon', ratStyle: this.props.icon },
              iconClasses = this.props.icon ? _utilsRatchetUtils2['default'].getClassSet(iconProps) : {},
              leftClass = 'pull-left',
              rightClass = 'pull-right',
              href = this.props.href || 'javascript:;';
  
          Object.assign(classes, iconClasses);
  
          classes = _extends({}, classes, (_extends2 = {}, _defineProperty(_extends2, leftClass, this.props.left), _defineProperty(_extends2, rightClass, this.props.right), _extends2));
  
          return _react2['default'].createElement(
              'a',
              _extends({}, this.props, {
                  href: href,
                  className: (0, _classnames2['default'])(classes, this.props.className),
                  onTouchEnd: this.handleTouch }),
              this.props.children
          );
      },
  
      handleTouch: function handleTouch(event) {
  
          var push = this.props.push;
          if (!push || !push.href) {
              this.props.onTouchEnd && this.props.onTouchEnd();
              return;
          }
  
          event.preventDefault();
          event.stopPropagation();
  
          this.onPush(push);
      },
  
      onPush: function onPush(options) {
  
          // Ajax.ajax({
          //   url: options.href,
          //   dataType: 'html',
          //   success: (...args) => this.renderPage(options, ...args)
          // });
  
      },
  
      renderPage: function renderPage(options, html) {
  
          // const React = require('react');
          // const ReactDOM = require('react-dom');
          // const ReactDOMServer = require('react-dom/server');
  
          // //components
          // const NavBar = require('./NavBar').default;
          // const NavButton = require('./NavButton').default;
          // const TabBar = require('./TabBar').default;
          // const StandardBar = require('./StandardBar').default;
          // const SegmentedControl = require('./SegmentedControl').default;
          // // const Link = require('./Link').default;
          // const Form = require('./Form').default;
          // const FormButton = require('./FormButton').default;
          // const Input = require('./Input').default;
          // const List = require('./List').default;
          // const ListItem = require('./ListItem').default;
          // const Card = require('./Card').default;
          // const Media = require('./Media').default;
          // const Button = require('./Button').default;
          // const Toggle = require('./Toggle').default;
          // const Badge = require('./Badge').default;
          // const Icon = require('./Icon').default;
          // const NavPopover = require('./NavPopover').default;
          // const Modal = require('./Modal').default;
          // const Slider = require('./Slider').default;
          // const SliderItem = require('./SliderItem').default;
  
          // let doc = ownerDocument(this);
          // let container = getContainer(options.container, doc.body);
  
          // //普通html页面，直接append
          // if (/<html/i.test(html)) {
          //     this.appendTo( html, container );
          //     return;
          // }
  
          // // For the initial render, we can hijack React.render to intercept the
          // // example element and render it normally. This is safe because it's code
          // // that we supply, so we can ensure ahead of time that it won't throw an
          // // exception while rendering.
          // const originalRender = ReactDOM.render;
  
          // try {
          //     const compiledCode = transform( html,{
          //             presets: [presetReact]
          //         }).code;
  
          //     //获取要render的element
          //     ReactDOM.render = (element) => this._element = element;
          //     eval(compiledCode);
  
          //     //不直接渲染到container，这样会使原来的节点被删除
          //     // let div = doc.createElement('div');
          //     // div = doc.body.appendChild( div );
          //     //ReactDOM.render( this._element, div );
          //     // div.innerHTML = ReactDOMServer.renderToString( this._element );
          //     // this.appendTo( div.childNodes[0], container );
  
          // } catch(e){
          //     throw e;
          // } finally {
          //     ReactDOM.render = originalRender;
          // }
  
          // let div = doc.createElement('div');
          // //
          // // ReactDOM.unstable_renderSubtreeIntoContainer( this, this._element, div );
          // //无法删除该节点
          // //React.unmountComponentAtNode( container );
  
          // ReactDOM.render( this._element, div );
          // //container在外面传过来的时候，可能直接使用了this，这样会导致它指向了前面创建的div，在render时，层级会越来越多
          // container.insertBefore( div, container.childNodes[0] );
          // this.removeChildNodes( container );
  
      },
  
      appendTo: function appendTo(dom, container) {
  
          var doc = ownerDocument(this);
          container.insertBefore(dom, container.childNodes[0]);
          this.removeChildNodes(container);
      },
  
      removeChildNodes: function removeChildNodes(container) {
          var first = container.childNodes[0];
  
          while (first.nextSibling !== null) {
              container.removeChild(first.nextSibling);
          }
      }
  });
  
  exports['default'] = Link;
  module.exports = exports['default'];

});

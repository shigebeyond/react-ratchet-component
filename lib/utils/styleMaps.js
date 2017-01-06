define('src/utils/styleMaps', function(require, exports, module) {

  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
      value: true
  });
  var constant = function constant(obj) {
      return Object.assign(Object.create({
          values: function values() {
              var _this = this;
  
              return Object.keys(this).map(function (k) {
                  return _this[k];
              });
          }
      }), obj);
  };
  
  var BAR_STYLES = constant({
      NAV: 'nav',
      TAB: 'tab',
      STANDARD: 'standard'
  });
  
  exports.BAR_STYLES = BAR_STYLES;
  var BUTTON_STYLES = constant({
      PRIMARY: 'primary',
      POSITIVE: 'positive',
      NEGATIVE: 'negative',
      LINK: 'link'
  });
  
  exports.BUTTON_STYLES = BUTTON_STYLES;
  var BADGE_STYLES = constant({
      PRIMARY: 'primary',
      POSITIVE: 'positive',
      NEGATIVE: 'negative'
  });
  
  exports.BADGE_STYLES = BADGE_STYLES;
  var ICON_STYLES = constant({
      BACK: 'back',
      BARS: 'bars',
      CARET: 'caret',
      CHECK: 'check',
      CLOSE: 'close',
      CODE: 'code',
      COMPOSE: 'compose',
      DOWNLOAD: 'download',
      EDIT: 'edit',
      FORWARD: 'forward',
      GEAR: 'gear',
      HOME: 'home',
      INFO: 'info',
      LIST: 'list',
      MORE_VERTICAL: 'more-vertical',
      MORE: 'more',
      PAGES: 'pages',
      PAUSE: 'pause',
      PERSON: 'person',
      PLAY: 'play',
      PLUS: 'plus',
      REFRESH: 'refresh',
      SEARCH: 'search',
      SHARE: 'share',
      SOUND: 'sound',
      SOUND2: 'sound2',
      SOUND3: 'sound3',
      SOUND4: 'sound4',
      STAR_FILLED: 'star-filled',
      STAR: 'star',
      STOP: 'stop',
      TRASH: 'trash',
      UP_NAV: 'up-nav',
      UP: 'up',
      RIGHT_NAV: 'right-nav',
      RIGHT: 'right',
      DOWN_NAV: 'down-nav',
      DOWN: 'down',
      LEFT_NAV: 'left-nav',
      LEFT: 'left'
  });
  exports.ICON_STYLES = ICON_STYLES;

});

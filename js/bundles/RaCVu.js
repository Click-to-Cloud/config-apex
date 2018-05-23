var pageComponent =
webpackJsonppageComponent([15],{

/***/ 268:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _metalComponent = __webpack_require__(1);

var _metalComponent2 = _interopRequireDefault(_metalComponent);

var _metalSoy = __webpack_require__(2);

var _metalSoy2 = _interopRequireDefault(_metalSoy);

__webpack_require__(5);

__webpack_require__(6);

__webpack_require__(7);

__webpack_require__(8);

__webpack_require__(9);

__webpack_require__(10);

__webpack_require__(11);

__webpack_require__(12);

__webpack_require__(13);

__webpack_require__(14);

__webpack_require__(15);

__webpack_require__(16);

var _indexSoy = __webpack_require__(269);

var _indexSoy2 = _interopRequireDefault(_indexSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RaCVu = function (_Component) {
  _inherits(RaCVu, _Component);

  function RaCVu() {
    _classCallCheck(this, RaCVu);

    return _possibleConstructorReturn(this, (RaCVu.__proto__ || Object.getPrototypeOf(RaCVu)).apply(this, arguments));
  }

  return RaCVu;
}(_metalComponent2.default);

;

_metalSoy2.default.register(RaCVu, _indexSoy2.default);

exports.default = RaCVu;

/***/ }),

/***/ 269:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.RaCVu = undefined;

var _metalComponent = __webpack_require__(1);

var _metalComponent2 = _interopRequireDefault(_metalComponent);

var _metalSoy = __webpack_require__(2);

var _metalSoy2 = _interopRequireDefault(_metalSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* jshint ignore:start */


var templates;
goog.loadModule(function (exports) {

  // This file was automatically generated from index.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace RaCVu.
   * @public
   */

  goog.module('RaCVu.incrementaldom');

  /** @suppress {extraRequire} */
  var soy = goog.require('soy');
  /** @suppress {extraRequire} */
  var soydata = goog.require('soydata');
  /** @suppress {extraRequire} */
  goog.require('goog.asserts');
  /** @suppress {extraRequire} */
  goog.require('soy.asserts');
  /** @suppress {extraRequire} */
  goog.require('goog.i18n.bidi');
  /** @suppress {extraRequire} */
  goog.require('goog.string');
  var IncrementalDom = goog.require('incrementaldom');
  var ie_open = IncrementalDom.elementOpen;
  var ie_close = IncrementalDom.elementClose;
  var ie_void = IncrementalDom.elementVoid;
  var ie_open_start = IncrementalDom.elementOpenStart;
  var ie_open_end = IncrementalDom.elementOpenEnd;
  var itext = IncrementalDom.text;
  var iattr = IncrementalDom.attr;

  var $templateAlias2 = _metalSoy2.default.getTemplate('ElectricCode.incrementaldom', 'render');

  var $templateAlias1 = _metalSoy2.default.getTemplate('guide.incrementaldom', 'render');

  /**
   * @param {{
   *    page: (?),
   *    site: (?)
   * }} opt_data
   * @param {(null|undefined)=} opt_ignored
   * @param {Object<string, *>=} opt_ijData
   * @return {void}
   * @suppress {checkTypes}
   */
  function $render(opt_data, opt_ignored, opt_ijData) {
    var param315 = function param315() {
      ie_open('h6');
      var dyn27 = opt_data.page.description;
      if (typeof dyn27 == 'function') dyn27();else if (dyn27 != null) itext(dyn27);
      ie_close('h6');
      ie_open('article', null, null, 'id', '1');
      ie_open('h2');
      itext('CacheStore');
      ie_close('h2');
      ie_open('p');
      ie_open('code');
      itext('CacheStore');
      ie_close('code');
      itext(' provides a ready-to-use solution for cache management.');
      ie_close('p');
      ie_open('p');
      itext('According to Salesforce Platform Cache Best Practices, too many requests for small cached items are inefficient. A recommended way is to bundle these items into a large item to be cached. The problem is that we have a size limit for the single cached item. That means that we cannot put too huge an item into the cache.');
      ie_close('p');
      ie_open('p');
      itext('CacheStore is hence created to offer an elegant way to solve this. Inside CacheStore, we manage a list of bundles, each of them is a ');
      ie_open('code');
      itext('Map<String, Object');
      ie_close('code');
      itext('. Whenever users put an item to cache, we will try to fit it into a suitable bundle, and then cache the whole bundle. If no suitable bundle is found, a new bundle will be created and added to the list.');
      ie_close('p');
      ie_open('p');
      itext('To check the details, please see the implementation of ');
      ie_open('code');
      itext('CacheStore');
      ie_close('code');
      itext('.');
      ie_close('p');
      ie_open('p');
      itext('Here is how we use it.');
      ie_close('p');
      $templateAlias2({ code: 'CacheStore store = new CacheStore(\'Your Partition\');\nstore.OrgCache.put(\'key\', \'value\');\nString value = (String)store.get(\'key\');', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '2');
      ie_open('h2');
      itext('Constructors');
      ie_close('h2');
      ie_open('table');
      ie_open('thead');
      ie_open('tr');
      ie_open('th');
      itext('Constructor');
      ie_close('th');
      ie_open('th');
      itext('Description');
      ie_close('th');
      ie_close('tr');
      ie_close('thead');
      ie_open('tbody');
      ie_open('tr');
      ie_open('td');
      itext('CacheStore(String)');
      ie_close('td');
      ie_open('td');
      itext('Create a cache store with the partition name');
      ie_close('td');
      ie_close('tr');
      ie_close('tbody');
      ie_close('table');
      ie_close('article');
      ie_open('article', null, null, 'id', '3');
      ie_open('h2');
      itext('Methods');
      ie_close('h2');
      ie_open('table');
      ie_open('thead');
      ie_open('tr');
      ie_open('th');
      itext('Method');
      ie_close('th');
      ie_open('th');
      itext('Description');
      ie_close('th');
      ie_close('tr');
      ie_close('thead');
      ie_open('tbody');
      ie_open('tr');
      ie_open('td');
      itext('contains(String)');
      ie_close('td');
      ie_open('td');
      itext('Check if the item exists in OrgCache or SessionCache');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('get(String)');
      ie_close('td');
      ie_open('td');
      itext('Get the item from OrgCache and SessionCache');
      ie_close('td');
      ie_close('tr');
      ie_close('tbody');
      ie_close('table');
      ie_close('article');
      ie_open('article', null, null, 'id', '4');
      ie_open('h2');
      itext('Cache Providers');
      ie_close('h2');
      ie_open('p');
      itext('After creating a CacheStore, we have two cache providers, ');
      ie_open('code');
      itext('OrgCache');
      ie_close('code');
      itext(' and ');
      ie_open('code');
      itext('SessionCache');
      ie_close('code');
      itext('.');
      ie_close('p');
      $templateAlias2({ code: 'CacheStore store = new CacheStore(\'Your Partition\');\nstore.OrgCache.put(\'key\', \'value\');\nString value = (String)store.SessionCache.get(\'key\');', mode: 'javascript' }, null, opt_ijData);
      ie_open('table');
      ie_open('thead');
      ie_open('tr');
      ie_open('th');
      itext('Method');
      ie_close('th');
      ie_open('th');
      itext('Description');
      ie_close('th');
      ie_close('tr');
      ie_close('thead');
      ie_open('tbody');
      ie_open('tr');
      ie_open('td');
      itext('contains(String)');
      ie_close('td');
      ie_open('td');
      itext('Check if the cache provider contains the item');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('get(String)');
      ie_close('td');
      ie_open('td');
      itext('Get the item from the cache');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('put(String, Object)');
      ie_close('td');
      ie_open('td');
      itext('Put the item to the cache');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('reload()');
      ie_close('td');
      ie_open('td');
      itext('Reload the cache');
      ie_close('td');
      ie_close('tr');
      ie_close('tbody');
      ie_close('table');
      ie_close('article');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.page.title);
      ie_close('input');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.site.title);
      ie_close('input');
    };
    $templateAlias1(soy.$$assignDefaults({ content: param315 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'RaCVu.render';
  }

  exports.render.params = ["page", "site"];
  exports.render.types = { "page": "?", "site": "?" };
  exports.templates = templates = exports;
  return exports;
});

var RaCVu = function (_Component) {
  _inherits(RaCVu, _Component);

  function RaCVu() {
    _classCallCheck(this, RaCVu);

    return _possibleConstructorReturn(this, (RaCVu.__proto__ || Object.getPrototypeOf(RaCVu)).apply(this, arguments));
  }

  return RaCVu;
}(_metalComponent2.default);

_metalSoy2.default.register(RaCVu, templates);
exports.RaCVu = RaCVu;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[268]);
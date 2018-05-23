var pageComponent =
webpackJsonppageComponent([13],{

/***/ 272:
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

var _indexSoy = __webpack_require__(273);

var _indexSoy2 = _interopRequireDefault(_indexSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BmZOh = function (_Component) {
  _inherits(BmZOh, _Component);

  function BmZOh() {
    _classCallCheck(this, BmZOh);

    return _possibleConstructorReturn(this, (BmZOh.__proto__ || Object.getPrototypeOf(BmZOh)).apply(this, arguments));
  }

  return BmZOh;
}(_metalComponent2.default);

;

_metalSoy2.default.register(BmZOh, _indexSoy2.default);

exports.default = BmZOh;

/***/ }),

/***/ 273:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.BmZOh = undefined;

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
   * @fileoverview Templates in namespace BmZOh.
   * @public
   */

  goog.module('BmZOh.incrementaldom');

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
    var param404 = function param404() {
      ie_open('h6');
      var dyn29 = opt_data.page.description;
      if (typeof dyn29 == 'function') dyn29();else if (dyn29 != null) itext(dyn29);
      ie_close('h6');
      ie_open('article', null, null, 'id', '1');
      ie_open('h2');
      itext('SObjectHandler');
      ie_close('h2');
      ie_open('p');
      ie_open('code');
      itext('SObjectHandler');
      ie_close('code');
      itext(' provides easy integrations with SObjects and CustomSettings.');
      ie_close('p');
      ie_open('p');
      itext('To create a read handler, we can do this:');
      ie_close('p');
      $templateAlias2({ code: 'configService.onRead(\'/System/CustomButton/list\', new Config.SObjectHandler(\'Custom_Button__c\')\n    .fetch(\'SELECT Id, Name FROM Custom_Button__c\')\n    .then(R.pluck.apply(\'Name\'))\n);', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      itext('To create a write handler, we can do this:');
      ie_close('p');
      $templateAlias2({ code: 'configService.onWrite(\'/System/CustomButton/new\', new Config.SObjectHandler(\'Custom_Button__c\')\n    .doInsert(new Map<String, Object>{ ...  });\n);', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '2');
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
      itext('SObjectHandler(String)');
      ie_close('td');
      ie_open('td');
      itext('Create an instance with the object type');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('fetch(String)');
      ie_close('td');
      ie_open('td');
      itext('Get the records from the query');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('then(Func)');
      ie_close('td');
      ie_open('td');
      itext('Add the Func to process the data');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('doInsert(Map<String, Object>)');
      ie_close('td');
      ie_open('td');
      itext('Insert the data');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('doUpdate(Map<String, Object>)');
      ie_close('td');
      ie_open('td');
      itext('Update the records with the data');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('doDelete()');
      ie_close('td');
      ie_open('td');
      itext('Delete the records');
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
    $templateAlias1(soy.$$assignDefaults({ content: param404 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'BmZOh.render';
  }

  exports.render.params = ["page", "site"];
  exports.render.types = { "page": "?", "site": "?" };
  exports.templates = templates = exports;
  return exports;
});

var BmZOh = function (_Component) {
  _inherits(BmZOh, _Component);

  function BmZOh() {
    _classCallCheck(this, BmZOh);

    return _possibleConstructorReturn(this, (BmZOh.__proto__ || Object.getPrototypeOf(BmZOh)).apply(this, arguments));
  }

  return BmZOh;
}(_metalComponent2.default);

_metalSoy2.default.register(BmZOh, templates);
exports.BmZOh = BmZOh;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[272]);
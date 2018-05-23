var pageComponent =
webpackJsonppageComponent([4],{

/***/ 284:
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

var _step_5Soy = __webpack_require__(285);

var _step_5Soy2 = _interopRequireDefault(_step_5Soy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var XUBZT = function (_Component) {
  _inherits(XUBZT, _Component);

  function XUBZT() {
    _classCallCheck(this, XUBZT);

    return _possibleConstructorReturn(this, (XUBZT.__proto__ || Object.getPrototypeOf(XUBZT)).apply(this, arguments));
  }

  return XUBZT;
}(_metalComponent2.default);

;

_metalSoy2.default.register(XUBZT, _step_5Soy2.default);

exports.default = XUBZT;

/***/ }),

/***/ 285:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.XUBZT = undefined;

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

  // This file was automatically generated from step_5.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace XUBZT.
   * @public
   */

  goog.module('XUBZT.incrementaldom');

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

  var $templateAlias1 = _metalSoy2.default.getTemplate('tutorial.incrementaldom', 'render');

  /**
   * @param {{
   *    page: (?),
   *    site: (?),
   *    elementClasses: (?)
   * }} opt_data
   * @param {(null|undefined)=} opt_ignored
   * @param {Object<string, *>=} opt_ijData
   * @return {void}
   * @suppress {checkTypes}
   */
  function $render(opt_data, opt_ignored, opt_ijData) {
    var param494 = function param494() {
      ie_open('h2');
      var dyn34 = opt_data.page.title;
      if (typeof dyn34 == 'function') dyn34();else if (dyn34 != null) itext(dyn34);
      ie_close('h2');
      ie_open('p');
      itext('After creating the instance of the config service, we need to correctly set it up for use. A config service is a facade that accepts config requests on certain config urls, process the requests and send back the responses. It dispatches the config requests to config handlers to process.');
      ie_close('p');
      $templateAlias2({ code: 'onfigService.onRead(\'/System/version\', new SystemVersionFunc());', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      itext('Here we registered a config handler ');
      ie_open('code');
      itext('SystemVersionFunc');
      ie_close('code');
      itext(' to process requests from config url ');
      ie_open('code');
      itext('/System/version');
      ie_close('code');
      itext('. Also we can register config handlers to process requests to update configuration values.');
      ie_close('p');
      $templateAlias2({ code: 'configService.onWrite(\'/System/version\', new SystemVersionWriteFunc());', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      itext('By default, config handlers work on the org cache. But we can specify them to work on the session cache too.');
      ie_close('p');
      $templateAlias2({ code: 'configService.onRead(\'/System/version\', true, Config.SCOPE_SESSION, new SystemVersionFunc());', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      itext('Or even we can turn off the cache used by the config handlers, when sometimes we need to always get the update-to-date data.');
      ie_close('p');
      $templateAlias2({ code: 'configService.onRead(\'/System/version\', false, new SystemVersionFunc());', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      itext('In case of complicated config requests, we also support parameterized url matching.');
      ie_close('p');
      $templateAlias2({ code: 'public class CustomHandler extends Func {\n    public override Object exec(Object arg) {\n        Map<String, String> params = (Map<String, String>)arg;\n        String version = params.get(\'version\');\n        // Custom logic\n        return \'config value\';\n    }\n\n    public override Object exec(Object arg1, Object arg2) {\n        Map<String, String> params = (Map<String, String>)arg1;\n        Map<String, Object> data = (Map<String, Object>)arg2;\n        // Custom logic\n        return null;\n    }\n}\n\nFunc handler = new CustomHandler();\nconfigService.onReadWrite(\'/System/version/${version}\', handler, handler);', mode: 'javascript' }, null, opt_ijData);
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.page.title);
      ie_close('input');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.site.title);
      ie_close('input');
    };
    $templateAlias1(soy.$$assignDefaults({ content: param494 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'XUBZT.render';
  }

  exports.render.params = ["page", "site"];
  exports.render.types = { "page": "?", "site": "?" };
  exports.templates = templates = exports;
  return exports;
});

var XUBZT = function (_Component) {
  _inherits(XUBZT, _Component);

  function XUBZT() {
    _classCallCheck(this, XUBZT);

    return _possibleConstructorReturn(this, (XUBZT.__proto__ || Object.getPrototypeOf(XUBZT)).apply(this, arguments));
  }

  return XUBZT;
}(_metalComponent2.default);

_metalSoy2.default.register(XUBZT, templates);
exports.XUBZT = XUBZT;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[284]);
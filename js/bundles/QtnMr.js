var pageComponent =
webpackJsonppageComponent([14],{

/***/ 270:
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

var _indexSoy = __webpack_require__(271);

var _indexSoy2 = _interopRequireDefault(_indexSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var QtnMr = function (_Component) {
  _inherits(QtnMr, _Component);

  function QtnMr() {
    _classCallCheck(this, QtnMr);

    return _possibleConstructorReturn(this, (QtnMr.__proto__ || Object.getPrototypeOf(QtnMr)).apply(this, arguments));
  }

  return QtnMr;
}(_metalComponent2.default);

;

_metalSoy2.default.register(QtnMr, _indexSoy2.default);

exports.default = QtnMr;

/***/ }),

/***/ 271:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.QtnMr = undefined;

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
   * @fileoverview Templates in namespace QtnMr.
   * @public
   */

  goog.module('QtnMr.incrementaldom');

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
    var param336 = function param336() {
      ie_open('h6');
      var dyn28 = opt_data.page.description;
      if (typeof dyn28 == 'function') dyn28();else if (dyn28 != null) itext(dyn28);
      ie_close('h6');
      ie_open('article', null, null, 'id', '1');
      ie_open('h2');
      itext('Background');
      ie_close('h2');
      ie_open('p');
      itext('In a large system, we may encounter configurations from different sources. For example, we can store configurations in custom settings, or some custom SObjects. Even we can read configurations from external web services. So configurations are grouped by where they come from, and when we want to use the configs, we need to know their sources. However, what we ideally want is that our configurations are grouped by features and functions, and we don\'t want to be disturbed by where the configs come from and how we should access the configs. Under this background, we have the idea of building a config system, which provides a unified API that gives a consistent access to our configurations.');
      ie_close('p');
      ie_close('article');
      ie_open('article', null, null, 'id', '2');
      ie_open('h2');
      itext('Config Service');
      ie_close('h2');
      ie_open('p');
      itext('With the purpose above, we built the Config Service, which behaves pretty much like the http service.');
      ie_close('p');
      ie_open('p');
      itext('Here are the factors involved in Config Service:');
      ie_close('p');
      ie_open('ul');
      ie_open('li');
      ie_open('p');
      itext('Config URL A config service provider is bound to a specific config url. A config URL may be an exact String, or a pattern that matches a range of Strings, with variables starting with \'$ and ending with \'.');
      ie_close('p');
      ie_close('li');
      ie_open('li');
      ie_open('p');
      itext('Config Request A request for retrieving or updating the value of the configuration url. Like http requests, we can request a config url like this:');
      ie_close('p');
      ie_close('li');
      ie_close('ul');
      $templateAlias2({ code: '/System/version?type=String', mode: 'text' }, null, opt_ijData);
      ie_open('p');
      itext('Additional parameters may be specified. Also when it comes to the requests for updating, we can send the data of ');
      ie_open('code');
      itext('Map<String, Object>');
      ie_close('code');
      itext('.');
      ie_close('p');
      ie_open('p');
      itext('Config requests are divided into two types: ');
      ie_open('code');
      itext('read');
      ie_close('code');
      itext('(');
      ie_open('code');
      itext('get');
      ie_close('code');
      itext(') and ');
      ie_open('code');
      itext('write');
      ie_close('code');
      itext('(');
      ie_open('code');
      itext('put');
      ie_close('code');
      itext(').');
      ie_close('p');
      ie_open('ul');
      ie_open('li');
      ie_open('p');
      itext('Config Response For ');
      ie_open('code');
      itext('read');
      ie_close('code');
      itext(' config request, we respond with the value of the config. For ');
      ie_open('code');
      itext('write');
      ie_close('code');
      itext(' config request, the response is not used.');
      ie_close('p');
      ie_close('li');
      ie_open('li');
      ie_open('p');
      itext('Config Handler A config handler is a Func used to process the logic for config requests. Usually we need to specify a config handler for each type of the config request.');
      ie_close('p');
      ie_close('li');
      ie_close('ul');
      ie_close('article');
      ie_open('article', null, null, 'id', '3');
      ie_open('h2');
      itext('Config Service Setup');
      ie_close('h2');
      ie_open('p');
      itext('Config service uses ');
      ie_open('code');
      itext('CacheStore');
      ie_close('code');
      itext(' to improve performance, so we need an instance of CacheStore to build the config service.');
      ie_close('p');
      $templateAlias2({ code: 'CacheStore store = new CacheStore(\'PARTITION\');\nConfig configService = new Config(store);', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      itext('It\'s recommended that for one application, we use one global config service like this:');
      ie_close('p');
      $templateAlias2({ code: 'public class MyConfig {\n    private static Config configService;\n\n    public static Config getConfig() {\n        if(configService == null) {\n            CacheStore store = new CacheStore(\'PARTITION_NAME\');\n            configService = new Config(store);\n\n            // set up the config service\n        }\n\n        return configService;\n    }\n}', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      itext('During the setup, we need register config handlers.');
      ie_close('p');
      $templateAlias2({ code: 'configService.onRead(\'/System/version\', new SystemVersionFunc());\nconfigService.onWrite(\'/System/version\', new SystemVersionWriteFunc());', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '4');
      ie_open('h2');
      itext('Config Handlers');
      ie_close('h2');
      ie_open('p');
      itext('A config handler is actuall a Func.');
      ie_close('p');
      ie_open('p');
      itext('Here is how we implement a ');
      ie_open('code');
      itext('onRead');
      ie_close('code');
      itext(' handler.');
      ie_close('p');
      $templateAlias2({ code: 'public class OnReadFunc extends Func {\n    public override Object exec(Object arg) {\n        Map<String, String> params = (Map<String, String>)arg;\n        // Custom logic\n        return \'config value\';\n    }\n}', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      itext('The ');
      ie_open('code');
      itext('params');
      ie_close('code');
      itext(' are collected from the config request. For example, for a config request like this,');
      ie_close('p');
      $templateAlias2({ code: 'Config request\n/System/version/1?type=String', mode: 'text' }, null, opt_ijData);
      ie_open('p');
      ie_open('code');
      itext('params');
      ie_close('code');
      itext(' will be collected as:');
      ie_close('p');
      $templateAlias2({ code: '{ \'number\' => \'1\', \'type\' => \'String\' }', mode: 'text' }, null, opt_ijData);
      ie_open('p');
      itext('Here is how we implement a ');
      ie_open('code');
      itext('onWrite');
      ie_close('code');
      itext(' handler.');
      ie_close('p');
      $templateAlias2({ code: 'public class OnWriteFunc extends Func {\n    public override Object exec(Object arg1, Object arg2) {\n        Map<String, String> params = (Map<String, String>)arg1;\n        Map<String, Object> data = (Map<String, Object>)arg2;\n        // Custom logic\n        return null;\n    }\n}', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '5');
      ie_open('h2');
      itext('Read Configuration');
      ie_close('h2');
      ie_open('p');
      itext('After the config service is set up, we can use it globally to read configurations.');
      ie_close('p');
      $templateAlias2({ code: 'String version = (String)configService.read(\'/System/version\');\n// equivalent to\nString version = (String)configService.get(\'/System/version\');', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      itext('By default, we can even specify what kind of data type we want to get.');
      ie_close('p');
      $templateAlias2({ code: 'String version = (String)configService.read(\'/System/version?type=String\');', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      itext('Config.apex will convert the result configuration value according to the type you specified.');
      ie_close('p');
      ie_close('article');
      ie_open('article', null, null, 'id', '6');
      ie_open('h2');
      itext('Write Configuration');
      ie_close('h2');
      ie_open('p');
      itext('We can write configurations too, using the config service.');
      ie_close('p');
      $templateAlias2({ code: 'configService.write(\'/System/version\', new Map<String, Object>{\n    \'value\': \'1.0.0\'\n});\n// equivalent to\nconfigService.put(\'/System/version\', new Map<String, Object>{\n    \'value\': \'1.0.0\'\n});', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      itext('We can pass in both params from the request config url and the data of ');
      ie_open('code');
      itext('Map<String, Object>');
      ie_close('code');
      itext('.');
      ie_close('p');
      ie_close('article');
      ie_open('article', null, null, 'id', '7');
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
      itext('Config(CacheStore)');
      ie_close('td');
      ie_open('td');
      itext('Create a config from the CacheStore');
      ie_close('td');
      ie_close('tr');
      ie_close('tbody');
      ie_close('table');
      ie_close('article');
      ie_open('article', null, null, 'id', '8');
      ie_open('h2');
      itext('Common Methods');
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
      itext('getConfigPaths()');
      ie_close('td');
      ie_open('td');
      itext('Get all config paths');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('get(String)');
      ie_close('td');
      ie_open('td');
      itext('Get the config');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('read(String)');
      ie_close('td');
      ie_open('td');
      itext('Read the config');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('put(String, Map<String, Object>)');
      ie_close('td');
      ie_open('td');
      itext('Write the config');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('write(String, Map<String, Object>)');
      ie_close('td');
      ie_open('td');
      itext('Write the config');
      ie_close('td');
      ie_close('tr');
      ie_close('tbody');
      ie_close('table');
      ie_close('article');
      ie_open('article', null, null, 'id', '9');
      ie_open('h2');
      itext('Setup Methods');
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
      itext('onReadWrite(String, Boolean, String, Func, Func)');
      ie_close('td');
      ie_open('td');
      itext('Register read/write handlers');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('onReadWrite(String, Boolean, Func, Func)');
      ie_close('td');
      ie_open('td');
      itext('Register read/write handlers');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('onReadWrite(String, Func, Func)');
      ie_close('td');
      ie_open('td');
      itext('Register read/write handlers');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('onRead(String, Boolean, String, Func)');
      ie_close('td');
      ie_open('td');
      itext('Register read handler');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('onRead(String, Boolean, Func)');
      ie_close('td');
      ie_open('td');
      itext('Register read handler');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('onRead(String, Func)');
      ie_close('td');
      ie_open('td');
      itext('Register read handler');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('onWrite(String, Boolean, String, Func)');
      ie_close('td');
      ie_open('td');
      itext('Register write handler');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('onWrite(String, Boolean, Func)');
      ie_close('td');
      ie_open('td');
      itext('Register write handler');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('onWrite(String, Func)');
      ie_close('td');
      ie_open('td');
      itext('Register write handler');
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
    $templateAlias1(soy.$$assignDefaults({ content: param336 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'QtnMr.render';
  }

  exports.render.params = ["page", "site"];
  exports.render.types = { "page": "?", "site": "?" };
  exports.templates = templates = exports;
  return exports;
});

var QtnMr = function (_Component) {
  _inherits(QtnMr, _Component);

  function QtnMr() {
    _classCallCheck(this, QtnMr);

    return _possibleConstructorReturn(this, (QtnMr.__proto__ || Object.getPrototypeOf(QtnMr)).apply(this, arguments));
  }

  return QtnMr;
}(_metalComponent2.default);

_metalSoy2.default.register(QtnMr, templates);
exports.QtnMr = QtnMr;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[270]);
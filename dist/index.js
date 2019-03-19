"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "FormattedMessage", {
  enumerable: true,
  get: function get() {
    return _TranslationFormattedMessage.default;
  }
});
Object.defineProperty(exports, "withTranslation", {
  enumerable: true,
  get: function get() {
    return _withTranslation.default;
  }
});
exports.default = exports.Consumer = exports.TranslationContext = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _TranslationFormattedMessage = _interopRequireDefault(require("./TranslationFormattedMessage"));

var _withTranslation = _interopRequireDefault(require("./withTranslation"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var propTypes = {
  children: _propTypes.default.node.isRequired,
  route: _propTypes.default.string.isRequired,
  fetch: _propTypes.default.func.isRequired
};
var defaultState = {
  lang: 'en',
  languages: ['en'],
  translations: {}
};

var TranslationContext = _react.default.createContext(defaultState);

exports.TranslationContext = TranslationContext;
var Provider = TranslationContext.Provider,
    Consumer = TranslationContext.Consumer;
/* eslint no-console: 0 */

exports.Consumer = Consumer;

var Translation =
/*#__PURE__*/
function (_Component) {
  _inherits(Translation, _Component);

  function Translation() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Translation);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Translation)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", defaultState);

    _defineProperty(_assertThisInitialized(_this), "initLanguage", function () {
      var _this$props = _this.props,
          route = _this$props.route,
          fetch = _this$props.fetch;
      var lang = defaultState.lang;
      fetch("".concat(route, "/").concat(lang)).then(function (_ref) {
        var messages = _ref.data.result.messages;

        _this.updateLang(lang, messages);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "updateLang", function (lang) {
      var messages = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      return _this.setState(function (_ref2) {
        var translations = _ref2.translations,
            languages = _ref2.languages;

        if (!messages) {
          return {
            lang: lang
          };
        }

        var newLanguages = _toConsumableArray(languages);

        if (languages.indexOf(lang) >= 0) {
          return {
            lang: lang,
            translations: _objectSpread({}, translations, _defineProperty({}, lang, messages))
          };
        }

        newLanguages.push(lang);
        return {
          lang: lang,
          languages: newLanguages,
          translations: _objectSpread({}, translations, _defineProperty({}, lang, messages))
        };
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getLang", function (lang) {
      var translations = _this.state.translations;
      var vocabulary = translations[lang];

      if (!vocabulary || !Object.keys(vocabulary).length) {
        return null;
      }

      return vocabulary;
    });

    _defineProperty(_assertThisInitialized(_this), "toggleLang", function (lang) {
      var languages = _this.state.languages;

      if (languages.indexOf(lang) >= 0) {
        return _this.setState(function () {
          return {
            lang: lang
          };
        });
      }

      return false;
    });

    return _this;
  }

  _createClass(Translation, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var initLanguage = this.initLanguage;
      initLanguage();
    }
  }, {
    key: "render",
    value: function render() {
      var updateLang = this.updateLang,
          getLang = this.getLang,
          toggleLang = this.toggleLang;
      var children = this.props.children;
      return _react.default.createElement(Provider, {
        value: _objectSpread({}, this.state, {
          updateLang: updateLang,
          getLang: getLang,
          toggleLang: toggleLang
        })
      }, children);
    }
  }]);

  return Translation;
}(_react.Component);

Translation.propTypes = propTypes;
var _default = Translation;
exports.default = _default;
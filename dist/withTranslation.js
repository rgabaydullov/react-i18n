"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = withTranslation;

var _react = _interopRequireDefault(require("react"));

var _index = require("./index");

var _formattedMessage2 = _interopRequireDefault(require("./formattedMessage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function withTranslation(Component) {
  var TranslationWrappedComponent = function TranslationWrappedComponent(props) {
    return _react.default.createElement(_index.Consumer, null, function (context) {
      var translations = context.translations,
          lang = context.lang;
      return _react.default.createElement(Component, _extends({}, context, props, {
        formattedMessage: function formattedMessage(id, defaultMessage, values) {
          return (0, _formattedMessage2.default)(translations[lang], id, defaultMessage, values);
        }
      }));
    });
  };

  TranslationWrappedComponent.displayName = "(Translate)".concat(Component.displayName || Component.name);
  return TranslationWrappedComponent;
}
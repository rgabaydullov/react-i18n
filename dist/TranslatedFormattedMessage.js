"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _index = require("./index");

var _formattedMessage = _interopRequireDefault(require("./formattedMessage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  id: _propTypes.default.string.isRequired,
  defaultMessage: _propTypes.default.string,
  values: _propTypes.default.shape({})
};
var defaultProps = {
  defaultMessage: '',
  values: {}
};

var TranslationFormattedMessage = function TranslationFormattedMessage(_ref) {
  var id = _ref.id,
      defaultMessage = _ref.defaultMessage,
      values = _ref.values;
  return _react.default.createElement(_index.Consumer, null, function (_ref2) {
    var translations = _ref2.translations,
        lang = _ref2.lang;
    return (0, _formattedMessage.default)(translations[lang], id, defaultMessage, values);
  });
};

TranslationFormattedMessage.contextType = _index.TranslationContext;
TranslationFormattedMessage.propTypes = propTypes;
TranslationFormattedMessage.defaultProps = defaultProps;
var _default = TranslationFormattedMessage;
exports.default = _default;
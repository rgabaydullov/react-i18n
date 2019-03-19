"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = formattedMessage;

var _react = _interopRequireDefault(require("react"));

var _lodash = _interopRequireDefault(require("lodash.get"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function carriageReturn(str) {
  var result = [];
  var lines = str.split('\r\n');
  if (lines.length === 1) return str;
  lines.forEach(function (line) {
    result.push(line, _react.default.createElement("br", null));
  });
  result.push(lines[lines.length - 1]);
  return result;
}
/**
 * 
 * @param {Object} vocabulary | Big Object
 * @param {string} id | Id for vocabulary
 * @param {string} defaultMessage | Default message if nothing found with id
 * @param {Object} values | Shape with keys from message named accessible properties
 * 
 * @returns {Array} Array of nested text and replacements result
 */


function formattedMessage(vocabulary, id) {
  var defaultMessage = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var values = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var msg = (0, _lodash.default)(vocabulary || {}, "".concat(id), defaultMessage);
  return msg.split(/{([^}]+)}/g).map(function (item, idx) {
    var replacement = null;

    if (idx % 2 === 1) {
      replacement = values[item];
      return typeof replacement === 'string' ? carriageReturn(replacement) : replacement;
    }

    return carriageReturn(item);
  });
}
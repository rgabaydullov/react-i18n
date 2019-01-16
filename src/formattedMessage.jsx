import React from 'react';
import getSafe from 'lodash/get';

function carriageReturn(str) {
  // @TODO: Refactor with formattedMessage
  const result = [];
  const lines = str.split('\r\n');
  if (lines.length === 1) return str;

  lines.forEach((line) => {
    result.push(line, <br />);
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

export default function formattedMessage(vocabulary, id, defaultMessage = '', values = {}) {
  const message = getSafe((vocabulary || {}), `${id}`, defaultMessage);
  const replacements = message.match(/((\{{1,1}([a-z0-9]+)\}{1,1}))/ig) || []; // Search for a {valuesKey}
  return replacements
    .reduce((acc, val) => {
      const replacementStr = acc.pop(); // Restore last unmodified string from reducer
      // Define range to cut the replacement variable
      const from = replacementStr.indexOf(val);
      const to = from + val.length;

      const before = carriageReturn(replacementStr.slice(0, from)); // Copy Text (before) replaceable variable
      const replKey = replacementStr.slice(from, to); // Copy replaceable variable
      const end = replacementStr.slice(to); // Get everything after variable

      // Insert Text (before), replaceable variable and Text (after) to the reducer
      if (before) acc.push(before);
      if (val) {
        const key = replKey.replace(/(\{|\})/g, '');
        acc.push(values[key] || replKey);
      }
      if (end) acc.push(end);
      return acc;
    }, [message]);
}

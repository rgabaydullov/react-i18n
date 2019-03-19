import React from 'react';
import getSafe from 'lodash.get';

function carriageReturn(str) {
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
  const msg = getSafe((vocabulary || {}), `${id}`, defaultMessage);

  return msg.split(/{([^}]+)}/g).map((item, idx) => {
    let replacement = null;

    if (idx % 2 === 1) {
      replacement = values[item];
      return typeof replacement === 'string' ? carriageReturn(replacement) : replacement;
    }

    return carriageReturn(item);
  });
}

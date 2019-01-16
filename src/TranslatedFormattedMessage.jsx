import React from 'react';
import PropTypes from 'prop-types';
import { Consumer, TranslationContext } from './index';
import formattedMessage from './formattedMessage';

const propTypes = {
  id: PropTypes.string.isRequired,
  defaultMessage: PropTypes.string,
  values: PropTypes.shape({}),
};

const defaultProps = {
  defaultMessage: '',
  values: {},
};

const TranslationFormattedMessage = ({ id, defaultMessage, values }) => (
  <Consumer>
    {({ translations, lang }) => formattedMessage(translations[lang], id, defaultMessage, values)}
  </Consumer>
);

TranslationFormattedMessage.contextType = TranslationContext;
TranslationFormattedMessage.propTypes = propTypes;
TranslationFormattedMessage.defaultProps = defaultProps;

export default TranslationFormattedMessage;

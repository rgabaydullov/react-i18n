import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FormattedMessage from './TranslatedFormattedMessage';
import withTranslation from './withTranslation';

const propTypes = {
  children: PropTypes.node.isRequired,
  route: PropTypes.string.isRequired,
  fetch: PropTypes.func.isRequired,
};

const defaultState = {
  lang: 'en',
  languages: ['en'],
  translations: {},
};

const TranslationContext = React.createContext(defaultState);
const { Provider, Consumer } = TranslationContext;

/* eslint no-console: 0 */

class Translation extends Component {
  state = defaultState;

  componentDidMount() {
    const { initLanguage } = this;
    initLanguage();
  }

  initLanguage = () => {
    const { route, fetch } = this.props;
    const { lang } = defaultState;

    fetch(`${route}/${lang}`)
      .then(({ data: { result: { messages } } }) => {
        this.updateLang(lang, messages);
      });
  }

  updateLang = (lang, messages = null) => this.setState(({ translations, languages }) => {
    if (!messages) {
      return {
        lang,
      };
    }

    const newLanguages = [...languages];
    if (languages.indexOf(lang) >= 0) {
      return {
        lang,
        translations: {
          ...translations,
          [lang]: messages,
        },
      };
    }

    newLanguages.push(lang);

    return {
      lang,
      languages: newLanguages,
      translations: {
        ...translations,
        [lang]: messages,
      },
    };
  });

  getLang = (lang) => {
    const { translations } = this.state;
    const vocabulary = translations[lang];

    if (!vocabulary || !Object.keys(vocabulary).length) {
      return null;
    }

    return vocabulary;
  };

  toggleLang = (lang) => {
    const { languages } = this.state;

    if (languages.indexOf(lang) >= 0) {
      return this.setState(() => ({
        lang,
      }));
    }

    return false;
  };

  render() {
    const { updateLang, getLang, toggleLang } = this;
    const { children } = this.props;

    return (
      <Provider
        value={{
          ...this.state,
          updateLang,
          getLang,
          toggleLang,
        }}
      >
        {children}
      </Provider>
    );
  }
}

Translation.propTypes = propTypes;

export {
  FormattedMessage,
  withTranslation,
  TranslationContext,
  Consumer,
};

export default Translation;

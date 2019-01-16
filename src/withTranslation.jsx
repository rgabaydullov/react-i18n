import React from 'react';
import { Consumer } from './index';
import formattedMessage from './formattedMessage';

export default function withTranslation(Component) {
  const TranslationWrappedComponent = props => (
    <Consumer>
      {(context) => {
        const { translations, lang } = context;
        return (
          <Component
            {...context}
            {...props}
            formattedMessage={(id, defaultMessage, values) => formattedMessage(
              translations[lang],
              id,
              defaultMessage,
              values,
            )}
          />
        );
      }}
    </Consumer>
  );

  TranslationWrappedComponent.displayName = `(Translate)${Component.displayName || Component.name}`;

  return TranslationWrappedComponent;
}

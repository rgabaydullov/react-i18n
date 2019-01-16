## WARNING: Not for production use!

# react-i18n
Light weight localizations for your project
Uses `React.Context`. More attentive with SSR.

# Usage
Admit your entry point `<App />` within `<Translation />` like below:
```javascript
import Translation from 'react-i18n';

export default const App = () => (
    <Translation>
        {/* someOfMarkUpHere */}
    </Translation>
);
```

Available props and methods for `<Translation />`:

There will be provided next props and methods:
* **lang** `(string)` | Contains the locale code with 2 chars
* **languages** `(Array)` | Available locales
* **translations** `(Object)` | Derives the object of messages included inside `lang` key
* **updateLang** `(Function)` | Allow to update (insert) new messages for `lang`
* **getLang** `(Function)` | Returns the set of messages for `lang` argument
* **toggleLang** `(Function)` | Toggle language accordingly with set of all available locales

Coverage your translations compatible component with next HOC: `withTranslation`:

* **formattedMessage** `(Function)` | Get 3 arguments: (id, defaultMessage, values)

Describe message with **i18n** compatibility.
```javascript
<FormattedMessage
    id="your.vocabulary.id"
    defaultMessage="This is default {message}, not strict"
    values={{
        message: 'Provide here text or Component as well',
    }}
/>
```

or like that using `withTranslation` connector

```javascript
formattedMessage('your.vocabulary.id', 'This is default {message}, not strict', {
        message: 'Provide here text or Component as well',
    });
```

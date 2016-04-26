import React from 'react';
import { IntlProvider, addLocaleData } from 'react-intl';

if ('ReactIntlLocaleData' in window) {
  Object.keys(window.ReactIntlLocaleData).forEach((lang) => {
    addLocaleData(window.ReactIntlLocaleData[lang]);
  });
}

export default function(component) {
  return (
    <IntlProvider locale="en">
      {component}
    </IntlProvider>
  );
}

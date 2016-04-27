import React from 'react';
import { IntlProvider } from 'react-intl';

export default function(component) {
  return (
    <IntlProvider locale="en">
      {component}
    </IntlProvider>
  );
}

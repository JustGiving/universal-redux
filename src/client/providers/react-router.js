import React from 'react';
import { Router } from 'react-router';
import { browserHistory } from 'react-router';
import { ReduxAsyncConnect } from 'redux-async-connect';
import getRoutes from 'universal-redux/routes';
import reactIntl from './react-intl';

export default function(store) {
  const component = (
    <Router render={(props) => <ReduxAsyncConnect {...props} />} history={browserHistory}>
      {getRoutes(store)}
    </Router>
  );

  return reactIntl(component);
}

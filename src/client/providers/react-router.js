import React from 'react';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import { Router, useRouterHistory } from 'react-router';
import { ReduxAsyncConnect } from 'redux-async-connect';
import getRoutes from 'universal-redux/routes';
import reactIntl from './react-intl';
import config from '../../../bin/user-config';

// Run our app under the /base URL.
const browserHistory = useRouterHistory(createBrowserHistory)({ basename: config.basename });

export default function(store) {
  const component = (
    <Router render={(props) => <ReduxAsyncConnect {...props} />} history={browserHistory}>
      {getRoutes(store)}
    </Router>
  );

  return reactIntl(component);
}

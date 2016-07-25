import { match as reactRouterMatch } from 'react-router';
import config from '../../../bin/user-config';

export function match(routes, location, store, cb) {
  reactRouterMatch({ basename: config.basename, routes, location }, cb);
}

import { connectRoutes } from 'redux-first-router';
import createHistory from 'history/createBrowserHistory';

import routes from './routes';

const history = createHistory();
const options = {};

export default connectRoutes(
  history,
  routes,
  options,
);

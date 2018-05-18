import React from 'react';
import { render } from 'react-snapshot';

// redux / state
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

// routing
import createHistory from 'history/createBrowserHistory';
import { BrowserRouter } from 'react-router-dom';
import { routerMiddleware } from 'react-router-redux';

// app
import initStore from './store';
import App from '../containers/layout/App';
import styleInit from './styledComponents';

// api (todo make it an import)
const Api = {};

// middleware
const history = createHistory();
const middleware = [routerMiddleware(history), thunk.withExtraArgument(Api)];
if (process.env.NODE_ENV !== 'production') {
  const initDev = require('./dev.js');
  initDev(middleware);
}

const store = initStore(middleware);

styleInit();

// todo consider using ConnectedRouter
export default function init() {
  render(
   <Provider store={store}>
     <BrowserRouter>
       <App />
     </BrowserRouter>
   </Provider>,
   document.getElementById('root'),
  );
}

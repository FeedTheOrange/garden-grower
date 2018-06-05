import React from 'react';
import { render } from 'react-snapshot';

// redux / state
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

// app
import initStore from './store';
import App from '../containers/layout/App';
import styleInit from './styledcomponents';
import Api from './api';

// middleware
const middleware = [thunk.withExtraArgument(Api)];
if (process.env.NODE_ENV !== 'production') {
  import('./dev.js').then(initDev => initDev.default(middleware));
}

const { store } = initStore({});

styleInit();

export default () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
    ,
    document.getElementById('root'),
  );
};

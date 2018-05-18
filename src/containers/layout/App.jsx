import React, { Fragment } from 'react';
import Router from '../../init/router';

const App = () => (
  <Fragment>
    <header></header>
    <main id="main">
      <Router />
    </main>
    <footer id="footer"></footer>
  </Fragment>
);

export default App;

import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import universal from 'react-universal-component';

const UniversalComponent = universal(({ page }) => import(`../pages/${page}`));

const App = ({ page }) => (
  <Fragment>
    <header />
    <main id="main">
      <UniversalComponent page={page} />
    </main>
    <footer id="footer" />
  </Fragment>
);

const mapStateToProps = ({ page }) => ({ page });

export default connect(mapStateToProps)(App);

App.propTypes = {
  page: PropTypes.string.isRequired,
};

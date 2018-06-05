import { NOT_FOUND } from 'redux-first-router';
import pages from '../constants/pageNames';

const components = {
  ...pages,
  [NOT_FOUND]: 'NotFoundPage',
};

export default (state = 'HomePage', action = {}) => components[action.type] || state;


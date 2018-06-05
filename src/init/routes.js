import { NOT_FOUND } from 'redux-first-router';
import * as plantActionCreators from '../actions/plants';
import * as api from '../constants/apiTypes';
import Api from './api';

export default {
  HomePage: '/',
  GardenPage: {
    path: '/garden/:id',
    thunk: async (dispatch, getState) => {
      const { location: { payload: { id } } } = getState();

      try {
        const response = await Api(api.GET_PLANTS);

        dispatch(plantActionCreators.setPlants(id, response.plants)(dispatch));
      } catch (error) {
        // eslint-disable-next-line
        console.log(error);
        dispatch({ type: NOT_FOUND });
      }
    },
  },
};

// ADD_PLANT, UPDATE_PLANT, DELETE_PLANT, GET_PLANT,
import { LIST_PLANTS, SET_PLANTS } from '../constants/actionTypes';
import * as api from '../constants/apiTypes';
import makeActionCreator from '../utils/makeActionCreator';
import apiActionCreator from '../utils/apiActionCreator';

// export const createPlant = makeActionCreator(ADD_PLANT, 'plant');
// export const updatePlant = makeActionCreator(UPDATE_PLANT, 'id', 'plant');
// export const getPlant = makeActionCreator(GET_PLANT, 'id');
// export const deletePlant = makeActionCreator(DELETE_PLANT, 'id');
export const listPlants = apiActionCreator(LIST_PLANTS, api.GET_PLANTS, 'gardenId');
export const setPlants = makeActionCreator(SET_PLANTS, 'gardenId', 'plants');

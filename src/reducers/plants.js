import { SET_PLANTS } from '../constants/actionTypes';

export default (state = [], action = {}) => (action.type === SET_PLANTS ? action.plants : state);


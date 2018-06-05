import { API_LOADING, API_SUCCESS, API_ERROR } from '../constants/actionTypes';
import Api from '../init/api';

export default function apiActionCreator(type, request, argNames, options) {
  return function action(...args) {
    return function thunk(dispatch) {
      const types = {
        API_LOADING,
        API_SUCCESS,
        API_ERROR,
        ...options,
      };

      const apiArgs = {};
      argNames.forEach((arg, index) => {
        apiArgs[argNames[index]] = args[index];
      });

      dispatch({ type: types[API_LOADING] });
      Api[request](...apiArgs).then(
        response =>
          dispatch({
            type: types[API_SUCCESS],
            request,
            args,
            response,
          }),
        error =>
          dispatch({
            type: types[API_ERROR],
            request,
            args,
            error,
          }),
      );
    };
  };
}

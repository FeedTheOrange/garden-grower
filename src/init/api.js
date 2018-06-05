import * as api from '../constants/apiTypes';

function Api(name, ...params) {
  return typeof Api[name] === 'function' ? Api[name](...params) : null;
}

Api[api.GET_PLANTS] = (gardenId) => {
  const response = {
    success: true,
    data: {
      gardenId,
      plants: [
        { id: 1, name: 'strawberry', daysTillHarvest: 80 },
      ],
    },
  };

  // fetch(...)
  // for now simulating delay with a promise that takes time to resolve
  return new Promise(resolve => setTimeout(resolve, 1000)).then(() => {
    if (response.success !== true || typeof response.data === 'undefined') {
      if (response.error) {
        throw Error(response.error);
      } else {
        throw Error('Invalid Response');
      }
    }

    return response.data;
  });
};

export default Api;

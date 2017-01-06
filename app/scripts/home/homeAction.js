// @flow
export const UPDATE_APPS = 'UPDATE_APPS';
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER';
import $http from '../xhrRequest';


export function updateApps(apps) {
  console.log(apps);
  return {
    type: UPDATE_APPS,
    apps: apps
  };
}

export function decrement() {
  return {
    type: DECREMENT_COUNTER
  };
}

export function incrementIfOdd() {
  return (dispatch: Function, getState: Function) => {
    const { counter } = getState();

    if (counter % 2 === 0) {
      return;
    }

    dispatch(increment());
  };
}

export function incrementAsync(delay: number = 1000) {
  return (dispatch: Function) => {
    setTimeout(() => {
      dispatch(increment());
    }, delay);
  };
}

export function loadApps () {
  return dispatch => {
    return $http('get', 'https://os33.os33.com/api/online/v1/apps', {})
      .then(response => {
        console.log('here')
        dispatch(updateApps(response.body));
      })
  }
}

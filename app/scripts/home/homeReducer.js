// @flow
import { UPDATE_APPS, DECREMENT_COUNTER } from './homeAction';

export default function counter(state = {}, action: Object) {
  console.log(action);
  switch (action.type) {
    case UPDATE_APPS:
      return Object.assign({}, state, {apps: action.apps});
    case DECREMENT_COUNTER:
      return state - 1;
    default:
      return state;
  }
}

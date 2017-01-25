// @flow
import { UPDATE_APPS, UPDATE_RECENT_FILES } from './homeAction';

export default function counter(state = {}, action: Object) {
  console.log(action);
  switch (action.type) {
    case UPDATE_APPS:
      return Object.assign({}, state, {apps: action.apps});
    case UPDATE_RECENT_FILES:
      return Object.assign({}, state, {recentFiles: action.recentFiles});
    default:
      return state;
  }
}

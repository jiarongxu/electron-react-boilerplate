// @flow
export const UPDATE_APPS = 'UPDATE_APPS';
export const UPDATE_RECENT_FILES = 'UPDATE_RECENT_FILES';
import $http from '../xhrRequest';


export function updateApps(apps) {
  console.log(apps);
  return {
    type: UPDATE_APPS,
    apps: apps
  };
}

export function updateRecentFiles(recentFiles) {
  return {
    type: UPDATE_RECENT_FILES,
    recentFiles: recentFiles
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
    return $http('get', 'https://www.os33dev.net/api/online/v1/apps', {})
      .then(response => {
        console.log('here')
        dispatch(updateApps(response.body));
      })
  }
}

export function loadRecentFiles() {
  return dispatch => {
    return $http('get', 'https://www.os33dev.net/api/online/v1/files/recent', {})
      .then(response => {
        console.log('recent files')
        var recentFiles = [{"filename":"Doc1.docx","size":159810,"downloadUrl":"api/drive/v3/file/Work/Doc1.docx","location":"/Work","lastModified":"2016-12-07T17:07:37.0100349Z","launchUrl":"api/online/v1/launch/file/Work/Doc1.docx","launchFolderUrl":"TODO","state":"not open","openedBy":"","customAttributes":"SharedFile"}, {"filename":"Doc2.docx","size":159810,"downloadUrl":"api/drive/v3/file/Work/Doc2.docx","location":"/Work","lastModified":"2016-12-07T17:07:37.0100349Z","launchUrl":"api/online/v1/launch/file/Work/Doc2.docx","launchFolderUrl":"TODO","state":"not open","openedBy":"","customAttributes":"SharedFile"}];
        dispatch(updateRecentFiles(recentFiles));
      })
  }
}

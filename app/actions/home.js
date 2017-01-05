// @flow

var xhr = require('xhr-promise-redux');
import { router, hashHistory } from 'react-router';

const {ipcRenderer} = require('electron')





export const SUBMIT_LOGIN_INFO = 'SUBMIT_LOGIN_INFO';

export function submitLoginInfo(username, password) {
  console.log(username + ' ' + password);


  return dispatch => {
    return xhr.post('https://os33.os33.com/api/auth/v2/login', {
      headers: {
        'X-Token-Required': true,
        'Content-Type': 'application/json;charset=UTF-8',
      },
      data: JSON.stringify({
        username: username,
        password: password
      })
    })
      .then(response => {
        goToHome();
      });
  }
}

function goToHome() {
  hashHistory.push('/counter');
  ipcRenderer.send('setWindow')
}

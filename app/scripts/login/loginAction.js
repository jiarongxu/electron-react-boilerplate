// @flow

var xhr = require('xhr-promise-redux');
import { router, hashHistory } from 'react-router';
import cookie from 'react-cookie';
import $http from '../xhrRequest';

const storage = require('electron-json-storage');
const {ipcRenderer} = require('electron');



export const SUBMIT_LOGIN_INFO = 'SUBMIT_LOGIN_INFO';

function goToHome() {
  hashHistory.push('/counter');
  ipcRenderer.send('setWindow')
}

export function submitLoginInfo(username, password) {
  console.log(username + ' ' + password);


  return dispatch => {
    return $http('post','https://www.os33dev.net/api/auth/v2/login', {
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
        console.log(response.body.accessToken)
        storage.set('requestId', {accessToken: response.body.accessToken}, function(error) {
          if (error) throw error;
        });
        goToHome();
      });
  }
}



export function checkAuth () {
  return dispatch => {
    // storage.get('requestId', function(error, data) {
    //   if(data){
    //     goToHome();
    //   }
    // });
  }
}

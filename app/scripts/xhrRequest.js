var xhr = require('xhr-promise-redux');

const storage = require('electron-json-storage');


export default function $http (method, url, options) {
  storage.get('requestId', function(error, data) {
    if(data){
      options.headers = options.headers || {};
      options.headers.Authorization = 'OAuth2 ' + data;
    }
  });

  options.method = method;

  return xhr.send(url, options);
}

// @flow
import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './home.scss';
import { shell } from 'electron';
import { util } from '../common/util';
const storage = require('electron-json-storage');
var classNames = require('classnames');
var RetinaImage = require('react-retina-image');


class Home extends Component {
  props: {
    loadApps: () => void,
    loadRecentFiles: () => void,
    incrementIfOdd: () => void,
    incrementAsync: () => void,
    decrement: () => void,
    home: Array<object>
  };

  constructor () {
    super();

    this.openEmail = this.openEmail.bind(this);
    this.openDirectory = this.openDirectory.bind(this);
    this.openWebapp = this.openWebapp.bind(this);
  }

  openEmail () {

  }

  openDirectory () {

  }

  openWebapp(){
    shell.openExternal('https://os33.os33.com')
  }


  componentWillMount(){
    console.log('component will mount');
    storage.get('requestId', function(error, data) {
      if (error) throw error;

      console.log(data);
    });

    this.props.loadApps();
    this.props.loadRecentFiles();
  }

  render() {

    const { loadApps, incrementIfOdd, incrementAsync, decrement, home } = this.props;

    home.apps = home.apps || [];

    home.recentFiles = home.recentFiles || [];

    console.log(home.recentFiles);

    let favAppsArray = home.apps.filter((app) => {
      return app.isFavorite === true;
    });

    let citrixAppsArray = home.apps.filter((app) => {
      return app.type === 'Citrix';
    });

    let websitesArray = home.apps.filter((app) => {
      return app.type !== 'Citrix';
    });

    let favApps = favAppsArray.map((app) => {
      var appClassNames = classNames({
        'citrix-app-icon': app.type === 'Citrix' || app.type === 'Rdp',
        'app-icon': true
      });

      return (
        <div key={app.id} className='app'>
          <div className={appClassNames}  style={{'borderColor': app.color}}><div className='dot-outter'><div className='dot-inner' style={{'backgroundColor': app.color, 'borderColor': app.color}} ></div></div> <img src={'images/appicon/' + app.icon} width='18' height='18' /><span style={{'color': app.color}}>{app.initials}</span></div><p><span>{app.name}</span></p>
        </div>

      );
    });

    let citrixApps = citrixAppsArray.map((app) => {
      return (
        <div className="app-icon clearfix with-edit" key={app.id}>
          <div className="app-content-wrapper">
            <div className="clearfix image-wrapper"><div className='dot-outter'><div className='dot-inner' style={{'backgroundColor': app.color, 'borderColor': app.color}}></div></div><img src={'images/appicon/'+ app.icon} width='18' height='18' /></div>  {app.name}
          </div>
        </div>
      )
    });


    let websites = websitesArray.map((app) => {
      return (
        <div className="app-icon clearfix with-edit" key={app.id}>
          <div className="app-content-wrapper">
            <div className="clearfix image-wrapper"><div className='dot-outter'><div className='dot-inner' style={{'backgroundColor': app.color, 'borderColor': app.color}}></div></div><img src={'images/appicon/' + app.icon} width='18' height='18' /></div>  {app.name}
          </div>
        </div>
      )
    });

    let recentFiles = home.recentFiles.map((file) => {
      file.ext = util.extensionName(file.filename);
      return (
        <li key={file.downloadUrl}>
          <div>
            <div className="file-type">
              <RetinaImage src="./images/files_base24px.png" />
              <span>{file.ext}</span>
            </div>
            <div className="file-name">
              <p>{file.filename}</p>
              <p className="updated-time">update 5 minutes ago</p>
            </div>
            <div className="file-actions">
              <a className="finder"><RetinaImage src="./images/magnifyingGlass.png" /></a>
              <a className="share"></a>
            </div>
          </div>
        </li>
      )
    });


    return (
      <div className='homeWrapper'>
        <div className="top clearfix">
          <div className="left padding-left">
            <input type="text" className="search-box padding-left" placeholder="Search"/>
          </div>
          <div className="right">
            <a className="email" onClick={this.openEmail}><RetinaImage src="./images/iconEmail.png" /></a>
            <a className="directory" onClick={this.openDirectory}><RetinaImage src="./images/sidebarDirectoryIcon.png" /></a>
            <a className="site" onClick={this.openWebapp}><RetinaImage src="./images/iconGoogleChrome.png" /></a>
          </div>
        </div>
        <div className="left padding-left apps-section">
          <div className="fav-apps clearfix">
            <h6 className="section-title">FAVORITES</h6>
            {favApps}
          </div>
          <div className="all-apps clearfix">
            <div className="left citrix-app">
              <h6 className="section-title">APPLICATION</h6>
              {citrixApps}
            </div>
            <div className="right">
              <h6 className="section-title">WEBSITES</h6>
              {websites}
            </div>
          </div>
        </div>

        <div className="right">
          <div className="recent-files">
            <h6 className="section-title">RECENTLY EDITED</h6>
            <ol className="recent-files-list">
              {recentFiles}
            </ol>
          </div>
        </div>

      </div>
    );
  }
}

export default Home;

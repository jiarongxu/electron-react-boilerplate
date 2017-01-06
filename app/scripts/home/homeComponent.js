// @flow
import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './home.scss';
const storage = require('electron-json-storage');
var classNames = require('classnames');



class Home extends Component {
  props: {
    loadApps: () => void,
    incrementIfOdd: () => void,
    incrementAsync: () => void,
    decrement: () => void,
    home: Array<object>
  };

  constructor () {
    super();

  }

  componentWillMount(){
    console.log('component will mount');
    storage.get('requestId', function(error, data) {
      if (error) throw error;

      console.log(data);
    });

    this.props.loadApps();
  }

  render() {

    const { loadApps, incrementIfOdd, incrementAsync, decrement, home } = this.props;

    home.apps = home.apps || [];

    let nodes = home.apps.map((app) => {
      var appClassNames = classNames({
        'citrix-app-icon': app.type === 'Citrix' || app.type === 'Rdp',
        'app-icon': true
      });

      return (
        <div key={app.id}>
          <div className={appClassNames}  style={{'borderColor': app.color}}><div className='dot-outter'><div className='dot-inner' style={{'backgroundColor': app.color, 'borderColor': app.color}} ></div></div> <img src={'images/appicon/' + app.icon} width='18' height='18' /><span style={{'color': app.color}}>{app.initials}</span></div><p><span>{app.name}</span></p>
        </div>

      );
    });


    return (
      <div className={styles.homeWrapper}>
        <Link to="/">login</Link>
        {nodes}
      </div>
    );
  }
}

export default Home;

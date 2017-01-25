// @flow
import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './login.scss';
import {TextInput, Label, Button} from 'react-desktop/macOs';


export default class Home extends Component {

  props: {
    checkAuth: () => void,
    submitLoginInfo: () => void
  };

  constructor() {
    super();
    this.username = '';
    this.password = '';
    this.handleChangeForEmail = this.handleChangeForEmail.bind(this);
    this.handleChangeForPassword = this.handleChangeForPassword.bind(this);
    this.submitLoginInfo = this.submitLoginInfo.bind(this);
  }

  componentWillMount () {
    this.props.checkAuth();
  }

  handleChangeForEmail (event) {
    this.username = event.target.value;
  }

  handleChangeForPassword (event) {
    this.password = event.target.value;
  }

  submitLoginInfo () {
    console.log(this.username + ' ' + this.password);
    this.props.submitLoginInfo(this.username, this.password);
  }

  render() {
    // const { submitLoginInfo  } = this.props;

    return (
      <div>
        <div className='container'>
          <img src="./images/workplaceLogo.png" alt="workplace logo"/>
        </div>
        <div className='loginForm'>
          <div className='counter clearfix formElement'>
            <TextInput
              label="Email"
              placeholder=""
              defaultValue=""
              onChange={this.handleChangeForEmail}
            />
          </div>
          <div className='counter clearfix formElement'>
            <TextInput
              label="Password"
              defaultValue=""
              password
              onChange={this.handleChangeForPassword}
            />
          </div>

          <div className='clearfix ${styles.bottomButton'>
            <a className="link">Get help</a>
            <div className="pull-right">
              <Button  color="white" onClick={this.submitLoginInfo}>
                Sign In
              </Button>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

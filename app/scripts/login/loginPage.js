// @flow
import React, { Component } from 'react';
import Login from './loginComponent';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as loginActions from './loginAction';

// export default class HomePage extends Component {
//   render() {
//     return (
//       <Home />
//     );
//   }
// }

function mapStateToProps(state) {
  return {
    counter: state.counter
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(loginActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);

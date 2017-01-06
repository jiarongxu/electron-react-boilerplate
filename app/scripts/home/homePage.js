import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Home from './homeComponent';
import * as HomeActions from './homeAction';

function mapStateToProps(state) {
  console.log(state);
  return {
    home: state.home
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(HomeActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);

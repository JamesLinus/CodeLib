import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Home from '../components/Home';
import {ChangeName} from '../actions/actions';

function mapStateToProps(state) {
  return {
    name: state.someReducer.name
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    changeName: ChangeName
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);

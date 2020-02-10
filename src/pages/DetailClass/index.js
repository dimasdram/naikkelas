import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Home from './component';
import * as actions from './action';
import styles from './styles';

function mapStateToProps(state) {
  const { isLoading, data } = state.home;
  return {
    isLoading,
    data
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

const StyledHome = withStyles(styles)(Home);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StyledHome);
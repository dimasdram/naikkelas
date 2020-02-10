import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router';
import Component from './component';
import styles from './styles';

const Routed = withRouter(Component);
export default withStyles(styles)(Routed);

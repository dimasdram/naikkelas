import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ListItem from '../../components/ListItem';
import { IMAGES, ROUTES } from '../../configs';
import { toLowerCase } from '../../utils/text';

export default class Component extends React.Component {
  componentWillMount() {
    this.props.actions.getListOfDevelopers();
  }

  _renderList() {
    const { data } = this.props;
    if (data.length === 0) {
      return (
        <p>No data</p>
      );
    } else {
      return (
        <Grid container spacing={24} justify="center">
          {
            data.map((item, idx) => (
              <Grid key={idx} item xs={12} sm={6} md={1}>
                <ListItem text={item} url={ROUTES.DEVELOPER(toLowerCase(item))} />
              </Grid>
            ))
          }
        </Grid>
      );
    }
  }

  render() {
    const { classes, isLoading } = this.props;
    if (isLoading) {
      return (
        <Typography variant="display2">Loading...</Typography>
      );
    } else {
      return (
        <section className={classes.container}>
          <img src={IMAGES.LOGO} className={classes.logo} />
          <Typography variant="display2">App is Ready</Typography>
          <Typography className={classes.routeExample}>Route example:</Typography>
          {this._renderList()}
        </section>
      );
    }
  }
}

Component.propTypes = {
  classes: PropTypes.object,
  actions: PropTypes.object,
  isLoading: PropTypes.bool,
  data: PropTypes.array
};
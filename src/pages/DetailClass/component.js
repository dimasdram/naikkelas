import React from 'react';
import PropTypes from 'prop-types';
import HomeBase from '../../components/HomeBase';
import { VIDEOS } from '../../configs';
import { Grid } from '@material-ui/core';
import { Button, Typography } from '../../components/elements';
import { Player } from 'video-react';

export default class Component extends React.Component {
  componentWillMount() {
    this.props.actions.getListOfDevelopers();
  }

  render() {
    const { classes, isLoading } = this.props;
    if (isLoading) {
      return <Typography variant="display2">Loading...</Typography>;
    } else {
      return (
        <HomeBase>
          <div className={classes.contentClass1}>
            <div className={classes.wrapper}>
              <Typography variant="titleClass">Nama Ahli Pertama</Typography>
              <Typography variant="caption">Budidaya Ikan Lele</Typography>
              <Player
                playsInline
                poster=""
                src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
              />
            </div>
          </div>
        </HomeBase>
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

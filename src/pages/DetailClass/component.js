import React from 'react';
import PropTypes from 'prop-types';
import HomeBase from '../../components/HomeBase';
import { VIDEOS, IMAGES } from '../../configs';
import { Typography } from '../../components/elements';
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
              <Typography variant="titleClass">Rico Huang</Typography>
              <Typography variant="caption">Ahli Digital Marketing</Typography>
              <Player
                playsInline
                poster={IMAGES.RICO_HUANG}
                src={VIDEOS.MATERI}
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

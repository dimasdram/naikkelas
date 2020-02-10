import React from 'react';
import PropTypes from 'prop-types';
import HomeBase from '../../components/HomeBase';
import { VIDEOS } from '../../configs';

import { Button, Typography } from '../../components/elements';

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
          <section>
            <video autoPlay muted loop className={classes.bgVideo}>
              <source src={VIDEOS.BG} type="video/mp4" />
              Your browser does not support HTML5 video.
            </video>
            <div className={classes.content}>
              <span className={classes.headerText}>
                Tingkatkan Bisnismu dengan Naikkelas
              </span>
              <br />
              <span className={classes.headerCaption}>
                Belajar bersama para Jagoan UMKM dan para ahli dibidangnya
              </span>
              <br />
              <Button background="Normal" color="white">
                Mulai Kelas
              </Button>
            </div>
            <div className={classes.content2}>
              <Typography variant="title"> Kelas Terbaru </Typography>
              <div className={classes.latestClass}>
                <img src="https://placeimg.com/640/480/animals" />
              </div>
            </div>
          </section>
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

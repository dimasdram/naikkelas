import React from 'react';
import PropTypes from 'prop-types';
import HomeBase from '../../components/HomeBase';
import { VIDEOS } from '../../configs';
import { Grid } from '@material-ui/core';
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
            <Grid container className={classes.content3}>
              <Grid item lg={6} md={12} sm={12} xs={12}>
                <div className={classes.hightlightClass}>
                  <img src="https://placeimg.com/640/480/animals" />
                </div>
              </Grid>
              <Grid item lg={6} md={12} sm={12} xs={12}>
                <div className={classes.hightlightClassText}>
                  <Typography variant="title"> Jagoan UMKM </Typography>
                  <Typography variant="caption">
                    {' '}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aliquam sit amet neque sed tortor ultrices facilisis nec et
                    odio. Mauris non sollicitudin nisl. Phasellus malesuada,
                    augue at facilisis tincidunt, lacus nisi maximus elit, a
                    viverra felis orci nec ex. In viverra finibus dictum. Nunc
                    ac rhoncus urna. Maecenas hendrerit diam a lacus venenatis,
                    eu placerat enim tristique. Mauris sodales auctor aliquet.
                    Mauris ac dictum felis.
                  </Typography>
                </div>
              </Grid>
            </Grid>
            <div className={classes.content4}>
              <div className={classes.paraAhliText}>
                <Typography variant="title"> Para Ahli </Typography>
              </div>
              <Grid container>
                <Grid item lg={4} md={6} sm={12} xs={12}>
                  <img
                    className={classes.imageParaAhli}
                    src="https://placeimg.com/640/480/animals"
                    width="480px"
                    height="400px"
                  />
                </Grid>
                <Grid item lg={4} md={6} sm={12} xs={12}>
                  <img
                    className={classes.imageParaAhli}
                    src="https://placeimg.com/640/480/animals"
                    width="480px"
                    height="400px"
                  />
                </Grid>
                <Grid item lg={4} md={6} sm={12} xs={12}>
                  <img
                    className={classes.imageParaAhli}
                    src="https://placeimg.com/640/480/animals"
                    width="480px"
                    height="400px"
                  />
                </Grid>
                <Grid item lg={4} md={6} sm={12} xs={12}>
                  <img
                    className={classes.imageParaAhli}
                    src="https://placeimg.com/640/480/animals"
                    width="480px"
                    height="400px"
                  />
                </Grid>
                <Grid item lg={4} md={6} sm={12} xs={12}>
                  <img
                    className={classes.imageParaAhli}
                    src="https://placeimg.com/640/480/animals"
                    width="480px"
                    height="400px"
                  />
                </Grid>
                <Grid item lg={4} md={6} sm={12} xs={12}>
                  <img
                    className={classes.imageParaAhli}
                    src="https://placeimg.com/640/480/animals"
                    width="480px"
                    height="400px"
                  />
                </Grid>
              </Grid>
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

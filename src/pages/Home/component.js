import React from 'react';
import PropTypes from 'prop-types';
import HomeBase from '../../components/HomeBase';
import { VIDEOS, ROUTES, IMAGES } from '../../configs';
import { Grid } from '@material-ui/core';
import { NewsHeaderCard } from 'react-ui-cards';
import { Button, Typography, Dialog } from '../../components/elements';

export default class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }
  componentWillMount() {
    this.props.actions.getListOfDevelopers();
  }

  _handleOpenDialog = () => {
    this.setState({
      open: !this.state.open
    });
  };
  _handleCloseDialog = () => {
    this.setState({
      open: !this.state.open
    });
  };

  _renderDialog() {
    const { classes } = this.props;
    const { open } = this.state;
    return (
      <div className={classes.rootDialog}>
        <Dialog onClose={this._handleCloseDialog} open={open}>
          <div className={classes.center}>
            <img src={IMAGES.BRIVA} />
            <hr />
            <Typography
              className={classes.textDialog}
              color="black"
              variant="formLabelSecondary"
            >
              NO VA Anda adalah : 1301198550
            </Typography>
          </div>
          <div>
            <Button
              background="Normal"
              className={classes.buttonDialog}
              color="white"
              name="btn1"
              onClick={this._handleCloseDialog}
            >
              OKE
            </Button>
          </div>
        </Dialog>
      </div>
    );
  }

  render() {
    const { classes, isLoading } = this.props;
    if (isLoading) {
      return <Typography variant="display2">Loading...</Typography>;
    } else {
      return (
        <HomeBase>
          <section>
            {this._renderDialog()}
            <video autoPlay muted loop className={classes.bgVideo}>
              <source src={VIDEOS.BACKGROUND} type="video/mp4" />
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
              <Button
                background="Normal"
                color="white"
                onClick={this._handleOpenDialog}
              >
                Mulai Kelas
              </Button>
            </div>
            <div className={classes.content2}>
              <Typography variant="title"> Kelas Terbaru </Typography>
              <NewsHeaderCard
                href={ROUTES.DETAILCLASS()}
                thumbnail={IMAGES.RICO_HUANG}
                title="Ahli Marketing"
                author="Rico Huang"
                className={classes.latestClass}
              />
            </div>
            <Grid container className={classes.content3}>
              <Grid item lg={6} md={12} sm={12} xs={12}>
                <NewsHeaderCard
                  href={'/#'}
                  thumbnail={IMAGES.JAGOAN_UMKM}
                  title="Jagoan UMKM"
                  className={classes.hightlightClass}
                />
              </Grid>
              <Grid item lg={6} md={12} sm={12} xs={12}>
                <div className={classes.hightlightClassText}>
                  <Typography variant="title"> Jagoan UMKM </Typography>
                  <Typography variant="caption">
                    Berawal dari pelatihan UMKM yang diadakan oleh BUMN saya
                    mendapatkan banyak sekali pengalaman yang didapat. Saya bisa
                    mengembangkan bisnis yang telah saya bangun sejak tahun
                    2010. Hingga pada akhirnya saya bisa mendapatkan revenue
                    sebesar 1 Miliar per bulan. ...
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
                  <NewsHeaderCard
                    href={ROUTES.DETAILCLASS()}
                    thumbnail={IMAGES.RICO_HUANG}
                    title="Ahli Marketing"
                    author="Rico Huang"
                    className={classes.latestClass}
                  />
                </Grid>
                <Grid item lg={4} md={6} sm={12} xs={12}>
                  <NewsHeaderCard
                    href={'/#'}
                    thumbnail={IMAGES.SUBIAKTO_BRANDING}
                    title="Membangun Branding"
                    author="Subiakto"
                    className={classes.imageParaAhli}
                  />
                </Grid>
                <Grid item lg={4} md={6} sm={12} xs={12}>
                  <NewsHeaderCard
                    href={'/#'}
                    thumbnail={IMAGES.TETEN_MADSUKI}
                    title="Menteri Koperasi dan UMKM"
                    author="Teten Madsuki"
                    className={classes.imageParaAhli}
                  />
                </Grid>
                <Grid item lg={4} md={6} sm={12} xs={12}>
                  <NewsHeaderCard
                    href={'/#'}
                    thumbnail={IMAGES.GATOT_MUDJIONO}
                    title="Ahli Pangan & Pertanian"
                    author="Gatot Mudjiono"
                    className={classes.imageParaAhli}
                  />
                </Grid>
                <Grid item lg={4} md={6} sm={12} xs={12}>
                  <NewsHeaderCard
                    href={'/#'}
                    thumbnail={IMAGES.ELLU_WASLIAH}
                    title="Dekranasda"
                    author="Ellu Wasliah"
                    className={classes.imageParaAhli}
                  />
                </Grid>
                <Grid item lg={4} md={6} sm={12} xs={12}>
                  <NewsHeaderCard
                    href={'/#'}
                    thumbnail={IMAGES.DEWI_KANIASARI}
                    title="Dinas Pariwisata"
                    author="Dewi Kaniasari"
                    className={classes.imageParaAhli}
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

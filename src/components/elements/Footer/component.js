import React from 'react';
import PropTypes from 'prop-types';
import { IMAGES, ROUTES } from '../../../configs';
import { Link } from 'react-router-dom';
import Typography from '../Typography';
import { Grid, Divider } from '@material-ui/core';
import { LocationOn, Email, Call } from '@material-ui/icons';

export default class Component extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Grid container spacing={0}>
          <Grid item xs={5}>
            <img className={classes.imageTelkom} src={IMAGES.HEADER} />
          </Grid>
          <Grid item xs={5}>
            <Typography color="white" variant="contentLabelParagraph">
              Layanan Informasi
            </Typography>
            <Typography color="white" variant="footer">
              Alamat :
            </Typography>
            <LocationOn className={classes.icon} />
            <Typography
              className={classes.content}
              color="white"
              variant="formCaptionParagraph"
            >
              Bandung, Jawa Barat
            </Typography>
            <a
              className={classes.link}
              href={'https://wa.me/085702133258'}
              target="_blank"
            >
              <Call className={classes.icon} />
              <Typography
                className={classes.content}
                color="white"
                variant="formCaptionParagraph"
              >
                085702133258
              </Typography>
            </a>
            <a
              className={classes.link}
              href={'mailto: naikkelasin@gmail.com'}
              target="_blank"
            >
              <Email className={classes.icon} />
              <Typography
                className={classes.content}
                color="white"
                variant="formCaptionParagraph"
              >
                naikkelasin@gmail.com
              </Typography>
            </a>
          </Grid>
          <Grid item xs>
            <Typography color="white" variant="contentLabelParagraph">
              Pintasan Menu
            </Typography>
            <Typography color="white" variant="formCaptionParagraph">
              > Kategori
              <Link className={classes.link} to={ROUTES.HOME()}>
                <Typography color="white" variant="formCaptionParagraphLink">
                  > Mikro
                </Typography>
              </Link>
              <Link className={classes.link} to={ROUTES.HOME()}>
                <Typography color="white" variant="formCaptionParagraphLink">
                  > Kecil
                </Typography>
              </Link>
              <Link className={classes.link} to={ROUTES.HOME()}>
                <Typography color="white" variant="formCaptionParagraphLink">
                  > Menengah
                </Typography>
              </Link>
            </Typography>
            <Typography color="white" variant="formCaptionParagraph">
              > Ahli
              <Link className={classes.link} to={ROUTES.HOME()}>
                <Typography color="white" variant="formCaptionParagraphLink">
                  > Ahli A
                </Typography>
              </Link>
              <Link className={classes.link} to={ROUTES.HOME()}>
                <Typography color="white" variant="formCaptionParagraphLink">
                  > Ahli B
                </Typography>
              </Link>
              <Link className={classes.link} to={ROUTES.HOME()}>
                <Typography color="white" variant="formCaptionParagraphLink">
                  > Ahli C
                </Typography>
              </Link>
            </Typography>
          </Grid>
          <Grid className={classes.footer} item xs={12}>
            <Typography color="white" variant="formCaptionParagraph">
              <Divider className={classes.divider} />
              Copyright {'\u00A9'} 2020 Naikkelas
            </Typography>
          </Grid>
        </Grid>
      </div>
    );
  }
}

Component.defaultProps = {
  classes: {},
  footer: [],
  service: []
};

Component.propTypes = {
  classes: PropTypes.object,
  footer: PropTypes.array,
  service: PropTypes.array
};

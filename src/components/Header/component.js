import React from 'react';
import PropTypes from 'prop-types';
import { IMAGES, ROUTES } from '../../configs';
import { history } from '../../store/configureStore';
import Dialog from '../elements/Dialog';
import Button from '../elements/Button';
import Typography from '../elements/Typography';
import { AppBar, Toolbar, Menu, MenuItem } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { KeyboardArrowUp, KeyboardArrowDown } from '@material-ui/icons';

export default class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null,
      anchorProfil: null,
      open: false
    };
  }

  _handleClickMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  _handleCloseMenu = () => {
    this.setState({ anchorEl: null });
  };

  _handleClickHome = () => {
    const { history } = this.props;
    history.push(ROUTES.HOME());
  };

  _handleClickAbout = () => {
    const { history } = this.props;
    history.push(ROUTES.TENTANG_KAMI());
  };

  _handleClickFAQ = () => {
    const { history } = this.props;
    history.push(ROUTES.FAQ());
  };

  _handleButtonRegister = () => {
    const {
      history,
      location: { pathname }
    } = this.props;
    history.push({
      pathname
    });
  };

  _handleButtonLogin = () => {
    const {
      history,
      location: { pathname }
    } = this.props;
    history.push({
      pathname
    });
  };

  _handleClickProfil = event => {
    this.setState({ anchorProfil: event.currentTarget });
  };

  _handleCloseProfil = () => {
    this.setState({ anchorProfil: null });
  };

  _handleUpdatePass = () => {
    const { history } = this.props;
    history.push(ROUTES.CHANGE_PASSWORD());
  };

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

  _handleClickLogout = () => {
    this.setState({
      open: false,
      anchorProfil: null
    });
    // clearStorages();
    history.push(ROUTES.HOME());
  };

  _renderDialog() {
    const { classes } = this.props;
    const { open } = this.state;
    return (
      <div className={classes.rootDialog}>
        <Dialog onClose={this._handleCloseDialog} open={open}>
          <div className={classes.center}>
            <Typography className={classes.dialog} variant="headFormLabel">
              Anda Yakin Ingin Keluar?
            </Typography>
            <hr />
            <Typography
              className={classes.textDialog}
              variant="formLabelSecondary"
            >
              Anda akan diarahkan keluar dari portal akun Anda.
            </Typography>
          </div>
          <div>
            <Button
              background="white"
              className={classes.buttonDialog}
              color="black"
              name="btn1"
              onClick={this._handleCloseDialog}
              variant="outlined"
            >
              Kembali
            </Button>
            <Button
              background="red"
              className={classes.buttonDialog}
              color="white"
              name="btn1"
              onClick={this._handleClickLogout}
            >
              YA
            </Button>
          </div>
        </Dialog>
      </div>
    );
  }

  render() {
    const {
      classes,
      location: { pathname },
      service
    } = this.props;
    const { anchorEl } = this.state;
    return (
      <div>
        <AppBar className={classes.header}>
          <Toolbar className={classes.menu}>
            <Link to={ROUTES.HOME()}>
              <img className={classes.imageHeader} src={IMAGES.LOGO_DSA_SVG} />
            </Link>
            <MenuItem
              className={pathname === '/' ? classes.textActive : classes.text}
              onClick={this._handleClickHome}
            >
              BERANDA
            </MenuItem>
            <MenuItem
              className={
                pathname === '/tentang-kami' ? classes.textActive : classes.text
              }
              onClick={this._handleClickAbout}
            >
              TENTANG KAMI
            </MenuItem>
            <MenuItem
              aria-owns={anchorEl ? 'simple-menu' : undefined}
              className={
                pathname.substr(0, 8) === '/layanan'
                  ? classes.textActive
                  : classes.text
              }
              onClick={this._handleClickMenu}
            >
              LAYANAN
              {anchorEl ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
            </MenuItem>
            <Menu
              anchorEl={anchorEl}
              className={classes.dropdown}
              onClose={this._handleCloseMenu}
              open={Boolean(anchorEl)}
            >
              {service.map((data, key) => (
                <MenuItem
                  className={classes.dropdownContent}
                  key={key}
                  onClick={() => history.push(ROUTES.LAYANAN(data.slug))}
                >
                  {data.name}
                </MenuItem>
              ))}
            </Menu>
            <MenuItem
              className={
                pathname === '/faq' ? classes.textActive : classes.text
              }
              onClick={this._handleClickFAQ}
            >
              FAQ
            </MenuItem>
            <div className={classes.menuRight}>
              <Button
                background="white"
                className={classes.buttonRegister}
                name="btn2"
                onClick={this._handleButtonRegister}
                variant="outlined"
              >
                <Typography
                  className={classes.textButton}
                  color="black"
                  variant="formLabelCap"
                >
                  REGISTER
                </Typography>
              </Button>
              &nbsp;&nbsp;&nbsp;
              <Button
                background="red"
                className={classes.buttonLogin}
                name="btn3"
                onClick={this._handleButtonLogin}
              >
                <Typography
                  className={classes.textButton}
                  color="white"
                  variant="formLabelCap"
                >
                  LOGIN
                </Typography>
              </Button>
            </div>
            )}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

Component.propTypes = {
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  service: PropTypes.array.isRequired
};

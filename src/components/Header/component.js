import React from 'react';
import PropTypes from 'prop-types';
import { ROUTES, IMAGES } from '../../configs';
import { history } from '../../store/configureStore';
import Dialog from '../elements/Dialog';
import Button from '../elements/Button';
import Typography from '../elements/Typography';
import { AppBar, Toolbar, MenuItem, Menu } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { KeyboardArrowUp, KeyboardArrowDown } from '@material-ui/icons';

export default class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null,
      anchorProfil: null,
      open: false,
      isSignedin: false
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

  _handleClickAhli = event => {
    this.setState({ anchorProfil: event.currentTarget });
  };

  _handleCloseAhli = () => {
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
      location: { pathname }
    } = this.props;
    const { anchorEl, anchorProfil } = this.state;
    return (
      <div>
        <AppBar className={classes.header}>
          <Link className={classes.bannerNaikelas} to={ROUTES.HOME()}>
            <img src={IMAGES.HEADER} />
          </Link>
          <Toolbar className={classes.menu}>
            <MenuItem
              aria-owns={anchorEl ? 'simple-menu' : undefined}
              className={
                pathname === '/kategori' ? classes.textActive : classes.text
              }
              onClick={this._handleClickMenu}
            >
              Kategori
              {anchorEl ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
            </MenuItem>
            <Menu
              anchorEl={anchorEl}
              className={classes.dropdown}
              onClose={this._handleCloseMenu}
              open={Boolean(anchorEl)}
            >
              <MenuItem
                className={classes.dropdownContent}
                onClick={() => history.push(ROUTES.LAYANAN('kategori'))}
              >
                Mikro
              </MenuItem>
              <MenuItem
                className={classes.dropdownContent}
                onClick={() => history.push(ROUTES.LAYANAN('kategori'))}
              >
                Kecil
              </MenuItem>
              <MenuItem
                className={classes.dropdownContent}
                onClick={() => history.push(ROUTES.LAYANAN('kategori'))}
              >
                Menengah
              </MenuItem>
            </Menu>
            <MenuItem
              aria-owns={anchorProfil ? 'simple-menu' : undefined}
              className={
                pathname === '/ahli' ? classes.textActive : classes.text
              }
              onClick={this._handleClickAhli}
            >
              Ahli
              {anchorProfil ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
            </MenuItem>
            <Menu
              anchorEl={anchorProfil}
              className={classes.dropdown}
              onClose={this._handleCloseAhli}
              open={Boolean(anchorProfil)}
            >
              <MenuItem
                className={classes.dropdownContent}
                onClick={() => history.push(ROUTES.LAYANAN('kategori'))}
              >
                Marketing
              </MenuItem>
              <MenuItem
                className={classes.dropdownContent}
                onClick={() => history.push(ROUTES.LAYANAN('kategori'))}
              >
                Branding
              </MenuItem>
              <MenuItem
                className={classes.dropdownContent}
                onClick={() => history.push(ROUTES.LAYANAN('kategori'))}
              >
                Bisnis Model
              </MenuItem>
              <MenuItem
                className={classes.dropdownContent}
                onClick={() => history.push(ROUTES.LAYANAN('kategori'))}
              >
                Lainya
              </MenuItem>
            </Menu>
            <MenuItem
              className={classes.text}
              onClick={() =>
                (window.location.href = '../pages/LoginGoogle/login.html')
              }
            >
              Sign In
            </MenuItem>
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

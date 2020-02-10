import {
  COLOR_BLACK,
  COLOR_GRAY,
  COLOR_PRIMARY,
  COLOR_WHITE,
  COLOR_ACCENT
} from '../../styles';

const styles = {
  bannerNaikelas: {
    float: 'left',
    paddingTop: '12px',
    paddingLeft: '24px'
  },
  buttonDialog: {
    margin: '13.5px',
    minWidth: '121px'
  },
  buttonLogin: {
    borderRadius: '2px',
    height: 'max-content',
    width: 'max-content'
  },
  buttonRegister: {
    borderRadius: '2px',
    height: 'max-content',
    marginLeft: 'auto',
    width: 'max-content'
  },
  center: {
    textAlign: 'center'
  },
  dialog: {
    marginLeft: '15px',
    textAlign: 'center',
    textTransform: 'capitalize',
    width: '267px'
  },
  dropdown: {
    marginTop: '50px'
  },
  dropdownContent: {
    display: 'flex',
    fontFamily: 'Raleway',
    fontSize: '14px',
    letterSpacing: '0.1em',
    lineHeight: '17px'
  },
  header: {
    background: COLOR_PRIMARY,
    opacity: '0.86',
    display: 'inline',
    height: 'auto',
    width: '100%'
  },
  menu: {
    float: 'right',
    position: 'static'
  },
  menuRight: {
    display: 'contents',
    float: 'right'
  },
  notif: {
    display: 'none'
  },
  rootDialog: {
    textAlign: 'center'
  },
  search: {
    display: 'relative',
    justifyContent: 'flex-end',
    paddingLeft: '80%'
  },
  text: {
    '&:hover': {
      color: COLOR_ACCENT
    },
    color: COLOR_WHITE,
    fontFamily: 'Raleway',
    fontSize: '15px',
    fontWeight: '600',
    fontStyle: 'normal',
    justifyContent: 'center',
    letterSpacing: '0.1em',
    lineHeight: '14px',
    position: 'relative'
  },
  textActive: {
    '&:hover': {
      color: COLOR_WHITE
    },
    color: COLOR_ACCENT,
    fontFamily: 'Raleway',
    fontSize: '12px',
    fontWeight: 'bold',
    justifyContent: 'center',
    letterSpacing: '0.1em',
    lineHeight: '14px',
    position: 'relative'
  },
  textButton: {
    display: 'inline',
    fontWeight: 'bold'
  },
  textDialog: {
    marginBottom: '50px',
    marginLeft: '30px',
    marginTop: '20px',
    textAlign: 'center',
    width: '227px'
  },
  textMenu: {
    '&:hover': {
      color: COLOR_BLACK
    },
    color: COLOR_BLACK,
    fontFamily: 'Raleway',
    fontSize: '12px',
    fontWeight: 'normal',
    justifyContent: 'center',
    letterSpacing: '0.1em',
    lineHeight: '14px',
    marginLeft: 'auto',
    position: 'relative'
  },
  topHeader: {
    background: COLOR_GRAY,
    display: 'none',
    height: '40px',
    justifyContent: 'center',
    paddingRight: '5%',
    position: 'static',
    width: '100%'
  }
};

export default styles;

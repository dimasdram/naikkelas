import { COLOR_BLACK, COLOR_GRAY, COLOR_RED, COLOR_WHITE } from '../../styles';

const styles = {
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
    fontFamily: 'Ubuntu',
    fontSize: '14px',
    letterSpacing: '0.1em',
    lineHeight: '17px'
  },
  header: {
    align: 'center',
    background: COLOR_WHITE,
    height: 'auto',
    paddingRight: '5%',
    position: 'static',
    width: '100%'
  },
  imageHeader: {
    cursor: 'pointer',
    height: '52px',
    marginRight: '20px',
    width: '127px'
  },
  menu: {
    marginLeft: '8%',
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
      color: COLOR_RED
    },
    color: COLOR_BLACK,
    fontFamily: 'Ubuntu',
    fontSize: '12px',
    fontWeight: 'bold',
    justifyContent: 'center',
    letterSpacing: '0.1em',
    lineHeight: '14px',
    position: 'relative'
  },
  textActive: {
    '&:hover': {
      color: COLOR_RED
    },
    color: COLOR_RED,
    fontFamily: 'Ubuntu',
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
    fontFamily: 'Ubuntu',
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

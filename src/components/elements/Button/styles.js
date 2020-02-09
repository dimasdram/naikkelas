import {
  COLOR_GREEN,
  COLOR_RED,
  COLOR_WHITE,
  COLOR_BLACK,
  COLOR_BLUE_BUTTON,
  COLOR_ORANGE,
  COLOR_GREY
} from '../../../styles';
const styles = {
  backgroundGreen: {
    '&:hover': {
      backgroundColor: COLOR_GREEN
    },
    backgroundColor: COLOR_GREEN
  },
  backgroundRed: {
    '&:hover': {
      backgroundColor: COLOR_RED
    },
    backgroundColor: COLOR_RED
  },
  backgroundWhite: {
    '&:hover': {
      backgroundColor: COLOR_WHITE
    },
    backgroundColor: COLOR_WHITE
  },
  btn1: {
    fontSize: '16px',
    height: '43px',
    lineHeight: '18px'
  },
  btn2: {
    fontSize: '14px',
    height: '23px',
    lineHeight: '17px'
  },
  btn3: {
    fontSize: '12px',
    height: '27px',
    lineHeight: '14px'
  },
  colorBlack: {
    color: COLOR_BLACK
  },
  colorBlue: {
    color: COLOR_BLUE_BUTTON
  },
  colorGreen: {
    color: COLOR_GREEN
  },
  colorGrey: {
    color: COLOR_GREY
  },
  colorRed: {
    color: COLOR_RED
  },
  colorWhite: {
    color: COLOR_WHITE
  },
  colorYellow: {
    color: COLOR_ORANGE
  },
  root: {
    borderRadius: '3px',
    fontFamily: 'Ubuntu',
    fontWeight: 'bold',
    letterSpacing: '0.1em'
  }
};

export default styles;

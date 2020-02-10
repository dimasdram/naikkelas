import { COLOR_WHITE, COLOR_PAPER_BAKCGROUND } from '../../styles';
const styles = {
  bgVideo: {
    right: 0,
    position: 'absolute',
    bottom: '100px',
    minWidth: '100%',
    minHeight: '100%'
  },
  content: {
    top: '300px',
    left: '850px',
    marginBottom: '24px',
    position: 'relative',
    width: '35%',
    padding: '20px'
  },
  content2: {
    textAlign: 'center',
    background: COLOR_PAPER_BAKCGROUND,
    top: '350px',
    marginBottom: '24px',
    position: 'relative',
    padding: '20px'
  },
  logo: {
    maxWidth: '100%'
  },
  routeExample: {
    marginBottom: '20px'
  },
  headerText: {
    color: COLOR_WHITE,
    fontSize: '45px',
    fontFamily: 'CircularStd'
  },
  latestClass: {
    marginTop: '24px'
  },
  headerCaption: {
    color: COLOR_WHITE,
    fontSize: '24px',
    fontFamily: 'Raleway'
  },
  '@font-face': [
    {
      fontFamily: 'CircularStd',
      src: 'url(../assets/font/CircularStd-Bold.otf)'
    }
  ]
};

export default styles;

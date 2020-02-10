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
  content3: {
    textAlign: 'left',
    background: '#24272e',
    top: '350px',
    marginBottom: '24px',
    position: 'relative',
    padding: '20px'
  },
  content4: {
    textAlign: 'left',
    background: COLOR_PAPER_BAKCGROUND,
    top: '350px',
    marginBottom: '24px',
    position: 'relative',
    padding: '20px'
  },
  logo: {
    maxWidth: '100%'
  },
  paraAhli: {
    marginBottom: '20px'
  },
  headerText: {
    color: COLOR_WHITE,
    fontSize: '45px',
    fontFamily: 'CircularStd'
  },
  latestClass: {
    top: '24px',
    margin: 'auto'
  },
  hightlightClassText: {
    float: 'left'
  },
  paraAhliText: {
    textAlign: 'center'
  },
  hightlightClass: {
    width: '650px',
    height: '400px',
    marginBottom: '12px',
    float: 'left'
  },
  imageParaAhli: {
    marginBottom: '12px',
    width: '480px',
    height: '400px'
  },
  headerCaption: {
    color: COLOR_WHITE,
    fontSize: '24px',
    fontFamily: 'Raleway'
  },
  overlay: {
    position: 'absolute',
    top: '20px',
    left: '20px',
    color: 'black',
    backgroundColor: 'white'
  },
  '@font-face': [
    {
      fontFamily: 'CircularStd',
      src: 'url(../assets/font/CircularStd-Bold.otf)'
    }
  ]
};

export default styles;

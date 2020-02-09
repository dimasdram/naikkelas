import { createMuiTheme } from "@material-ui/core/styles";

export const VERTICAL_ALIGN = {
  position: "relative",
  top: "50%",
  transform: "translateY(-50%)"
};

export const ANIMATION_SLIDE_HEIGHT = {
  slideHeight: {
    animationName: "slide",
    animationDuration: "1.5s",
    overflowY: "hidden",
    borderRadius: "10px"
  },
  "@keyframes slide": {
    from: {
      maxHeight: 0,
      maxWidth: "90vw"
    },
    to: {
      maxHeight: "200vh",
      maxWidth: "100vw"
    }
  }
};

export const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#F55151",
      main: "#444B55",
      dark: "#FA8E8E",
      contrastText: "#ffffff"
    },
    white: {
      main: "#ffffff"
    },
    secondary_1: {
      light: "#F55151",
      main: "#F55151",
      dark: "#cccccc",
      contrastText: "#ffffff"
    },
    secondary_2: {
      light: "#FA8E8E",
      main: "#F55151",
      dark: "#cccccc",
      contrastText: "#000000"
    },
    grey: {
      border: "#c4c4c4",
      navBackground: "#e5e5e5",
      textDark: "#444B55"
    },
    background: {
      default: "#f2f2f2",
      error: "#d24135",
      errorDark: "#9a000d",
      info: "#04a9f5",
      infoDark: "#007ac2",
      warning1: "#ffcd40",
      warning1Dark: "#c89c00",
      warning2: "#e27030",
      warning2Dark: "#c87130"
    }
  },
  font: {
    primary: {
      fontFamily: "Ubuntu"
    }
  }
});

export const COLOR_PRIMARY = "#e141f2";
export const COLOR_PRIMARY_2 = "#ff00ff";
export const COLOR_WHITE = "#ffffff";
export const COLOR_BLACK = "#000000";
export const COLOR_GRAY = "#333333";
export const COLOR_GREY = "#656563";
export const COLOR_RED = "#ED2A23";
export const COLOR_BLUE = "#2F80ED";
export const COLOR_GREEN = "#369A53";
export const COLOR_BLUE_BUTTON = "#2D9CDB";
export const COLOR_ORANGE = "#F89B2B";
export const COLOR_SECONDARY = "#FF00FF";
export const COLOR_PAPER_BAKCGROUND = "#4D4D4D";
export const COLOR_GREY_MEDIUM = "#999998";
export const COLOR_GREY_LIGHT = "#DCDAD9";
export const COLOR_DISABLED = "#ECECEC";

/* eslint-disable no-unused-vars */
import {
  // createTheme,
  ThemeOptions,
  unstable_createMuiStrictModeTheme as createTheme,
} from "@mui/material/styles";
import tinycolor from "tinycolor2";

const primary = "#588157";
const secondary = "#A3B18A";
const warning = "#FFC260";
const success = "#3A5A40";
const info = "#9013FE";

const lightenRate = 7.5;
const darkenRate = 15;

declare module "@mui/material/styles/createPalette" {
  interface TypeBackground {
    default: string;
    paper: string;
    light: string;
  }
}

declare module "@mui/material/styles" {
  interface Theme {
    customShadows: {
      widget: string;
      widgetDark: string;
      widgetWide: string;
    };
  }
  interface ThemeOptions {
    customShadows: {
      widget: string;
      widgetDark: string;
      widgetWide: string;
    };
  }
}

const defaultTheme: ThemeOptions = {
  palette: {
    primary: {
      main: primary,
      light: tinycolor(primary).lighten(lightenRate).toHexString(),
      dark: tinycolor(primary).darken(darkenRate).toHexString(),
    },
    secondary: {
      main: secondary,
      light: tinycolor(secondary).lighten(lightenRate).toHexString(),
      dark: tinycolor(secondary).darken(darkenRate).toHexString(),
      contrastText: "#FFFFFF",
    },
    warning: {
      main: warning,
      light: tinycolor(warning).lighten(lightenRate).toHexString(),
      dark: tinycolor(warning).darken(darkenRate).toHexString(),
    },
    success: {
      main: success,
      light: tinycolor(success).lighten(lightenRate).toHexString(),
      dark: tinycolor(success).darken(darkenRate).toHexString(),
    },
    info: {
      main: info,
      light: tinycolor(info).lighten(lightenRate).toHexString(),
      dark: tinycolor(info).darken(darkenRate).toHexString(),
    },
    text: {
      primary: "#4A4A4A",
      secondary: "#6E6E6E",
      disabled: "#B9B9B9",
    },
    background: {
      default: "#F6F7FF",
      light: "#F3F5FF",
    },
  },
  customShadows: {
    widget:
      "0px 3px 11px 0px #E8EAFC, 0 3px 3px -2px #B2B2B21A, 0 1px 8px 0 #9A9A9A1A",
    widgetDark:
      "0px 3px 18px 0px #4558A3B3, 0 3px 3px -2px #B2B2B21A, 0 1px 8px 0 #9A9A9A1A",
    widgetWide:
      "0px 12px 33px 0px #E8EAFC, 0 3px 3px -2px #B2B2B21A, 0 1px 8px 0 #9A9A9A1A",
  },
  components: {
    MuiBackdrop: {
      styleOverrides: {
        root: {
          backgroundColor: "#4A4A4A1A",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          width: "100vw",
          zIndex: 1300,
        },
      },
    },
    MuiMenu: {
      styleOverrides: {
        paper: {
          boxShadow:
            "0px 3px 11px 0px #E8EAFC, 0 3px 3px -2px #B2B2B21A, 0 1px 8px 0 #9A9A9A1A",
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        icon: {
          color: "#B9B9B9",
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          "&$selected": {
            backgroundColor: "#F3F5FF !important",
            "&:focus": {
              backgroundColor: "#F3F5FF",
            },
          },
        },
        button: {
          "&:hover, &:focus": {
            backgroundColor: "#F3F5FF",
          },
        },
      },
    },
    MuiTouchRipple: {
      styleOverrides: {
        child: {
          backgroundColor: "white",
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          height: 56,
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottom: "1px solid rgba(224, 224, 224, .5)",
        },
        head: {
          fontSize: "0.95rem",
        },
        body: {
          fontSize: "0.95rem",
        },
      },
    },
  },
  typography: {
    h1: {
      fontSize: "3rem",
    },
    h2: {
      fontSize: "2rem",
    },
    h3: {
      fontSize: "1.64rem",
    },
    h4: {
      fontSize: "1.5rem",
    },
    h5: {
      fontSize: "1.285rem",
    },
    h6: {
      fontSize: "1.142rem",
    },
  },
};

const theme = createTheme(defaultTheme);
export default theme;

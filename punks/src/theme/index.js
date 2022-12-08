import _ from "lodash";
import { colors, createMuiTheme, responsiveFontSizes } from "@material-ui/core";
import typography from "./typography";

const baseOptions = {
  typography,
  overrides: {
    MuiSvgIcon: {
      root: {
        fill: "currentColor",
        width: "1em",
        height: "1em",
        display: "inline-block",
        fontSize: "20px",
        transition: "fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
      },
    },
    MuiFilledInput: {
      input: {
        padding: "20px",
        background: "#999999",
      },
    },
    MuiMenuItem: {
      root: {
        width: "auto",
        overflow: "hidden",
        fontSize: "12px",
        boxSizing: "border-box",
        minHeight: "48px",
        fontFamily: "Rajdhani,sans-serif",
        fontWeight: "400",
        lineHeight: "1.5",
        paddingTop: "6px",
        whiteSpace: "nowrap",
        paddingBottom: "6px",
      }
    },
    MuiIconButton: {
      root: {
        flex: "0 0 auto",
        color: " #FFFFFF",
        padding: "12px",
        overflow: "visible",
        fontSize: "1.5rem",
        textAlign: "center",
        transition: "background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
        borderRadius: "50%",

      },

    },

    // MuiToolbar: {
    //   // regular: {
    //   //   minHeight: "0px !important",
    //   //   "@media (max-width: 1024px)": {
    //   //     minHeight: "70px !important",
    //   //   },
    //   // },
    // },
    MuiAppBar: {
      positionFixed: {
        backgroundColor: "#272a30",
      },

      positionAbsolute: {
        top: "10",
        left: "auto",
        right: "0",
        position: "absolute",

      },
    },
    MuiSelect: {
      outlined: {
        borderRadius: "4px",
      },
    },
    MuiSlider: {
      root: {
        color: " #ffffff",
        height: "10px",
      },
      track: {
        height: "5px",
        display: "block",
        position: "absolute",
        borderRadius: "50px !important",
        backgroundColor: "rgb(90 90 90) !important"
      },
      rail: {
        width: "100%",
        height: "5px",
        display: "block",
        opacity: "1",
        position: "absolute",
        borderRadius: "50px !important",
        backgroundColor: "rgb(90 90 90) !important"
      },
      thumb: {
        width: "30px",
        height: "30px",
        display: "flex",
        outline: "0",
        position: "absolute",
        boxSizing: "border-box",
        marginTop: "-12px",
        transition: "box-shadow 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
        alignItems: "center",
        marginLeft: "-6px",
        borderRadius: "50%",
        justifyContent: "center",
        backgroundColor: "currentColor"
      },
      valueLabel: {
        left: "calc(-50% - -3px)",
      },
      mark: {
        display: "none",
      },
    },
    MuiTableCell: {
      root: {
        borderBottom: "2px solid rgb(0 0 0)",
        backgroundColor: "#272a30",
        color: "#fff !important",
        padding: "5px 16px",
      },
    },
    PrivateValueLabel: {
      label: {
        color: " #000",
      },
    },
    MuiDialogContent: {
      root: {
        flex: "1 1 auto",
        padding: "8px 24px",
        overflowY: "auto",
      },
    },
    MuiFormLabel: {
      root: { color: "#222" },
      colorSecondary: {
        "&.Mui-focused": {
          color: "#222",
        },
      },
    },
    MuiList: {
      padding: {
        padding: "10px",
      },
    },
    MuiListSubheader: {
      root: {
        color: "#000000",
        fontSize: "22px !important",
        fontWeight: "600 !important",
        lineHeight: "33px !important",
      },
    },

    MuiOutlinedInput: {
      input: {
        padding: "18.5px 14px",
      },
      root: {
        position: "relative",
        borderRadius: "5px",
        marginTop: "7px",
      },
      notchedOutline: {
        borderColor: "rgb(8 8 8) !important",
      },
      colorSecondary: {
        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
          color: "#fff",
          borderColor: "#222",
        },
        "&.Mui-focused": {
          color: "#ffff",
        },
      },
    },
    MuiPaper: {
      root: {
        color: "#52565c",
        transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
        backgroundColor: "#1a1a1a",

      },
      outlined: {
        padding: "20px",
        width: "100%",
      },
    },
    MuiPopover: {
      root: {
        zIndex: 99999,
      },
    },
    MuiListItem: {
      gutters: {
        paddingLeft: 0,
      },
    },
    MuiCheckbox: {
      root: {
        padding: "4px",
        fontSize: "12px",
      },
      colorSecondary: {
        "&.Mui-checked": { color: "#000" },
      },
    },
    MuiFormControlLabel: {
      root: {
        paddingBottom: "0",
      },
    },
    MuiListItemSecondaryAction: {
      root: {
        right: 0,
      },
    },
    MuiDialog: {
      paperScrollPaper: {
        display: "flex",
        maxWidth: "460px!important",
        boxShadow: "1px 2px 6px rgb(0 0 0 / 25%) !important",
        maxHeight: "calc(100% - 64px)",
        borderRadius: "8px!important",
        flexDirection: "column",
        backgroundColor: "rgb(20 20 20)",
      },
      paper: {
        overflowY: "unset",
      },
    },
    MuiInputBase: {
      root: {
        color: "#52565c",
        cursor: "text",
        display: "inline-flex",
        position: "relative",
        fontSize: "16px",
        boxSizing: "border-box",
        alignItems: "center",
        fontFamily: "'Play', sans-serif",
        fontWeight: "400",
        lineHeight: "1.1876em",
        backgroundColor: "#FFF",
        height: "40px"
      }
    },
    MuiBackdrop: {
      root: { backgroundColor: "rgba(0, 0, 0, 0.75)" },
    },
    MuiButton: {
      root: {
        whiteSpace: "nowrap",
        fontSize: "16px",
        color: "#fff",
        // "&:hover": {
        //   background: "#000",
        //   border: "2px solid #fff",
        //   color:"#ffff",
        // },
      },
      containedSizeLarge: {
        padding: "8px 22px",
      },
      containedSizeSmall: {
        padding: "9px 10px",
        fontSize: "35px",
        color: "242424"
      },
      containedSecondary: {
        color: "#000",
        height: "46px",
        fontSize: " 14px !important",
        width: "250px",
        boxShadow: "0px 4px 4px rgb(0 0 0 / 25%)",
        transition: "0.5s",
        fontWeight: "600",
        lineHeight: "1.75",
        letterSpacing: "1px",
        textTransform: "uppercase",
        background: "#fff",
        borderTopLeftRadius: "50px 12px",
        borderTopRightRadius: "50px 12px",
        borderBottomLeftRadius: "50px 12px",
        borderBottomRightRadius: "50px 12px",
        "@media (max-width:767px)": {
          fontSize: "13px !important",
          width: "197px",
          height: "40px",
        },
        "&:hover": {
          backgroundColor: "#5a5a5a !important",
          color: "#FFF",
          // border: "2px solid #000",
        },
      },
      containedPrimary: {
        color: "#fff",
        height: "46px",
        fontSize: " 14px !important",
        width: "250px",
        boxShadow: "0px 4px 4px rgb(0 0 0 / 25%)",
        transition: "0.5s",
        fontWeight: "600",
        lineHeight: "1.75",
        letterSpacing: "1px",
        textTransform: "uppercase",
        backgroundColor: "#5a5a5a",
        borderTopLeftRadius: "50px 12px",
        borderTopRightRadius: "50px 12px",
        borderBottomLeftRadius: "50px 12px",
        borderBottomRightRadius: "50px 12px",
        "@media (max-width:767px)": {
          fontSize: "13px !important",
          width: "197px",
          height: "40px",
        },
        "&:hover": {
          background: "#fff !important",
          color: "#000",
          // border: "2px solid #000",
        },
      },
      contained: {
        color: "#242424",
        fontWeight: 600,
        padding: "11px 22px ",
        // "&:hover": {
        //   backgroundColor: "#08d57f",
        // },
      },
      outlinedPrimary: {
        borderRadius: "50px",
        color: "#300760",
        fontWeight: 600,
        padding: "5px 19px",
        border: "2px solid #300760",
        "&:hover": {
          backgroundColor: "#f30065",
          border: "2px solid #f30065",
          color: "#000",
        },
      },
      outlinedSizeSmall: {
        padding: "6px 23px",
        fontSize: "16px",
        lineHeight: " 24px",
      },
    },
    MuiDrawer: {
      paperAnchorDockedLeft: {
        borderRight: "0",
      },
    },
    MuiMenu: {
      paper: { top: "47px" },
    },
    MuiTypography: {
      colorPrimary: {
        color: "transparent",
      },
      subtitle1: {
        color: "#000",
        fontSize: "14px",
        fontWeight: 500,
        lineHeight: " 16px",
        colorSecondary: {
          color: "#8d8989",
        },
      },
    },
  },
};

const themesOptions = {
  typography: {
    fontWeight: 400,
    fontFamily: "'Monetizer', sans-serif",
  },
  palette: {
    type: "light",
    action: {
      primary: "#20509e",
    },
    background: {
      default: "#FBFBFD",
      dark: "#f3f7f9",
      paper: colors.common.white,
    },
    primary: {
      main: "#898989",
      dark: "#de0d0d",
      light: "#de0d0d",
    },
    secondary: {
      main: "#fff",
    },
    warning: {
      main: "#ffae33",
      dark: "#ffae33",
      light: "#fff1dc",
    },
    success: {
      main: "#54e18c",
      dark: "#54e18c",
      light: "#e2faec",
    },
    error: {
      main: "#ff7d68",
      dark: "#ff7d68",
      light: "#ffe9e6",
    },
    text: {
      primary: "#52565c",
      secondary: "#999999",
    },
    common: {
      black: "#222222",
    },
  },
};

export const createTheme = (config = {}) => {
  let theme = createMuiTheme(_.merge({}, baseOptions, themesOptions));

  if (config.responsiveFontSizes) {
    theme = responsiveFontSizes(theme);
  }

  return theme;
};

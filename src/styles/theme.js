import { createMuiTheme } from '@material-ui/core/styles';
import colours from '../constants/colours';

export const lightTheme = createMuiTheme({
  palette: {
    type: 'light',
    common: {
      main: colours.constants.black,
      black: colours.constants.black,
      pureBlack: colours.constants.pureBlack,
      white: colours.constants.white,
      pureWhite: colours.constants.pureWhite,
      transparent: colours.constants.transparent,
    },

    primary: {
      light: colours.lightModeHeader.light,
      main: colours.lightModeHeader.main,
      dark: colours.lightModeHeader.dark,
    },

    secondary: {
      light: colours.lightModeSidebarPrimary.light,
      main: colours.lightModeSidebarPrimary.main,
      dark: colours.lightModeSidebarPrimary.dark,
    },

    tertiary: {
      light: colours.lightModeSidebarSecondary.light,
      main: colours.lightModeSidebarSecondary.main,
      dark: colours.lightModeSidebarSecondary.dark,
    },

    titleIcons: {
      light: colours.lightModeTitleIcons.light,
      main: colours.lightModeTitleIcons.main,
      dark: colours.lightModeTitleIcons.dark,
    },

    icons: {
      light: colours.lightModeIcons.light,
      main: colours.lightModeIcons.main,
      dark: colours.lightModeIcons.dark,
    },

    menuDivider: {
      light: colours.lightModeMenuDivider.light,
      main: colours.lightModeMenuDivider.main,
      dark: colours.lightModeMenuDivider.dark,
    },

    active: {
      light: colours.lightModeActiveColour.light,
      main: colours.lightModeActiveColour.main,
      dark: colours.lightModeActiveColour.dark,
      tab: colours.lightModeActiveColour.tab,
    },

    error: {
      light: colours.constants.errorLight,
      main: colours.constants.errorMain,
      dark: colours.constants.errorDark,
    },

    text: {
      main: colours.lightModeText.main,
      title: colours.lightModeText.menuTitles,
      subtitles: colours.lightModeText.menuSubtitles,
      disabled: colours.lightModeText.disabled,
      hyperlink: colours.lightModeText.hyperlink,
      contrastText: colours.constants.contrastText,
    },

    login: {
      light: colours.lightModeLoginColour.light,
      main: colours.lightModeLoginColour.main,
      dark: colours.lightModeLoginColour.dark,
      text: colours.lightModeLoginColour.text,
    },
  },
});

export const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
    common: {
      main: colours.constants.white,
      black: colours.constants.black,
      pureBlack: colours.constants.pureBlack,
      white: colours.constants.white,
      pureWhite: colours.constants.pureWhite,
      transparent: colours.constants.transparent,
    },

    primary: {
      light: colours.darkModeHeader.light,
      main: colours.darkModeHeader.main,
      dark: colours.darkModeHeader.dark,
    },

    secondary: {
      light: colours.darkModeSidebarPrimary.light,
      main: colours.darkModeSidebarPrimary.main,
      dark: colours.darkModeSidebarPrimary.dark,
    },

    tertiary: {
      light: colours.darkModeSidebarSecondary.light,
      main: colours.darkModeSidebarSecondary.main,
      dark: colours.darkModeSidebarSecondary.dark,
    },

    titleIcons: {
      light: colours.darkModeTitleIcons.light,
      main: colours.darkModeTitleIcons.main,
      dark: colours.darkModeTitleIcons.dark,
    },

    icons: {
      light: colours.darkModeIcons.light,
      main: colours.darkModeIcons.main,
      dark: colours.darkModeIcons.dark,
    },

    menuDivider: {
      light: colours.darkModeMenuDivider.light,
      main: colours.darkModeMenuDivider.main,
      dark: colours.darkModeMenuDivider.dark,
    },

    active: {
      light: colours.darkModeActiveColour.light,
      main: colours.darkModeActiveColour.main,
      dark: colours.darkModeActiveColour.dark,
      tab: colours.darkModeActiveColour.tab,
    },

    error: {
      light: colours.constants.errorLight,
      main: colours.constants.errorMain,
      dark: colours.constants.errorDark,
    },

    text: {
      main: colours.darkModeText.main,
      title: colours.darkModeText.menuTitles,
      subtitles: colours.darkModeText.menuSubtitles,
      disabled: colours.darkModeText.disabled,
      hyperlink: colours.darkModeText.hyperlink,
      contrastText: colours.constants.contrastText,
    },

    login: {
      light: colours.darkModeLoginColour.light,
      main: colours.darkModeLoginColour.main,
      dark: colours.darkModeLoginColour.dark,
      text: colours.darkModeLoginColour.text,
    },
  },

  overrides: {
    MuiLink: {
      root: {
        color: colours.darkModeText.hyperlink,
        textDecoration: 'none',
        cursor: 'pointer',
        marginBottom: '1rem',
      },
    },

    MuiCheckbox:{
      root: {
        color: colours.constants.white,
      },

      colorPrimary: {
        color: colours.constants.white,
        '&$checked': {
          color: colours.darkModeActiveColour.main,
        },
        '&$disabled': {
          color: colours.darkModeText.disabled,
        },
      },

      colorSecondary: {
        color: colours.constants.white,
        '&$checked': {
          color: colours.darkModeActiveColour.dark,
        },
        '&$disabled': {
          color: colours.darkModeText.disabled,
        },
      },
    },

    MuiSwitch:{
      root: {
        color: colours.constants.white,
      },

      colorPrimary: {
        color: colours.constants.white,
        '&$checked': {
          color: colours.darkModeActiveColour.main,
        },
        '&$disabled': {
          color: colours.darkModeText.disabled,
        },
      },

      colorSecondary: {
        color: colours.constants.white,
        '&$checked': {
          color: colours.darkModeActiveColour.dark,
        },
        '&$disabled': {
          color: colours.darkModeText.disabled,
        },
      },

      track: {
        backgroundColor: colours.darkModeText.main,
      },
    },

    MuiDialogTitle: {
      root: {
        color: colours.constants.white,
        textDecoration: 'underline',
      },
    },

    MuiButton: {
      textPrimary: {
        color: colours.constants.white,
      },
    },

    MuiSvgIcon: {
      root: {
        cursor: 'pointer',
      },
    },

    MuiTab: {
      root: {
        minHeight: '40px',
      },

      wrapper: {
        textAlign: 'left',
        alignItems: 'left',
        fontSize: '12px',
        paddingLeft: '65px',
        textTransform: 'capitalize',
      },
    },

    MuiTabs: {
      root: {
        backgroundColor: colours.darkModeSidebarPrimary.main,
      },
    },

    MuiSpeedDial: {
      fab: {
        backgroundColor: colours.darkModeHeader.main,
        '&:hover': {
          backgroundColor: colours.darkModeHeader.light,
        },
      },
    },

    MuiFab: {
      root: {
        width: '45px',
        height: '45px',
      },
    },
  },
});

// export const nieTheme = createMuiTheme({
//   palette: {
//     type: 'light',
//     common: {
//       main: colours.constants.black,
//       black: colours.constants.black,
//       pureBlack: colours.constants.pureBlack,
//       white: colours.constants.white,
//       pureWhite: colours.constants.pureWhite,
//       transparent: colours.constants.transparent,
//     },
//
//     primary: {
//       light: colours.nieHeader.light,
//       main: colours.nieHeader.main,
//       dark: colours.nieHeader.dark,
//     },
//
//     secondary: {
//       light: colours.nieSidebarPrimary.light,
//       main: colours.nieSidebarPrimary.main,
//       dark: colours.nieSidebarPrimary.dark,
//     },
//
//     tertiary: {
//       light: colours.nieSidebarSecondary.light,
//       main: colours.nieSidebarSecondary.main,
//       dark: colours.nieSidebarSecondary.dark,
//     },
//
//     titleIcons: {
//       light: colours.nieTitleIcons.light,
//       main: colours.nieTitleIcons.main,
//       dark: colours.nieTitleIcons.dark,
//     },
//
//     icons: {
//       light: colours.nieIcons.light,
//       main: colours.nieIcons.main,
//       dark: colours.nieIcons.dark,
//     },
//
//     menuDivider: {
//       light: colours.nieMenuDivider.light,
//       main: colours.nieMenuDivider.main,
//       dark: colours.nieMenuDivider.dark,
//     },
//
//     active: {
//       light: colours.nieActiveColour.light,
//       main: colours.nieActiveColour.main,
//       dark: colours.nieActiveColour.dark,
//       tab: colours.nieActiveColour.tab,
//     },
//
//     error: {
//       light: colours.constants.errorLight,
//       main: colours.constants.errorMain,
//       dark: colours.constants.errorDark,
//     },
//
//     text: {
//       main: colours.nieText.main,
//       title: colours.nieText.menuTitles,
//       subtitles: colours.nieText.menuSubtitles,
//       disabled: colours.nieText.disabled,
//       hyperlink: colours.nieText.hyperlink,
//       contrastText: colours.constants.contrastText,
//     },
//
//     login: {
//       light: colours.nieLoginColour.light,
//       main: colours.nieLoginColour.main,
//       dark: colours.nieLoginColour.dark,
//       text: colours.nieLoginColour.text,
//     },
//   },
//
//   overrides: {
//     MuiTypography: {
//       h5: {
//         color: colours.nieSidebarPrimary.main,
//       }
//     },
//
//     MuiLink: {
//       root: {
//         color: colours.nieText.hyperlink,
//         textDecoration: 'none',
//         cursor: 'pointer',
//         marginBottom: '1rem',
//       },
//     },
//
//     MuiIconButton: {
//       root: {
//         color: colours.nieIcons.main,
//       },
//     },
//
//     MuiCheckbox:{
//       colorPrimary: {
//         color: colours.nieHeader.main,
//         '&$checked': {
//           color: colours.nieActiveColour.main,
//         },
//         '&$disabled': {
//           color: colours.nieText.disabled,
//         },
//       },
//
//       colorSecondary: {
//         color: colours.nieHeader.main,
//         '&$checked': {
//           color: colours.nieActiveColour.dark,
//         },
//         '&$disabled': {
//           color: colours.nieText.disabled,
//         },
//       },
//     },
//
//     MuiSwitch:{
//       colorPrimary: {
//         color: colours.nieHeader.main,
//         '&$checked': {
//           color: colours.nieActiveColour.main,
//         },
//         '&$disabled': {
//           color: colours.nieText.disabled,
//         },
//       },
//
//       colorSecondary: {
//         color: colours.nieHeader.main,
//         '&$checked': {
//           color: colours.nieActiveColour.dark,
//         },
//         '&$disabled': {
//           color: colours.nieText.disabled,
//         },
//       },
//
//       track: {
//         backgroundColor: colours.nieText.main,
//       },
//     },
//
//     MuiSvgIcon: {
//       root: {
//         cursor: 'pointer',
//       },
//     },
//
//     MuiTab: {
//       root: {
//         minHeight: '40px',
//       },
//
//       wrapper: {
//         textAlign: 'left',
//         alignItems: 'left',
//         fontSize: '12px',
//         paddingLeft: '65px',
//         textTransform: 'capitalize',
//       },
//     },
//
//     MuiTabs: {
//       root: {
//         backgroundColor: colours.nieSidebarPrimary.main,
//       },
//     },
//
//     MuiSpeedDial: {
//       fab: {
//         backgroundColor: colours.nieHeader.main,
//         '&:hover': {
//           backgroundColor: colours.nieHeader.light,
//         },
//       },
//     },
//
//     MuiFab: {
//       root: {
//         width: '45px',
//         height: '45px',
//       },
//     },
//   },
// });

import { blue, green, grey, orange, red } from '@mui/material/colors'

export const paletteLight = {
  // Palette values for light mode
  primary: {
    main: green[400],
  },
  secondary: {
    main: green[200],
  },
  error: {
    main: red[700],
  },
  warning: {
    main: orange[700],
  },
  info: {
    main: blue[700],
  },
  success: {
    main: green[700],
  },
  text: {
    primary: grey[800],
  },
  divider: grey[600],
  background: {
    default: grey[100],
    paper: grey[300],
  },
}

export const paletteDark = {
  // Palette values for dark mode
  primary: {
    main: green[700],
  },
  secondary: {
    main: green[500],
  },
  error: {
    main: red[900],
  },
  warning: {
    main: orange[900],
  },
  info: {
    main: blue[900],
  },
  success: {
    main: green[900],
  },
  text: {
    primary: grey[300],
  },
  divider: grey[300],
  background: {
    default: grey[900],
    paper: grey[800],
  },
}

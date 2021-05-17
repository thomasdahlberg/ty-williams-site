import { createMuiTheme } from '@material-ui/core';
import purple from '@material-ui/core/colors/purple';
import cyan from '@material-ui/core/colors/cyan';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: purple[500],
      light: "#d05ce3",
      dark: "#6a0080",
    },
    secondary: {
      main: cyan[300],
      light: "#88ffff",
      dark: "#009faf",
    },
  },
});

export default theme;

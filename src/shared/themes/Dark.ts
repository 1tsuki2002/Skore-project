import { createTheme } from "@mui/material";
import { purple } from "@mui/material/colors";

export const DarkTheme = createTheme({
    palette: {
        primary: {
          main: purple[400],
          dark: purple[500],
          light: purple[300],
          contrastText: '#ffffff', 
        },
        secondary: {
          main: purple[400],
          dark: purple[500],
          light: purple[300],
          contrastText: '#ffffff', 
        },
        background: {
          paper: '#303134',
          default: '#202124'
        }

    }
});
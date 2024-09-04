import { createTheme } from "@mui/material";
import { purple } from "@mui/material/colors";

export const LightTheme = createTheme({
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
          paper: '#ffffff',
          default: '#f7f6f3'
        }

    }
});
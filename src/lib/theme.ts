import { Roboto } from "next/font/google";
import { experimental_extendTheme as extendTheme } from "@mui/material/styles";

export const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Helvetica", "Arial", "sans-serif"],
});

/**
 * https://mui.com/material-ui/experimental-api/css-theme-variables/customization/
 *
 * TL;DR
 * - specify both dark and light colors at once
 * - extendTheme returns a theme for CssVarsProvider, not ThemeProvider
 * - CssVarsProvider has a defaultMode property, set to "system" in _app.tsx
 */
const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: "#40088d",
        },
        secondary: {
          main: "#038225",
        },
      },
    },
    dark: {
      palette: {
        primary: {
          main: "#2c90fc",
        },
        secondary: {
          main: "#b827fc",
        },
      },
    },
  },
  typography: {
    ...roboto.style,
    h1: {
      fontSize: "5.25em",
    },
  },
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: "none",
          ":hover": {
            textDecoration: "underline",
          },
        },
      },
    },
  },
});

export default theme;

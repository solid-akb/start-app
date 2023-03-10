import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface PaletteOptions {
    appBackground: React.CSSProperties["color"];
    chiclet: React.CSSProperties["color"];
  }
}

declare module "@mui/material/Chip" {
  interface ChipPropsVariantOverrides {
    bdc: true;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    bdcListItemText: true;
  }
}

export const theme = createTheme({
  palette: {
    appBackground: "#F2F2F2",
    chiclet: "#FFFFFF",
    primary: {
      main: "#003A63",
    },
    secondary: {
      main: "#FFC82E",
      dark: "#2A6EBB",
    },
    text: {
      primary: "#2F2F2F",
      secondary: "#002A47",
    },
    error: {
      main: "#D32F2F",
    },
    success: {
      main: "#5C8727",
    },
    divider: "#00000050",
  },
  typography: {
    h1: {
      fontSize: 34,
      fontWeight: 800,
      color: "#002A47",
      paddingBottom: "8px",
    },
    h2: {
      color: "#002A47",
      fontSize: 24,
      fontWeight: 800,
      lineHeight: 1.375,
      paddingBottom: "8px",
    },
    h3: {
      fontWeight: 800,
      fontSize: 20,
      color: "#275677",
    },
    h4: {
      fontSize: 16,
      fontWeight: 700,
      color: "#2F2F2F",
    },
    body1: {
      fontSize: 16,
      color: "#2F2F2F",
      fontWeight: 400,
      lineHeight: 1.625,
    },
    body2: {
      fontSize: 16,
      color: "#2F2F2F",
      fontWeight: 800,
    },
    button: {
      fontWeight: 800,
      color: "#1B1B1B",
      textTransform: "capitalize",
    },
    caption: {
      fontSize: 12,
      color: "#6D6D6D",
    },
    subtitle1: {
      fontSize: 14,
      fontWeight: 700,
      color: "#002A47",
    },
    fontFamily: `'Open Sans', sans-serif`,
  },
});

import { Palette, createTheme } from "@mui/material";
import { TypographyOptions } from "@mui/material/styles/createTypography";

declare module "@mui/material" {
  interface Color {
    70?: string;
    770?: string;
    750?: string;
    950?: string;
  }
}

declare module "@mui/material/styles" {
  interface Theme {
    typography?: {
      inter?: React.CSSProperties;
      lora?: React.CSSProperties;
    };
  }

  interface ThemeOptions {
    typography?:
      | TypographyOptions
      | ((palette: Palette) => TypographyOptions)
      | (undefined & {
          inter?: React.CSSProperties;
          lora?: React.CSSProperties;
        });
  }

  interface TypographyPropsVariantOverrides {
    inter: true;
    lora: true;
  }

  interface TypographyClasses {
    inter: string;
    lora: string;
  }

  interface TypographyVariantsOptions {
    inter: React.CSSProperties;
    lora: React.CSSProperties;
  }

  interface TypographyVariants {
    inter: React.CSSProperties;
    lora: React.CSSProperties;
  }
}

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 320,
      md: 744,
      lg: 1024,
      xl: 1280,
    },
  },
  palette: {
    primary: {
      main: "#2e7d32",
    },
    background: {
      default: "#f7f6f5",
      paper: "#d4d1c9",
    },
    common: {
      black: "black",
    },
  },
  typography: {
    inter: {
      fontFamily: ["Inter", "sans-serif"].join(" , "),
    },
    lora: {
      fontFamily: ["Lora", "sans-serif"].join(" , "),
    },
  },
});

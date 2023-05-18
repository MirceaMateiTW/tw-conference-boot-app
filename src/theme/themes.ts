import "@fontsource/roboto";

import { PaletteColor, createTheme } from "@mui/material";

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    destructive: true;
  }
}

declare module "@mui/material/IconButton" {
  interface IconButtonPropsColorOverrides {
    ixColorTalc: true;
    ixColorMist: true;
    ixColorOnyx: true;
    ixColorFlamingoDarker: true;
    ixColorFlamingo: true;
    ixColorFlamingo50: true;
    ixColorFlamingo30: true;
    ixColorWaveDarker: true;
    ixColorWave: true;
    ixColorWave70: true;
    ixColorWave60: true;
    ixColorTurmeric: true;
    ixColorTurmeric70: true;
    ixColorTurmeric50: true;
    ixColorJade: true;
    ixColorJade60: true;
    ixColorJade40: true;
    ixColorSapphire: true;
    ixColorSapphire70: true;
    ixColorSapphire40: true;
    ixColorAmethyst: true;
    ixColorAmethyst70: true;
    ixColorAmethyst30: true;
    ixColorGrey90: true;
    ixColorGrey80: true;
    ixColorGrey70: true;
    ixColorGrey60: true;
    ixColorGrey50: true;
    ixColorGrey40: true;
    ixColorGrey30: true;
    ixColorGrey20: true;
    ixColorGrey10: true;
    ixColorGrey5: true;
    ixColorSuccess: true;
    ixColorError: true;
    ixTextColorWhite: true;
  }
}

declare module "@mui/material/Box" {
  interface BoxPropsColorOverrides {
    ixColorTalc: true;
    ixColorMist: true;
    ixColorOnyx: true;
    ixColorFlamingoDarker: true;
    ixColorFlamingo: true;
    ixColorFlamingo50: true;
    ixColorFlamingo30: true;
    ixColorWaveDarker: true;
    ixColorWave: true;
    ixColorWave70: true;
    ixColorWave60: true;
    ixColorTurmeric: true;
    ixColorTurmeric70: true;
    ixColorTurmeric50: true;
    ixColorJade: true;
    ixColorJade60: true;
    ixColorJade40: true;
    ixColorSapphire: true;
    ixColorSapphire70: true;
    ixColorSapphire40: true;
    ixColorAmethyst: true;
    ixColorAmethyst70: true;
    ixColorAmethyst30: true;
    ixColorGrey90: true;
    ixColorGrey80: true;
    ixColorGrey70: true;
    ixColorGrey60: true;
    ixColorGrey50: true;
    ixColorGrey40: true;
    ixColorGrey30: true;
    ixColorGrey20: true;
    ixColorGrey10: true;
    ixColorGrey5: true;
    ixColorSuccess: true;
    ixColorError: true;
    ixTextColorWhite: true;
    inherit: true;
  }
}

declare module "@mui/material/styles" {
  interface Theme {
    size: {
      small: number;
      medium: number;
      large: number;
      xlarge: number;
      xxlarge: number;
      xxxlarge: number;
    };
  }
  interface ThemeOptions {
    size: {
      small: number;
      medium: number;
      large: number;
      xlarge: number;
      xxlarge: number;
      xxxlarge: number;
    };
  }
  interface Palette {
    ixColorTalc: PaletteColor;
    ixColorMist: PaletteColor;
    ixColorOnyx: PaletteColor;
    ixColorFlamingoDarker: PaletteColor;
    ixColorFlamingo: PaletteColor;
    ixColorFlamingo50: PaletteColor;
    ixColorFlamingo30: PaletteColor;
    ixColorWaveDarker: PaletteColor;
    ixColorWave: PaletteColor;
    ixColorWave70: PaletteColor;
    ixColorWave60: PaletteColor;
    ixColorTurmeric: PaletteColor;
    ixColorTurmeric70: PaletteColor;
    ixColorTurmeric50: PaletteColor;
    ixColorJade: PaletteColor;
    ixColorJade60: PaletteColor;
    ixColorJade40: PaletteColor;
    ixColorSapphire: PaletteColor;
    ixColorSapphire70: PaletteColor;
    ixColorSapphire40: PaletteColor;
    ixColorAmethyst: PaletteColor;
    ixColorAmethyst70: PaletteColor;
    ixColorAmethyst30: PaletteColor;
    ixColorGrey90: PaletteColor;
    ixColorGrey80: PaletteColor;
    ixColorGrey70: PaletteColor;
    ixColorGrey60: PaletteColor;
    ixColorGrey50: PaletteColor;
    ixColorGrey40: PaletteColor;
    ixColorGrey30: PaletteColor;
    ixColorGrey20: PaletteColor;
    ixColorGrey10: PaletteColor;
    ixColorGrey5: PaletteColor;
    ixColorSuccess: PaletteColor;
    ixColorError: PaletteColor;
    ixTextColorWhite: PaletteColor;
  }
  interface PaletteOptions {
    ixColorTalc: PaletteColor;
    ixColorMist: PaletteColor;
    ixColorOnyx: PaletteColor;
    ixColorFlamingoDarker: PaletteColor;
    ixColorFlamingo: PaletteColor;
    ixColorFlamingo50: PaletteColor;
    ixColorFlamingo30: PaletteColor;
    ixColorWaveDarker: PaletteColor;
    ixColorWave: PaletteColor;
    ixColorWave70: PaletteColor;
    ixColorWave60: PaletteColor;
    ixColorTurmeric: PaletteColor;
    ixColorTurmeric70: PaletteColor;
    ixColorTurmeric50: PaletteColor;
    ixColorJade: PaletteColor;
    ixColorJade60: PaletteColor;
    ixColorJade40: PaletteColor;
    ixColorSapphire: PaletteColor;
    ixColorSapphire70: PaletteColor;
    ixColorSapphire40: PaletteColor;
    ixColorAmethyst: PaletteColor;
    ixColorAmethyst70: PaletteColor;
    ixColorAmethyst30: PaletteColor;
    ixColorGrey90: PaletteColor;
    ixColorGrey80: PaletteColor;
    ixColorGrey70: PaletteColor;
    ixColorGrey60: PaletteColor;
    ixColorGrey50: PaletteColor;
    ixColorGrey40: PaletteColor;
    ixColorGrey30: PaletteColor;
    ixColorGrey20: PaletteColor;
    ixColorGrey10: PaletteColor;
    ixColorGrey5: PaletteColor;
    ixColorSuccess: PaletteColor;
    ixColorError: PaletteColor;
    ixTextColorWhite: PaletteColor;
  }
}

const { palette } = createTheme();

const theme = createTheme({
  size: {
    small: 0.5,
    medium: 1,
    large: 1.5,
    xlarge: 2,
    xxlarge: 3,
    xxxlarge: 4,
  },
  palette: {
    ixColorTalc: palette.augmentColor({
      color: {
        main: "#FFFFFF",
      },
    }),
    ixColorMist: palette.augmentColor({
      color: {
        main: "#EDF1F3",
      },
    }),
    ixColorOnyx: palette.augmentColor({
      color: {
        main: "#000000",
      },
    }),
    ixColorFlamingoDarker: palette.augmentColor({
      color: {
        main: "#852233",
      },
    }),
    ixColorFlamingo: palette.augmentColor({
      color: {
        main: "#F2617A",
      },
    }),
    ixColorFlamingo50: palette.augmentColor({
      color: {
        main: "#9B293C",
      },
    }),
    ixColorFlamingo30: palette.augmentColor({
      color: {
        main: "#BD4257",
      },
    }),
    ixColorWaveDarker: palette.augmentColor({
      color: {
        main: "#002936",
      },
    }),
    ixColorWave: palette.augmentColor({
      color: {
        main: "#003D4F",
      },
    }),
    ixColorWave70: palette.augmentColor({
      color: {
        main: "#156C86",
      },
    }),
    ixColorWave60: palette.augmentColor({
      color: {
        main: "#0D98C1",
      },
    }),
    ixColorTurmeric: palette.augmentColor({
      color: {
        main: "#CC850A",
      },
    }),
    ixColorTurmeric70: palette.augmentColor({
      color: {
        main: "#A06908",
      },
    }),
    ixColorTurmeric50: palette.augmentColor({
      color: {
        main: "#F39E0C",
      },
    }),
    ixColorJade: palette.augmentColor({
      color: {
        main: "#6B9E78",
      },
    }),
    ixColorJade60: palette.augmentColor({
      color: {
        main: "#517B5C",
      },
    }),
    ixColorJade40: palette.augmentColor({
      color: {
        main: "#78C58C",
      },
    }),
    ixColorSapphire: palette.augmentColor({
      color: {
        main: "#47A1AD",
      },
    }),
    ixColorSapphire70: palette.augmentColor({
      color: {
        main: "#1F8290",
      },
    }),
    ixColorSapphire40: palette.augmentColor({
      color: {
        main: "#53C4D3",
      },
    }),
    ixColorAmethyst: palette.augmentColor({
      color: {
        main: "#634F7D",
      },
    }),
    ixColorAmethyst70: palette.augmentColor({
      color: {
        main: "#4A3B5E",
      },
    }),
    ixColorAmethyst30: palette.augmentColor({
      color: {
        main: "#B0A1C4",
      },
    }),
    ixColorGrey90: palette.augmentColor({
      color: {
        main: "#212223",
      },
    }),
    ixColorGrey80: palette.augmentColor({
      color: {
        main: "#414343",
      },
    }),
    ixColorGrey70: palette.augmentColor({
      color: {
        main: "#616364",
      },
    }),
    ixColorGrey60: palette.augmentColor({
      color: {
        main: "#808285",
      },
    }),
    ixColorGrey50: palette.augmentColor({
      color: {
        main: "#9A9C9E",
      },
    }),
    ixColorGrey40: palette.augmentColor({
      color: {
        main: "#BDBEC0",
      },
    }),
    ixColorGrey30: palette.augmentColor({
      color: {
        main: "#E1E2E3",
      },
    }),
    ixColorGrey20: palette.augmentColor({
      color: {
        main: "#E9E9EA",
      },
    }),
    ixColorGrey10: palette.augmentColor({
      color: {
        main: "#F0F1F1",
      },
    }),
    ixColorGrey5: palette.augmentColor({
      color: {
        main: "#F8F8F8",
      },
    }),
    ixColorSuccess: palette.augmentColor({
      color: {
        main: "#517B5C",
      },
    }),
    ixColorError: palette.augmentColor({
      color: {
        main: "#C00015",
      },
    }),
    ixTextColorWhite: palette.augmentColor({
      color: {
        main: "#FFFFFF",
      },
    }),
  },
});

export default theme;

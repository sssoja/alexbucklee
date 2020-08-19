import { Theme } from "styled-system";

const colorCodes = {
  // Core colors
  azure: "#306fb6",
  danube: "#739CD6",
  flamenco: "#FF7E07",
  mirage: "#181c34",
  shark: "#222224",
  rhino: "#293653",
  thunderbird: "#C51111",
  deco: "#cae09c",
  springSun: "#F5FFE1",
  blackSqueeze: "#f2f7fa",
  silver: "#cccccc",
  parisDaisy: "#FDF674",
  atlantis: "#67D543",

  // Greyscale
  black: "#000000",
  waterloo: "#858597",
  santasGray: "#969baa",
  suitGray: "#b9b9ca",
  botticelli: "#d0dee7",
  mercury: "#e8e8ef",
  athensGray: "#f4f4f6",
  titanWhite: "#FCFCFF",
  white: "#FFFFFF"
};

const colors = {
  ...colorCodes,
  copyOne: colorCodes["mirage"],
  copyTwo: colorCodes["shark"],
  error: colorCodes["thunderbird"],
  primary: colorCodes["azure"],
  secondary: colorCodes["flamenco"],
  accentPrimary: colorCodes["danube"],

  // Colors which include opacity
  activeShading: "rgba(27, 26, 33, 0.16)"
};

const breakpoints = ["319px", "424px", "767px", "1023px"];

const fontSizes = {
  0: 10,
  1: 12,
  2: 14,
  3: 16,
  4: 20,
  5: 30,
  6: 40,
  7: 50,
  8: 60,
  9: 70,
  10: 80
};

const space = {
  1: 4,
  2: 8,
  3: 12,
  4: 16,
  5: 20,
  6: 24,
  7: 28,
  8: 32,
  9: 36,
  10: 40
};

const fonts = {
  regular: "MetropolisRegular, sans-serif",
  medium: "MetropolisMedium, sans-serif",
  bold: "MetropolisBold, sans-serif"
};

const borders = {
  primaryThin: `1px solid ${colors.azure}`
};

const theme = {
  space: {
    ...space
  },
  fonts: {
    ...fonts
  },
  fontSizes: {
    ...fontSizes
  },
  borders,
  breakpoints,
  colors: {
    ...colors
  }
};

export default theme;

import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "linear-gradient(90deg, #F68C12 0%, #F68C12 33.33%, #EBC455 100%)",
  primaryBright: "gold",
  primaryDark: "#aa8929",
  secondary: "#FFF",
  success: "#31D0AA",
  warning: "#FFB237",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  title: "#000000",
  navBar: "rgba(2, 1, 39, 1)",
  sideBar: "rgba(0, 0, 10, 1)",
  background: "rgba(2, 1, 39, 1)",
  backgroundDisabled: "#E9EAEB",
  contrast: "#191326",
  invertedContrast: "#FFFFFF",
  input: "rgba(255, 217, 142, 0.3);",
  tertiary: "linear-gradient(to right, #ff4e50, #f9d423)",
  text: "#FFF",
  textDisabled: "#BDC2C4",
  textSubtle: "#FFF",
  borderColor: "#E9EAEB",
  card: "rgba(2, 1, 39, 1)",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  title: "#FFFFFF",
  navBar: "#27262c",
  sideBar: "#27262c",
  secondary: "#9A6AFF",
  background: "#343135",
  backgroundDisabled: "#3c3742",
  contrast: "#FFFFFF",
  invertedContrast: "#191326",
  input: "#483f5a",
  primaryDark: "#0098A1",
  tertiary: "#353547",
  text: "#EAE2FC",
  textDisabled: "#666171",
  textSubtle: "#c9c4d4",
  borderColor: "#524B63",
  card: "#27262c",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
};

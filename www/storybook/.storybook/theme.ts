import { create } from "@storybook/theming/create";

export const theme = create({
  base: "dark",

  // Typography
  fontBase: '"Inter", sans-serif',
  fontCode: '"Source Code Pro",monospace',
  textColor: "#fafafa",
  textInverseColor: "#09090b",

  // Brand
  brandTitle: "Cloudmix",
  brandUrl: "https://cloudmix.dev",
  brandImage: "/logo.png",
  brandTarget: "_blank",
  colorPrimary: "#6366f1",
  colorSecondary: "#6366f1",

  // UI
  appBg: "#09090b",
  appContentBg: "#09090b",
  appPreviewBg: "#fafafa",
  appBorderColor: "#27272a",
  appBorderRadius: 4,

  // Toolbars
  barTextColor: "#fafafa",
  barSelectedColor: "#6366f1",
  barBg: "#030712",

  // Forms
  inputBg: "#18181b",
  inputBorder: "#27272a",
  inputTextColor: "#fafafa",
  inputBorderRadius: 6,
});

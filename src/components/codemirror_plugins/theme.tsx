import { EditorView } from "codemirror";

const baseColor = "#191724";//primary background (main/accessory panels)
const surfaceColor = "#1f1d2e";//secondary background atop base (Pansel that are not directly related to the focul context)
const overlayColor = "#1f1d2e";//tertiary background atop surface (panels that are more temporary in nature)
const mutedColor = "#6e6a86";//low contrast foreground
const subtleColor = "#908caa";//medium contrast foreground
const textColor = "#e0def4";//high contrast foreground
const loveColor = "#eb6f92";//diagnostic errors/red
const goldColor = "#f6c177";//warnings
const roseColor = "#ebbcba";//matching search background paired with base forground/modified git fil
const pineColor = "#31748f";//conditionals/keywords
const foamColor = "#9ccfd8";//keys/tags/types
const irisColor = "#c4a7e7";//methods/parameters
const highlightLowColor = "#21202e";//cursorline background
const highlightMedColor = "#403d52";//selection background paired with text foreground
const highlightHighColor = "#524f67";//borders/visual dividers/ cursor background paired with text foreground

const theme = EditorView.theme({
  "&": {
    color: textColor,
    background: baseColor,
    height: "100%",
    fontSize: "14px"
  },
  ".cm-content": {
    fontFamily: "'Fira Code', monospace",
    fontSize: "1rem",
    background: "transparent"
  },
  ".cm-scroller": {
    overflowY: "auto",
  },
  ".cm-cursor": {
    borderLeft: `0.125rem solid ${textColor}`,
  },
  ".cm-gutters": {
    backgroundColor: baseColor,
    color: highlightMedColor,
    borderRight: "none",
    fontSize: "1rem",
  },
  ".cm-activeLine": {
    backgroundColor: baseColor,
  },
  ".cm-activeLineGutter": {
    backgroundColor: baseColor,
    color: textColor
  },
  ".cm-line": {
    padding: "0 0.125rem",
  },
  ".cm-atxheading1": {
    fontSize: "1.8rem",
    fontWeight: "bold",
    textDecorations: "none !important",
    color: irisColor

  },
  ".cm-atxheading2": {
    fontSize: "1.6rem",
    fontWeight: "bold",
    textDecorations: "none !important",
    color: irisColor
  },
  ".cm-atxheading3": {
    fontSize: "1.4rem",
    fontWeight: "bold",
    textDecorations: "none !important",
    color: irisColor
  },
  ".cm-atxheading4": {
    fontSize: "1.3rem",
    fontWeight: "bold",
    textDecorations: "none !important",
    color: irisColor
  },
    ".cm-atxheading5": {
    fontSize: "1.2rem",
    fontWeight: "bold",
    textDecorations: "none !important",
    color: irisColor
  },
    ".cm-atxheading6": {
    fontSize: "1rem",
    fontWeight: "bold",
    textDecorations: "none !important",
    color: irisColor
  }
});

export default theme;

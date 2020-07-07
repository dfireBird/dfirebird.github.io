import Typography from "typography"
import theme from "typography-theme-st-annes"

theme.baseFontSize = "18px"

theme.overrideThemeStyles = () => ({
  a: {
    color: "var(--a)",
  },
  "a:hover": {
    color: "var(--text)",
  },
  hr: {
    height: "2px",
    background: "var(--hrcolor)",
  },
  "h1, h2, h3, h4, h5, h6, svg": {
    color: "var(--text)",
  },
  "p, label, strong, em, ul, li, span, footer": {
    color: "var(--text)",
  },
})

const typography = new Typography(theme)

export default typography

import Typography from "typography"
import theme from "typography-theme-st-annes"

theme.baseFontSize = "18px"
theme.headerColor = "hsl(0, 0%, 0%, 0.8)"

theme.overrideThemeStyles = () => ({
  a: {
    color: "#8E3B3C",
  },
  hr: {
    height: "2px",
    background: "hsla(0, 0%, 0%, 0.5)",
  },
})

const typography = new Typography(theme)

export default typography

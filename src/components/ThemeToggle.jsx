import React, { useState } from "react"
import { ThemeToggler } from "gatsby-plugin-dark-mode"
import { BsSun, BsMoon } from "react-icons/bs"
import * as Styles from "./ThemeToggle.module.css"

function ThemeToggle({ styles }) {
  const [darkMode, toggleDarkMode] = useState(true)
  return (
    <ThemeToggler>
      {({ theme, toggleTheme }) => {
        toggleDarkMode(theme === "light")
        return (
          <label style={styles}>
            <input
              type="checkbox"
              onChange={e => {
                toggleTheme(e.target.checked ? "dark" : "light")
                toggleDarkMode(e.target.checked)
              }}
              checked={theme === "dark"}
              hidden
            />{" "}
            {darkMode ? (
              <BsMoon size="1em" className={Styles.themeToggle} />
            ) : (
              <BsSun size="1em" className={Styles.themeToggle} />
            )}
          </label>
        )
      }}
    </ThemeToggler>
  )
}

export default ThemeToggle

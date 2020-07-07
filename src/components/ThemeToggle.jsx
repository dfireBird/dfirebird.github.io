import React, { useState } from "react"
import { ThemeToggler } from "gatsby-plugin-dark-mode"
import { BsSun, BsMoon } from "react-icons/bs"
import Styles from "./ThemeToggle.module.css"

function ThemeToggle() {
  const [darkMode, toggleDarkMode] = useState(true)
  return (
    <ThemeToggler>
      {({ theme, toggleTheme }) => {
        toggleDarkMode(theme === "light")
        return (
          <label>
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
              <BsMoon size="1.25em" className={Styles.themeToggle} />
            ) : (
              <BsSun size="1.25em" className={Styles.themeToggle} />
            )}
          </label>
        )
      }}
    </ThemeToggler>
  )
}

export default ThemeToggle

import { useState, useEffect } from 'react'

import SwitchTheme from './components/SwitchTheme'
import Todo from './components/Todo'

import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './style/Global'

import { Dark, Light } from './style/Theme'

function App() {
  const [theme, setTheme] = useState(Light)

  useEffect(() => {
    const localTheme = JSON.parse(localStorage.getItem('theme'))
    if (localTheme) setTheme(theme => localTheme)
  }, [])

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(theme))
  }, [theme])

  const changeTheme = () => {
    setTheme(theme => theme.active === 'light' ? Dark : Light)
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <SwitchTheme changeTheme={changeTheme} checked={theme.active === 'light' ? false : true} />
      <Todo />
    </ThemeProvider>
  );
}

export default App;

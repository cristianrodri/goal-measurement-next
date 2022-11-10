import React, { ReactNode } from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { CssBaseline, useMediaQuery } from '@mui/material'

type Props = {
  children?: ReactNode
}

export const ThemeMuiProvider = ({ children }: Props) => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? 'dark' : 'light'
        },
        typography: {
          fontFamily: '"Nunito", Helvetica Neue, sans-serif'
        }
      }),
    [prefersDarkMode]
  )

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}

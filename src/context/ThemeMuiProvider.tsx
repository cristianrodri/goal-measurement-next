import React, { ReactNode } from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { CssBaseline, useMediaQuery } from '@mui/material'
import { green, purple } from '@mui/material/colors'

type Props = {
  children?: ReactNode
}

export const ThemeMuiProvider = ({ children }: Props) => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? 'dark' : 'light',
          primary: {
            main: purple[500]
          },
          secondary: {
            main: green[500]
          }
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

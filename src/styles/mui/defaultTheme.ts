import { createTheme, responsiveFontSizes } from '@mui/material'
import { ThemeOptions } from '@mui/material/styles'

declare module '@mui/material/styles' {
  interface Palette {
    customWhite: Record<'main' | 'dark' | 'contrastText', string>
  }

  interface PaletteOptions {
    customWhite?: Record<'main' | 'dark' | 'contrastText', string>
  }
}

export const defaultSkieThemeOptions: ThemeOptions = {
  components: {
    MuiButton: {
      defaultProps: {
        sx: {
          borderRadius: '20px',
        },
      },
    },
  },
  typography: {
    // allVariants: {
    //   wordWrap: 'break-word',
    //   whiteSpace: 'pre-line',
    // },
    fontFamily: ['Lexend', 'sans-serif'].join(','),
  },
  palette: {
    mode: 'light',
    primary: {
      main: '#2297C9',
      contrastText: '#fff',
    },
    secondary: {
      main: '#e4de66',
    },
    info: {
      main: '#1e4ec3',
    },
  },
}

export const defaultSkieTheme = responsiveFontSizes(
  createTheme(defaultSkieThemeOptions),
)

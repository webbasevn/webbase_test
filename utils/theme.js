import { createTheme } from '@mui/material/styles'
import { red } from '@mui/material/colors'

// Create a theme instance.
export const theme = createTheme({
  typography: {
    fontFamily: 'Be Vietnam Pro, sans-serif',
    fontSize: 12
  },
  palette: {
    primary: {
      main: '#378dcc',
    },
    secondary: {
      main: '#888888',
    },
    error: {
      main: red.A400,
    },
    white: {
      main: '#ffffff'
    }
  },
  components: {
    MuiLink: {
      defaultProps: {
        underline: 'none'
      },
      styleOverrides: {
        root: {
          color: '#333333',
          transition: '0.3s all',
          '&:hover, &.active': {
            color: '#1d72b1'
          }
        }
      }
    }
  }
})
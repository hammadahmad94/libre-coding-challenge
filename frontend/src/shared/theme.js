import { createTheme } from '@mui/material';

export const theme = createTheme({
  palette: {
    mode: 'light',

    primary: {
      main: '#334155',         
      light: '#F1F5F9',       
      dark: '#1E293B',
      contrastText: '#FFFFFF',
    },

    background: {
      default: '#F6F8FC',      
      paper: '#FFFFFF',     
    },

    text: {
      primary: '#0F172A',
      secondary: '#475569',
    },

    divider: '#E6EAF2',
  },

  shape: { borderRadius: 12 },

  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: { fontWeight: 700 },
    h2: { fontWeight: 700 },
    h3: { fontWeight: 600 },
    button: { textTransform: 'none', fontWeight: 600 },
  },

  shadows: [
    'none',
    '0 1px 2px rgba(15, 23, 42, 0.06)',   
    '0 2px 8px rgba(15, 23, 42, 0.08)',   
    '0 6px 18px rgba(15, 23, 42, 0.10)', 
    ...Array(21).fill('0 6px 18px rgba(15, 23, 42, 0.10)'),
  ],

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#F6F8FC',
        },
      },
    },

    MuiPaper: {
      styleOverrides: {
        root: {
          border: '1px solid rgba(15, 23, 42, 0.06)',
          backgroundImage: 'none',
        },
      },
      defaultProps: { elevation: 1 },
    },

    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          backgroundColor: '#FFFFFF',
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: 'rgba(15, 23, 42, 0.10)',
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: 'rgba(44, 62, 133, 0.35)',
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#2C3E85',
            borderWidth: 1,
          },
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: { borderRadius: 10 },
        contained: {
          boxShadow: '0 1px 2px rgba(15, 23, 42, 0.10)',
        },
      },
    },

    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 999,
          backgroundColor: '#FFFFFF',
          border: '1px solid rgba(15, 23, 42, 0.10)',
        },
      },
    },
  },
});

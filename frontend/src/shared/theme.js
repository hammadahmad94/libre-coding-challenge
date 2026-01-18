import { createTheme } from '@mui/material';


export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#3b82f6', 
    },
    background: {
      default: '#0f172a',
      paper: '#1e293b',  
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
  },
  shape: {
    borderRadius: 12,
  }
});

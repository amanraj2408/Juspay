import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: { main: '#A287F4' },
    secondary: { main: '#12E6C8' },
    background: { default: '#171717' },
  },
  typography: {
    fontFamily: 'Inter, sans-serif',
    h1: { fontSize: '2rem', fontWeight: 700 },
  },
});

export default theme;

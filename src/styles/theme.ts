//theme.ts
'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'var( --primary-font)', // Define a fonte personalizada
  },
  palette: {
    text: {
      primary: '#282828', // Cor padrão do texto
      secondary: '#bdbdbd',
      
      // Cor para textos secundários, se necessário
    },
    background: {
      default: '#fefefe', // Cor do fundo, caso precise personalizar
    },
  },
});

export default theme;

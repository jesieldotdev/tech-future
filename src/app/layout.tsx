"use client"

//layout.ts
import { Noto_Sans } from 'next/font/google'; // Corrigir para 'next/font'
import { ThemeProvider } from '@mui/material/styles';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import './globals.css';
import { CssBaseline } from '@mui/material';
import theme from '@/styles/theme';
import Navbar from '@/components/Navbar';
import { Provider } from 'react-redux';
import store from '@/store';


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body >
        <Provider store={store}>
          <AppRouterCacheProvider>

            <ThemeProvider theme={theme}>
              <CssBaseline />
              <Navbar />
              {children}
            </ThemeProvider>

          </AppRouterCacheProvider>
        </Provider>
        </body>
    </html>
  );
}

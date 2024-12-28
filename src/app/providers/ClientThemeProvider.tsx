'use client';

import { useEffect } from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { useThemeStore } from '@/shared/stores/useThemeStore';

export function ClientThemeProvider({ children }: { children: React.ReactNode }) {
  const { theme, toggleTheme } = useThemeStore();

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      toggleTheme();
    }
  }, [toggleTheme]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}

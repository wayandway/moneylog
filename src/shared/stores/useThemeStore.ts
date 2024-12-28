import { create } from 'zustand';
import { lightTheme, darkTheme } from '@/shared/styles/theme';

interface ThemeState {
  theme: typeof lightTheme;
  toggleTheme: () => void;
}

export const useThemeStore = create<ThemeState>(set => ({
  theme: lightTheme,
  toggleTheme: () =>
    set(state => ({
      theme: state.theme === lightTheme ? darkTheme : lightTheme,
    })),
}));

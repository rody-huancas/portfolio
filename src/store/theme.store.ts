import { devtools, persist } from "zustand/middleware";
import { StateCreator, create } from "zustand";

type Theme = 'light' | 'dark' | 'system';

interface ThemeState {
  theme: Theme;
  menuIsOpen: boolean;
  setTheme: (theme: Theme) => void;
  setMenuIsOpen: (value: boolean) => void;
}

const storeApi: StateCreator<ThemeState> = (set) => ({
  theme: 'system',
  menuIsOpen: false,

  setTheme: (theme: Theme) => set({ theme }),
  setMenuIsOpen: (value: boolean) => set({ menuIsOpen: value }),
});

export const useThemeStore = create<ThemeState>()(
  devtools(
    persist(storeApi, {
      name: "theme-ui",
      partialize: (state) => ({ theme: state.theme }),
    })
  )
);
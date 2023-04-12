import { create } from 'zustand'

type LanguageType = "sp" | "en"
type ThemeType = "light" | "dark"
  

interface Store{
  language: LanguageType;
  theme: ThemeType,
  toggleLanguage: ()=>void,
  toggleTheme: ()=>void
}

export const useLanguage = create<Store>((set) => ({
  language: 'sp',
  theme: 'dark',
  toggleLanguage: () =>
    set((state: Store) => ({ ...state, language: (state.language==="sp" ? "en" : "sp") })),
  toggleTheme:()=>
    set((state: Store) => ({ ...state, theme: (state.theme==="light" ? "dark" : "light") })),

}));
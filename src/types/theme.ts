export type Theme = 'dark' | 'light'

export interface ThemeColors {
  background: {
    primary: string
    secondary: string
    card: string
  }
  text: {
    primary: string
    secondary: string
  }
  accent: {
    primary: string
    secondary: string
  }
} 
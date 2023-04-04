import { useState } from 'react';
import { THEME_MODE } from 'src/interfaces/theme';

export const useTheme = () => {
  const currentTheme: string = localStorage.getItem('theme') || THEME_MODE.LIGHT;
  const [isTheme, setIsTheme] = useState<string>(currentTheme);

  const onChangeTheme = (theme: THEME_MODE.DARK | THEME_MODE.LIGHT) => {
    setIsTheme(theme);
    localStorage.setItem('theme', theme);
  };

  return { isTheme, onChangeTheme };
};

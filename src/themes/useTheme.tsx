import {useContext} from 'react';
import {TypeOfColors} from './themeMode';
import {ThemeAppContext, useThemeApp} from './themeSetting';

export const useTheme = () => {
  const theme: {dark: boolean; colors: TypeOfColors} = useThemeApp();
  const {updateTheme} = useContext(ThemeAppContext);
  return {
    theme,
    themeColor: theme.colors,
    updateTheme,
  };
};

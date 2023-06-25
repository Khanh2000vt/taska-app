import {StorageConstant} from '@constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  ThemeProvider as ReStyleThemeProvider,
  useTheme as useReTheme,
} from '@shopify/restyle';
import React, {useCallback, useMemo} from 'react';
import {darkTheme, lightTheme} from './themeMode';

export const ThemeAppContext = React.createContext({
  updateTheme: (isLight: boolean) => {},
});

export const ThemeProvider = ({children}: any) => {
  const Dark = useMemo(() => {
    return {
      colors: darkTheme.colors,
    };
  }, []);
  const Light = useMemo(() => {
    return {
      colors: lightTheme.colors,
    };
  }, []);
  const [themeApp, setTheme] = React.useState(Dark);

  const onUpDateTheme = useCallback(
    (isLightTheme?: boolean) => {
      setTheme(isLightTheme ? Light : Dark);
      if (isLightTheme) {
        AsyncStorage.setItem(StorageConstant.THEME, 'THEME_SET_SUCCESS');
        // StatusBar.setBarStyle('dark-content');
      } else {
        // StatusBar.setBarStyle('light-content');
        AsyncStorage.removeItem(StorageConstant.THEME);
      }
    },
    [Dark, Light],
  );

  const onChangeTheme = React.useCallback(async () => {
    let oldSaveValue =
      (await AsyncStorage.getItem(StorageConstant.THEME)) || '';
    onUpDateTheme(oldSaveValue !== '');
  }, [onUpDateTheme]);

  React.useEffect(() => {
    onChangeTheme();
  }, [onChangeTheme]);

  return (
    <ThemeAppContext.Provider
      value={{
        updateTheme: (isLight: boolean) => {
          onUpDateTheme(isLight);
        },
      }}>
      <ReStyleThemeProvider theme={themeApp}>{children}</ReStyleThemeProvider>
    </ThemeAppContext.Provider>
  );
};

export const useThemeApp = () => useReTheme();

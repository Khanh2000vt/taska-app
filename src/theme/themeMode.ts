/*
  - Màu ở đây được dùng để sự thay đổi light và dark mode
 */

export interface TypeOfColors {
  background: string;
  color_Tab_Unselected: string;
  color_Tab_Selected: string;
  icon: string;
  backgroundColorTab: string;
  color_Icon_Selected: string;
  textColor: string;
  whiteColor: string;
  colorDisable: string;
  primary: string;
}

export const darkTheme: any = {
  dark: true,
  colors: {
    background: '#181A1F',
    color_Tab_Unselected: '#838383',
    color_Tab_Selected: '#DCE0E5',
    icon: '#FFF',
    backgroundColorTab: 'rgba(255, 255, 255, 1)',
    color_Icon_Selected: 'rgba(132, 90, 244, 1)',
    textColor: '#fff',
    whiteColor: '#fff',
    colorDisable: '#c0c0c0',
    primary: '#4d4fdb',
  },
};

export const lightTheme: any = {
  dark: false,
  colors: {
    background: '#FFFFFF',
    color_Tab_Unselected: '#838383',
    color_Tab_Selected: '#ffffff',
    icon: '#FFF',
    backgroundColorTab: 'rgba(255, 255, 255, 1)',
    color_Icon_Selected: 'rgba(132, 90, 244, 1)',
    textColor: '#000',
    whiteColor: '#fff',
    colorDisable: '#c0c0c0',
    primary: '#4d4fdb',
  },
};

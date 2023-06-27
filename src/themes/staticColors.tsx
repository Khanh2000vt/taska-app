export const Colors = {
  backgroundColor: '#F9F9F9',
  white: '#FFFFFF',
  dark: '#000000',
  primary: '#246BFD',
  disableButton: '#476EBE',
  error: '#FA6A50',
  errorLight: '#f6c67d',
  transparent: '#00000000',
  textColor: '#212121',
  secondary: '#E9F0FF',
  gray: {
    gray10: '#BDBDBD',
    gray20: '#FAFAFA',
    gray30: '#EEEEEE',
    gray40: '#616161',
    gray50: '#424242',
    gray60: '#E0E0E0',
  },
};

export const Shadow = {
  normal: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  bold: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.51,
    shadowRadius: 13.16,
    elevation: 20,
  },
  button: {
    shadowColor: Colors.disableButton,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
};

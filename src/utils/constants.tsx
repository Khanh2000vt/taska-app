import {Dimensions, NativeModules, Platform} from 'react-native';

const {width, height} = Dimensions.get('screen');
const {PlatformConstants} = NativeModules;

export const DEVICE = {
  isIos: Platform.OS === 'ios',
  isAndroid: Platform.OS === 'android',
  width,
  height,
  deviceType: PlatformConstants.interfaceIdiom,
  isSmallDevice: width < 375,
};

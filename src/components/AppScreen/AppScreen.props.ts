import {StyleProp, ViewStyle} from 'react-native';

export type IButtonHeader = {
  id: number;
  label?: string;
  onPress: () => void;
  Icon?: Element;
};

type IHeader = {
  title: string;
  arrayIconRight?: IButtonHeader[];
};

type IAppScreen = {
  type?: 'view' | 'scroll-view' | 'flat-list';
  style?: StyleProp<ViewStyle>;
  header?: IHeader;
};

export type AppScreenProps = IAppScreen;

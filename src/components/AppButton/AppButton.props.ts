import {
  StyleProp,
  TextStyle,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native';

export interface ButtonProps extends TouchableOpacityProps {
  label: string;
  secureTextEntry?: boolean;
  disabled?: boolean;
  Icon?: any;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
  numberOfLines?: number;
  isWrap?: boolean;
  backgroundColor?: string;
  marginTop?: number;
  outline?: boolean;
}

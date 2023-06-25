import {DefaultTFuncReturn} from 'i18next';
import {StyleProp, TextInputProps, TextStyle, ViewStyle} from 'react-native';
import {SvgProps} from 'react-native-svg';

export interface PropsAppInputFormik extends TextInputProps {
  label?: string | DefaultTFuncReturn;
  labelFormik: string;
  styleContainer?: StyleProp<ViewStyle>;
  styleLabel?: StyleProp<TextStyle>;
  require?: boolean;
  password?: boolean;
  email?: boolean;
  IconLeft?: React.FC<SvgProps>;
  isShowError?: boolean;
}

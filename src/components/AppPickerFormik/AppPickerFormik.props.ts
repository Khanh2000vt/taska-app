import {SvgProps} from 'react-native-svg';

export type AppPickerFormikProps = {
  label: string;
  value: string | null | undefined;
  onPress?: () => void;
  Icon?: React.FC<SvgProps>;
};

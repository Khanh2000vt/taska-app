import {
  ImageSourcePropType,
  ImageStyle as ImageStyleRN,
  StyleProp,
  ViewStyle,
} from 'react-native';
import {ImageStyle, ResizeMode} from 'react-native-fast-image';

export type PropsAppImage = {
  uri: string | null;
  style?: StyleProp<ImageStyle> | StyleProp<ImageStyleRN>;
  styleDefault?: StyleProp<ImageStyleRN>;
  resizeMode?: ResizeMode | undefined;
  source?: ImageSourcePropType;
  stylesPlaceholder?: StyleProp<ViewStyle>;
  showImageDefault?: boolean;
};

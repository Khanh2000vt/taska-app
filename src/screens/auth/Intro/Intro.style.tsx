import {scaler, Spacing} from '@themes';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  image: {
    width: scaler(300),
    height: scaler(300),
  },
  body: {
    alignItems: 'center',
    paddingHorizontal: Spacing.width24,
  },
  viewButton: {
    rowGap: Spacing.height12,
    paddingHorizontal: Spacing.width24,
  },
});

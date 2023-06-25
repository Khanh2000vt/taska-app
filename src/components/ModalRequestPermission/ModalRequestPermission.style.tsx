import {scaler} from '@themes';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: scaler(16),
    paddingVertical: scaler(32),
    justifyContent: 'space-between',
  },
  viewText: {
    rowGap: scaler(32),
  },
  viewButton: {
    flexDirection: 'row',
    columnGap: scaler(16),
  },
});

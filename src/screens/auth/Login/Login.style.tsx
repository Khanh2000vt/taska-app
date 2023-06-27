import {Colors, scaler, Spacing} from '@themes';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
  },
  button: {
    borderRadius: scaler(16),
    borderColor: Colors.gray.gray30,
  },
  textButton: {
    color: Colors.textColor,
  },
  viewButton: {
    rowGap: scaler(16),
    marginTop: Spacing.height100,
  },
});

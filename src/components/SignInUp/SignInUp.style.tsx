import {Colors, scaler, Spacing} from '@themes';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
  },
  buttonSocial: {
    backgroundColor: Colors.white,
    borderWidth: scaler(1),
    width: scaler(88),
    height: scaler(60),
    borderRadius: scaler(16),
    borderColor: Colors.gray.gray30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  body: {
    justifyContent: 'center',
    flex: 1,
  },
  checkbox: {
    justifyContent: 'center',
  },
});

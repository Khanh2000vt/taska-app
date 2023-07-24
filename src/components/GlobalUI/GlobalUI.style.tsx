import {Colors, scaler} from '@themes';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#33333340',
    zIndex: 99,
  },
  background: {
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 99,
    padding: 10,
    paddingVertical: 20,
  },
});

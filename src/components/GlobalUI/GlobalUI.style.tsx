import {Colors} from '@theme';
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
    backgroundColor: 'rgba(51,51,51,0.5)',
    zIndex: 99,
  },
  background: {
    borderRadius: 8,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 99,
    padding: 10,
    paddingVertical: 20,
  },
});

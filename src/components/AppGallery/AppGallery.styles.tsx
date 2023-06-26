import {StyleSheet} from 'react-native';
import {dimensions, Spacing} from '@themes';

export const styles = StyleSheet.create({
  scroll: {
    flexGrow: 1,
    width: dimensions.width,
  },
  button: {
    width: dimensions.width,
    alignItems: 'center',
    justifyContent: 'center',
  },
  indexImageContainer: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: 'rgba(0,0,0,0.2)',
    paddingHorizontal: Spacing.width15,
    paddingVertical: Spacing.height4,
    borderRadius: 20,
  },
});

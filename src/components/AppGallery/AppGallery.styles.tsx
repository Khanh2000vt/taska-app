import {StyleSheet} from 'react-native';
import {dimensions, Spacing} from '@theme';

export const styles = StyleSheet.create({
  scroll: {
    flexGrow: 1,
    width: dimensions.width - Spacing.width32,
  },
  button: {
    width: dimensions.width - Spacing.width32,
    // flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: Spacing.width10,
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

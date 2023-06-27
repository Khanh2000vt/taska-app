import {Colors, Fonts, FontSize, scaler, Spacing} from '@themes';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  label: {
    color: Colors.textColor,
    ...Fonts.fontWeight500,
    fontSize: FontSize.Font14,
    marginBottom: Spacing.height8,
  },
  input: {
    fontSize: FontSize.Font14,
    color: Colors.textColor,
    ...Fonts.fontWeight600,
    flex: 1,
    height: '100%',
    paddingRight: scaler(20),
  },
  viewInput: {
    height: scaler(60),
    borderRadius: scaler(12),
    borderWidth: scaler(1),
    borderColor: Colors.gray.gray20,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.gray.gray20,
    paddingLeft: scaler(20),
  },
  viewError: {
    position: 'absolute',
    bottom: scaler(4),
    left: scaler(20),
  },
  viewIconDelete: {
    height: scaler(16),
    width: scaler(16),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: scaler(8),
    backgroundColor: Colors.primary,
  },
  btnDelete: {
    height: '100%',
    justifyContent: 'center',
    paddingHorizontal: scaler(8),
  },
  btnEye: {
    height: '100%',
    paddingHorizontal: scaler(8),
    justifyContent: 'center',
    alignItems: 'center',
  },
});

import {Colors, Fonts, FontSize, scaler, Spacing} from '@theme';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  wrapContent: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  icon: {
    marginRight: Spacing.width12,
  },
  btn: {
    // alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.primary,
    height: scaler(55),
    borderRadius: scaler(100),
  },
  text: {
    color: Colors.white,
    ...Fonts.fontWeight700,
    fontSize: FontSize.Font16,
  },
  btnOutline: {
    backgroundColor: Colors.white,
    borderWidth: scaler(1),
    borderColor: Colors.primary,
  },
  textOutline: {
    color: Colors.primary,
  },
});

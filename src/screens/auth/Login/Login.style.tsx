import {Colors, scaler, Spacing} from '@theme';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  scroll: {
    paddingHorizontal: Spacing.width24,
    paddingTop: Spacing.height12,
    paddingBottom: Spacing.height20,
  },
  viewLogin: {
    rowGap: Spacing.height24,
    marginTop: Spacing.height54,
    marginBottom: Spacing.height76,
  },
  viewLine: {
    rowGap: Spacing.height30,
  },
  line: {
    flex: 1,
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
  btnLNG: {
    alignSelf: 'flex-end',
    paddingLeft: scaler(10),
  },
});

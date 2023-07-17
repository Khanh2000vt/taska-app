import {Svgs} from '@assets';
import {AppText} from '@components/AppText';
import {AppTouchable} from '@components/AppTouchable';
import {Colors, Fonts, scaler} from '@themes';
import React from 'react';
import {StyleSheet} from 'react-native';
import {AppPickerFormikProps} from './AppPickerFormik.props';

export const AppPickerFormik = ({
  label,
  value,
  onPress,
  Icon,
}: AppPickerFormikProps) => {
  return (
    <AppTouchable style={styles.button} onPress={onPress}>
      <>
        {!!value ? (
          <AppText font={Fonts.fontWeight600}>{value}</AppText>
        ) : (
          <AppText color={Colors.gray.gray70} font={Fonts.fontWeight400}>
            {label}
          </AppText>
        )}
        {!!Icon && (
          <Icon color={!!value ? Colors.textColor : Colors.gray.gray70} />
        )}
      </>
    </AppTouchable>
  );
};

const styles = StyleSheet.create({
  button: {
    height: scaler(56),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.gray.gray20,
    paddingHorizontal: scaler(20),
    borderRadius: scaler(12),
  },
});

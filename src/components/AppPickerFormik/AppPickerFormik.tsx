import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {AppTouchable} from '@components/AppTouchable';
import {AppText} from '@components/AppText';
import {Svgs} from '@assets';
import {Colors, Fonts, scaler} from '@themes';

export const AppPickerFormik = () => {
  return (
    <View>
      <AppTouchable style={styles.button}>
        <AppText color={Colors.gray.gray70} font={Fonts.fontWeight400}>
          Email
        </AppText>
        <Svgs.EmailInput />
      </AppTouchable>
    </View>
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

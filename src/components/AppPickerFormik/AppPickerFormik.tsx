import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {AppTouchable} from '@components/AppTouchable';
import {AppText} from '@components/AppText';
import {Svgs} from '@assets';
import {Colors, Fonts, scaler} from '@themes';
import {AppBottomSheet} from '@components/AppBottomSheet';

export const AppPickerFormik = () => {
  const [visible, setVisible] = useState<boolean>(false);
  return (
    <>
      <View>
        <AppTouchable
          style={styles.button}
          onPress={() => setVisible(!visible)}>
          <AppText color={Colors.gray.gray70} font={Fonts.fontWeight400}>
            Email
          </AppText>
          <Svgs.EmailInput />
        </AppTouchable>
      </View>
      {/* <AppBottomSheet
        onBackdropPress={() => setVisible(!visible)}
        visible={visible}>
        <View />
      </AppBottomSheet> */}
    </>
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

import {Svgs} from '@assets';
import {AppModal} from '@components/AppModal';
import {AppText} from '@components/AppText';
import {AppTouchable} from '@components/AppTouchable';
import {useFieldFormik} from '@hooks';
import {Colors, dimensions, Fonts, scaler} from '@themes';
import React, {useRef} from 'react';
import {StyleSheet, View} from 'react-native';
import {AppPickerFormikProps} from './AppPickerFormik.props';

export const AppPickerFormik = ({label, labelFormik}: AppPickerFormikProps) => {
  const {value, setValue, error, touched} = useFieldFormik(labelFormik);
  const refModal = useRef<any>(null);
  return (
    <View>
      <View>
        <AppTouchable
          style={styles.button}
          onPress={() => refModal.current?.open()}>
          <AppText color={Colors.gray.gray70} font={Fonts.fontWeight400}>
            {!!value ? value : label}
          </AppText>
          <Svgs.EmailInput />
        </AppTouchable>
      </View>
      <AppModal
        ref={refModal}
        position="bottom"
        modalSize={{height: scaler(200), width: dimensions.width}}>
        <View />
      </AppModal>
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

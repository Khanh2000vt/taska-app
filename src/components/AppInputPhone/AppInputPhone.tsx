import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useRef, useState} from 'react';
import {AppTouchable} from '@components/AppTouchable';
import {Svgs} from '@assets';
import {Colors, Fonts, FontSize, scaler} from '@themes';
import {
  AppBottomSheetModal,
  AppBottomSheetModalRef,
} from '@components/AppBottomSheetModal';
import {ImagePickerComponent} from '@components/common';

export const AppInputPhone = () => {
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const [value, setValue] = useState<string>('');
  const refSheetModal = useRef<AppBottomSheetModalRef>(null);

  const showBtnDelete = isFocus && !!value?.length;
  return (
    <>
      <View
        style={[
          styles.container,
          isFocus && {
            backgroundColor: `${Colors.primary}08`,
            borderColor: Colors.primary,
          },
        ]}>
        <AppTouchable onPress={() => refSheetModal.current?.snapToIndex(0)}>
          <Svgs.ArrowDown />
        </AppTouchable>

        <TextInput
          keyboardType="phone-pad"
          placeholderTextColor={Colors.gray.gray10}
          placeholder={isFocus ? '' : 'Phone number'}
          style={styles.input}
          onFocus={e => {
            setIsFocus(true);
          }}
          onBlur={e => {
            setIsFocus(false);
          }}
          onChangeText={(text: string) => setValue(text)}
          value={value}
        />
        {showBtnDelete && (
          <AppTouchable style={styles.btnDelete} onPress={() => setValue('')}>
            <View style={styles.viewIconDelete}>
              <Svgs.Close size={scaler(12)} color={Colors.white} />
            </View>
          </AppTouchable>
        )}
      </View>
      <AppBottomSheetModal ref={refSheetModal} snapPoints={[500]}>
        <ImagePickerComponent />
      </AppBottomSheetModal>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    height: scaler(60),
    backgroundColor: Colors.gray.gray20,
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: scaler(12),
    borderRadius: scaler(12),
    borderWidth: scaler(1),
    borderColor: Colors.gray.gray20,
  },
  input: {
    height: '100%',
    flex: 1,
    fontSize: FontSize.Font14,
    color: Colors.textColor,
    ...Fonts.fontWeight600,
    paddingLeft: scaler(12),
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
});

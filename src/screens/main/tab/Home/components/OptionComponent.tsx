import {AppSwitch, AppText, AppTouchable} from '@components';
import {Colors, FontSize, scaler} from '@themes';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {OptionHook} from '../controller';

export const OptionComponent = () => {
  const {data, dark, handleChangeTheme, themeColor} = OptionHook();
  return (
    <View
      style={{
        rowGap: scaler(8),
        marginTop: scaler(16),
        backgroundColor: themeColor.background,
      }}>
      {data.map(item => {
        return (
          <AppTouchable key={item.id} style={{paddingVertical: scaler(10)}}>
            <AppText size={FontSize.Font18} color={Colors.gray.gray50}>
              {item.label}
            </AppText>
          </AppTouchable>
        );
      })}
      <AppSwitch
        onChange={handleChangeTheme}
        title="Dark Theme"
        value={dark}
        noneChangeColorTitle
      />
      <AppTouchable style={{paddingVertical: scaler(10)}}>
        <AppText size={FontSize.Font18} color={Colors.gray.gray50}>
          Logout
        </AppText>
      </AppTouchable>
    </View>
  );
};

const styles = StyleSheet.create({});

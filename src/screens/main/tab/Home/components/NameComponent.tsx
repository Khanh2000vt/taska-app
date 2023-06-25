import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {AppText} from '@components';
import {Fonts, FontSize, scaler} from '@theme';

export const NameComponent = () => {
  return (
    <View style={styles.viewName}>
      <AppText center font={Fonts.fontWeight700} size={FontSize.Font24}>
        Daniel Austin
      </AppText>
      <AppText center>daniel_austin</AppText>
    </View>
  );
};

const styles = StyleSheet.create({
  viewName: {
    marginBottom: scaler(32),
    marginTop: scaler(8),
    rowGap: scaler(8),
  },
});

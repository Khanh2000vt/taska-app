import {AppText, AppTouchable, ColumnView} from '@components';
import {Colors, dimensions, scaler} from '@themes';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ContactForgotProps} from '../ForgotPassword.props';

export const ContactForgot = ({item, contact}: ContactForgotProps) => {
  const isSelected = contact === item.value;
  return (
    <AppTouchable
      onPress={item.onPress}
      style={[
        styles.container,
        isSelected && {
          borderWidth: scaler(3),
          borderColor: Colors.primary,
          padding: scaler(24),
        },
      ]}>
      <View style={styles.icon}>
        <item.icon />
      </View>
      <ColumnView gap={scaler(8)} style={{flex: 1}}>
        <AppText>{item.title}</AppText>
        <AppText numberOfLines={1}>{item.body}</AppText>
      </ColumnView>
    </AppTouchable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: scaler(26),
    borderRadius: scaler(20),
    borderWidth: scaler(1),
    borderColor: Colors.gray.gray30,
    alignItems: 'center',
    width: dimensions.width - 2 * scaler(24),
  },
  icon: {
    padding: scaler(24),
    backgroundColor: Colors.secondary,
    borderRadius: scaler(100),
    marginRight: scaler(20),
  },
});

import {ColorValue, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {AppTouchable} from '@components/AppTouchable';
import {AppText} from '@components/AppText';
import {Colors} from '@themes';

type Props = {
  children: string;
  color?: ColorValue;
  onPress?: () => void;
};

export const Link = ({children, color, onPress}: Props) => {
  return (
    <AppTouchable onPress={onPress}>
      <AppText color={color || Colors.primary}>{children}</AppText>
    </AppTouchable>
  );
};

const styles = StyleSheet.create({});

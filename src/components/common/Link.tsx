import {AppText, AppTextProps} from '@components/AppText';
import {AppTouchable} from '@components/AppTouchable';
import {Colors} from '@themes';
import React from 'react';
import {ColorValue, StyleSheet, TouchableOpacityProps} from 'react-native';

type Props = {
  children: string;
  color?: ColorValue;
  onPress?: () => void;
  touchable?: Omit<TouchableOpacityProps, 'onPress'>;
  text?: Omit<AppTextProps, 'color'>;
};

export const Link = ({children, color, onPress, text, touchable}: Props) => {
  return (
    <AppTouchable {...touchable} onPress={onPress}>
      <AppText {...text} color={color || Colors.primary}>
        {children}
      </AppText>
    </AppTouchable>
  );
};

const styles = StyleSheet.create({});

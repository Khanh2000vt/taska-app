import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import {Svgs} from '@assets';
import {AppTouchable} from '@components/AppTouchable';
import {Spacing} from '@themes';
import {AppText} from '@components/AppText';
import {DefaultTFuncReturn} from 'i18next';

type Props = {
  checked: boolean;
  label?: string | DefaultTFuncReturn;
  style?: StyleProp<ViewStyle>;
  styleLabel?: StyleProp<TextStyle>;
  onChangeValue: (checked: boolean) => void;
};

export const AppCheckBox = ({
  checked,
  label,
  style,
  styleLabel,
  onChangeValue,
}: Props) => {
  return (
    <AppTouchable
      style={[styles.container, style]}
      onPress={() => onChangeValue(!checked)}>
      {/* {checked ? <Svgs.CheckBox /> : <Svgs.TickSquare />} */}
      {!!label && (
        <AppText numberOfLines={1} style={styleLabel}>
          {label}
        </AppText>
      )}
    </AppTouchable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    columnGap: Spacing.width12,
    alignItems: 'center',
  },
});

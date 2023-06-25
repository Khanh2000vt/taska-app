import {AppText} from '@components/AppText';
import {AppTouchable} from '@components/AppTouchable';
import {HEIGHT_ITEM_OPTION} from '@constants';
import React from 'react';
import {StyleSheet} from 'react-native';
type Props = {
  label: string;
  onPress: () => void;
};
export const ItemOption = ({label, onPress}: Props) => {
  return (
    <AppTouchable style={styles.container} onPress={onPress}>
      <AppText>{label}</AppText>
    </AppTouchable>
  );
};

const styles = StyleSheet.create({
  container: {
    height: HEIGHT_ITEM_OPTION,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Colors, Fonts, FontSize, scaler} from '@theme';
import {AppText} from '@components';

export const ExperienceComponent = () => {
  const data = [
    {
      id: 1,
      index: 27,
      label: 'Projects',
    },
    {
      id: 2,
      index: 759,
      label: 'Tasks',
    },
    {
      id: 3,
      index: 35,
      label: 'Groups',
    },
  ];
  return (
    <View style={styles.container}>
      {data.map(item => {
        return (
          <View
            key={item.id}
            style={[styles.containerItem, item.id === 2 && styles.border]}>
            <AppText font={Fonts.fontWeight700} size={FontSize.Font24}>
              {item.index}
            </AppText>
            <AppText font={Fonts.fontWeight400} color={Colors.gray.gray50}>
              {item.label}
            </AppText>
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: scaler(24),
    borderBottomWidth: scaler(1),
    borderBottomColor: Colors.gray.gray30,
    flexDirection: 'row',
  },
  containerItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    rowGap: scaler(4),
  },
  border: {
    borderLeftWidth: scaler(1),
    borderRightWidth: scaler(1),
    borderColor: Colors.gray.gray30,
  },
});

import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {RowView} from '@components/common';
import {Svgs} from '@assets';
import {AppText} from '@components/AppText';
import {Fonts, FontSize, scaler} from '@themes';

export const AppHeaderMain = () => {
  return (
    <SafeAreaView edges={['top']}>
      <RowView style={{justifyContent: 'space-between'}}>
        <RowView gap={scaler(16)}>
          <Svgs.Logo />
          <AppText size={FontSize.Font24} font={Fonts.fontWeight700}>
            Taska
          </AppText>
        </RowView>
        <RowView>
          <Svgs.Notification />
        </RowView>
      </RowView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

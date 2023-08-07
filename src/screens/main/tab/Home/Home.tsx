import {AppHeaderMain, AppScreen, Block} from '@components';
import {Colors, scaler} from '@themes';
import React from 'react';
import {StyleSheet} from 'react-native';

export const Home = () => {
  return (
    <Block block color={Colors.white}>
      <AppHeaderMain />
    </Block>
  );
};

const styles = StyleSheet.create({});

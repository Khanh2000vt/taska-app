import {Block} from '@components';
import {Colors, scaler} from '@themes';
import React from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  AvatarComponent,
  ExperienceComponent,
  NameComponent,
  OptionComponent,
} from './components';

export const Home = () => {
  return (
    <Block block color={Colors.white} paddingHorizontal={scaler(24)}>
      <SafeAreaView edges={['top']} />
      <AvatarComponent />
      <NameComponent />
      <ExperienceComponent />
      <OptionComponent />
    </Block>
  );
};

const styles = StyleSheet.create({});

import {Colors} from '@themes';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {AppScreenProps, SwitchScreenProps} from './AppScreen.props';
import {HeaderAppScreen, ScrollViewScreen, ViewScreen} from './components';

export const AppScreen = ({
  type = 'view',
  style,
  header,
  children,
}: AppScreenProps) => {
  return (
    <View style={styles.container}>
      <HeaderAppScreen header={header} />
      <BodyAppScreen type={type} children={children} style={style} />
    </View>
  );
};

const BodyAppScreen = ({type, children, style}: SwitchScreenProps) => {
  switch (type) {
    case 'view':
      return <ViewScreen style={style}>{children}</ViewScreen>;
    case 'scroll-view':
      return <ScrollViewScreen style={style}>{children}</ScrollViewScreen>;
    default:
      return null;
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
});

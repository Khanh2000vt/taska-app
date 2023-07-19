import {Colors, scaler} from '@themes';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {AppScreenProps} from './AppScreen.props';
import {HeaderAppScreen} from './components';

export const AppScreen = ({
  style,
  header,
  children,
  horizontal = scaler(24),
  top = undefined,
  bottom = scaler(30),
  padding,
}: AppScreenProps) => {
  return (
    <View style={[styles.container, {paddingBottom: bottom, paddingTop: top}]}>
      <HeaderAppScreen header={header} padding={padding} />
      <View style={[style, {paddingHorizontal: horizontal}, {flex: 1}]}>
        {children}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
});

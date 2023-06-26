import {Colors, scaler} from '@themes';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {AppScreenProps, SwitchScreenProps} from './AppScreen.props';
import {
  FlatListScreen,
  HeaderAppScreen,
  ScrollViewScreen,
  ViewScreen,
} from './components';

export const AppScreen = ({
  type = 'view',
  style,
  header,
  children,
  flatList,
  horizontal = scaler(24),
  top = undefined,
  bottom = scaler(30),
  padding,
}: AppScreenProps) => {
  return (
    <View
      style={[
        styles.container,
        {paddingHorizontal: horizontal, paddingBottom: bottom, paddingTop: top},
        style,
      ]}>
      <HeaderAppScreen header={header} padding={padding} />
      <BodyAppScreen type={type} children={children} flatList={flatList} />
    </View>
  );
};

const BodyAppScreen = ({
  type,
  children,
  style,
  flatList,
}: SwitchScreenProps) => {
  switch (type) {
    case 'view':
      return <ViewScreen>{children}</ViewScreen>;
    case 'scroll-view':
      return <ScrollViewScreen>{children}</ScrollViewScreen>;
    case 'flat-list':
      return <FlatListScreen flatList={flatList}>{children}</FlatListScreen>;
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

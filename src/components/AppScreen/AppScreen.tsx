import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {AppScreenProps} from './AppScreen.props';
import {Colors} from '@themes';

export const AppScreen = ({type, style, header}: AppScreenProps) => {
  return (
    <View style={styles.container}>
      <Text>AppScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
});

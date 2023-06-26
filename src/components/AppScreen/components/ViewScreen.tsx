import React from 'react';
import {View} from 'react-native';
import {BodyScreenProps} from '../AppScreen.props';

export const ViewScreen = ({children}: BodyScreenProps) => {
  return <View style={{flex: 1}}>{children}</View>;
};

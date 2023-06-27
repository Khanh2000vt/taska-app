import React from 'react';
import {View} from 'react-native';
import {BodyScreenProps} from '../AppScreen.props';

export const ViewScreen = ({children, style}: BodyScreenProps) => {
  return <View style={[{flex: 1}, style]}>{children}</View>;
};

import React from 'react';
import {View} from 'react-native';
import {BodyScreenProps} from '../AppScreen.props';

export const ViewScreen = ({style, children}: BodyScreenProps) => {
  return <View style={style}>{children}</View>;
};

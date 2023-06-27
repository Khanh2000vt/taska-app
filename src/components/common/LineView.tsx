import {IMargin} from '@interfaces';
import {Colors, scaler} from '@themes';
import React from 'react';
import {
  ColorValue,
  DimensionValue,
  StyleProp,
  View,
  ViewStyle,
} from 'react-native';

type Props = {
  direction?: 'vertical' | 'horizontal';
  color?: ColorValue;
  style?: StyleProp<ViewStyle>;
};

export const LineView = ({
  color = Colors.gray.gray30,
  direction = 'horizontal',
  style,
  mr = undefined,
  ml = undefined,
  mt = undefined,
  mb = undefined,
  mh = undefined,
  mv = undefined,
  m = undefined,
}: Props & IMargin) => {
  const size: {
    height?: DimensionValue;
    width?: DimensionValue;
  } =
    direction === 'horizontal'
      ? {
          height: scaler(1),
          // width: '100%',
        }
      : {
          // height: '100%',
          width: scaler(1),
        };

  const margin = {
    marginLeft: ml || mh || m,
    marginTop: mt || mv || m,
    marginRight: mr || mh || m,
    marginBottom: mb || mv || m,
  };
  return (
    <View style={[{backgroundColor: color, flex: 1}, size, margin, style]} />
  );
};

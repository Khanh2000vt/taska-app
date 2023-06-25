import {IMargin, IPadding} from '@interfaces';
import React from 'react';
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';

type Props = {
  center?: boolean;
  gap?: number;
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
};

export const RowView = ({
  center = false,
  children = <></>,
  gap,
  style,
  mr = undefined,
  ml = undefined,
  mt = undefined,
  mb = undefined,
  mh = undefined,
  mv = undefined,
  m = undefined,
  pr = undefined,
  pl = undefined,
  pt = undefined,
  pb = undefined,
  ph = undefined,
  pv = undefined,
  p = undefined,
}: Props & IMargin & IPadding) => {
  const margin = {
    marginLeft: ml || mh || m,
    marginTop: mt || mv || m,
    marginRight: mr || mh || m,
    marginBottom: mb || mv || m,
  };

  const padding = {
    paddingLeft: pl || ph || p,
    paddingTop: pt || pv || p,
    paddingRight: pr || ph || p,
    paddingBottom: pb || pv || p,
  };
  return (
    <View
      style={[
        styles.container,
        margin,
        padding,
        {justifyContent: center ? 'center' : undefined, columnGap: gap},
        style,
      ]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

import {Colors, Fonts, FontSize} from '@themes';
import React from 'react';
import {ColorValue, StyleProp, Text, TextProps, TextStyle} from 'react-native';
import TextTicker from 'react-native-text-ticker';

export interface AppTextProps extends TextProps {
  numberOfLines?: number;
  children?: React.ReactNode;
  style?: StyleProp<TextStyle>;
  color?: ColorValue | undefined;
  size?: number | undefined;
  font?: {fontFamily: string};
  center?: boolean;
}

export const AppText = (props: AppTextProps) => {
  const {
    numberOfLines,
    children,
    style,
    color = Colors.textColor,
    size = FontSize.Font14,
    font = Fonts.fontWeight600,
    center = false,
    ...prop
  } = props;

  const styles: StyleProp<TextStyle> = [
    {...font, color, fontSize: size},
    !!center && {textAlign: 'center'},
    style,
  ];

  if (numberOfLines === 1) {
    return (
      <TextTicker
        style={styles}
        duration={3000}
        loop
        bounce
        repeatSpacer={50}
        marqueeDelay={1000}
        {...prop}>
        {children}
      </TextTicker>
    );
  }
  return (
    <Text
      style={styles}
      numberOfLines={numberOfLines}
      allowFontScaling={false}
      {...prop}>
      {children}
    </Text>
  );
};

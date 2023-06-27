import {Block} from '@components/Block';
import {Colors, Shadow} from '@themes';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {ButtonProps} from './AppButton.props';
import {styles} from './AppButton.style';

export function AppButton(props: ButtonProps) {
  const {
    label,
    onPress = () => {},
    style,
    Icon,
    labelStyle,
    disabled,
    numberOfLines,
    isWrap,
    outline = false,
    secondary = false,
    shadow = false,
    ...prop
  } = props;

  return (
    <WrapContent isWrap={isWrap}>
      <TouchableOpacity
        disabled={disabled}
        activeOpacity={0.9}
        style={[
          styles.btn,
          outline && styles.btnOutline,
          secondary && styles.btnSecondary,
          disabled
            ? {backgroundColor: Colors.disableButton}
            : shadow
            ? {...Shadow.button}
            : {},
          style,
        ]}
        onPress={() => {
          onPress?.();
        }}
        {...prop}>
        {!!Icon && (
          <View style={styles.icon}>
            <Icon />
          </View>
        )}
        <Text
          style={[
            styles.text,
            outline && styles.textOutline,
            secondary && styles.textSecondary,
            labelStyle,
          ]}
          numberOfLines={numberOfLines}>
          {label}
        </Text>
      </TouchableOpacity>
    </WrapContent>
  );
}

const WrapContent = ({isWrap, children}: any) => {
  if (isWrap) {
    return (
      <Block flexWrap="wrap" style={styles.wrapContent}>
        {children}
      </Block>
    );
  }
  return <>{children}</>;
};

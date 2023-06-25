import React from 'react';
import {Switch} from 'react-native-switch';
import {StyleSheet, View, ViewStyle} from 'react-native';

import {AppText} from '../AppText';
import {Colors, Fonts, FontSize} from '@themes';

interface IAppSwitch {
  title?: string;
  value?: boolean;
  noneChangeColorTitle?: boolean;
  onChange: (value: boolean) => void;
  disable?: boolean;
  style?: ViewStyle;
}

export const AppSwitch = (props: IAppSwitch) => {
  const {
    title,
    value = false,
    noneChangeColorTitle,
    onChange,
    disable = false,
    style,
  } = props;
  return (
    <View style={[styles.container, style]}>
      {title && (
        <AppText
          size={FontSize.Font18}
          color={Colors.gray.gray50}
          // style={[
          //   styles.title,
          //   !noneChangeColorTitle && value && styles.active,
          // disable && {color: Colors.},
          // ]}
        >
          {title}
        </AppText>
      )}
      <Switch
        value={value}
        onValueChange={onChange}
        disabled={disable}
        activeText={'On'}
        inActiveText={'Off'}
        circleSize={18}
        barHeight={29}
        circleBorderWidth={0}
        backgroundActive={Colors.primary}
        backgroundInactive={Colors.gray.gray30}
        circleActiveColor={Colors.white}
        circleInActiveColor={Colors.white}
        changeValueImmediately={true}
        innerCircleStyle={{
          alignItems: 'center',
          justifyContent: 'center',
        }}
        outerCircleStyle={{}}
        renderActiveText={false}
        renderInActiveText={false}
        switchLeftPx={2}
        switchRightPx={2}
        switchWidthMultiplier={2.5}
        switchBorderRadius={30}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: FontSize.Font14,
    ...Fonts.fontWeight500,
    color: Colors.textColor,
  },
  active: {
    color: Colors.primary,
    ...Fonts.fontWeight500,
  },
});

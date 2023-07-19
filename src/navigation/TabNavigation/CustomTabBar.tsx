import {AppText} from '@components';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {Colors, Fonts, FontSize, scaler, Spacing} from '@themes';
import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {getBottomSpace} from 'react-native-iphone-x-helper';
import {SvgProps} from 'react-native-svg';
import {IItemTabBar, ITabBar} from './TabNavigator';

type CustomTabBarProps = BottomTabBarProps & {
  tabBar: ITabBar;
};
export const CustomTabBar = ({
  state,
  descriptors,
  navigation,
  tabBar,
}: CustomTabBarProps) => {
  return (
    <View style={styles.tabBar}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const isFocused = state.index === index;
        const Icon = tabBar[route.name].Icon;
        const IconBlur = tabBar[route.name].IconBlur;
        const label = tabBar[route.name]?.label;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });
          if (isFocused) {
            // dispatch(flagFocusTab());
          } else if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TabBarItem
            key={route.key}
            Icon={Icon}
            IconBlur={IconBlur}
            active={isFocused}
            onPress={onPress}
            label={label}
          />
        );
      })}
    </View>
  );
};

type TabBarItemProps = {
  active: boolean;
  onPress: () => void;
} & Omit<IItemTabBar, 'name' | 'route'>;

const TabBarItem = ({
  Icon,
  active,
  onPress,
  IconBlur,
  label,
}: TabBarItemProps) => {
  return (
    <View style={styles.tabBarItem}>
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={1}
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          rowGap: scaler(2),
        }}>
        {active ? <Icon /> : <IconBlur />}
        <>
          {!!label && (
            <AppText
              font={active ? Fonts.fontWeight700 : Fonts.fontWeight500}
              color={active ? Colors.primary : Colors.gray.gray70}
              size={FontSize.Font10}>
              {label}
            </AppText>
          )}
        </>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    paddingBottom:
      getBottomSpace() > 0
        ? getBottomSpace() + Spacing.height18
        : Spacing.height30,
  },
  tabBarItem: {
    flex: 1,

    height: Spacing.height54,
  },
  tabBarLabel: {
    fontSize: 12,
    color: '#999',
  },
  activeTabLabel: {
    color: 'blue',
  },
});

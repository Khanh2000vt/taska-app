import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {dimensions, scaler, Spacing} from '@themes';
import React, {useEffect} from 'react';
import {Animated, StyleSheet, TouchableOpacity, View} from 'react-native';
import {getBottomSpace} from 'react-native-iphone-x-helper';
import {SvgProps} from 'react-native-svg';
import {ITabBar} from './TabNavigator';

type CustomTabBarProps = BottomTabBarProps & {
  tabBar: ITabBar;
};
const WIDTH_TAB = dimensions.width / 1;
export const CustomTabBar = ({
  state,
  descriptors,
  navigation,
  tabBar,
}: CustomTabBarProps) => {
  // const dispatch = useDispatch();
  const animatedIsFocused = React.useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.spring(animatedIsFocused, {
      toValue: state.index * WIDTH_TAB,
      // duration: 200,
      useNativeDriver: true,
      // tension: 50,
      friction: 9,
      tension: 70,
    }).start();
  }, [state.index]);
  return (
    <View style={styles.tabBar}>
      <Animated.View
        style={{
          backgroundColor: '#fff',
          position: 'absolute',
          width: WIDTH_TAB,
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          // opacity: opacity,
          transform: [{translateX: animatedIsFocused}],
        }}>
        <View
          style={{
            width: scaler(40),
            height: scaler(40),
            borderRadius: scaler(16),
            backgroundColor: '#EFEAFF',
          }}
        />
      </Animated.View>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const isFocused = state.index === index;
        const Icon = tabBar[route.name].Icon;

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
            active={isFocused}
            onPress={onPress}
            index={index}
          />
        );
      })}
    </View>
  );
};

type TabBarItemProps = {
  Icon: React.FC<SvgProps>;
  active: boolean;
  onPress: () => void;
  index: number;
};

const TabBarItem = ({Icon, active, onPress, index}: TabBarItemProps) => {
  return (
    <View style={styles.tabBarItem}>
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={1}
        style={{
          flex: 1,
          // width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Icon />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: '#ccc',
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

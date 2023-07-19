// import {R} from '@src/assets/R';
// import {Svgs} from '@assets';
import {Svgs} from '@assets';
import {ROUTE_TAB} from '@navigation/routes';
import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {screens} from '@screens';
import React from 'react';
import {SvgProps} from 'react-native-svg';
import {CustomTabBar} from './CustomTabBar';

export type IItemTabBar = {
  name: string;
  route: () => JSX.Element;
  Icon: React.FC<SvgProps>;
  IconBlur: React.FC<SvgProps>;
  label?: string;
};
export interface ITabBar {
  [x: string]: IItemTabBar;
}

const {HOME_TAB, PROJECT_TAB, FUNCTION_TAB, INBOX_TAB, PROFILE_TAB} = ROUTE_TAB;
const Tab = createBottomTabNavigator();
const TabNavigator = () => {
  const TAB_BAR: ITabBar = {
    [HOME_TAB]: {
      name: HOME_TAB,
      route: screens.Home,
      Icon: Svgs.HomeBold,
      IconBlur: Svgs.HomeBorder,
      label: 'Home',
    },
    [PROJECT_TAB]: {
      name: PROJECT_TAB,
      route: screens.Home,
      Icon: Svgs.DocumentBold,
      IconBlur: Svgs.DocumentBorder,
      label: 'Project',
    },
    [FUNCTION_TAB]: {
      name: FUNCTION_TAB,
      route: screens.Home,
      Icon: Svgs.FunctionFocus,
      IconBlur: Svgs.FunctionBlur,
    },
    [INBOX_TAB]: {
      name: INBOX_TAB,
      route: screens.Home,
      Icon: Svgs.ChatBold,
      IconBlur: Svgs.ChatBorder,
      label: 'Inbox',
    },
    [PROFILE_TAB]: {
      name: PROFILE_TAB,
      route: screens.Home,
      Icon: Svgs.ProfileBold,
      IconBlur: Svgs.ProfileBorder,
      label: 'Profile',
    },
  };
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false, tabBarShowLabel: false}}
      initialRouteName={HOME_TAB}
      tabBar={(props: BottomTabBarProps) => (
        <CustomTabBar {...props} tabBar={TAB_BAR} />
      )}>
      {Object.keys(TAB_BAR).map((elem, index) => (
        <Tab.Screen
          key={index}
          name={elem}
          component={TAB_BAR[elem].route}
          options={{tabBarShowLabel: false}}
        />
      ))}
    </Tab.Navigator>
  );
};

export {TabNavigator};

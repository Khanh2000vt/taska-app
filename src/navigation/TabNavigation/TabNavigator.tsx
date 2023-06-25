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
export interface ITabBar {
  [x: string]: {
    name: string;
    route: () => JSX.Element;
    Icon: React.FC<SvgProps>;
  };
}

const {HOME_TAB} = ROUTE_TAB;
const Tab = createBottomTabNavigator();
const TabNavigator = () => {
  const TAB_BAR: ITabBar = {
    [HOME_TAB]: {
      name: HOME_TAB,
      route: screens.Home,
      // Icon: Svgs.Search,
      Icon: <></>,
    },
    // [CALENDAR_TAB]: {
    //   name: CALENDAR_TAB,
    //   route: Stack.CalendarStackComponent,
    //   Icon: Svg.Calendar,
    // },
    // [MESSAGE_TAB]: {
    //   name: MESSAGE_TAB,
    //   route: Stack.MessageStackComponent,
    //   Icon: Svg.Message,
    // },
    // [ACCOUNT_TAB]: {
    //   name: ACCOUNT_TAB,
    //   route: Stack.AccountStackComponent,
    //   Icon: Svg.User,
    // },
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

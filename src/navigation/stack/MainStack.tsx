import React, {memo} from 'react';

import {ROUTE_TAB} from '@navigation/routes';
import {TabNavigator} from '@navigation/TabNavigation';
import {createStackNavigator} from '@react-navigation/stack';
import {StatusBar} from 'react-native';

const MainStack = createStackNavigator();

const MainStackComponent = memo(() => {
  return (
    <>
      <MainStack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <MainStack.Screen name={ROUTE_TAB.TAB} component={TabNavigator} />
        {StackComponent()}
      </MainStack.Navigator>
      <StatusBar barStyle="dark-content" />
    </>
  );
});

const StackComponent = () => {
  return (
    <>
      <MainStack.Group
        screenOptions={{
          headerShown: false,
        }}>
        {/* <MainStack.Screen
          name={ROUTE_MAIN.ROUTE_MAIN}
          component={screens.Home}
        /> */}
      </MainStack.Group>
      {/* <StatusBar barStyle="dark-content" /> */}
    </>
  );
};

export {MainStackComponent};

import {ROUTE_AUTH} from '@navigation/routes';
import {createStackNavigator} from '@react-navigation/stack';
import {screens} from '@screens';
import React, {memo} from 'react';
import {StatusBar} from 'react-native';

const AuthStack = createStackNavigator();

const AuthStackComponent = memo(() => {
  return (
    <>
      <AuthStack.Navigator
        // initialRouteName={
        //   showTutorialVideo ? SCREEN_ROUTE.TUTORIAL_VIDEO : SCREEN_ROUTE.LOGIN
        // }
        screenOptions={{
          headerShown: false,
        }}>
        <AuthStack.Screen name={ROUTE_AUTH.LOGIN} component={screens.Login} />
      </AuthStack.Navigator>
      <StatusBar barStyle="light-content" />
    </>
  );
});

export {AuthStackComponent};

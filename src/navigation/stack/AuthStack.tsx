import {ROUTE_AUTH} from '@navigation/routes';
import {createStackNavigator} from '@react-navigation/stack';
import {screens} from '@screens';
import React, {memo} from 'react';
import {StatusBar} from 'react-native';

const AuthStack = createStackNavigator();

const gesturesDisabled: ROUTE_AUTH[] = [ROUTE_AUTH.LOGIN];

const AuthStackComponent = memo(() => {
  return (
    <>
      <AuthStack.Navigator
        // initialRouteName={
        //   showTutorialVideo ? SCREEN_ROUTE.TUTORIAL_VIDEO : SCREEN_ROUTE.LOGIN
        // }
        screenOptions={{
          headerShown: false,
          gestureEnabled: true,
        }}>
        <AuthStack.Screen name={ROUTE_AUTH.INTRO} component={screens.Intro} />
        <AuthStack.Screen
          name={ROUTE_AUTH.LOGIN}
          component={screens.Login}
          options={{
            gestureEnabled: false,
          }}
        />
        <AuthStack.Screen
          name={ROUTE_AUTH.SIGN_IN_PASSWORD}
          component={screens.SignInPassword}
        />
        <AuthStack.Screen
          name={ROUTE_AUTH.SIGN_UP}
          component={screens.SignUp}
        />
      </AuthStack.Navigator>
      <StatusBar barStyle="light-content" />
    </>
  );
});

export {AuthStackComponent};

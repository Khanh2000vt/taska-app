import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {RootState} from '@redux';
import {screens} from '@screens';
import React from 'react';
import SplashScreen from 'react-native-splash-screen';
import {useSelector} from 'react-redux';
import {Stack} from './stack';
const MainStack = createStackNavigator();

const NavigationApp = React.forwardRef((props, ref: any) => {
  const token = useSelector((state: RootState) => state.accountSlice?.token);

  const renderStackApp = () => {
    if (!token) {
      return <Stack.AuthStackComponent />;
    } else {
      return <Stack.MainStackComponent />;
    }
  };
  return (
    <NavigationContainer ref={ref} onReady={() => SplashScreen.hide()}>
      {/* {renderStackApp()} */}
      {/* Thay thế component để build UI */}
      <MainStack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <MainStack.Screen name="A" component={screens.FillProfile} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
});

export {NavigationApp};

import {
  CommonActions,
  NavigationContainerRef,
  StackActions,
} from '@react-navigation/native';
import {createRef, RefObject} from 'react';
import {typeNavigation} from './types';

let _navigator: typeNavigation;

export function setTopLevelNavigator(navigatorRef: typeNavigation) {
  _navigator = navigatorRef;
}

export function navigate(routeName: string, params?: object | undefined) {
  _navigator?.dispatch(
    CommonActions.navigate({
      name: routeName,
      params,
    }),
  );
}
export const navigationRef: RefObject<NavigationContainerRef<any>> =
  createRef();

export const getCurrentRouteName = () =>
  navigationRef?.current?.getCurrentRoute()?.name;

export function goBack() {
  if (_navigator?.canGoBack()) {
    _navigator.dispatch(CommonActions.goBack());
  }
}

function pop(value: number) {
  _navigator?.dispatch(StackActions.pop(value));
}

export function reset(routeName: string) {
  _navigator?.dispatch(
    CommonActions.reset({
      index: 0,
      routes: [{name: routeName}],
    }),
  );
}

export const NavigationUtils = {
  navigate,
  setTopLevelNavigator,
  goBack,
  pop,
  reset,
};

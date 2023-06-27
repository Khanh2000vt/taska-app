import {
  CommonActions,
  CompositeScreenProps,
  NavigationContainerRef,
  NavigatorScreenParams,
  StackActionType,
} from '@react-navigation/native';
import {StackScreenProps} from '@react-navigation/stack';

export type ScreenRouteRecord = Record<string, () => JSX.Element>;

export type INavigationAppRef =
  | React.Ref<NavigationContainerRef<ReactNavigation.RootParamList>>
  | undefined;

export type typeNavigation = {
  dispatch: (arg0: CommonActions.Action | StackActionType) => void;
  canGoBack: () => boolean;
} | null;

export type RootStackParamList = {
  MAIN: NavigatorScreenParams<MainStackParamList>;
  AUTH: NavigatorScreenParams<AuthStackParamList>;
};

export type AuthStackParamList = {
  INTRO: undefined;
  LOGIN: undefined;
  SIGN_IN_PASSWORD: undefined;
  SIGN_UP: undefined;
  FORGOT_PASSWORD: undefined;
  VERIFICATION: undefined;
  NEW_PASSWORD: {otp: string};
};

export type MainStackParamList = {
  // MAIN: NavigatorScreenParams<TabStackParamList>;
};

export type MainStackProps<T extends keyof MainStackParamList> =
  StackScreenProps<MainStackParamList, T>;

export type AuthStackProps<T extends keyof AuthStackParamList> =
  StackScreenProps<AuthStackParamList, T>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends MainStackParamList {}
  }
}

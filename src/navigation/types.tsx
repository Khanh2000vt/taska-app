import {
  CommonActions,
  CompositeScreenProps,
  NavigationContainerRef,
  NavigatorScreenParams,
  StackActionType,
} from '@react-navigation/native';

export type ScreenRouteRecord = Record<string, () => JSX.Element>;

export type INavigationAppRef =
  | React.Ref<NavigationContainerRef<ReactNavigation.RootParamList>>
  | undefined;

export type typeNavigation = {
  dispatch: (arg0: CommonActions.Action | StackActionType) => void;
  canGoBack: () => boolean;
} | null;

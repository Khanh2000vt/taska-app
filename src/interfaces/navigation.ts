import {
  AuthStackParamList,
  AuthStackProps,
  MainStackParamList,
  MainStackProps,
} from '@navigation';

type IOption = 'route' | 'navigation';

export type INavigateAuth<
  T extends keyof AuthStackParamList,
  K extends IOption,
> = AuthStackProps<T>[K];

export type INavigateMain<
  T extends keyof MainStackParamList,
  K extends IOption,
> = MainStackProps<T>[K];

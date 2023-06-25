import React, {FunctionComponent} from 'react';
import {SvgProps} from 'react-native-svg';

export type ILoginSocial = {
  id: number;
  icon: React.FC<SvgProps>;
  onPress: () => void;
};

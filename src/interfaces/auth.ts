import React, {FunctionComponent} from 'react';
import {SvgProps} from 'react-native-svg';
import {ImageSourcePropType} from 'react-native';

export type ILoginSocial = {
  id: number;
  icon: React.FC<SvgProps>;
  onPress: () => void;
};

export type IDataIntro = {
  id: number;
  source: ImageSourcePropType;
  title: string;
  textBody: string;
};

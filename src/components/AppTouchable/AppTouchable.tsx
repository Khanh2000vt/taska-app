import React from 'react';
import {TouchableOpacity, TouchableOpacityProps} from 'react-native';
interface Props extends TouchableOpacityProps {
  children: React.ReactNode;
}

export const AppTouchable = ({children, ...props}: Props) => {
  return (
    <TouchableOpacity activeOpacity={0.9} {...props}>
      {children}
    </TouchableOpacity>
  );
};

/*
- Tuỳ chỉnh placeholder khi image đang load ở đây
 */
import {Colors} from '@theme';
import React from 'react';
import {ActivityIndicator, StyleSheet} from 'react-native';

export const PlaceholderImage = () => {
  return (
    <>
      <ActivityIndicator size="small" color={Colors.primary} />
    </>
  );
};

const styles = StyleSheet.create({});

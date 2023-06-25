import {Colors, scaler, Spacing} from '@themes';
import React from 'react';
import {Animated, Dimensions, StyleSheet} from 'react-native';
import {PaginationProps} from './AppGallery.props';

const {width, height} = Dimensions.get('window');

export const horizontal = {
  xxSmall: width * 0.0125,
  xSmall: width * 0.025,
  small: width * 0.0375,
  medium: width * 0.05,
  large: width * 0.075,
};

export const vertical = {
  xxSmall: height * 0.0125,
  xSmall: height * 0.025,
  small: height * 0.0375,
  medium: height * 0.05,
  normal: height * 0.065,
  large: height * 0.075,
};

export const Pagination = ({
  size,
  paginationStyle,
  scrollX,
  pageWidth = width,
  dotStyle,
}: PaginationProps) => {
  return (
    <Animated.View style={[styles.container, paginationStyle]}>
      {Array.from({length: size}).map((_, index) => {
        // const width = scrollX.interpolate({
        //   inputRange: [
        //     pageWidth * (index - 1),
        //     pageWidth * index,
        //     pageWidth * (index + 1),
        //   ],
        //   outputRange: [6, 6, 6],
        //   extrapolate: 'clamp',
        // });
        // const opacity = scrollX.interpolate({
        //   inputRange: [
        //     pageWidth * (index - 1),
        //     pageWidth * index,
        //     pageWidth * (index + 1),
        //   ],
        //   outputRange: [0.24, 1, 0.24],
        //   extrapolate: 'clamp',
        // });
        const backgroundColor = scrollX.interpolate({
          inputRange: [
            pageWidth * (index - 1),
            pageWidth * index,
            pageWidth * (index + 1),
          ],
          outputRange: [Colors.gray.gray60, Colors.primary, Colors.gray.gray60],
          extrapolate: 'clamp',
        });
        return (
          <Animated.View
            key={index}
            style={[
              styles.normalDot,
              {
                // width,
                backgroundColor: backgroundColor,
                // opacity,
              },
              dotStyle,
            ]}
          />
        );
      })}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: Spacing.height24,
  },
  normalDot: {
    height: scaler(6),
    width: scaler(6),
    borderRadius: scaler(6) / 2,
    backgroundColor: Colors.primary,
    marginRight: Spacing.width12,
  },
});

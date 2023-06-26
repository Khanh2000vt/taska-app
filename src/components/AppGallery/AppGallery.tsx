import {AppButton} from '@components/AppButton';
import {dimensions, Fonts, Spacing} from '@themes';
import React, {forwardRef, useImperativeHandle} from 'react';
import {Animated, FlatList, Text, TouchableOpacity, View} from 'react-native';
import {AppGalleryHook} from './AppGallery.hook';
import {AppGalleryProps, RefAppGalleryProps} from './AppGallery.props';
import {styles} from './AppGallery.styles';
import {Pagination} from './Pagination';

const ITEM_WIDTH = dimensions.width;

export const AppGallery = forwardRef<
  RefAppGalleryProps,
  AppGalleryProps<unknown>
>((props, ref) => {
  const {
    file = [],
    onDoubleTap = () => {},
    onPress = () => {},
    children,
    galleryStyle,
    pageStyle,
    paginationStyle,
    doubleTapStyle,
    indexViewStyle,
    dotStyle,
    DoubleTapElement,
    showIndexCurrent = true,
    showPagination = true,
    pageWidth = dimensions.width,
  } = props;

  const {
    refFlatList,
    onScrollEnd,
    scrollX,
    onPressItem,
    scaleAnimation,
    scrollNext,
    scrollPrevious,
    page,
  } = AppGalleryHook({file, pageWidth, onDoubleTap, onPress});

  useImperativeHandle(
    ref,
    () => ({
      scrollNext,
      scrollPrevious,
    }),
    [],
  );

  return (
    <>
      <View style={{flex: 1}}>
        <FlatList
          ref={refFlatList}
          getItemLayout={(data, index) => ({
            length: ITEM_WIDTH,
            offset: ITEM_WIDTH * index,
            index,
          })}
          onMomentumScrollEnd={onScrollEnd}
          onScroll={Animated.event(
            [
              {
                nativeEvent: {
                  contentOffset: {
                    x: scrollX,
                  },
                },
              },
            ],
            {useNativeDriver: false},
          )}
          style={[styles.scroll, galleryStyle]}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={file}
          scrollEnabled={file?.length > 1}
          pagingEnabled
          nestedScrollEnabled
          renderItem={({item, index}) => {
            return (
              <View style={[styles.button, pageStyle]}>
                <TouchableOpacity
                  onPress={() => onPressItem(item)}
                  activeOpacity={1}>
                  <View
                    style={{
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    {children(item)}
                    {!!DoubleTapElement && (
                      <Animated.View
                        style={[
                          {
                            transform: [
                              {
                                scale: scaleAnimation,
                              },
                            ],
                            width: Spacing.width50,
                            aspectRatio: 1,
                            position: 'absolute',
                          },
                          doubleTapStyle,
                        ]}>
                        {DoubleTapElement}
                      </Animated.View>
                    )}
                  </View>
                </TouchableOpacity>
              </View>
            );
          }}
          keyExtractor={(_, index) => index.toString()}
        />
        {file?.length > 1 && showIndexCurrent && (
          <View style={[styles.indexImageContainer, indexViewStyle]}>
            {<Text>{`${page} of ${file?.length}`}</Text>}
          </View>
        )}
        {file?.length > 1 && showPagination && (
          <View
            style={{
              // position: 'absolute',
              // bottom: Spacing.height16,
              alignSelf: 'center',
            }}>
            <Pagination
              size={file?.length}
              scrollX={scrollX}
              pageWidth={pageWidth}
              paginationStyle={paginationStyle}
              dotStyle={dotStyle}
            />
          </View>
        )}
      </View>
    </>
  );
});

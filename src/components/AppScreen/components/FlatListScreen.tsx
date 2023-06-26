import React from 'react';
import {RefreshControl, StyleSheet} from 'react-native';
import {KeyboardAwareFlatList} from 'react-native-keyboard-aware-scroll-view';
import {FlatListScreenProps} from '../AppScreen.props';

export const FlatListScreen = ({
  style,
  children,
  flatList,
}: FlatListScreenProps) => {
  const renderItem = ({item}: {item: number}) => <>{children(item)}</>;
  return (
    <KeyboardAwareFlatList
      data={flatList?.data?.length ? flatList?.data : [1]}
      renderItem={renderItem}
      style={style}
      showsVerticalScrollIndicator={false}
      onEndReachedThreshold={0.5}
      keyExtractor={(item: any) => item?.toString()}
      contentContainerStyle={{
        flexGrow: 1,
      }}
      onEndReached={flatList?.onLoadMore}
      refreshControl={
        <RefreshControl refreshing={false} onRefresh={flatList?.onRefresh} />
      }
      {...flatList}
    />
  );
};

const styles = StyleSheet.create({});

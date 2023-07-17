import {Svgs} from '@assets';
import {AppModal} from '@components/AppModal';
import {AppText} from '@components/AppText';
import {AppTouchable} from '@components/AppTouchable';
import {ImagePickerComponent, ItemOption} from '@components/common';
import {HEIGHT_ITEM_OPTION, ListCountry} from '@constants';
import {useFieldFormik} from '@hooks';
import {Colors, dimensions, Fonts, FontSize, scaler, Spacing} from '@themes';
import React, {useRef, useState} from 'react';
import {FlatList, Image, StyleSheet, Text, TextInput, View} from 'react-native';

type Props = {
  labelCoding: string;
  labelPhone: string;
};

export const AppInputPhone = ({labelCoding, labelPhone}: Props) => {
  const {value: valueCoding, setValue: setValueCoding} =
    useFieldFormik(labelCoding);
  const {value: valuePhone, setValue: setValuePhone} =
    useFieldFormik(labelPhone);
  const [isFocus, setIsFocus] = useState<boolean>(false);

  const refModal = useRef<any>(null);
  const flatList = useRef<FlatList>(null);

  const showBtnDelete = isFocus && !!valuePhone?.length;

  const handleStartOpenModal = () => {
    const index = ListCountry?.indexOf(valueCoding);
    if (index >= 0) {
      const wait = new Promise((resolve: any) => setTimeout(resolve, 50));
      wait.then(() => {
        flatList?.current?.scrollToIndex({
          index: index,
          animated: true,
          viewPosition: 0,
        });
      });
    }
  };

  const handlePressCountry = (value: any) => {
    setValueCoding(value);
    refModal.current?.close();
  };

  return (
    <View>
      <View
        style={[
          styles.container,
          isFocus && {
            backgroundColor: `${Colors.primary}08`,
            borderColor: Colors.primary,
          },
        ]}>
        <AppTouchable
          onPress={() => refModal.current?.open()}
          style={styles.btnFlag}>
          <Image source={{uri: valueCoding['flag']}} style={styles.flag} />
          <Svgs.ArrowDown />
        </AppTouchable>
        {valueCoding['callingCode']?.length > 0 ? (
          <AppText style={{paddingLeft: scaler(12)}}>
            {`+${valueCoding['callingCode'][0]} `}
          </AppText>
        ) : null}

        <TextInput
          keyboardType="phone-pad"
          placeholderTextColor={Colors.gray.gray10}
          placeholder={isFocus ? '' : 'Phone number'}
          style={styles.input}
          onFocus={e => {
            setIsFocus(true);
          }}
          onBlur={e => {
            setIsFocus(false);
          }}
          onChangeText={(text: string) => setValuePhone(text)}
          value={valuePhone}
        />
        {showBtnDelete && (
          <AppTouchable
            style={styles.btnDelete}
            onPress={() => setValuePhone('')}>
            <View style={styles.viewIconDelete}>
              <Svgs.Close size={scaler(12)} color={Colors.white} />
            </View>
          </AppTouchable>
        )}
      </View>
      <AppModal
        ref={refModal}
        position="bottom"
        onOpened={handleStartOpenModal}
        modalSize={{
          height: (2 * dimensions.height) / 3,
          width: dimensions.width,
        }}>
        <View style={{paddingVertical: scaler(16)}}>
          <FlatList
            data={ListCountry}
            ref={flatList}
            bounces={false}
            keyExtractor={(_: any, index: number) => index.toString()}
            renderItem={({item}) => (
              <ItemOption
                label={item['name']}
                onPress={() => handlePressCountry(item)}
              />
            )}
            onScrollToIndexFailed={info => {
              const wait = new Promise((resolve: any) =>
                setTimeout(resolve, 500),
              );
              wait.then(() => {
                flatList.current?.scrollToIndex({
                  index: info.index,
                  animated: true,
                });
              });
            }}
            getItemLayout={(_, index) => ({
              length: HEIGHT_ITEM_OPTION,
              offset: HEIGHT_ITEM_OPTION * index,
              index,
            })}
          />
        </View>
      </AppModal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: scaler(60),
    backgroundColor: Colors.gray.gray20,
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: scaler(12),
    borderRadius: scaler(12),
    borderWidth: scaler(1),
    borderColor: Colors.gray.gray20,
  },
  input: {
    height: '100%',
    flex: 1,
    fontSize: FontSize.Font14,
    color: Colors.textColor,
    ...Fonts.fontWeight600,
  },
  viewIconDelete: {
    height: scaler(16),
    width: scaler(16),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: scaler(8),
    backgroundColor: Colors.primary,
  },
  btnDelete: {
    height: '100%',
    justifyContent: 'center',
    paddingHorizontal: scaler(8),
  },
  btnFlag: {
    flexDirection: 'row',
    alignItems: 'center',
    height: '100%',
    paddingLeft: scaler(12),
  },
  flag: {
    height: scaler(16),
    width: scaler(24),
    marginRight: Spacing.width8,
  },
});

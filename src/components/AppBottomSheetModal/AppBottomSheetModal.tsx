import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
} from '@gorhom/bottom-sheet';
import {Colors} from '@themes';
import React, {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useRef,
} from 'react';
import {StyleSheet, View} from 'react-native';
import {SharedValue} from 'react-native-reanimated';
type ISnapPoints = (string | number)[] | SharedValue<(string | number)[]>;
type Props = {
  onChange?: ((index: number) => void) | undefined;
  snapPoints: ISnapPoints;
  children: React.ReactNode | React.ReactNode[] | React.ReactNode;
};

export type AppBottomSheetModalRef = {
  snapToIndex: (index: number) => void;
  close: () => void;
};

export const AppBottomSheetModal = forwardRef<AppBottomSheetModalRef, Props>(
  (props, ref) => {
    const {onChange, snapPoints, children} = props;
    // ref
    const bottomSheetRef = useRef<BottomSheet>(null);

    useImperativeHandle(
      ref,
      () => ({
        snapToIndex,
        close,
      }),
      [],
    );

    const snapToIndex = useCallback((index: number) => {
      bottomSheetRef.current?.snapToIndex(index);
    }, []);

    const close = useCallback(() => {
      bottomSheetRef.current?.close();
    }, []);

    const renderBackdrop = useCallback(
      (props: BottomSheetBackdropProps) => (
        <BottomSheetBackdrop
          {...props}
          disappearsOnIndex={-1}
          appearsOnIndex={0}
          pressBehavior="close"
          opacity={0.2}
        />
      ),
      [],
    );

    return (
      <BottomSheet
        ref={bottomSheetRef}
        index={-1}
        snapPoints={snapPoints}
        enablePanDownToClose={true}
        backdropComponent={renderBackdrop}
        onChange={onChange}>
        <View style={styles.contentContainer}>{children}</View>
      </BottomSheet>
    );
  },
);

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.white,
  },
});

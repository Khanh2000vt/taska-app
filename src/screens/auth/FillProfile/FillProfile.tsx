import {
  AppBottomSheetModal,
  AppBottomSheetModalRef,
  AppButton,
  AppInputFormik,
  AppPickerFormik,
  AppScreen,
  AvatarUser,
  ColumnView,
  ImagePickerComponent,
} from '@components';
import {Spacing} from '@themes';
import {Formik} from 'formik';
import React, {useRef} from 'react';
import {StyleSheet} from 'react-native';
import {FillProfileHook} from './FillProfile.hook';

export const FillProfile = () => {
  const {t, initValueFillProfile} = FillProfileHook();

  const refSheetModal = useRef<AppBottomSheetModalRef>(null);

  const handleSubmit = (values: any) => {};
  return (
    <>
      <AppScreen
        type="scroll-view"
        header={{
          title: t('fillProfile.header'),
        }}>
        <Formik
          initialValues={initValueFillProfile}
          onSubmit={handleSubmit}
          validationSchema={{}}>
          {({handleSubmit, values}) => (
            <ColumnView gap={Spacing.height24} mt={Spacing.height24}>
              <AvatarUser
                onPress={() => refSheetModal.current?.snapToIndex(0)}
              />
              <AppInputFormik labelFormik="name" placeholder="Full Name" />
              <AppInputFormik labelFormik="user_name" placeholder="Username" />
              <AppPickerFormik />
              <AppPickerFormik />
              <AppButton label="Test" onPress={() => {}} />
            </ColumnView>
          )}
        </Formik>
      </AppScreen>
      <AppBottomSheetModal ref={refSheetModal} snapPoints={['25%']}>
        <ImagePickerComponent />
      </AppBottomSheetModal>
    </>
  );
};

const styles = StyleSheet.create({});

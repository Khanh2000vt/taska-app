import {
  AppBottomSheetModal,
  AppBottomSheetModalRef,
  AppButton,
  AppInputFormik,
  AppInputPhone,
  AppPickerFormik,
  AppScreen,
  AvatarUser,
  ColumnView,
  ImagePickerComponent,
} from '@components';
import {IFormikFillProfile} from '@interfaces';
import {Spacing} from '@themes';
import dayjs from 'dayjs';
import {Formik, FormikProps} from 'formik';
import React, {useRef, useState} from 'react';
import {StyleSheet} from 'react-native';
import DatePicker from 'react-native-date-picker';
import {FillProfileHook} from './FillProfile.hook';

export const FillProfile = () => {
  const {t, initValueFillProfile} = FillProfileHook();
  const refFormik = useRef<FormikProps<IFormikFillProfile>>(null);
  const [open, setOpen] = useState(false);

  const refSheetModal = useRef<AppBottomSheetModalRef>(null);

  const handleDatePicker = (date: Date) => {
    try {
      refFormik.current?.setFieldValue('date_of_birth', date);
    } catch (e) {
      console.log('error: ', e);
    } finally {
      setOpen(false);
    }
  };

  const handleSubmit = (values: any) => {};
  return (
    <>
      <AppScreen
        type="scroll-view"
        header={{
          title: t('fillProfile.header'),
        }}>
        <Formik
          innerRef={refFormik}
          initialValues={initValueFillProfile}
          onSubmit={handleSubmit}>
          {({handleSubmit, values}) => (
            <>
              <ColumnView gap={Spacing.height24} mt={Spacing.height24}>
                <AvatarUser
                  onPress={() => refSheetModal.current?.snapToIndex(0)}
                />
                <AppInputFormik labelFormik="name" placeholder="Full Name" />
                <AppInputFormik
                  labelFormik="user_name"
                  placeholder="Username"
                />
                <AppPickerFormik
                  value={
                    values.date_of_birth
                      ? dayjs(values.date_of_birth).format('DD - MM - YYYY')
                      : undefined
                  }
                  label="Date of Birth"
                  onPress={() => setOpen(true)}
                />
                <AppPickerFormik
                  value={'khanh2000vt@gmail.com'}
                  label="Email"
                />

                <AppInputPhone />
                <AppButton label="Continue" onPress={() => {}} />
              </ColumnView>
              <DatePicker
                modal
                open={open}
                date={dayjs(values.date_of_birth).toDate()}
                mode="date"
                title={null}
                minimumDate={dayjs('1900-01-01').toDate()}
                onConfirm={handleDatePicker}
                onCancel={() => {
                  setOpen(false);
                }}
              />
            </>
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

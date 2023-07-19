import {Svgs} from '@assets';
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
  ScrollViewScreen,
} from '@components';
import {IFormikFillProfile} from '@interfaces';
import {scaler, Spacing} from '@themes';
import {FillProfileSchema} from '@validates';
import dayjs from 'dayjs';
import {Formik, FormikProps} from 'formik';
import React, {useRef, useState} from 'react';
import {StyleSheet} from 'react-native';
import DatePicker from 'react-native-date-picker';
import {FillProfileHook} from './FillProfile.hook';

export const FillProfile = () => {
  const {
    t,
    initValueFillProfile,
    open,
    refSheetModal,
    refFormik,
    handleDatePicker,
    handleSubmit,
    setOpen,
    getInputFillFull,
  } = FillProfileHook();

  return (
    <>
      <AppScreen
        header={{
          title: t('fillProfile.header'),
        }}>
        <Formik
          innerRef={refFormik}
          initialValues={initValueFillProfile}
          validationSchema={FillProfileSchema}
          onSubmit={handleSubmit}>
          {({handleSubmit, values}) => (
            <>
              <ScrollViewScreen>
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
                    Icon={Svgs.CalendarOutline}
                  />
                  <AppPickerFormik
                    value={values.email}
                    label="Email"
                    Icon={Svgs.EmailOutline}
                  />

                  <AppInputPhone
                    labelCoding="countryPhone"
                    labelPhone="phone"
                  />
                  <AppPickerFormik value={values.type} label="Role" />
                </ColumnView>
              </ScrollViewScreen>
              <AppButton
                label="Continue"
                onPress={handleSubmit}
                style={{marginTop: scaler(16)}}
                disabled={!getInputFillFull()}
              />
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

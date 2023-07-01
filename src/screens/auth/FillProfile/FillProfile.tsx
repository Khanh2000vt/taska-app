import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  AppInputFormik,
  AppPickerFormik,
  AppScreen,
  ColumnView,
} from '@components';
import {Formik} from 'formik';
import {FillProfileHook} from './FillProfile.hook';
import {Spacing} from '@themes';

export const FillProfile = () => {
  const {t, initValueFillProfile} = FillProfileHook();
  const handleSubmit = (values: any) => {};
  return (
    <AppScreen
      header={{
        title: t('fillProfile.header'),
      }}>
      <Formik
        initialValues={initValueFillProfile}
        onSubmit={handleSubmit}
        validationSchema={{}}>
        {({handleSubmit, values}) => (
          <ColumnView gap={Spacing.height24}>
            <AppInputFormik labelFormik="name" placeholder="Full Name" />
            <AppInputFormik labelFormik="user_name" placeholder="Username" />
            <AppPickerFormik />
            <AppPickerFormik />
          </ColumnView>
        )}
      </Formik>
    </AppScreen>
  );
};

const styles = StyleSheet.create({});

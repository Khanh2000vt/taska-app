import * as Yup from 'yup';
import i18next from 'i18next';

export const SignInSchema = Yup.object().shape({
  email: Yup.string()
    .trim()
    .email(i18next.t('error.mailInvalid'))
    .required(i18next.t('error.required')),
  password: Yup.string()
    .trim()
    .min(8, i18next.t('error.passEnoughLength', {number: 8}) as string)
    .required(i18next.t('error.required') as string),
});

export const FillProfileSchema = Yup.object().shape({
  name: Yup.string()
    .trim()
    .matches(
      /^[a-zA-Z\s]*$/,
      'The person is name cannot contain special characters.',
    )
    .required(i18next.t('error.required')),
  avatar: Yup.object().nullable(),
  user_name: Yup.string().trim().required(i18next.t('error.required')),
  date_of_birth: Yup.date().required(i18next.t('error.required')),
  email: Yup.string()
    .trim()
    .email(i18next.t('error.mailInvalid'))
    .required(i18next.t('error.required')),
  phone: Yup.string()
    .matches(/^[0-9]{10}$/, 'Invalid phone number')
    .required('Please enter the phone number'),
  countryPhone: Yup.object().nullable(),
  type: Yup.string().required('Please enter the phone number'),
});

import * as Yup from 'yup';
import i18next from 'i18next';

export const SignInSchema = Yup.object().shape({
  email: Yup.string()
    .trim()
    .email(i18next.t('error.mailInvalid') as string)
    .required(i18next.t('error.required') as string),
  password: Yup.string()
    .trim()
    .min(8, i18next.t('error.passEnoughLength', {number: 8}) as string)
    .required(i18next.t('error.required') as string),
});

import {useField} from 'formik';
import {useRef} from 'react';

export const useFieldFormik = (name: string) => {
  const [field, meta, helper] = useField(name);

  const latestRef = useRef({});

  // On every render save newest helpers to latestRef
  //@ts-ignore
  latestRef.current.setValue = helper.setValue;
  //@ts-ignore
  latestRef.current.setTouched = helper.setTouched;
  //@ts-ignore
  latestRef.current.setError = helper.setError;

  // On the first render create new function which will never change
  // but call newest helper function
  //@ts-ignore
  if (!latestRef.current.helper) {
    //@ts-ignore
    latestRef.current.helper = {
      //@ts-ignore
      setValue: (...args) => latestRef.current.setValue(...args),
      //@ts-ignores
      setTouched: (...args) => latestRef.current.setTouched(...args),
      //@ts-ignore
      setError: (...args) => latestRef.current.setError(...args),
    };
  }
  //@ts-ignore
  return {...field, ...meta, ...latestRef.current.helper};
};

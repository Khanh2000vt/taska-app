import {APP_SLICE, LANGUAGE, THEME} from '@constants';
import {IApp} from '@redux/type';
import {createSlice} from '@reduxjs/toolkit';

const initialState: IApp = {
  themeValue: THEME.LIGHT,
  language: LANGUAGE.EN,
};

const appSlice = createSlice({
  name: APP_SLICE.APP_SLICE,
  initialState,
  reducers: {
    setThemeValue(state, action) {
      state.themeValue = action.payload;
    },
    setLanguage(state, action) {
      state.language = action.payload;
    },
  },
});

export const {setThemeValue, setLanguage} = appSlice.actions;
export default appSlice.reducer;

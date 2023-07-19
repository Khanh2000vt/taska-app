import {APP_SLICE} from '@constants';
import {IAccount} from '@redux/type';
import {createSlice} from '@reduxjs/toolkit';

const initialState: IAccount = {
  token: '',
  login: false,
  user: {},
};

const accountSlice = createSlice({
  name: APP_SLICE.ACCOUNT_SLICE,
  initialState,
  reducers: {
    setUser(state, action) {
      state.token = action.payload.token;
      state.user = action.payload.user;
    },
    changeAvatarUser(state, action) {
      state.user = {
        ...state.user,
        avatar: action.payload,
      };
    },
    editProfileUser(state, action) {
      state.user = {
        ...state.user,
        ...action.payload,
      };
    },
    loginSuccess(state) {
      state.login = true;
    },
    logoutUser() {
      return initialState;
    },
  },
});

export const {
  setUser,
  logoutUser,
  changeAvatarUser,
  editProfileUser,
  loginSuccess,
} = accountSlice.actions;
export default accountSlice.reducer;

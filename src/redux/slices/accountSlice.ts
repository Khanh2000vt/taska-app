import {APP_SLICE} from '@constants';
import {IAccount} from '@redux/type';
import {createSlice} from '@reduxjs/toolkit';

const initialState: IAccount = {
  token: '',
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
    logoutUser(state) {
      return initialState;
    },
  },
});

export const {setUser, logoutUser, changeAvatarUser, editProfileUser} =
  accountSlice.actions;
export default accountSlice.reducer;

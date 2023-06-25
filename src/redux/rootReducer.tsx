import {combineReducers} from 'redux';
import {accountSlice, appSlice} from './slices';
// import  from './slices';

const rootReducer = combineReducers({
  accountSlice: accountSlice,
  appSlice: appSlice,
});
export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;

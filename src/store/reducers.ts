import { combineReducers } from 'redux';
import { adminReducer } from './reducers/admin';

const appReducer = combineReducers({
  admin: adminReducer,
});

export const rootReducer = (state: any, action: any) => appReducer(state, action);

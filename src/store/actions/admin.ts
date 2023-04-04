import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { userServices } from 'src/services/users-service';
import { UserParams } from 'src/services/params-type';
import { ADMIN_RESET_PARAM_SEARCH, SET_LIST_USER } from '../constants/admin';

export const setListUser = (payload: any) => {
  return {
    type: SET_LIST_USER,
    payload,
  };
};

export const resetParamSearch = () => {
  return {
    type: ADMIN_RESET_PARAM_SEARCH,
  };
};

export const fetchListUsers = (params: UserParams, onSuccess?: any, onError?: any) => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    try {
      const res: any = await userServices.getListUser(params);
      if (res?.data) {
        dispatch(setListUser({ data: res?.data, paramsSearch: params }));
        onSuccess && onSuccess(res?.data);
      }
    } catch (err: any) {
      onError && onError(err?.response?.data?.message);
    }
  };
};

import { DEFAULT_SEARCH_PARAMS } from 'src/constants/params';
import { ADMIN_RESET_PARAM_SEARCH, SET_INFORMATION_ADMIN, SET_LIST_USER } from '../constants/admin';

const initialState = {
  informationAdmin: {},
  listAdmin: {},
  paramsSearch: DEFAULT_SEARCH_PARAMS,
};

export const adminReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_INFORMATION_ADMIN: {
      return {
        ...state,
        informationAdmin: action.payload,
      };
    }

    case SET_LIST_USER: {
      return {
        ...state,
        listUser: action.payload.data,
        paramsSearch: action.payload.paramsSearch,
      };
    }

    case ADMIN_RESET_PARAM_SEARCH: {
      return {
        ...state,
        paramsSearch: DEFAULT_SEARCH_PARAMS,
      };
    }

    default:
      return state;
  }
};

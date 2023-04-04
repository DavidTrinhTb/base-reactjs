import { UserParams } from './../params-type/index';

export interface UserApi {
  getListUser: (params: UserParams) => {};
}
